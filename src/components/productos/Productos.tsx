import Producto from "../producto/Producto";
import style from "./Productos.module.css"
import { data } from "../../data.json"

interface Item {
    nombre: string;
    precio: number;
    stock: number;
    tipo: string;
}

const Productos = () => {
    const items: Item[] = data
    return (
        <div className={style.flexRow}>
            {
                items.map((it: Item, index: number) => {
                    return (
                        <Producto key={index} nombre={it.nombre} precio={it.precio} stock={it.stock} tipo={it.tipo} />
                    )
                })
            }
        </div>
    )
}

export default Productos

