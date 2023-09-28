module.exports = (sequelize, Sequelize) => {
    const Padresfamilia = sequelize.define("padresfamilia", {
      nombre: {
        type: Sequelize.STRING
      },
      tokenmovilpadrefamilia: {
        type: Sequelize.STRING
      },
      alumno: {
        type: Sequelize.STRING
      },
      imagen: {
        type: Sequelize.STRING
      }
    });
  
    return Padresfamilia;
  };