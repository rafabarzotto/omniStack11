const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

    async index(request, response){
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response){
        const id = crypto.randomBytes(4).toString('HEX');
        const { nome, email, whatsapp, cidade, uf } = request.body;
        
        await connection('ongs').insert({
          id,
          nome,
          email,
          whatsapp,
          cidade,
          uf
        })
    
        return response.json({id});
    }

}
