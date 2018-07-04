const mc = require('mongodb').MongoClient;
const apiResult = require('./apiResult');

var db;
var result;

mc.connect('mongodb://localhost:27017', {
	useNewUrlParser: true
}, (error, client) => {
	db = client.db('sasa');
})

module.exports = {
	async select(_collection, _condition = {}, type) {
		try {
			//			let result = await db.collection(_collection).find(_condition).toArray();
			//			return apiResult(result.length > 0, result);
			if(type == "product_id") {
				let result = await db.collection(_collection).find(_condition).toArray();
				return apiResult(result.length > 0, result);
			}
			if(type == "buy_count") {
				let result = await db.collection(_collection).find(_condition).sort({
					"buy_count": 1
				}).toArray();
				return apiResult(result.length > 0, result);
			}
			if(type == "comments_count") {
				let result = await db.collection(_collection).find(_condition).sort({
					"comments_count": 1
				}).toArray();
				return apiResult(result.length > 0, result);
			}
			if(type == "price_up") {
				let result = await db.collection(_collection).find(_condition).sort({
					"price": -1
				}).toArray();
				return apiResult(result.length > 0, result);
			}
			if(type == "price_down") {
				let result = await db.collection(_collection).find(_condition).sort({
					"price": 1
				}).toArray();
				return apiResult(result.length > 0, result);
			}
			if(type == "ordernum") {
				let result = await db.collection(_collection).find(_condition).sort({
					"freez": 1
				}).toArray();
				return apiResult(result.length > 0, result);
			}
			let result = await db.collection(_collection).find(_condition).toArray();
			return apiResult(result.length > 0, result);

		} catch(error) {
			return apiResult(false, error);
		}
	},

	async insert(_collection, _data = {}) {
		try {
			let result = await db.collection(_collection).insert(_data);
			return apiResult(result.insertedCount > 0, result)
		} catch(error) {
			return apiResult(false, error);
		}

	},

	async update(_collection, user, _condition) {
		try {
			let result = await db.collection(_collection).update({
				"phone": user
			}, {
				$push: {
					'allgoods': _condition
				}
			});
			return apiResult(true, result);
		} catch(error) {
			return apiResult(false, error);
		}
	},
	async replace(_collection, user, id, _condition) {
		try {
			let result = await db.collection(_collection).updata({
					"phone": user,
					"allgoods.id": id
				}, {
					$set: _condition
				},
				false,
				true)
			return apiResult(true, result);
		} catch(error) {
			return apiResult(false, error);
		}
	}
}