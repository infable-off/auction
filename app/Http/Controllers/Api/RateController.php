<?php

namespace App\Http\Controllers\Api;
use App\Models\RateModel;
use App\Models\DataModel;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\RateRequest;
use Illuminate\Support\Facades\DB;


class RateController extends Controller
{
    public function RateInput(RateRequest $req)
    {
        $lot_id = $req->lot_id;
//        $new_price = $req->new_price;

        $user_id = $req->user_id;
        $old_price = $this->RateSearchForController($lot_id);
        $new_price = (int)($req->new_price) + (int)$old_price;

        DB::table('rate')->insert(['lot_id'=> $lot_id, 'user_id' =>$user_id, 'new_price' => $new_price]);
        $routeName = 'http://127.0.0.1:8000/Rate/' . $lot_id;
        return redirect($routeName) ;


    }

    public function RateOutput()
    {
        $rateOutput = DB::table('rate')->select('*')->get();
        return $rateOutput;
    }


    public function RateSearch($lotId){
//        $lastBid = RateModel::where('lot_id', $lotId)->latest('id')->first();
        $newPrice = DB::table('rate')
            ->where('lot_id', $lotId)
            ->latest('id')
            ->value('new_price');

        if ($newPrice !== null) {
//            return $newPrice;
            return response()->json(['new_price' => $newPrice]);
        } else {
            return 'ОШИБКА: Новая цена не найдена для указанного lot_id';
        }

    }
    public function RateSearchWithUserId($user_id){


        $rates = DB::table('sell_post')->where('user_id', $user_id)->get();

        return $rates;
//        if ($user_id !== null) {
////            return $newPrice;
//            return response()->json(['new_price' => $user_id]);
//        } else {
//            return 'ОШИБКА: Новая цена не найдена для указанного lot_id';
//        }

    }

    public function RateSearchForController($lotId){
//        $lastBid = RateModel::where('lot_id', $lotId)->latest('id')->first();
        $newPrice = DB::table('rate')
            ->where('lot_id', $lotId)
            ->latest('id')
            ->value('new_price');

        if ($newPrice !== null) {
            return $newPrice;
//            return response()->json(['new_price' => $newPrice]);
        } else {
            return 'ОШИБКА: Новая цена не найдена для указанного lot_id';
        }

    }







}
