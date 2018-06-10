const mc = require('mongodb').MongoClient;
const apiResult = require('./apiResult');

var db;
var result;

mc.connect('mongodb://localhost:27017',{useNewUrlParser:true}, (error, client) => {
	db = client.db('sasa');
})

module.exports = {
	async select(_collection, _condition = {},type="product_id") {
		try {
			if(type == "product_id"){
				let result = await db.collection(_collection).find(_condition).toArray();
				return apiResult(result.length > 0, result);
			}
			if(type == "buy_count"){
				let result = await db.collection(_collection).find(_condition).sort({"buy_count":1}).toArray();
				return apiResult(result.length > 0, result);
			}
			if(type == "comments_count"){
				let result = await db.collection(_collection).find(_condition).sort({"comments_count":1}).toArray();
				return apiResult(result.length > 0, result);
			}
			if(type == "price_up"){
				let result = await db.collection(_collection).find(_condition).sort({"price":-1}).toArray();
				return apiResult(result.length > 0, result);
			}
			if(type == "price_down"){
				let result = await db.collection(_collection).find(_condition).sort({"price":1}).toArray();
				return apiResult(result.length > 0, result);
			}
			if(type == "ordernum"){
				let result = await db.collection(_collection).find(_condition).sort({"freez":1}).toArray();
				return apiResult(result.length > 0, result);
			}
		} catch(error) {
			return apiResult(false, error);
		}
	}
}