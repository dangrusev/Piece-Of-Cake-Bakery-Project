import express from 'express';
import connectDB from './config/db.mjs';
import dotenv from 'dotenv';
import authRoutes from './routes/api/auth.mjs';
import ordersRoutes from './routes/api/ordersRoute.mjs';
import cors from 'cors';
import listEndpoints from 'express-list-endpoints';
import stripe from './routes/api/Stripe.mjs';

dotenv.config();

//Initialize our app variable with Express
const app = express();

//Connect to the Mongo Database
connectDB();

const allowedOrigins = [
  'http://localhost:5173', // Local host link
  'https://final-project-cake-website.vercel.app', // Vercel frontend link
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true); // This allows the origin
    } else {
      callback(new Error('Not allowed by CORS'), false); // This denies the origin
    }
  },
  methods: 'GET,POST,PUT,DELETE',
  credentials: true, // Enable cookies for session handling
}));

app.use(express.json({ extended: false }));

//Routes
app.use('/api/auth', authRoutes);
app.use('/api/ordersRoute', ordersRoutes); 
app.use('/api/stripe', stripe);


console.log(listEndpoints(app));  // This will print all routes to the console

// This route will respond to requests made to the root URL
app.get('/', (req, res) => {
  res.send("Welcome to Piece of Cake Bakery's backend!");
});

// Enviromental Variables
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server has opened on port ${PORT}`));
