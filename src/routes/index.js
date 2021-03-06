const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
require("express-async-errors");

const swaggerUI = require("swagger-ui-express");
const { SWAGGER_PATH } = require("../config");
const swaggerDocument = require(SWAGGER_PATH);

//Middleware
const { ErrorMiddleware, NotFoundMiddleware } = require("../middlewares");

module.exports = function ({
  HomeRoutes,
  UserRoutes,
  IdeaRoutes,
  CommentRoutes,
  AuthRoutes,
}) {
  const router = express.Router();
  const apliRoutes = express.Router();

  apliRoutes.use(express.json()).use(cors()).use(helmet()).use(compression());

  apliRoutes.use("/home", HomeRoutes);
  apliRoutes.use("/user", UserRoutes);
  apliRoutes.use("/idea", IdeaRoutes);
  apliRoutes.use("/comment", CommentRoutes);
  apliRoutes.use("/auth", AuthRoutes);

  router.use("/v1/api", apliRoutes);

  router.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

  router.use(ErrorMiddleware);
  router.use(NotFoundMiddleware);

  return router;
};
