class UserService {
    constructor({UserBusiness}) {
        this._userBusiness = UserBusiness;

    }

    async getUsers() {
        // do something
//map funciona en arrays y recibe un callback
        const users = await this._userBusiness.getUsers();
        return users
    }

    async getUser(id) {
        const user = await this._userBusiness.getUser(id);
        return user
    }

    async createUser(user) {

        return await this._userBusiness.createUser(user);
    }

    async updateUser(id, user) {
        return await this._userBusiness.updateUser(id, user);
    }

    async deleteUser(id) {
        return await this._userBusiness.deleteUser(id);
    }

}

module.exports = UserService;
