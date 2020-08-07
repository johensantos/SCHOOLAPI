const {attributes} = require('structure');
/*CONFIGURAR ENTIDADES*/
const User = attributes({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: status
    }
})(class User {
    getCompleteName() {
        return this.name + " " + this.lastname;
    }
});
module.exports = User;
