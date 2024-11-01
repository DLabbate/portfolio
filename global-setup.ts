// https://typegoose.github.io/mongodb-memory-server/docs/guides/integration-examples/test-runners/

import { MongoMemoryServer } from "mongodb-memory-server";
import config from "./mongodb-memory-config";

async function globalSetup() {
  if (config.Memory) {
    // Config to decide if an mongodb-memory-server instance should be used
    // it's needed in global space, because we don't want to create a new instance every test-suite
    const instance = await MongoMemoryServer.create();
    const uri = instance.getUri();
    (global as any).__MONGOINSTANCE = instance;
    process.env.MONGODB_URI = uri.slice(0, uri.lastIndexOf("/"));
  } else {
    process.env.MONGODB_URI = `mongodb://${config.IP}:${config.Port}`;
  }
}

export default globalSetup;
