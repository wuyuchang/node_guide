const http = require('http')
const fs = require('fs')

let server = http.createServer((req, res) => {

	let url = req.url
	url = req.url.substr(1) // 去掉第一个/字符

	if (url === '') {
		url = 'index.html'
	}

	fs.readFile(url, (err, data) => {
		if (err) {
			fs.readFile('404.html', (err1, data1) => {
				if (err1) {
					throw err1
				}

				res.end(data1)
			})
		} else {
			res.end(data)
		}
	})
})

server.listen(3000, err => {
	if (!err) {
		console.log('server start at "localhost:3000"')
	}
})
