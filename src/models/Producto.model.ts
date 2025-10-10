import { DataTypes } from "sequelize"; //? que es
import { Table, Column, Model, DataType, Default } from "sequelize-typescript"; // ? Investigar mas a fondo


@Table({
    tableName: "products"
})

class Product extends Model {

    @Column({
        type: DataTypes.STRING(100)
    })
    name:string

    @Column({
        type: DataType.FLOAT
    })
    price:number


    @Default(true) // explicar el default true
    @Column({
        type: DataType.BOOLEAN
    })
    availability:boolean

    
}

export default Product
