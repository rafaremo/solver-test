const express = require('express');
const router  = express.Router();
const solver = require('../helpers/solver');

let  model = {
  "optimize": "cal",
  "opType": {"equal": 3000},
  "constraints": {
    "protein": {"min": 20},
    "carbs": {"min": 50},
    "fat": {"equal": 10}
  },
  "variables": {
    "egg": {
      "cal": 60,
      "protein": 6,
      "carbs": 1,
      "fat": 4
    },
    "meat": {
      "cal": 364,
      "protein": 75,
      "carbs": 0,
      "fat": 7
    }
  },
};

/* GET home page */
router.get('/', solver(model), (req, res, next) => {
  let solution = req.solucion;
  res.send(solution);
});

module.exports = router;
