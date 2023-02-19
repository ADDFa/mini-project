<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class Expression extends Migration
{
    public function up()
    {
        $this->forge->addField([
            "id" => [
                "type"  => "INT",
                'auto_increment' => true
            ],
            "expression" => [
                "type"  => "TEXT"
            ]
        ]);

        $this->forge->addPrimaryKey("id");
        $this->forge->createTable("expressions");
    }

    public function down()
    {
        $this->forge->dropTable("expressions");
    }
}
