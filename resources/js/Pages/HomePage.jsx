import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import ListCardProducts from "@/Components/ListCardProducts.jsx";
import '../../css/HomePageNew.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../../css/bootstrap.min.css';
export default function HomePage({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-white leading-tight">Главная</h2>}
        >

            <Head title="Главная" />

            <div className="py-12 bg-neutral-900 rounded-lg">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-black overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-white">

                            <div className='bg-neutral-800 rounded-lg text-white home-stand'>
                                <h1>Подай заявку на подбор нужного тебе товара</h1>
                                <h2>первая выборка бесплатно</h2>
                                <button className='rounded-lg'>Отправить заявку</button>
                            </div>
                            <ListCardProducts></ListCardProducts>

                        </div>
                    </div>
                </div>
            </div>



        </AuthenticatedLayout>
    );
}
