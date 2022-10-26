var microcontroller = require('./microcontrollers.js');

exports.about = (req, res) => {
    res.render('about');
}

exports.board = (req, res) => {
    res.render('board', { board: microcontroller });
}