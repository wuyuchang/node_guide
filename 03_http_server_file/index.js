const http = require('http')
const fs = require('fs')

let server = http.createServer((req, res) => {

	// 读取index.html 文件
	fs.readFile('index.html', (err, data) => {
		if (err) throw err

		res.end(data)
	})


	// 根据请求url读取对应文件
	// let url = req.url
	// url = req.url.substr(1) // 去掉第一个/字符
	//
	// fs.readFile(url, (err, data) => {
	// 	if (err) throw err
	//
	// 	res.end(data)
	// })

})

server.listen(3000, err => {
	if (!err) {
		console.log('server start at "localhost:3000"')
	}
})
