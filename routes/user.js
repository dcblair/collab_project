const db = require('../models')
const express = require('express')
const router = express.Router()

//middleware
router.use(express.urlencoded({ extended: false }));

router.post('/', (req,res) =>{
	console.log("test",req.body)
	db.user.findOrCreate({
		where:{
			email: req.body.email,
			firstName: req.body.firstName,
			lastName: req.body.lastName
		}
	}).then(([user, created]) =>{
		console.log('this is user', user)
		console.log('this is created', created)
		res.redirect('/')
	})
})

router.get('/', (req,res) =>{
	db.user.findAll().then(users =>{
		res.status(200).json({ user: users})
	})
})



module.exports = router