<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DataModel extends Model
{
    protected $table = 'sell_post';
    protected $fillable = ['id','name', 'model','engine','vin','price','image','user_id'];

//    public function find($id)
//    {
//        $sell = DataModel::find($id); // Здесь YourModel - это имя вашей модели
//        if (!$sell) {
//            return response()->json(['message' => 'Запись не найдена'], 404);
//        }
//
//        return response()->json($sell);
//    }

//    function find($id){
//        $data_id = $id;
//
//        if(in_array($data_id,DataModel::$fillable)){
//            return "<div>значение найдено </div>";
//        };
//
//    }


}
