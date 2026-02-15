const http = require("http");
const url = require("url");
const fs = require("fs");

const LAB_4_PATH = "./COMP4537/lab/4/";

class HttpServer {
	static startServer() {
		http.createServer((req, res) => {
			const reqUrl = url.parse(req.url, true);
			const filename = "." + reqUrl.pathname;
			console.log(filename);

			fs.readFile(
				filename + (filename.endsWith("/") ? "index.html" : ""),
				(err, data) => {
					if (err) {
						console.log(err);
						res.writeHead(404, {
							"Content-Type": "text/html",
						});
						return res.end(`File: "${filename}" Not found`);
					}

					const contentType = filename.endsWith(".js")
						? "application/javascript"
						: filename.endsWith(".css")
							? "text/css"
							: "text/html";

					res.writeHead(200, {
						"Content-Type": contentType,
					});

					res.end(data);
				},
			);
		}).listen(3000);
		console.log(`Listening on port ${3000}: http://localhost:${3000}`);
	}
}

HttpServer.startServer();
