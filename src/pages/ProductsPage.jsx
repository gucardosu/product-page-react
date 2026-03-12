import Header from "../components/Header"
import ProductCard from "../components/ProductCard"

export default function ProductsPage() {

    const products = [
        {
            id: 1,
            name: "Mouse gamer rgb",
            categoria: "Periféricos",
            img: "/mouse.png",
            price: 150.00
        },
        {
            id: 2,
            name: "Teclado Gamer RGB",
            categoria: "Promoção",
            img: "/teclado.png",
            price: 250.00
        },
        {
            id: 3,
            name: "Monitor Gamer Ultrawide",
            categoria: "Monitor",
            img: "/monitor.png",
            price: 1230.00
        },
        {
            id: 4,
            name: "Headset Gamer RGB",
            categoria: "Periféricos",
            img: "/headset.png",
            price: 350.00
        }
    ]
    
    return (
        <div>
            <div className="products-page">
                <Header />
                <section className='products-grid'>
                    {products.map((product) => {

                        const destaque =
                            product.preco >= 500 || product.categoria === "Promoção"

                        return (
                            <ProductCard
                                key={product.id}
                                product={product}
                                destaque={destaque}
                            />
                        )
                    })}
                </section>
            </div>
        </div>
    )
}