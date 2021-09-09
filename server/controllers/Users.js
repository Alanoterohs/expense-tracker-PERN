const { User } = require('../configDatabase/database');
const bcrypt = require('bcryptjs');

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // ¿está el mail creado?
    const isMail = await User.findOne({
      where: { email },
    });
    if (isMail !== null) {
      return res.json('this mail already exists');
    }

    const newUser = await User.create({
      name,
      email,
      password,
    });

    //Hash the password
    const salt = 10;
    const passwordEncrypted = await bcrypt.hash(password, salt);
    newUser.password = passwordEncrypted;

    await newUser.save();

    //const token = jwtGenerator(name);
    res.status(200).json(newUser);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server error');
  }
};

const login = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const loginUser = await User.findOne({
      where: { email },
    });

    if (loginUser === null) {
      return res.status(404).json({ message: 'User not found' });
    };

    //comparePassword devuelve true o false
    const comparePassword = await bcrypt.compare(password, loginUser.password);
    if (email === loginUser.email && comparePassword) {
      //const token = jwtGenerator(loginUser);
      res.status(200).json(loginUser);
    } else {
      return res.status(401).json({ message: 'Email or password is not correct' });
    }

  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server error');
  }
};

module.exports = {
  register,
  login,
};
