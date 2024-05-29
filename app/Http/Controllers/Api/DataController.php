<?php

namespace App\Http\Controllers\Api;
use App\Models\DataModel;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;


class DataController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = DataModel::all();
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
    public function show($id)
    {
        $cardPrJson = DataModel::find($id);
        $cardPr = json_decode($cardPrJson, true);
        $dataId = $cardPr['id'];
        $dataName = $cardPr['name'];
        $dataModel = $cardPr['model'];
        $dataEngine = $cardPr['engine'];
        $dataVin = $cardPr['vin'];
        $dataPrice = $cardPr['price'];
        $dataImage = $cardPr['image'];

//        $data = ['id' => $id];



return $cardPr;

//        return view('CardProductView', ['id' => $dataId, 'name' => $dataName, 'model'=>$dataModel, 'engine'=>$dataEngine,'vin' => $dataVin,'price' => $dataPrice, 'image' => $dataImage]);


    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

}
