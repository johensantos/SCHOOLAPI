class UserController {

    /*constructor({UserService}) {
        this._userService = UserService;
    }*/


    constructor() {
    }

    sayHello(req, res) {
        return res.send({message: 'Hello World!'})
    }

    /*async getUsers() {
        return await this._userService.getUsers();
    }*/
}

module.exports = UserController;
