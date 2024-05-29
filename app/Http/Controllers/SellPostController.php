<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\SellPostRequest;
use Illuminate\Support\Facades\DB;

class SellPostController extends Controller
{
    public function SellSubmit(SellPostRequest $req)
    {
        $name = $req->name;
        $model = $req->model;
        $engine = $req->engine;
        $vin = $req->vin;
        $price = $req->price;
        $image = $req->image;
        $user_id = $req->user_id;

        return DB::table('sell_post')->insert(['name' => $name, 'model' => $model, 'engine' => $engine, 'vin' => $vin, 'price' => $price, 'image' => $image, 'user_id' => $user_id]);


    }

    public function SellOutput()
    {
        $sellPost = DB::table('sell_post')->select('*')->get();
        return $sellPost;
    }
}
