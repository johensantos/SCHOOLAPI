const {toDomainEntity} = require('../domain/mappers');
const {toDbEntity} = require('../dal/mappers');

class UserService {
    constructor({UserRepository}) {
        this._userRepository = UserRepository;

    }

    async getUsers() {
        // do something
//map funciona en arrays y recibe un callback
        const users = await this._userRepository.getUsers();
        return users.map(toDomainEntity);
    }

    async createUser(user) {
        user = toDbEntity(user);
        return await this._userRepository.createUser(user);
    }
}

module.exports = UserService;
