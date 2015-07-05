//Definicion del modelo de Quiz

module.exports = function(){
	return sequelize.define('Quiz', {pregunta: DataTypes.STRING, respuesta: DataTypes.STRING,});
}