// Missing Proper Types
export default (req, res, next) => {
	try {
		const object: any = req.body
		for (const key in object) {
			if (typeof object[key] === 'string') {
				object[key] = object[key].toString().trim()
			}
		}
		next()
	} catch (error) {
		return res.status(500).json({
			message: 'Erro no parser...'
		})
	}
}
