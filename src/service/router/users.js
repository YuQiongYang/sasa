const db = require('../utils/db.js');
const apiResult = require('../utils/apiResult.js');

const jwt = require('jsonwebtoken');

const filter = (req, res, next) => {

	let token = req.headers['auth'];
	if(!token) {
		res.send(apiResult(false, {}, 'unauth'))
	} else {
		jwt.verify(token, 'joan', (error, result) => {
			if(error) {
				res.send(apiResult(false, error, 'unauth'));
			} else {
				next();
			}
		})
	}
}

let result;
let phone;

module.exports = {
	getUser(app) {
		app.post('/reg', async(req, res) => {
			phone = req.body.phone;
			let pwd = req.body.pwd;
			let data = [];
			result = await db.insert('users', {
				phone,
				pwd,
				data
			});

			if(result.status) {
				let token = jwt.sign({
					phone,
					data: []
				}, 'joan', {
					expiresIn: '1800s'
				})
				let ar = apiResult(result.status, {
					token: token,
					phone: phone,
					datas: data
				});
				res.send(ar);
			} else {
				res.send(result);
			}
		})
		
		app.post('/login',async(req,res)=>{
			phone = req.body.phone;
			let pwd = req.body.pwd;
			
			result = await db.select('users', {
				phone,
				pwd,
			});
			if(result.status) {
				let token = jwt.sign({
					phone,
				}, 'joan', {
					expiresIn: '1800s'
				})
				let ar = apiResult(result.status, {
					token: token,
					phone: phone,
				});
				res.send(ar);
			} else {
				res.send(result);
			}
		})
		
		app.get('/user', filter, async(req, res) => {
			let result = await db.select('users');
			if(phone != 'undefined'){
				res.send({isLogin:result.status,phone:phone})
			}else{
				res.send({isLogin:result.status})
			}
		})
	}

}