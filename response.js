module.exports.success = function(val, res) {
    var data = {
        'status': 200,
        'message': val
    };
    res.json(data);
    res.end();
};

module.exports.failed = function(val, res) {
    var data = {
        'status': 400,
        'message': val
    };
    res.json(data);
    res.end();
};