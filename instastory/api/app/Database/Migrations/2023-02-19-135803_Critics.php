<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class Critics extends Migration
{
    public function up()
    {
        $this->forge->addField([
            "id" => [
                "type"  => "INT",
                'auto_increment' => true
            ],
            "critic" => [
                "type"  => "TEXT"
            ]
        ]);

        $this->forge->addPrimaryKey("id");
        $this->forge->createTable("critics");
    }

    public function down()
    {
        $this->forge->dropTable("critics");
    }
}
