const db = require('../utils/db.js');
const apiResult = require('../utils/apiResult.js');

const jwt = require('jsonwebtoken');
const bp = require('body-parser');
let ObjectID = require('mongodb').ObjectID;

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
let allgoods = [];

module.exports = {
	getUser(app) {
		app.post('/reg', async(req, res) => {
			phone = req.body.phone;
			let pwd = req.body.pwd;
			result = await db.insert('users', {
				phone,
				pwd,
				allgoods
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

		app.post('/login', async(req, res) => {
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
					allgoods: allgoods
				});
				res.send(ar);
			} else {
				res.send(result);
			}
		})

		app.post('/user', filter, async(req, res) => {

//			let result = await db.select('users',{});
				let goodsData = await db.select('users', {
					phone
				})
			let mygoods;
			
			if(phone != 'undefined') {
				let goods = req.body.goods;
				if(goodsData.status && goods) {
					let goodsList = goodsData.data[0].allgoods;
					goods = JSON.parse(goods);
					if(goods.id) {
						let idx;
						let has = goodsList.some(function(g, i) {
							idx = i;
							return g.id == goods.id
						})
						if(has) {
							console.log(goodsData.data[0]._id)
							let guid = new ObjectID(goodsData.data[0]._id)
							mygoods = await db.replace('users',phone,guid,{"allgoods.$.qty":goodsList[idx].qty++})
						} else {
//							goods
							mygoods = await db.update('users', phone, goods);
						}
					}

				}
				 
				res.send({
					isLogin: goodsData.status,
					phone: phone,
					allgoods:goodsData.data[0]
				})
			} else {
				res.send({
					isLogin: result.status
				})
			}
		})
	}

}