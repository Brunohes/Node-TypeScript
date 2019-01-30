import dotenv from 'dotenv/config'
import * as http from 'http'

import app from './app'

const httpServer: http.Server = http.createServer(app)
const PORT: number = 3000

httpServer.listen(
	PORT,
	(): void => {
		console.log(`Servidor rodando em http://localhost:${PORT}`)
		console.log('Para derrubar o servidor: ctrl + c')
	}
)

// import * as path from 'path'
// import * as fs from 'fs'
// import * as https from 'https'
// const privateKey = fs.readFileSync(path.resolve(__dirname) + '/ssl/server.key', 'utf8')
// const certificate = fs.readFileSync(path.resolve(__dirname) + '/ssl/server.crt', 'utf8')
// const credentials = { key: privateKey, cert: certificate }
// const httpsServer = https.createServer(credentials, app)
// httpsServer.listen(
// 	PORT,
// 	(): void => {
// 		console.log(`Servidor rodando em https://localhost:${PORT}`)
// 		console.log('Para derrubar o servidor: ctrl + c')
// 	}
// )

