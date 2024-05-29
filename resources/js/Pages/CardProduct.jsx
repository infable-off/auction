import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import '../Components/SellCardProduct.jsx'
import SellCardProduct from "@/Components/SellCardProduct.jsx";
import { usePage } from '@inertiajs/inertia-react';

export default function CardProduct({ auth, id }) {


    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Продукт</h2>}
        >
            <Head title="Страница товара" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                             <p></p>
                            <p>Текст виден</p>
                            {/*<SellCardProduct id = {myid}>*/}

                            {/*</SellCardProduct>*/}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
