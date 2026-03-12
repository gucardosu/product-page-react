import Button from "./Button"
import '../styles/ProductCard.css'

export default function ProductCard({product, highlight}) {

    function viewProduct() {
        alert(`Você clicou no ${product.name}`)
    }

    const categoriaClasse = product.categoria.toLowerCase();
    return (
        <article className="product-card">
            {/*categoria*/}
            <div className={`product-badget ${categoriaClasse}`}>
                {product.categoria}
            </div>
            {/*destaque*/}
            {highlight && (
                <div className="product-highlight">
                🔥
            </div>
            )}
            <div className="product-img">
                <img 
                src={product.img} 
                alt={product.name} 
                className="img-size"
                />
            </div>
            {/* informações do produto */}
            <div className="product-info">
                    <h3 className="product-name"> {product.name} </h3>
                    <p className="product-price">
                        R$ {product.price}
                    </p>
            </div>

            <Button text="Comprar" onClick={viewProduct}/>
        </article>
    )
}