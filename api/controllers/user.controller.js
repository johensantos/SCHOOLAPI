class UserController {

    /*constructor({UserService}) {
        this._userService = UserService;
    }*/


    constructor({UserService}) {
        this._userService = UserService;
    }

    sayHello(req, res) {
        return res.send({message: 'Hello World!'})
    }

    /*async getUsers() {
        return await this._userService.getUsers();
    }*/
}

module.exports = UserController;
