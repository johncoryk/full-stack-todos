const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');

const app = express();

app.use(morgan('common'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

app.get('/', (req, res) => {
  res.send('Home');
});

app.use('*', (req, res) => {
  res.status(404).send({
    error: 'Not Found',
  });
});
