<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCompaniesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('companies', function (Blueprint $table) {
            $table->id();
            $table->string('name', 191);
            $table->foreignId('owner_id')->references('id')->on('users')->onDelete('cascade');
            $table->string('country', 191)->nullable();
            $table->string('city', 191)->nullable();
            $table->string('district', 191)->nullable();
            $table->string('address', 191)->nullable();
            $table->string('postal_code', 191)->nullable();
            $table->string('vat', 50)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('companies');
    }
}
