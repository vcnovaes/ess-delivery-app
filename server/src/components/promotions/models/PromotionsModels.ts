import Sequelize = require('sequelize')
import DataTypes = require('sequelize')

const sequelize = new Sequelize.Sequelize('sqlite::memory')


const PromotionType = sequelize.define(
    'promotionType',
    {
        id: {
            type: DataTypes.INTEGER,
            unique: true,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        }

    })
console.log(PromotionType === sequelize.models.PromotionType)