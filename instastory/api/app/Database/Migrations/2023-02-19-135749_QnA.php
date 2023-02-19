<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class QnA extends Migration
{
    public function up()
    {
        $this->forge->addField([
            "id" => [
                "type"  => "INT",
                'auto_increment' => true
            ],
            "question" => [
                "type"  => "TEXT"
            ],
            "answer" => [
                "type"  => "TEXT",
                "null"  => true
            ]
        ]);

        $this->forge->addPrimaryKey("id");
        $this->forge->createTable("q_n_a");
    }

    public function down()
    {
        $this->forge->dropTable("q_n_a");
    }
}
