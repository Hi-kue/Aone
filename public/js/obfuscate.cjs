"use strict";

const baffle = require("baffle");

const targets = document.querySelectorAll('obfuscate_text');

targets.forEach(target => {
    new baffle(target).set({
        characters: "█▓█ ▒░/▒░ █░▒▓/ █▒▒ ▓▒▓/█<░▒ ▓/░>!&*$%",
        speed: 75,
    })
    .start()
    .reveal(2000, 200)
});

module.exports = targets;