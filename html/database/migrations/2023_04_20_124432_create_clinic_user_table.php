<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClinicUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clinic_user', function (Blueprint $table) {
            $table->unsignedBigInteger('clinic_id');
            $table->unsignedBigInteger('user_id');

            // IDX
            $table->index('clinic_id', 'clinic_user_idx');
            $table->index('user_id', 'user_clinic_idx');

            // FK
            $table->foreign('clinic_id', 'clinic_user_fk')->references('id')->on('clinics');
            $table->foreign('user_id', 'user_clinic_fk')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('clinic_user');
    }
}
