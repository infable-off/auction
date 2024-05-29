<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\SellPostController;
use App\Http\Controllers\Api\RateController;

use App\Http\Controllers\DataController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/HomePage', function () {
    return Inertia::render('HomePage');
})->middleware(['auth', 'verified'])->name('HomePage');

Route::get('/Sell', function () {
    return Inertia::render('Sell');
})->middleware(['auth', 'verified'])->name('Sell');

Route::get('/admin', function () {
    return Inertia::render('AdminPanel');
})->middleware(['auth', 'verified'])->name('AdminPanel');

Route::get('/MyLots/', function () {
    return Inertia::render('MyLots');
})->middleware(['auth', 'verified'])->name('MyLots');


Route::get('/Rate/{id}', function ($id) {
    return Inertia::render('Rate',['id' => $id]);
})->middleware(['auth', 'verified'])->name('Rate');

//Route::get('/sellOutput', function (){
//    $outputs = \Illuminate\Support\Facades\DB::table("salePost")->get();
//    return view('SellPostOutput');
//});

Route::get('/sellPost', [\App\Http\Controllers\SellPostController::class, 'SellSubmit']);
Route::get('/sellOutput', [\App\Http\Controllers\SellPostController::class, 'SellOutput']);

Route::get('/rateInput', [RateController::class, 'RateInput']);
Route::get('/rateOutput', [RateController::class, 'RateOutput']);
Route::get('/rateSearch/{lot_id}', [RateController::class, 'RateSearch']);
Route::get('/RateSearchForController/{lot_id}', [RateController::class, 'RateSearchForController']);
Route::get('/RateSearchWithUserId/{user_id}', [RateController::class, 'RateSearchWithUserId']);




//Route::get('/test1', [\App\Http\Controllers\DataController::class, 'index']);

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});



require __DIR__ . '/api.php';
require __DIR__.'/auth.php';
