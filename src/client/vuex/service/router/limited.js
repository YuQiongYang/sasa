const db = require('../utils/db.js');
const apiResult = require('../utils/apiResult.js');

let result;

module.exports = {
	getCt(app){
		app.get('/limited',async (req,res)=>{
				result = await db.select('facial',{});
				res.send(result);
		})
	}
}
