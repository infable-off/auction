<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\SellPostController;
use App\Http\Controllers\CardProductController;
use App\Http\Controllers\Api\DataController;
use App\Http\Controllers\Api\RateDataController;
use App\Http\Controllers\UserController;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/data1', [DataController::class, 'index']);

Route::apiResources([
    'sells' => DataController::class,
]);

Route::apiResources([
    'users' => UserController::class,
]);

//Route::put('/rates/{id}', 'RateDataController@update');

Route::apiResources([
    'rates' => RateDataController::class,
]);



//Route::get('/CardProduct/{id}', 'CardProductController@index');



Route::get('/CardProduct', function () {
    return Inertia::render('CardProduct');
})->middleware(['auth', 'verified'])->name('CardProduct');

//Route::post('/data', [\App\Http\Controllers\DataController::class, 'store']);



//require __DIR__.'/auth.php';
