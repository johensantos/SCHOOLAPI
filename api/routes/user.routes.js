const {Router} = require('express');
module.exports = function ({UserController}) {
    const router = Router();
    //*SE USA EL BIND PORQUE AL USAR EXPRESS SE PIERDE EL SCOPE DE THIS*/
    router.get('/', UserController.getUsers.bind(UserController));
    router.post('/', UserController.createUser.bind(UserController));
    return router;
};
