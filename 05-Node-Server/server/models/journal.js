module.exports = (sequelize, DataTypes) => {
  let Journal = sequelize.define("journal", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    entry: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    owner: {
      type: DataTypes.INTEGER,
    },
  });
  return Journal;
};
