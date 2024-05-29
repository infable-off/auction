<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RateModel extends Model
{
    protected $table = 'rate';
    protected $fillable = ['id','lot_id','user_id','new_price'];
}
