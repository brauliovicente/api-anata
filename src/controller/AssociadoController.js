const Associado = require('../models/Associado');
const Quota = require('../models/Quota');

module.exports = {
    async index(req,res){

        const associados=await Associado.findAll();

        return res.json(associados);
    },

    async show(req,res){
        const associado=await Associado.findOne({
            where:{
                "id":req.params.id
            }
        });
        return res.json(associado);
    },

    async create(req,res){
        const associado=await Associado.create(req.body);
        return res.json(associado);
    },

    async update(req,res){
        let associado=await Associado.update(req.body,{
            where:{
                "id":req.params.id
            }
        });

        associado=await Associado.findOne({
            where:{
                "id":req.params.id
            }
        });
        return res.json(associado);
    },

    async destroy(req,res){
        const product = await Associado.destroy({
            where:{
                "id":req.params.id
            }
        });

        console.log('Deletado com sucesso');
        return res.json(product);
    }

};