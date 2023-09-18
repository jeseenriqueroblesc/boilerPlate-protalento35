//Aqui se inicia todo 
// Se levanta el servidor
/* SEQUELIZE  */
 
const { Sequelize, Model, DataTypes } = require('sequelize'); //importo el modulo 1.6M (gripped: 200.2K)
const sequelize = new Sequelize("postgres://postgres:1234@localhost:5432/MarketplaceProtalento")//creamos una instancia de sequelize con nuestra credenciales
//                              'postgres://user:pass@example.com:5432/dbname' 

const User = sequelize.define("User", 
{
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
}, {
  // Other model options go here
});/* CREAMOS UN MODELO/TABLA USUARIO*/

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true




/*----------------- EXPRESS-------------- */

const express = require("express"); //importo el modulo de express
const cors = require("cors"); //importo el modulo de cors 4.5K(gripped: 1.9K) 
const app = express();   //lo ejecuamos y guardamos en una variable
const port = 3000       //constante del puerto que levantara en el servidor

/*-------------MIDDLEWARES (configuraciones express)-----------------------------------*/

app.use(express.json()); /*para aceptar json(body) en mis peticiones http-- */ 
app.use(cors()); /*para aceptar peticiones del front o postman--*/
/* RUTAS */ 
app.get("/", (req, res) => {
  res.send('hello world')
})
app.get("/otraruta", (req, res) => {
    res.send('hello world')
  })

/*---------------SINCRONIZAMOS*/
sequelize.sync()/*ESTA LINEA ME CONECTA CON MI CODIGO */
app.listen(port, () => {
    console.log(`Servidor levantado en el puerto  ${port}`)
})/* CONECTA MI ISTANCIA DE EXPRESS CON MI CODIGO */