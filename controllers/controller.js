var board = require('./board.js');

exports.board = (req, res) => {
    console.log(board.aUno);
    res.render('board', { board: board });
}