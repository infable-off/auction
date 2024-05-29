import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import '../../css/Sell.css';
// import '../../../app/Http/Controllers/SellPostController.php';
import SellCardProduct from "@/Components/SellCardProduct.jsx";
// import ListCardProducts from "@/Components/ListCardProducts.jsx";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../css/productCard.css'


// import { useHistory } from 'react-router-dom';
import { Inertia } from '@inertiajs/inertia-react';
import { usePage } from '@inertiajs/inertia-react';


import ErrorBoundary from '@/Components/ErrorBoundary.jsx';
import {useParams} from "react-router-dom";



// export default
export default function MyLots({ auth, id }) {

    const user_id = auth.user.id;

    const [data, setData] = useState([]);

//обратная переадресация

    const [products, setProducts] = useState([]);

    const [timer, setTimer] = useState(0);
    useEffect(() => {

        const interval = setInterval(() => {
            // Обновление страницы

            // setTimer(prevTimer => prevTimer + 1);
            // window.location.reload();
        }, 5000); // Интервал в миллисекундах (5 секунд)

        // Очистка интервала при размонтировании компонента
        // return () => clearInterval(interval);


        const fetchData = async () => {
            try {
                const myLots = await axios.get('http://127.0.0.1:8000/RateSearchWithUserId/'+ user_id); // Замените '/api/data' на ваш адрес API
                // const new_price_lot = await axios.get('http://127.0.0.1:8000/rateSearch/'+ id); // Замените '/api/data' на ваш адрес API
                // setData(response.data);
                // setData(new_price_lot.data);
                // const combinedData = {
                //     myLotsData:myLots.data,
                //     // sellsData:response.data,
                //     // rateSearchData: new_price_lot.data
                // };
                // setData(combinedData);
                setProducts(myLots.data);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
        // return () => clearInterval(interval);
    }, []);
    // Проверяем, что объект data существует
    if (!data) {
        return <div>Loading...</div>; // Возвращаем заглушку на время загрузки данных
    }

    // Доступ к полям из первого источника (продажи)
    const myLots = data.myLotsData;







    return (

        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-white leading-tight">Мои Лоты</h2>}
        >
            <Head title="Rate" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-black overflow-hidden shadow-sm sm:rounded-lg my-lots">
                        <div className="p-6 text-white">Активные лоты</div>
                    </div>



                    <div className="product-space">
                        <div className="product-list product-list-lots">

                            {products.map(product => (
                                <div key={product.id} className="product-card text-white">

                                    <img src={product.image} alt="ИЗОБРАЖЕНИЕ НЕ НАЙДЕНО"/>

                                    <h5>{product.model}</h5>
                                    <p>{product.engine}</p>
                                    <p>{product.vin}</p>
                                    {/*<p>{product.name}</p>*/}
                                    <p>Рыночная цена: {product.price}</p>
                                    <p><a href="#">Снять с продажи</a></p>


                                    {/*<a href={"http://127.0.0.1:8000/sells/" + product.id}>Просмотреть подробнее</a>*/}
                                    <a className='no-underline' href={"http://127.0.0.1:8000/Rate/" + product.id}>Просмотреть подробнее</a>

                                </div>


                            ))}

                            {/*{myLots.map(myLot => (*/}
                            {/*    <div key={myLot.id} className="product-card">*/}

                            {/*        <img src={myLot.image} alt="ИЗОБРАЖЕНИЕ НЕ НАЙДЕНО"/>*/}
                            {/*        <h2>{myLot.name}</h2>*/}
                            {/*        <p>{myLot.model}</p>*/}
                            {/*        <p>{myLot.engine}</p>*/}
                            {/*        <p>{myLot.vin}</p>*/}
                            {/*        <p>Рыночная цена: {myLots.price}</p>*/}



                            {/*        /!*<a href={"http://127.0.0.1:8000/sells/" + product.id}>Просмотреть подробнее</a>*!/*/}
                            {/*        <a href={"http://127.0.0.1:8000/Rate/" + myLot.id}>Просмотреть подробнее</a>*/}

                            {/*    </div>*/}


                            {/*))}*/}
                        </div>

                    </div>


                </div>
            </div>

        </AuthenticatedLayout>
    );
}

