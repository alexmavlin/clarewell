<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateConsultationsConsultationSectionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('consultations_consultation_sections', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('consultation_id')->nullable();
            $table->unsignedBigInteger('consultation_section_id')->nullable();
            $table->timestamps();

            // IDX
            $table->index('consultation_id', 'cons_consec_idx');
            $table->index('consultation_section_id', 'consec_cons_idx');

            // FK
            $table->foreign('consultation_id', 'cons_consec_fk')->on('consultations')->references('id')->onDelete('cascade');
            $table->foreign('consultation_section_id', 'conse_cons_fk')->on('consultation_sections')->references('id')->onDelte('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('consultations_consultation_sections');
    }
}
