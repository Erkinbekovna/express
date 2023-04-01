var express = require('express');
var router = express.Router();
var fs = require('fs')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/studentSave',function(req,res){
      let student =  "Имя:" + req.query.Name + ',' + "Фамилия:"+  req.query.FirstName + ',' + "Група:" + req.query.Group + '\n';
      fs.appendFileSync('student.txt',student);
      res.render('index',{title:"Запись успешно прошла"})
});

module.exports = router;
