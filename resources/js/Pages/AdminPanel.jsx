import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import ListCardProducts from "@/Components/ListCardProducts.jsx";
import '../../css/HomePageNew.css'
import React, {useEffect, useState} from "react";
import axios from "axios";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../../css/bootstrap.min.css';
export default function AdminPanel({ auth }) {


    const [products, setProducts] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/sells/'); // Замените 'http://your-api-url/products' на ваш реальный URL API для получения всех товаров
                setProducts(response.data);

            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/users/'); // Замените 'http://your-api-url/products' на ваш реальный URL API для получения всех товаров
                setUsers(response.data);

            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
        fetchUsers();
    }, []);


    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-white leading-tight">Панель администратора</h2>}
        >

            <Head title="Панель администратора" />

            <div className="py-12 bg-neutral-900 rounded-lg">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-black overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-white">

                            <div className='bg-neutral-800 rounded-lg text-white admin-stand'>
                                <h4>Для работы с панелью администратора требуется ознакомиться с документацией</h4>
                                <h5>среднее время ознакомления 9 минут</h5>
                                <button className='rounded-lg'>Скачать</button>
                            </div>
                            <div className='py-12 rounded-lg'>

                                <div>
                                    <table className='min-w-full border border-white rounded-lg'>
                                        <thead>
                                        <tr>
                                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border'>ID</th>
                                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border'>Name</th>
                                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border'>Email</th>
                                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border'>Password</th>
                                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border'>Created At</th>
                                            {/*<th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border'>Updated At</th>*/}
                                        </tr>
                                        </thead>
                                        <tbody className='divide-y divide-white'>
                                        {users.map(user => (
                                            <tr key={user.id}>
                                                <td className='px-2 py-1 text-sm font-medium text-white border'>{user.id}</td>
                                                <td className='px-2 py-1 text-sm text-white border'>{user.name}</td>
                                                <td className='px-2 py-1 text-sm text-white border'>{user.email}</td>
                                                <td className='px-2 py-1 text-sm text-white border'>{user.password}</td>
                                                <td className='px-2 py-1 text-sm text-white border'>{user.created_at}</td>
                                                {/*<td className='px-2 py-1 text-sm text-white border'>{user.updated_at}</td>*/}
                                            </tr>
                                        ))}
                                        </tbody>

                                    </table>
                                    <button className='rounded-lg text-green-600 '>Просмотреть все</button>
                                </div>


                            </div>
                            <div className="product-space">
                                <div className="product-list">
                                    {products.map(product => (
                                        <div key={product.id} className="product-admin-card">

                                            <img src={product.image} alt="ИЗОБРАЖЕНИЕ НЕ НАЙДЕНО"/>

                                            <h5>{product.model}</h5>
                                            <p className='margOb'><button className='text-green-600'>Активный лот</button></p>
                                            <p className='margOb'>{product.engine}</p>
                                            <p className='margOb'>{product.vin}</p>
                                            <p className='margOb'>{product.name}</p>
                                            <p className='margOb'>Рыночная цена: {product.price}</p>
                                            <p className='margOb'><button className='text-green-600'>Изменить</button></p>
                                            <p className='margOb'><button className='text-red-600'>Удалить</button></p>
                                            <p className='margOb'><button className='text-yellow-600'>Снять с продажи</button></p>
                                            <p className='margOb'><a className='no-underline' href={"http://127.0.0.1:8000/Rate/" + product.id}>Просмотреть подробнее</a></p>





                                        </div>


                                    ))}
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>



        </AuthenticatedLayout>
    );
}
