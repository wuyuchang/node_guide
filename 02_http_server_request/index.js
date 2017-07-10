const http = require('http')

let server = http.createServer((req, res) => {

	console.log('\n\n\n=====  req.headers  =====');
	console.log(req.headers);

	console.log('\n=====  req.method  =====');
	console.log(req.method);

	console.log('\n=====  req.url  =====');
	console.log(req.url);


	// 请求首页
	switch (req.url) {
		case '/index.html':
			res.end(`
				<!DOCTYPE HTML>
				<html>
					<head>
						<title>首页</title>
					</head>
					<body>
						这个是首页
					</body>
				</html
			`)
			break
		case '/detail.html':
			res.end(`
				<!DOCTYPE HTML>
				<html>
					<head>
						<title>详情</title>
					</head>
					<body>
						这个是详情页，耶耶耶耶耶
					</body>
				</html
			`)
			break
	}


})

server.listen(3000, err => {
	if (!err) {
		console.log('server start at "localhost:3000"')
	}
})
