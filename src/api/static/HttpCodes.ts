export default class HttpCodes {
	static get success(): number {
		return 200
	}

	static get bad_request(): number {
		return 400
	}

	static get unauthorized(): number {
		return 401
	}

	static get not_found(): number {
		return 404
	}

	static get awaiting_liberation(): number {
		return 419
	}

	static get application_exception(): number {
		return 420
	}

	static get internal_server_error(): number {
		return 500
	}
}
