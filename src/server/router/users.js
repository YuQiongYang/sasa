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
				res.send(apiResult(false, error, 'timesout'));
			} else {
				next();
			}
		})
	}
}

let allgoods = [];

module.exports = {
	getUser(app) {
		app.post('/reg', async(req, res) => {
			let phone = req.body.phone;
			let pwd = req.body.pwd;
			let verify = await db.select('users', {
				phone
			})
			//			console.log(verify)
			if(verify.status) {
				res.send(apiResult(false, {}, phone + "已被注册"))
			} else {
				let result = await db.insert('users', {
					phone,
					pwd,
					allgoods
				});
				if(result.status) {
					let token = jwt.sign({
						phone,
					}, 'joan', {
						expiresIn: '500s'
					})
					let ar = apiResult(result.status, {
						token: token,
						phone: phone,
					});
					res.send(ar);
				} else {
					res.send(result);
				}
			}
		})

		app.post('/login', async(req, res) => {
			let phone = req.body.phone;
			let pwd = req.body.pwd;

			let result = await db.select('users', {
				phone,
				pwd,
			});
			if(result.status) {
				let token = jwt.sign({
					phone,
				}, 'joan', {
					expiresIn: '500s'
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

		app.post('/user', filter, async(req, res) => {
			let phone = req.body.phone;
			let goodsData = await db.select('users', {
				phone
			})
			let mygoods;
			if(phone != 'undefined') {
				let goods = req.body.goods;
				if(goodsData.status && goods) {
					let goodsList = goodsData.data[0].allgoods;
					goods = JSON.parse(goods);
					id = goods.id;
					if(id) {
						let idx;
						let has = goodsList.some(function(g, i) {
							idx = i;
							return g.id == id
						})
						if(has) {
							let guid = new ObjectID(goodsData.data[0]._id)
							let qty = goodsList[idx].qty + 1;
							let currentQty = `allgoods.${idx}.qty`;
							mygoods = await db.replace('users', guid, {
								[currentQty]: qty
							})
						} else {
							mygoods = await db.update('users', phone, goods);
						}
					}
				}
				res.send({
					isLogin: goodsData.status,
					phone: phone,
//					allgoods: goodsData.data[0]
				})
			} else {
				res.send({
					isLogin: goodsData.status
				})
			}
		});

		app.get('/user', async(req, res) => {
			let phone = req.query.phone;
			//			console.log(phone)
			let id = req.query.id;
			let type = req.query.type;
			let mygoods;
			let qty;
			let result = await db.select('users', {
				phone
			})
			let idx;
			let has = result.data[0].allgoods.some(function(g, i) {
				idx = i;
				return g.id == id
			})
			if(has) {
				let guid = new ObjectID(result.data[0]._id)
				if(type == 'reduce') {
					qty = result.data[0].allgoods[idx].qty - 1;
				} else if(type == 'add') {
					qty = result.data[0].allgoods[idx].qty + 1;
				}
				let currentQty = `allgoods.${idx}.qty`;

				if(qty <= 0) {
					mygoods = await db.remove('users', guid, {
						"allgoods": {
							"id": id
						}
					})
				} else {
					let currentQty = `allgoods.${idx}.qty`;
					mygoods = await db.replace('users', guid, {
						[currentQty]: qty
					})
				}
			}
			result = await db.select('users', {
				phone
			})
			res.send({
				allgoods: result.data[0].allgoods
			});
		})

	}

}