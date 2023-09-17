"use client";

import { Blog, allBlogs } from "contentlayer/generated";
import { parseISO } from "date-fns";
import BlogPost from "./blog";
import Input from "./forms/input";
import { useState } from "react";
import Filter, { FilterState } from "./forms/filter";

type Props = {
  blogs: Blog[];
  allTags: string[];
};

/**
 * Retrieves a list (with no duplicates) of all the tags found from all the blog posts.
 */
const getAllTags = (): string[] => {
  const tags = new Set<string>();

  allBlogs.forEach((blog) => {
    blog.tags?.forEach((tag) => tags.add(tag));
  });

  return Array.from(tags);
};

/**
 * Determins if there is at least one blog that contains all the selected tags.
 */
const blogExistsWithTags = (selectedTags: Set<string>): boolean => {
  const selectedTagsList = Array.from(selectedTags);

  return allBlogs.some((blog) => {
    const blogTags = new Set(blog.tags);
    return selectedTagsList.every((tag) => blogTags.has(tag));
  });
};

const blogHasAllTags = (blog: Blog, tags: Set<string>): boolean => {
  const blogTags = new Set(blog.tags);
  return Array.from(tags).every((tag) => blogTags.has(tag));
};

/**
 * Determines the state of a given tag.
 */
const getFilterState = (
  selectedTags: Set<string>,
  tag: string
): FilterState => {
  if (selectedTags.has(tag)) {
    return "active";
  }

  // Check if there is a blog post that would have all the selected tags *in addition* to the new tag
  const newSet = new Set(selectedTags);
  newSet.add(tag);

  if (blogExistsWithTags(newSet)) {
    return "neutral";
  }

  return "disabled";
};

const ALL_TAGS = getAllTags();

const FilteredBlogs = ({ blogs, allTags }: Props) => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<Set<string>>(
    new Set<string>()
  );

  return (
    <>
      <Input
        placeholder="Search..."
        value={searchInput}
        onChange={(event) => {
          setSearchInput(event.target.value);
        }}
      />
      <div className="flex w-full flex-wrap items-center justify-start gap-2">
        <span className="text-light-medium dark:text-dark-medium">
          Filter by tag:
        </span>
        {ALL_TAGS.map((tag) => {
          return (
            <Filter
              key={tag}
              label={tag}
              state={getFilterState(selectedTags, tag)}
              onClick={() => {
                const newSet = new Set(selectedTags);

                if (selectedTags.has(tag)) {
                  newSet.delete(tag);
                } else {
                  newSet.add(tag);
                }

                setSelectedTags(newSet);

                /////////////////// METHOD 2
                // if (selectedTags.includes(tag)) {
                //   setSelectedTags(
                //     selectedTags.filter((selectedTag) => selectedTag !== tag)
                //   );
                // }

                // setSelectedTags([...selectedTags, tag]);
              }}
            />
          );
        })}
      </div>
      <div className="mt-4 flex w-full flex-wrap items-stretch justify-center gap-4">
        {allBlogs
          .filter(({ title }) =>
            title.toLowerCase().includes(searchInput.toLowerCase())
          )
          .filter(({ tags }) => {
            if (selectedTags.size !== 0) {
              return Array.from(selectedTags).every((tag) =>
                tags?.includes(tag)
              );
            }
            return true;

            // if (selectedTags.length !== 0) {
            //   // TODO : optimize?
            //   return selectedTags.every((tag) => tags?.includes(tag));
            // }
          })
          .map(({ slug, title, imageSrc, date }) => (
            <BlogPost
              key={slug}
              slug={slug}
              title={title}
              image={imageSrc}
              date={parseISO(date)}
              views={1245252}
            />
          ))}
      </div>
    </>
  );
};

export default FilteredBlogs;
