import * as mongoose from 'mongoose'

const userSchema: any = new mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	name: {
		type: String,
		required: [true]
	},
	email: {
		type: String,
		required: [true],
		index: true,
		unique: true,
		match: /^(([^<>()[\]\\.,:\s@"]+(\.[^<>()[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	},
	password: {
		type: String,
		select: false
	},
	user_type: String,
	reset_token: String,
	created_date: Date,
	tel: String,
	cpf: {
		type: String,
		index: true,
		unique: true,
		match: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/
	},
	media_url: String,
	push_notification_tokens: [
		{
			_id: false,
			platform: String,
			push_token: String
		}
	],
	status: {
		type: String
	},
	__v: {
		type: Number,
		select: false
	}
})

export interface IUser {
	_id?: string
	name?: string
	email?: string
	password?: string
	user_type?: string
	reset_token?: string
	created_date?: Date
	tel?: string
	cpf?: string
	media_url?: string
	status?: string
	__v?: number
}

export default mongoose.model('User', userSchema)
