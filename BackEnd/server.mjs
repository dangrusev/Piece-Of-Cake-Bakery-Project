import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
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

//Used for Azure deployement
const fileName = fileURLToPath(import.meta.url);
const dirname = path.dirname(fileName);

//Connect to the Mongo Database
connectDB();

const allowedOrigins = [
  'http://localhost:5173', // Local host port
  'https://final-project-cake-website.vercel.app', //Vercel frontend
];

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests without origin (like Postman or direct API calls)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true); // Allow the origin
    } else {
      callback(new Error('Not allowed by CORS'), false); // Deny the origin
    }
  },
  methods: 'GET,POST,PUT,DELETE',
  credentials: true, // Enable cookies (if needed for session handling)
}));

app.use(express.json({ extended: false }));

//Single endpoint just to test API. Send data to browser
//app.get('/', (req, res) => res.send('API Running'))

//Routes
app.use('/api/auth', authRoutes);
app.use('/api/ordersRoute', ordersRoutes); 
app.use('/api/stripe', stripe);
app.use(express.static(path.join(dirname, 'FrontEnd/dist')));
app.get('*',(req, res) => { res.sendFile(path.join(dirname, 'FrontEnd/dist', 'index.html'));});

console.log(listEndpoints(app));  // This will print all routes to the console

// This route will respond to requests made to the root URL
// app.get('/', (req, res) => {
  // res.send('Welcome to the backend!');}

// Enviromental Variables
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
