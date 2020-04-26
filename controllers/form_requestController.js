const model = require('../models')

module.exports.createForm = async function(req, res){
    try {
        const today = new Date()
        const {
            user_id,
            method,
            allocation,
            amount,
            attachment,
            notes        
        } = req.body;
        const form = await model.form_requests.create({
            user_id,
            date: today,
            method,
            allocation,
            amount,
            attachment,
            notes     
        });
        if (form) {
            res.status(201).json({
                'status': 'OK',
                'messages': 'Form berhasil dibuat',
                'data': form,
            })
        }
     } catch (err) {
        res.status(400).json({
            'status': 'ERROR',
            'messages': err.message,
            'data': {},
        })
     }
};


module.exports.findAllForm = async function(req, res){
    try {
        const form = await model.form_requests.findAll({});
        if (form.length !== 0) {
            res.json({
                'status': 'OK',
                'messages': '',
                'data': form
            })
          } else {
            res.json({
                'status': 'ERROR',
                'messages': 'EMPTY',
                'data': {}
            })
          }
    } catch (err) {
        res.json({
            'status': 'ERROR',
            'messages': err.messages,
            'data': {}
        })
    }
};

module.exports.findOneForm = async function(req, res){
    try {
        const usersId = req.params.id;
        const form = await model.form_requests.findOne({
            where: { id: usersId }
        });
        if (form.length !== 0) {
            res.json({
                'status': 'OK',
                'messages': '',
                'data': form
            })
          } else { 
            res.json({
                'status': 'ERROR',
                'messages': 'EMPTY',
                'data': {}
            })
          }
    } catch (err) {
        res.json({
            'status': 'ERROR',
            'messages': err.messages,
            'data': {}
        })
    }
};


module.exports.updateForm = async function(req, res) {
    try {
        const usersId = req.params.id;
        const {
            user_id,
            method,
            allocation,
            amount,
            attachment,
            notes,    
            is_confirmed_pic,
            is_confirmed_verificator,
            is_confirmed_head_dept,
            is_confirmed_cashier    
        } = req.body;
        const form = await model.form_requests.update({
            user_id,
            method,
            allocation,
            amount,
            attachment,
            notes,
            is_confirmed_pic,
            is_confirmed_verificator,
            is_confirmed_head_dept,
            is_confirmed_cashier     
        },{
            where: { id: usersId }
        });
        if (form) {
            res.status(200).json({
                'status': 'OK',
                'messages': 'Form berhasil diupdate',
                'data': form,
            })
        }
     } catch (err) {
        res.status(400).json({
            'status': 'ERROR',
            'messages': err.message,
            'data': {},
        })
     }
};

module.exports.deleteForm = async function(req, res){
    try {
        const usersId = req.params.id;
        const form = await model.form_requests.destroy({ where: {
          id: usersId
        }})
        if (form) {
            res.status(200).json({
                'status': 'OK',
                'messages': 'Form berhasil dihapus' 
            })
        }
    } catch (err) {
        res.status(400).json({
            'status': 'ERROR',
            'messages': err.message
        })
    }
};
