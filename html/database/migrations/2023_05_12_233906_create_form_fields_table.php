<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFormFieldsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('form_fields', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->integer('type')->default(1);
            $table->string('placeholder')->nullable();
            $table->unsignedBigInteger('fieldset_id')->nullable();
            $table->timestamps();

            // Field Types
            // 1 - input        2 - text area       3 - select
            // 4 - checkbox     5 - radio           6 - date

            // FK
            $table->foreign('fieldset_id', 'form_field_fieldset_fk')->on('fieldsets')->references('id')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('form_fields');
    }
}
