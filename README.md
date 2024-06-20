# webserver

A simple web server written in JavaScript which can serve files from the local file system.

## Requirements

* Listen for HTTP requests on port 3000
* Logs the IP address and user agent of any incoming requests to the local console
* Serves files from the `www/` directory which match the incoming request path
* Returns a 404 status code if no files match the requested path

## Resources

* [`node:http`](https://nodejs.org/docs/latest-v20.x/api/http.html#class-httpserverresponse) module
  * [`http.IncomingMessage`](https://nodejs.org/docs/latest-v20.x/api/http.html#class-httpincomingmessage)
  * [`http.ServerResponse`](https://nodejs.org/docs/latest-v20.x/api/http.html#class-httpserverresponse)
  * [`http.createServer`](https://nodejs.org/docs/latest-v20.x/api/http.html#httpcreateserveroptions-requestlistener)
* [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#synchronous-api) module
  * [`fs.statSync`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsstatsyncpath-options)
  * [`fs.readFileSync`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsreadfilesyncpath-options)
