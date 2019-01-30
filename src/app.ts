import * as express from 'express'
const app: any = express()
import * as morgan from 'morgan'
import * as mongoose from 'mongoose'

import noCache from './api/middlewares/no-cache'
import * as momentTimezone from 'moment-timezone'

mongoose.connect(
	`mongodb://${process.env.MONGO_USER_DB}:${process.env.MONGO_ATLAS_PW}@${
		process.env.MONGO_CLUSTER_DB
	}/${process.env.MONGO_ATLAS_DB}`,
	{
		useNewUrlParser: true,
		config: {
			autoIndex: false
		}
	}
)
// mongoose.connection
mongoose.Promise = global.Promise

// DECLARED ROUTES
import routes from './api/routes/routes'

// MIDDLEWARES
app.use(morgan('dev')) // Log HTTP Requests
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static(`${__dirname}/public`)) // Serve resources from public folder
Date.prototype.toJSON = () =>
	momentTimezone(this, 'America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss.SSS')
// SET HEADERS
app.use((req, res, next) => {
	res.header(
		// ALLOWED ACCESS TO API
		'Access-Control-Allow-Origin',
		'*'
	)
	res.header(
		// ALLOWED HEADERS
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Authorization'
	)
	if (req.method === 'OPTIONS') {
		res.header(
			// ALLOWED METHODS
			'Access-Control-Allow-Methods',
			'PUT, POST, PATCH, DELETE, GET'
		)

		return res.status(200).json({})
	}
	next()
})

// USED ROUTES
app.use('/api', routes)

// CATCH ERRORS
app.use((req, res, next) => {
	const error: object = { status: 404, message: 'Not Found...' }
	next(error)
})
app.use((error, req, res, next) => {
	res.status(error.status || 500)
	res.json({
		error: {
			message: error.message
		}
	})
})

export default app
