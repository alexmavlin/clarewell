<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFieldsetsRecordsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fieldsets_records', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('fieldset_id')->nullable();
            $table->unsignedBigInteger('record_id')->nullable();
            $table->timestamps();

            // IDX
            $table->index('fieldset_id', 'fieldset_record_idx');
            $table->index('record_id', 'record_fieldset_idx');

            // FK
            $table->foreign('fieldset_id', 'fieldset_record_fk')->on('fieldsets')->references('id')->onDelete('cascade');
            $table->foreign('record_id', 'record_fieldset_fk')->on('records')->references('id')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('fieldsets_records');
    }
}
