// 1. Rescatando el argumento que es pasado  al script 
var ageArg = +process.argv[2];
// Conectamos a la base de datos 
// Pasp 1. Carga el driver en nuestro script
var mongodb = require('mongodb');

//Paso 2. El Driver de MongoDB nos proporciona un cliente 
//Por lo que lo estraemos de la libreia 
var mongoClient = mongodb.mongoClient;
//Paso 3. Conectamos el cliente con la base de datos 
 mongoClient.connect("mongodb://127.0.0.1:27017/learnyoumongo",
 function (err,db ) {
     //Primero verificaremos si hubo un error en la conexion 
     if(err){
         console.log("> Error la conectarse a: "+
         'mongodb://127.0.0.1:27017/learnyoumongo');
         throw err;
     }
     //Obteniendo la coleccion 
     var parrotsCollection = db.collection('parrots');
     //Aplicamos una query sobre la colecion 
     var objetoResultado = parrotsCollection.find(
         {
             age : {$gt : ageArg}
         });
         //
         objetoResultado.toArray(function(err, docs){
             console.log(docs);
             //Cerrando la Conexion 
             db.close();
         });
 });
 