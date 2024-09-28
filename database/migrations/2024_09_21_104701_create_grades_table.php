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
        Schema::create('grades', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('enrollment_id')->nullable();
            $table->bigInteger('course_id')->nullable();
            $table->string('grading_period')->nullable();
            $table->string('semester')->nullable();
            $table->string('remarks')->nullable();
            $table->string('academic_year')->nullable();
            $table->float('total')->nullable();
            $table->float('final')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('grades');
    }
};
