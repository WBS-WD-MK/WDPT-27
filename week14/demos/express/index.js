import express from 'express';
const app = express();
const port = process.env.PORT || 3000;
const users = [
  { id: 1, name: 'john doe', age: 22 },
  { id: 2, name: 'Jane doe', age: 32 },
  { id: 3, name: 'jack doe', age: 42 },
];
app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>');
});
app.get('/api/users', (req, res) => {
  res.json(users);
});
app.get('/api/users/:id', (req, res) => {
  // const {
  //   params: { id },
  // } = req;
  const id = req.params.id;
  console.log(req.query);
  res.json(users.find((user) => user.id === Number(id)));
});
app.listen(port, () => {
  console.log('server is running');
});
