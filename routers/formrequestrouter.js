module.exports = function(app) {
    const formRequest = require('../controllers/formrequest');

    app.get('/form/getform', formRequest.getForm)
    app.get('/form/findform/:user_id', formRequest.findForm)
    app.post('/form/register', formRequest.createForm);
    app.post('/form/update', formRequest.updateForm);
    app.delete('/form/delete/:user_id', formRequest.deleteForm);
};