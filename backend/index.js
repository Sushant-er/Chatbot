import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import chatbotRoutes from './routes/chatbot.route.js';


const app=express()
dotenv.config();
const port=process.env.PORT || 3000



// middleware
app.use(express.json());
app.use(cors());


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log('Connected to MongoDB');
}).catch((error)=>{
    console.error('Error connecting to MongoDB:', error);
})

// Defining routes
app.use('/bot/v1',chatbotRoutes);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})