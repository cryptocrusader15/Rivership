const express = require('express');
const app = express();
const { pool } = require('./dbConfig');
const session = require('express-session');
const flash = require('express-flash');
const passport = require('passport');
const path = require('path');
const bodyParser = require('body-parser');
const knex = require('knex');
const initializePassport = require('./passportConfig');
initializePassport(passport);

const PORT = process.env.PORT || 3000;

const { name } = require('ejs');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({extended: false}));
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(flash());



app.get('/', (req, res) => {
    res.render('index');
});

app.get("/users/signup", checkAuthenticated, (req, res) => {
    res.render("signup");
});

app.get('/users/login', checkAuthenticated, (req, res) => {
    res.render('login');
});

app.get('/users/dashboard', checkNotAuthenticated, (req, res) => {
    const userName = req.user ? req.user.name : 'Guest';
    res.render('dashboard', { user: req.user.name });
});

app.get('/users/logouts', (req, res) => {
    req.logout();
    req.flash("success_msg", "you have logged out");
    res.redirect('/users/login');
});


app.post('/users/signup', async(req, res) => {
    let { first_name, last_name, email, password, country, state } = req.body;

    console.log({
            first_name,
            last_name,
            email,
            password,
            country,
            state
    });

    let errors = [];

    if (!first_name || !last_name || !email || !password || !country || !state) {
        errors.push("Please Fill all the fields");

        if (password.length < 6) {
            errors.push({message: "password must be at least 6 characters long"});
        }

        if (errors.length > 0) {
            res.render("signup", {errors});
        }
    } else {

    //form validation has passed
    //hash password code

    pool.query(
        `SELECT * FROM subscribers
        WHERE email = $1`, [email], (err,results)=>{
            if (err){
                throw err
            }
            console.log(results.rows);

            if(results.rows.length > 0 ){
                errors.push({message: "email already registered"})
                res.render("signup", {errors});
            }else{
                pool.query(
                    `INSERT INTO subscribers (first_name, last_name, email, password, country, state)
                    VALUES($1, $2, $3, $4, $5, $6)
                    RETURNING id, password`,
                    [first_name, last_name, email, password, country, state],
                    (err, results) => {
                        if (err) {
                            throw err
                        }
                        console.log(results.rows);
                        req.flash('success_msg', "you're now registered. please log in");
                        res.redirect("/users/login");
                    }
                );
              }
           }
        );
     }
});



 app.post("/users/login", passport.authenticate('local', {
            successRedirect: "/users/dashboard",
            failureRedirect: "/users/login",
            failureFlash: true
        }));

        function checkAuthenticated(req,res, next) {
            if (req.isAuthenticated()) {
                return res.redirect("/users/dashboard");
            }
            next();
        }

        function checkNotAuthenticated(req,res, next) {
            if (req.isAuthenticated()) {
           return next()
            }
            res.redirect("/users/login");
        }

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});