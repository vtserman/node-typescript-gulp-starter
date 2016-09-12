import * as http from 'http';

const PORT = 8081;

const server: http.Server = http.createServer((req, res) => {
  res.end('Hello, World!');
});

server.listen(process.env.PORT || PORT, () => {
  console.log(`App listening on port ${server.address().port}`);
  console.log('Press Ctrl+C to quit.');
});
