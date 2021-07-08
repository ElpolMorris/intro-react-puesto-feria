import styles from "./Producto.module.css"

interface Title {
    nombre: string;
    precio: number;
    stock: number; 
    tipo: string;
}

const Producto = ({nombre,precio,stock,tipo } : Title) => {
    return (
        <div className={`${styles.cardOwn}`}>            
            <h3>{nombre}</h3>
            <div>
                <p>Precio: ${precio}.-</p>
                <p>Stock: {stock}</p>
                <p>Tipo: {tipo}</p>
            </div>
        </div>
    )
}

export default Producto