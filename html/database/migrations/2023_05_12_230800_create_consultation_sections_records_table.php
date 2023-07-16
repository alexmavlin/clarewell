<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateConsultationSectionsRecordsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('consultation_sections_records', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('consultation_section_id')->nullable();
            $table->unsignedBigInteger('record_id')->nullable();
            $table->timestamps();

            // IDX
            $table->index('consultation_section_id', 'consec_record_idx');
            $table->index('record_id', 'record_consec_idx');

            // FK
            $table->foreign('consultation_section_id', 'consec_record_fk')->on('consultation_sections')->references('id')->onDelete('cascade');
            $table->foreign('record_id','record_consec_fk')->on('records')->references('id')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('consultation_sections_records');
    }
}
