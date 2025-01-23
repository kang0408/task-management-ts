import { Express } from "express";

import { taskRoutes } from "./task.route";

const mainV1Routes = (app: Express) => {
  const PATH_VERSION = "/api/v1";

  app.use(PATH_VERSION + "/tasks", taskRoutes);
};

export default mainV1Routes;
