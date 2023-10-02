import { useReducer, useRef } from "react";
import { useMouseClick, useKeyDown } from "./use-events";

type State<T> = {
  open: boolean;
  selected: T;
};

type Action<T> =
  | {
      type: "open" | "close" | "toggle";
    }
  | { type: "select"; selected: T };

function reducer<T>(state: State<T>, action: Action<T>) {
  switch (action.type) {
    case "toggle": {
      return { ...state, open: !state.open };
    }
    case "open": {
      return { ...state, open: true };
    }
    case "close": {
      return { ...state, open: false };
    }
    case "select": {
      return { ...state, selected: action.selected };
    }
  }
}

export function useDropdown<T>(options: T[]) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [state, dispatch] = useReducer(reducer<T>, {
    open: false,
    selected: options[0],
  });

  function toggleOpen() {
    dispatch({ type: "toggle" });
  }

  function openDropdown() {
    dispatch({ type: "open" });
  }

  function closeDropdown() {
    dispatch({ type: "close" });
  }

  function selectItem(selected: T) {
    dispatch({ type: "select", selected });
  }

  // Close the dropdown if a user clicks the Escape button
  function handleHideDropdown(event: KeyboardEvent) {
    if (event.key === "Escape") {
      dispatch({ type: "close" });
    }
  }

  // Close the dropdown if a user clicks outside
  function handleClickOutside(event: Event) {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      dispatch({ type: "open" });
    }
  }

  useMouseClick(handleClickOutside);
  useKeyDown(handleHideDropdown);

  return {
    ...state,
    dropdownRef,
    toggleOpen,
    openDropdown,
    closeDropdown,
    selectItem,
  };
}
