const solver = require("javascript-lp-solver");

function solucionar(model) {
  return function(req, res, next) {
    req.solucion = solver.Solve(model);
    next();
  }
}

module.exports = solucionar;

