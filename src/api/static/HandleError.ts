// Missing Proper Types

import HttpCodes from '../static/HttpCodes'

export default function HandleError(err: any, res: any): void {
	// console.log(err)
	if (err.code && err.code === 420) {
		res.status(HttpCodes.application_exception).json({
			error: err
		})

		return
	}

	// MONGO DUPLICATED KEY
	if (err.code && err.code === 11000) {
		res.status(HttpCodes.application_exception).json({
			error: {
				message: `${
					err.message.split('index:')[1].split('dup')[0]
				}já cadastrado(a)...`
			}
		})

		return
	}

	if (err.name === 'TokenExpiredError') {
		res.status(HttpCodes.unauthorized).json({
			error: err
		})

		return
	}

	res.status(HttpCodes.internal_server_error).json({
		error: { code: 500, message: `Erro interno do servidor... ${err.message}` }
	})

	return
}
