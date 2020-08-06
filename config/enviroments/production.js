module.exports = {
    PORT: process.env.PORT,
    DB: {
        user: "postgres",
        password: 'school_prod',
        host: 'localhost',
        dialect: 'postgres'
    }
};
