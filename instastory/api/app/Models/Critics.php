<?php

namespace App\Models;

use CodeIgniter\Model;

class Critics extends Model
{
    protected $table            = 'critics';
    protected $allowedFields    = ["critic"];
}
