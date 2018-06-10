const db = require('../utils/db.js');
const apiResult = require('../utils/apiResult.js');

let result;

module.exports = {
	getCt(app){
		app.get('/lipstick',async (req,res)=>{
				let type = req.query.type;
				result = await db.select('lipstick',{},type);
				res.send(result);
		})
	}
}
