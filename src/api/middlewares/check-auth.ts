// Missing Proper Types
import * as jwt from 'jsonwebtoken'
export default (req, res, next) => {
	try {
		const token: any = req.headers.authorization.split(' ')[1]
		const decoded: any = jwt.verify(token, process.env.JWT_KEY)
		req.userData = decoded
		next()
	} catch (error) {
		return res.status(401).json({
			message: 'Falha na autenticação...'
		})
	}
}
