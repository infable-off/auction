<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('sell_post', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('model');
            $table->string('engine');
            $table->string('vin');
            $table->string('price');
            $table->string('image');
            $table->integer('user_id')->nullable()->default('0');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sell_post');
    }
};
