// Missing Proper Types
export default class DefaultDAO {
	public static save(model: any, query: any): Promise<any> {
		const instancedModel: any = new model(query)

		return instancedModel.save(query).catch(err => {
			throw err
		})
	}

	public static find(model: any, query: any): Promise<any> {
		return model.find(query).catch(err => {
			throw err
		})
	}

	public static findOne(model: any, query: any): Promise<any> {
		return model.findOne(query).catch(err => {
			throw err
		})
	}

	public static findOneAndUpdate(
		model: any,
		query: any,
		update: any
	): Promise<any> {
		return model.findOneAndUpdate(query, update, { new: true }).catch(err => {
			throw err
		})
	}

	public static findOneAndDelete(model: any, query: any): Promise<any> {
		return model.findOneAndDelete(query).catch(err => {
			throw err
		})
	}

	public static findOneSelect(
		model: any,
		query: any,
		select: any
	): Promise<any> {
		return model
			.findOne(query)
			.select(select)
			.catch(err => {
				throw err
			})
	}

	public static findOneSort(model: any, query: any, sort: any): Promise<any> {
		return model
			.findOne(query)
			.sort(sort)
			.catch(err => {
				throw err
			})
	}

	public static findOneAndRemove(model: any, query: any): Promise<any> {
		return model.findOneAndRemove(query).catch(err => {
			throw err
		})
	}
}
