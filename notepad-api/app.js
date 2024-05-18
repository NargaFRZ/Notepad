const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const noteRoutes = require('./routes/noteRoutes');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/notes', noteRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
