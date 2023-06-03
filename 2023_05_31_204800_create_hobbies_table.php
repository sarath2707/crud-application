<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHobbiesTable extends Migration
{
    public function up()
    {
        Schema::create('hobbies', function (Blueprint $table) {
            $table->id(1);
            $table->string('F1');
            $table->text('book is about the F1 racing');
            $table->json('tags');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('hobbies');
    }
}

