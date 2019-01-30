import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'
import * as mongoose from 'mongoose'

import HttpCodes from '../static/HttpCodes'
import HandleError from '../static/HandleError'

import DAO from '../DAO/DefaultDAO'

import User, { IUser } from '../models/User'

export default class Controller {
	public static example = async (req: any, res: any) => {
		try {
			// Somenthing Here
		} catch (err) {
			HandleError(err, res)
		}
	}
}
