const express = require('express');
const getScrapData = require('./scrapers/stockIndices');

const app = express();

app.use(express.static('public'));

app.get('/api/data', async (req, res) => {
  const response = await getScrapData();

  res.json(response);
});

const port = process.env.PORT || 4040;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
