const express = require('express');
const routes=express.Router();
const AssociadoController=require('./controller/AssociadoController');
const QuotaController=require('./controller/QuotaController');

routes.get('/associados',AssociadoController.index);
routes.get('/associado/:id', AssociadoController.show);
routes.post('/associados', AssociadoController.create);
routes.put('/associado/:id', AssociadoController.update);
routes.delete('/associado/:id', AssociadoController.destroy);
routes.get('/associados/pagos', QuotaController.pagou);
routes.get('/listaMensal/', QuotaController.listaMensal);
routes.get('/statusAssociado/:id', QuotaController.statusAssociado);

module.exports = routes;