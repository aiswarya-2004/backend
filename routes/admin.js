var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
const Users = mongoose.model('Users', {
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  } 
})

/* GET home page. */
router.post('/login', async (req, res) => {
  console.log(req.body);
  
  const existing_user = await Users.findOne({
    email: req.body.email
  })
  if (existing_user) {
    res.json({
      err: "already created" 

    })
    return
  }

  const new_user = new Users({
    email: req.body.email,
    password: req.body.password
  })
  new_user.save()
  res.json({
    res: new_user
  })
});

module.exports = router;
