const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('home', { pageName: "Home"});
});

router.get('/about', (req, res, next) => {
    res.render('about', { pageName: "About"});
});


router.get('/contact', (req, res, next) => {
    res.render('contact', { pageName: "Contact"});
});


router.get('/projects', (req, res, next) => {
    res.render('projects', { pageName: "Projects"});
});


router.get('/services', (req, res, next) => {
    res.render('services', { pageName: "Services"});
});

// 404 Not Found Route
router.get('*', (req, res, next) => {
    res.status(404).render('error', { pageName: "404 Not Found"});
});

module.exports = router;