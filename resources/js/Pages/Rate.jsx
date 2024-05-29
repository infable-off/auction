import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import '../../css/Sell.css';
import '../../css/Rate.css';
// import '../../../app/Http/Controllers/SellPostController.php';
import SellCardProduct from "@/Components/SellCardProduct.jsx";
// import ListCardProducts from "@/Components/ListCardProducts.jsx";
import React, { useState, useEffect } from 'react';
import axios from 'axios';


// import { useHistory } from 'react-router-dom';
import { Inertia } from '@inertiajs/inertia-react';
import { usePage } from '@inertiajs/inertia-react';


import ErrorBoundary from '@/Components/ErrorBoundary.jsx';
import {useParams} from "react-router-dom";



// export default
export default function Rate({ auth, id }) {

    const user_id = auth.user.id;

    const [data, setData] = useState([]);

//обратная переадресация



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
                const response = await axios.get('http://127.0.0.1:8000/sells/'+ id); // Замените '/api/data' на ваш адрес API
                const new_price_lot = await axios.get('http://127.0.0.1:8000/rateSearch/'+ id); // Замените '/api/data' на ваш адрес API
                // setData(response.data);
                // setData(new_price_lot.data);
                const combinedData = {
                    sellsData:response.data,
                    rateSearchData: new_price_lot.data
                };
                setData(combinedData);
                console.log(response.data);
                console.log(new_price_lot.data);
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
    const sells = data.sellsData;

    // Доступ к полям из второго источника (поиск цены)
    const rateSearch = data.rateSearchData;





    return (

        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-white leading-tight">Аукцион</h2>}
        >
            <Head title="Rate" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {/*<div className="bg-blue-500 overflow-hidden shadow-sm sm:rounded-lg">*/}
                    {/*    <div className="p-6 text-gray-900">Просмотр лота</div>*/}
                    {/*</div>*/}


                    <div className='block-container rounded-lg'>
                        <div className='block-left'>
                            {sells && (
                                <div className='text-white'>
                                    {/*<p>ID: {sells.id}</p>*/}
                                    <h2>Имя владельца: {sells.name}</h2>
                                    <h2>Автомобиль: {sells.model}</h2>
                                    <h2>Двигатель: {sells.engine}</h2>
                                    <h2>VIN: {sells.vin}</h2>
                                    <h2>Средняя цена: {sells.price}</h2>
                                    <img className='block-img rounded-lg' src={sells.image} alt="IMAGEIMAGEIMAGE" />
                                </div>
                            )}
                        </div>
                        <div className='block-right bg-neutral-900 rounded-lg'>
                            <ErrorBoundary>
                                <div>
                                    <p className='text-white'>Дата окончания торгов: 01.06.2024 15:00</p>
                                    <h1 className='text-white block-rate'>Текущая ставка</h1>
                                    {/*<h1>Таймер: {timer}</h1>*/}
                                    <p></p>
                                    {rateSearch && (
                                        <h1 className='text-white block-price'>
                                            {rateSearch.new_price}
                                        </h1>
                                    )}
                                </div>
                                <div className="containerSell">


                                    <div className="wrapper rounded-lg">
                                        <div className="header">
                                            <h3 className="properties text-white">Ставка</h3>

                                            <div className="button rounded-lg">
                                                ?
                                            </div>
                                        </div>
                                        <div className="clear"></div>


                                        <form action="/rateInput" method={"get"}>

                                            <div className="input-group block-input">

                                                <input className="user-input" type="number" name="new_price" id="new_price" min="1000" step="500" placeholder="Новая цена"/>
                                                {/*<input type="hidden" name="rate_id" id="rate_id" value='1' readOnly />*/}
                                                <input type="hidden" name="lot_id" id="lot_id" value={id}/>
                                                <input type="hidden" name="user_id" id="user_id" value={user_id}/>


                                                <input type="submit" value="Отправить"/>

                                            </div>

                                        </form>

                                    </div>
                                    <div>

                                    </div>

                                </div>
                            </ErrorBoundary></div>
                    </div>

                </div>
            </div>

        </AuthenticatedLayout>
    );
}

