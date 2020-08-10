const {asClass, createContainer, asFunction, asValue} = require('awilix');

// APP START
const StartUp = require('./startup');
const Server = require('./server');
const config = require('../config/enviroments');

// ROUTES
const Routes = require('../api/routes');
const UserRoutes = require('../api/routes/user.routes');

//BUSINESS
const {UserBusiness} = require('../domain/');

//CONTROLLERS
const {UserController} = require('../api/controllers');

// SERVICES
const {UserService} = require('../services');

//REPOSITORIES
const {UserRepository} = require('../dal/repositories');

// DB
const db = require('../dal/entities');


const container = createContainer();

container.register({
    app: asClass(StartUp).singleton(),
    router: asFunction(Routes).singleton(),
    server: asClass(Server).singleton(),
    UserController: asClass(UserController).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton()
})
    .register({
        config: asValue(config)
    })
    .register({
        db: asValue(db)
    })
    .register({
        UserService: asClass(UserService).singleton()
    }).register({
    UserRepository: asClass(UserRepository).singleton()
}).register({
    UserBusiness: asClass(UserBusiness).singleton()
});

module.exports = container;
