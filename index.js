var express = require('express');
var app = express();
var hbs = require('express-hbs');


app.engine('hbs', hbs.express4({
    partialsDir: __dirname + '/views/partials'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    var data = { 
        "body": `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            `,
        "users": [
            {
                "id": 1,
                "name": "Christopher Blankenship"
            }, {
                "id": 2,
                "name": "Cyril Blankenship"
            }
        ]
    };
    res.render('index', data);
});

app.get('/about', (req, res) => {
    var data = { "body": `About page.` };
    res.render('index', data);
});

app.get('/services', (req, res) => {
    var data = { "body": `Services page.` };
    res.render('index', data);
});

app.get('/clients', (req, res) => {
    var data = { "body": `Clients page.` };
    res.render('index', data);
});

app.get('/contact', (req, res) => {
    var data = { "body": `Contact page.` };
    res.render('index', data);
});

app.listen(3000, () => {
    console.log('Listening on http://localhost:3000');
});