const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req);
  if (req.url === "/") {
    res.end("welcome to home page");
  } else if (req.url === "/about") {
    res.end("welcome yo about page");
  } else {
    res.end(`<h1>OOps!</h1>
    <p>We can't seem to find the page</p>
    <a href="/">Back page</a>`);
  }
});

server.listen(5000);
