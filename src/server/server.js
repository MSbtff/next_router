const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

const posts = [
  {id: 1, title: 'Post 1', content: 'This is the first post'},
  {id: 2, title: 'Post 2', content: 'This is the first post'},
  {id: 3, title: 'Post 3', content: 'This    is the first post'},
];

app.get('/posts', (_, res) => {
  console.log('Received GET request at /posts');
  res.send(posts);
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
