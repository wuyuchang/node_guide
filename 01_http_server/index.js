const http = require('http')

let server = http.createServer((req, res) => {
	res.end('Hello world')
})

server.listen(3000, err => {
	if (!err) {
		console.log('server start at "localhost:3000"')
	}
})
