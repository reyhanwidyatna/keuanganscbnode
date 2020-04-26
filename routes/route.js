  module.exports = function(app) {

    const formRequest = require('../controllers/form_requestController');

    app.get('/form/findform', formRequest.findAllForm)
    
    app.post('/form/register', formRequest.createForm);
    
    app.post('/form/update/:id', formRequest.updateForm);
    
    app.delete('/form/delete/:id', formRequest.deleteForm);

};