const jwt = require("jsonwebtoken");

const genAuthToken = (user: any) => {
  const secretKey: any = `${process.env.JWT_SECRET_KEY}`;

  const token = jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
    },
    secretKey
  );

  return token;
};

module.exports = genAuthToken;
