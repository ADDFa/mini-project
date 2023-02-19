<?php

namespace App\Models;

use CodeIgniter\Model;

class QnA extends Model
{
    protected $table            = 'q_n_a';
    protected $allowedFields    = ["question", "answer"];
}
