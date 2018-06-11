const db = require('../utils/db.js');
const apiResult = require('../utils/apiResult.js');

let result;

module.exports = {
	getCt(app){
		app.get('/pro_kinds',async(req,res)=>{
			result = await db.select('kinds',{});
			res.send(result);
		})
	}
}
