const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 3002; // Corrected the port assignment

server.use(middlewares);
server.use(jsonServer.bodyParser); // json() is implicitly used by jsonServer.defaults()
server.use(router);

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
