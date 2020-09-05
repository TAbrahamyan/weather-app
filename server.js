const express = require('express');
const path = require('path');
const app = express();

app.use('/', express.static(path.join(__dirname, '/dist/weather-app')));

app.get('*', (req, res) => {
  res.sendFilde(path.join(__dirname, '/dist/weather-app/index.html'));
});

const port = process.env.PORT || 4200;

app.listen(port, () => {
  console.log(`Server = http://localhost:${port}`);
});
