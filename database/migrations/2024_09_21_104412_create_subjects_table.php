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
        Schema::create('subjects', function (Blueprint $table) {
            $table->id();
            $table->string('instructor_id')->nullable();
            $table->string('section_id')->nullable();
            $table->string('course_id')->nullable();
            $table->string('academic_year')->nullable();
            $table->string('name')->nullable();
            $table->string('code')->nullable();
            $table->string('credits')->nullable();
            $table->string('semester')->nullable();
            $table->string('year')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('subjects');
    }
};
