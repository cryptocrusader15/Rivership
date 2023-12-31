const LocalStrategy = require('passport-local').Strategy;
const { authenticate } = require('passport');
const { pool } = require('./dbConfig');

function initialize(passport){
    const authenticateUser = (email, password, done) => {
    pool.query(
        `SELECT * FROM subscribers WHERE email = $1`, [email], (err,results)=>{
            if (err){
                throw err
            }
            console.log(results.rows);

            if(results.rows.length > 0 ){
                const user = results.rows[0];

                if (user && user.password === password) {
                return done(null, user);
            } else {
                return done(null, false, { message: "Password incorrect" });
            }
        } else {
            return done(null, false, { message: "Email is not registered" });
        }
    }
);
};

    passport.use(
        new LocalStrategy(
            {
                usernameField: 'email',
                passwordField: 'password'
            },
            authenticateUser
        )
    );

    passport.serializeUser((user, done) => done(null, user.id));

    passport.deserializeUser((id, done) => {
        pool.query(
            `SELECT * FROM subscribers WHERE id = $1`,
            [id],
            (err, results) => {
                if (err) {
                    throw err;
                }
                return done(null, results.rows[0]);
            }
        );
    });
}

module.exports = initialize;
