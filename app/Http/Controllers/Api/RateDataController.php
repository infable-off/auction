<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\RateModel;
use Illuminate\Http\Request;


class RateDataController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = RateModel::all();
        return response()->json($data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $rateJson = RateModel::find($id);
        $ratePr = json_decode($rateJson, true);
        $lot_id = $ratePr['lot_id'];
        $user_id = $ratePr['user_id'];
        $price = $ratePr['new_price'];

        return $ratePr;




    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
//        // Находим запись по ее id
//        $rate = RateModel::findOrFail($id);
//
//        // Обновляем поля записи на основе данных из запроса
//        $rate->update($request->all());
//
//        // Возвращаем ответ или редирект
//        return response()->json($rate, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
