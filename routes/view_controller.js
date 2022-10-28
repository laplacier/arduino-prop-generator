var microcontroller = require('../definitions/microcontrollers.js');
var input = require('../definitions/inputs.js');
var output = require('../definitions/outputs.js');

exports.about = (req, res) => {
    res.render('about');
}

exports.board = (req, res, next) => {
    try{
        res.render('board', { board: microcontroller });
    } catch(error) {
        next(error);
    }
}

exports.io = (req, res, next) => {
    try{
        //If no board queried, return to board selection
        if(!req.query.boardId) {
            res.redirect('board');
        }
        var selectedBoard = microcontroller[`${req.query.boardId}`];
        res.render('io', { board: selectedBoard, input: input, output: output });
    } catch(error) {
        next(error);
    }
}