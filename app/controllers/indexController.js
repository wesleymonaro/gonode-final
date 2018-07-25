// const login = require('../../config/auth').login;

module.exports = {
  index(req, res, _next) {
    res.json('Hello World');
  },
  login(req, res) {
    const { email, password } = req.body;

    login(email, password, (result) => {
      if (result) {
        // req.session.user = result.user;

        // req.session.save(() => {
        res.json(result);
        // });
      }
      res.status(401).json({ message: 'erro de autenticacao' });
    });
  },
};
