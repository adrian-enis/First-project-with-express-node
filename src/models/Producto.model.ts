import { DataTypes } from "sequelize"; //? que es
import { Table, Column, Model, DataType, Default } from "sequelize-typescript"; // ? Investigar mas a fondo

/* =================== ******* ==================== */

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


    @Default(true) // Define por defecto que cada registro esta disponible o no disponible
    @Column({
        type: DataType.BOOLEAN
    })
    availability:boolean
    

    @Default(false) //Por defecto, el producto no esta eliminado
    @Column({
        type:DataType.BOOLEAN
    })
    isDeleted:boolean
}

export default Product
