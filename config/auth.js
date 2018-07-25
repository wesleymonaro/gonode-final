const passport = require('passport');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passportJWT = require('passport-jwt');
const { User } = require('../app/models');

const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeader(),
  secretOrKey: 'minhaChaveSecreta',
};

module.exports = {
  get auth() {
    // let User = mongoose.models.Usuario;
    const strategy = new JwtStrategy(jwtOptions, (async (jwtPayload, next) => {
      const user = await User.findById(jwtPayload.id);
      // User.findById(jwtPayload.id).exec().then((user) => {
      if (user) {
        next(null, user);
      } else {
        next(null, false);
      }
      // });
    }));

    passport.use(strategy);
    return {
      initialize() {
        return passport.initialize();
      },
      get authenticate() {
        return passport.authenticate('jwt', { session: false });
      },
    };
  },
  async login(email, password, callback) {
    const user = await User.findOne({ where: { email } });

    if (user) {
      if (!await bcrypt.compare(password, user.password)) {
        return callback(false);
      }

      const payload = { _id: user.id };
      const token = jwt.sign(payload, jwtOptions.secretOrKey);


      callback({
        message: 'ok',
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        },
      });
    } else {
      callback(false);
    }
  },
};
