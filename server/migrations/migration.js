const { Sequelize } = require('sequelize');

async function up({ context: queryInterface }) {
  await queryInterface.createTable("links", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    originalUrl: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    shortUrl: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    shortCode: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  });

  await queryInterface.createTable("statistics", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    ip: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    region: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    browserName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    browserVersion: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    os: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    LinkId: {
      type: Sequelize.INTEGER,
      references: {
        model: "links",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
  });
}

async function down({ context: queryInterface }) {
  await queryInterface.removeColumn("statistics", "linkId");
  await queryInterface.dropTable("statistics");
  await queryInterface.dropTable("links");
}

module.exports = { up, down };
