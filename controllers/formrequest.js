const response = require('../response')
const connection = require('../connection')

module.exports.getForm = function(req, res){
    const sql = 'SELECT * FROM form_requests'
    connection.query(sql, function(error, result, fields){
        if(error){
            throw(error)
        } else {
            res.send(result)
        }
    });
};

module.exports.findForm = function(req, res){
    const user_id = req.params.user_id
    const sqlquery = 'SELECT COUNT(*) AS cnt FROM form_requests WHERE user_id = ?';
    connection.query(sqlquery, user_id, function(err, data){
        if(data[0].cnt <= 0){
            response.failed("Form tidak ditemukan", res)
        } else {
            const sql = 'SELECT * FROM form_requests WHERE user_id = ?'
            connection.query(sql, user_id , function(error, result, fields){
                if(error){
                    throw(error)
                } else {
                    response.success(result, res)
                }        
            });
        }
    });
};

module.exports.createForm = function(req, res) {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    todayDate = yyyy + '-' + mm + '-' + dd;
    const newForm = {
        "created_at": today,
        "updated_at": today,
        "user_id": req.body.user_id,
        "date": todayDate,
        "method": req.body.method,
        "allocation": req.body.allocation,
        "amount": req.body.amount,
        "notes": req.body.notes
    }
    const sql = 'INSERT INTO form_requests SET ?'; 
    connection.query(sql, newForm, function(error, result, fields){
        if(error){
            throw(error)
        } else {
            response.success("Form berhasil dibuat", res)
        }
    });
};

module.exports.updateForm = function(req,res){
    const today = new Date();
    const updateForm = {
        "updated_at": today,
        "method": req.body.method,
        "allocation": req.body.allocation,
        "amount": req.body.amount,
        "notes": req.body.notes,
        "is_confirmed_pic": req.body.is_confirmed_pic,
        "is_confirmed_verificator": req.body.is_confirmed_verificator,
        "is_confirmed_head_dept": req.body.is_confirmed_head_dept,
        "is_confirmed_cashier": req.body.is_confirmed_cashier
    }
    const user_id = req.body.user_id
    const sql = 'UPDATE form_requests SET ? WHERE user_id = ?'
    connection.query(sql, [updateForm, user_id], function(error, result, fields){
        if(error){
            throw(error)
        } else {
            response.success("Form berhasil diupdate", res)
        }
    });
};

module.exports.deleteForm = function(req, res){
    const user_id = req.params.user_id
    const sqlquery = 'SELECT COUNT(*) AS cnt FROM form_requests WHERE user_id = ?';
    connection.query(sqlquery, user_id, function(err, data){
        if(data[0].cnt <= 0){
            response.failed("Form tidak ditemukan", res)
        } else {
            const sql = 'DELETE FROM form_requests WHERE user_id = ?'
            connection.query(sql, user_id , function (error, rows, fields){
                if(error){
                    console.log(error)
                } else{
                    response.success("Berhasil menghapus user", res)
                }
            });
        }         
    });
};
