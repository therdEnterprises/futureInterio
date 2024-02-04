// index.js

// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());

// Create Express app
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://therdenterprises1:therdenterprises1@therdenterprises.ht9fpkm.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a schema for your MongoDB collection
const Schema = mongoose.Schema;
const LeadSchema = new Schema({
  name: String,
  email: String,
  subject: String,
  phone: String,
  description: String,
});

// Create a model based on the schema
const LeadModel = mongoose.model('Leads', LeadSchema);

// Middleware to parse JSON
app.use(express.json());

// Define routes
app.get('/leads', async (req, res) => {
  try {
    const examples = await LeadModel.find();
    res.json(examples);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/leads', async (req, res) => {
  const example = new LeadModel({
    name: req.body.name,
    email: req.body.email,
    subject: req.body.subject,
    phone: req.body.phone,
    description: req.body.description,
  });

  try {
    const newExample = await example.save();
    res.status(201).json(newExample);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.use(cors({
  origin: "*"
}))

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
