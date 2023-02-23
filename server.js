const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require('./routes/expense.routes'));
app.use(require('./routes/income.routes'));
app.use(require('./routes/user.routes'));

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI);

app.get('/', (req, res) => {
    res.send('Welcome to the server.');
  });  

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});