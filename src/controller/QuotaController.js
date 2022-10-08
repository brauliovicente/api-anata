const Quota = require('../models/Quota');
const Associado=require("../models/Associado");
const db=require('../models/db');

module.exports={
    /* Função que retorna todos que fizeram o pagamento o quota */
    async pagou(req,res){
        let consulta = await db.query("SELECT ads.*, qt.quota, qt.refMensal FROM quotas AS qt  inner join associados AS ads on (qt.idAssociado=ads.id)");
        return res.json(consulta[0]);
    },

    /* Lista de pessoas que pagaram a quota em um mes */
    async listaMensal(req,res){
        const date = new Date();
        const anoCorrente=date.getFullYear();
        let mesCorrente = date.getMonth()+1;
        
        let {mes = mesCorrente}=req.query;
        if(mes.length<2){ mes='0'+mes;}
        
        let consulta = await db.query("SELECT ads.*, qt.quota, qt.refMensal, qt.createdAt AS 'DataPagamento' FROM quotas AS qt  inner join associados AS ads on (qt.idAssociado=ads.id) WHERE qt.createdAt LIKE '"+anoCorrente+"-"+mes+"%'"); 
        return res.json(consulta[0]);
    },
    
    /* Lista de pessoas que pagaram a quota em um mes */
    async statusAssociado(req,res){
        const date = new Date();
        const anoCorrente=date.getFullYear();
        let mesCorrente = date.getMonth()+1;
        
        let ID=req.params.id;
        let {mes = mesCorrente}=req.query;
        if(mes.length<2){ mes='0'+mes;}
        
        let consulta = await db.query("SELECT ads.id AS 'IdAssociado', ads.nome AS 'Nome',(SELECT SUM(quota) FROM quotas WHERE idAssociado=6) AS 'TotalPago', (SELECT COUNT(*) FROM quotas WHERE idAssociado="+ID+") AS 'PagamentosFeitos', DATEDIFF(CURDATE(), ads.createdAt) AS 'DataRegisto' FROM  quotas AS qs INNER JOIN associados AS ads ON qs.idAssociado=ads.id WHERE idAssociado="+ID+"  ORDER BY ads.id DESC LIMIT 1"); 
        return res.json(consulta[0]);
    },
};