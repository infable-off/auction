import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import '../../css/Sell.css';
// import '../../../app/Http/Controllers/SellPostController.php';
import SellCardProduct from "@/Components/SellCardProduct.jsx";
import ListCardProducts from "@/Components/ListCardProducts.jsx";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { useHistory } from 'react-router-dom';


import ErrorBoundary from '@/Components/ErrorBoundary.jsx';

export default function Sell({ auth }) {
    const user_id = auth.user.id;
    // const [data, setData] = useState([]);
    //
    // useEffect(() => {
    //     // Функция для загрузки данных с вашего API
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get('http://127.0.0.1:8000/test1');
    //             setData(response.data);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };
    //
    //     // Вызов функции загрузки данных
    //     fetchData();
    // }, []);



    return (

        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-white leading-tight">Продать авто</h2>}
        >
            <Head title="Sell" />

            <div className="py-12 bg-neutral-900 rounded-lg">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {/*<div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">*/}
                    {/*    <div className="p-6 bg-black text-white">Страница продажи</div>*/}
                    {/*</div>*/}

                    <ErrorBoundary>
                    <div className="containerSell">


                        <div className="wrapper rounded-lg formSell bg-black">
                            <div className="header">
                                <h3 className="properties text-white">Параметры авто</h3>

                                <div className="button">
                                    ?
                                </div>
                            </div>
                            <div className="clear"></div>






                            <form action="sellPost" method={"get"}>

                                <div className="input-group rounded-lg p-3">
                                    <input className="user-input text-white" type="text" name="name" id="name" placeholder="Ваше имя"/>

                                    <input className="user-input" type="text" name="model" id="model" placeholder="Марка авто"/>

                                    <input className="user-input" type="text" name="engine" id="engine" placeholder="Объем двигателя"/>

                                    <input className="user-input" type="text" name="vin" id="vin" placeholder="VIN"/>

                                    <input className="user-input" type="text" name="price" id="price" placeholder="Цена"/>

                                    <input className="user-input" type="text" name="image" id="image" placeholder="Ссылка на фото"/>

                                    <input type="hidden" name="user_id" id="user_id" value={user_id}/>

                                    <input type="submit" value="Отправить"/>

                                </div>

                            </form>
                            {/*<form action="sellOutput" method={"get"}>*/}
                            {/*    <input type="submit" value="Просмотреть все"/>*/}

                            {/*</form>*/}




                        </div>
                        <div className='p-6 bg-black rounded-lg text-white'>
                            <h1 className='mb-5'>Похоже на просмотренные вами</h1>
                            {/*<ul>*/}
                                {/*{data.map(item => (*/}
                                {/*    <li key={item.id}>{item.name} - {item.model} - {item.engine} - {item.vin} - {item.price} - {item.image}</li> // Предполагается, что в ваших данных есть поля "id", "name" и "email"*/}
                                {/*))}*/}

                            {/*</ul>*/}
                            <ListCardProducts></ListCardProducts>
                        </div>

                    </div>
                    </ErrorBoundary>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}
