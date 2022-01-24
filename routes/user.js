const router = require("express").Router();

// http://localhost:5000/api/user/usertest
router.get('/usertest', (req, res) => {
  res.send("user test is successfull");
});

router.post('/userpost', (req, res) => {
  const username =  req.body.username;
  // this will be shown to the client
  res.send("your username is " + username);
});

module.exports = router;