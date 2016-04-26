module.exports.index=function(req, res, next){
    res.render('index', { title: 'FinanNode'});
}

module.exports.account=function(req, res, next){
    res.render('account', { title: 'FinanNode'});
}
