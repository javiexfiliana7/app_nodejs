
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Mi primer página web con Node.js' });
};