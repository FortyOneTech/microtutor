// auth-service/middlewares/routeValidators.js
const { check, validationResult } = require('express-validator');

exports.validateBody = (schema) => {
  return async (req, res, next) => {
    await Promise.all(schema.map((validation) => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    res.status(400).json({ errors: errors.array() });
  };
};

exports.schemas = {
  authSchema: [
    check('email').isEmail().withMessage('Must be a valid email address'),
    check('password')
      .isLength({ min: 6 })
      .withMessage('Must be at least 6 chars long')
  ]
};
