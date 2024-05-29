import React, { useState, useEffect } from 'react';
import axios from 'axios';


const SellCardProduct = (id) => {

    // const { newID } = props;
    const newid = id;
    const [product, setProduct] = useState(null);

    // useEffect(() => {
    //     const fetchProduct = async () => {
    //         try {
    //             const response = await axios.get('{http://127.0.0.1:8000/sells/} + {id}'); // Замените 'http://your-api-url/products/1' на ваш реальный URL API и путь к ресурсу товара
    //             setProduct(response.data);
    //         } catch (error) {
    //             console.error('Error fetching product:', error);
    //         }
    //     };
    //
    //     fetchProduct();
    // }, []);

    return (
        <div className="product-card">
            {newid ? (
                <div>
                    <h2>{newid.id}</h2>
                    <h2>{newid.name}</h2>
                    <p>{newid.model}</p>
                    <p>{newid.engine}</p>
                    <p>{newid.vin}</p>
                    <p>{newid.image}</p>
                    {/*<img src={product.image} alt={product.name} />*/}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default SellCardProduct;
