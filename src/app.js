const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'));

const router = express.Router();

router.get('/api/:id', (req, res) => {
  const { id } = req.params;
  let items = [];

  switch (id) {
    case '1':
      items = ['BMW', 'Jeep', 'Volvo'];
      return res.json(items);

    case '2':
      items = ['Blue', 'Green', 'Yellow'];
      return res.json(items);

    case '3':
      items = ['Avocado', 'Banana', 'Pineapple'];
      return res.json(items);

    default:
      break;
  }
});
router.get('/', (req, res) => res.render('index'));

app.use(router);

app.listen(3000, () => {
  console.log('Server listening on http://localhost:3000');
});
