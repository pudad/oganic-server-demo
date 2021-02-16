const passport = require('passport');
const Users = require('../model/users.model');
const configs = require('../configs/main');

var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = configs.SECRET_KEY;
// opts.issuer = 'accounts.examplesoft.com';
// opts.audience = 'yoursite.net';
passport.use(new JwtStrategy(opts, async function(jwt_payload, done) {
    try {
        const haveUser = await Users.findOne({ email: jwt_payload.email });
        if (!haveUser) return done(new Error("ไม่พบผู้ใช้ในระบบ"), null);
        if (haveUser) return done(null, { id: haveUser._id, email: haveUser.email, isAdmin: haveUser.isAdmin });
    } catch (error) {
        done(error);
    }
}));

module.exports.checkLogin = passport.authenticate('jwt', { session: false });