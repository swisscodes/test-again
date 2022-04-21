import path from 'path'
import express from 'express';

const app = express();
app.use(express.json())

const port = process.env.HOST_PORT || 8502;

app.use('/static', express.static(path.resolve('../frontend', 'static')));

app.get('/*', (req, res) => {
  res.sendFile(path.resolve('../frontend', 'index.html'));
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});