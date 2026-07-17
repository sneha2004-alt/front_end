const http = require("http");

const server = http.createServer((request, response) => {
    console.log(request.url)
  if (request.url === "/" && request.method === "GET") {
    //response.write('hello node');
    //response.write('world node');
    response.end("hello node world node");
  } else if (request.url === "/report" && request.method === "POST") {
    response.write("all data here!");
    response.end();
  } else {
    response.write("something went wrong");
    response.end();
  }
});

server.listen(7000, () => {
  console.log("server start");
});
