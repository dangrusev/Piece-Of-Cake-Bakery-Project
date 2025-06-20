import express from 'express';
import { check, validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';
import User from '../../models/User.mjs';

const router = express.Router();

// Route for user registration
router.post(
  '/register',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password must be 6 or more characters in length').isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (user) return res.status(400).json({ errors: [{ msg: 'This account already Exists' }] });
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      user = new User({
        name,
        email,
        password: hashedPassword,
        role: 'user',
        isVerified: true, // Skip the email verification
      });

      await user.save();
      res.status(201).json({ msg: 'User registered successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ errors: [{ msg: 'Server Error' }] });
    }
  }
);

// Route for login
router.post(
  '/login',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password required').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });
      if (!user) return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });

      res.json({
        msg: 'Login successful',
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ errors: [{ msg: 'Server Error' }] });
    }
  }
);

// Route for logout
router.post('/logout', (req, res) => {
  res.json({ msg: 'Logged out successfully' });
});

export default router;
