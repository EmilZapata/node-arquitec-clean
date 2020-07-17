const { createContainer, asClass, asValue, asFunction } = require("awilix");

const config = require("../config");
const app = require(".");

//Services
const {
  HomeService,
  CommentService,
  IdeaService,
  UserService,
  AuthService,
} = require("../services");
//Controller
const {
  HomeController,
  CommentController,
  IdeaController,
  UserController,AuthController
} = require("../controllers");
//Models
const { Comment, Idea, User } = require("../models");
//Repositories
const {
  CommentRepository,
  IdeaRepository,
  UserRepository,
} = require("../repositories");
//Routes
const {
  HomeRoutes,
  CommentRoutes,
  IdeaRoutes,
  UserRoutes,AuthRoutes
} = require("../routes/index.routes");
const Routes = require("../routes");

const container = createContainer();

container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),
  })
  .register({
    HomeService: asClass(HomeService).singleton(),
    CommentService: asClass(CommentService).singleton(),
    IdeaService: asClass(IdeaService).singleton(),
    UserService: asClass(UserService).singleton(),
    AuthService: asClass(AuthService).singleton(),
  })
  .register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
    CommentController: asClass(
      CommentController.bind(CommentController)
    ).singleton(),
    IdeaController: asClass(IdeaController.bind(IdeaController)).singleton(),
    UserController: asClass(UserController.bind(UserController)).singleton(),
    AuthController: asClass(AuthController.bind(AuthController)).singleton(),
  })
  .register({
    HomeRoutes: asFunction(HomeRoutes).singleton(),
    CommentRoutes: asFunction(CommentRoutes).singleton(),
    IdeaRoutes: asFunction(IdeaRoutes).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton(),
    AuthRoutes: asFunction(AuthRoutes).singleton(),
  })
  .register({
    User: asValue(User),
    Idea: asValue(Idea),
    Comment: asValue(Comment),
  })
  .register({
    CommentRepository: asClass(CommentRepository).singleton(),
    IdeaRepository: asClass(IdeaRepository).singleton(),
    UserRepository: asClass(UserRepository).singleton(),
  });

module.exports = container;
