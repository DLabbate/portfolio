// https://typegoose.github.io/mongodb-memory-server/docs/guides/integration-examples/test-runners/

import { MongoMemoryServer } from "mongodb-memory-server";
import config from "./mongodb-memory-config";

async function globalTeardown() {
  if (config.Memory) {
    // Config to decide if an mongodb-memory-server instance should be used
    const instance: MongoMemoryServer = (global as any).__MONGOINSTANCE;
    await instance.stop();
  }
}

export default globalTeardown;