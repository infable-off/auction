import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../../css/productCard.css';
// import '../../css/bootstrap.min.css';

const ListCardProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/sells/'); // Замените 'http://your-api-url/products' на ваш реальный URL API для получения всех товаров
                setProducts(response.data);

            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (

        <div className="product-space">
            <div className="product-list">
                {products.map(product => (
                    <div key={product.id} className="product-card">

                        <img src={product.image} alt="ИЗОБРАЖЕНИЕ НЕ НАЙДЕНО"/>

                        <h5>{product.model}</h5>

                        <p>{product.engine}</p>
                        <p>{product.vin}</p>
                        <p>{product.name}</p>
                        <p>Рыночная цена: {product.price}</p>

                        <a className='no-underline' href={"http://127.0.0.1:8000/Rate/" + product.id}>Просмотреть подробнее</a>

                    </div>


                ))}
            </div>

        </div>

    );
};

export default ListCardProducts;
