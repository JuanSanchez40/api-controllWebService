module.exports = (sequelize, Sequelize) => {
    const Alumnos = sequelize.define("alumnos", {
      alumno: {
        type: Sequelize.STRING
      },
      cuenta: {
        type: Sequelize.STRING
      },
      padrefamilia: {
        type: Sequelize.STRING
      },
      tokenmovil: {
        type: Sequelize.STRING
      },
      grado: {
        type: Sequelize.STRING
      },
      grupo: {
        type: Sequelize.STRING
      },
      turno: {
        type: Sequelize.STRING
      },
      promedio: {
        type: Sequelize.STRING
      },
      reprobadas: {
        type: Sequelize.STRING
      },
      fasedeedoneae: {
        type: Sequelize.STRING
      },
      imagen: {
        type: Sequelize.STRING
      }
    });
  
    return Alumnos;
  };