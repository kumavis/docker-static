const http = require('http')
const ecstatic = require('ecstatic')

const ROOT_DIR = process.env.ROOT_DIR
const PORT = process.env.PORT || 9000


http.createServer(
	ecstatic({ root: ROOT_DIR })
).listen(PORT)

console.log('Listening on localhost:' + PORT)