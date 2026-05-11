const express = require('express');

const app = express();

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(3000, () => {
    console.log('DevOps Challenge App Running - Damolak Technologies - Chukwuma Muogbo');
  });
}

module.exports = app;
