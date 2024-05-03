const database = 'BD3-NoSQL-AtlasMongoDB';

const collection = "bd3-nosql-atv6";

use(database);

//===============================================================================//

/*Select sem condição meu pau na sua mao*/

//db[collection].find();


//===============================================================================//

db[collection].findOne({
    'cpf' : '555.555.555-05'
}, {
    'cod_aluno' : 0
})