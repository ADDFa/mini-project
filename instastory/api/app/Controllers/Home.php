<?php

namespace App\Controllers;

use App\Models\Critics;
use App\Models\Expression;
use App\Models\QnA;

class Home extends BaseController
{
    private $expression, $qna, $critic;

    public function __construct()
    {
        $this->expression = new Expression();
        $this->critic = new Critics();
        $this->qna = new QnA();
    }

    private function getAll()
    {
        return [
            "expressions"   => $this->expression->findAll(),
            "critics"       => $this->critic->findAll(),
            "questions"     => $this->qna->select("id,question")->findAll()
        ];
    }

    public function all()
    {
        return view("index", $this->getAll() + ["title" => "All"]);
    }

    public function reply($id)
    {
        $qustion = $this->qna->find($id);
        return view("reply", $qustion + ["title" => "Reply Questions"]);
    }

    public function index()
    {
        return response()->setJSON($this->getAll());
    }

    public function expression()
    {
        $this->expression->insert([
            "expression" => $this->request->getPost("expression")
        ]);

        return response()->setJSON([
            "message"   => "success"
        ]);
    }

    public function critic()
    {
        $this->critic->insert([
            "critic" => $this->request->getPost("critic")
        ]);

        return response()->setJSON([
            "message"   => "success"
        ]);
    }

    public function question()
    {
        $this->qna->insert([
            "question" => $this->request->getPost("question")
        ]);

        return response()->setJSON([
            "message"   => "success"
        ]);
    }

    public function answer($id)
    {
        $this->qna->update($id, [
            "answer" => $this->request->getPost("answer")
        ]);

        return redirect()->to("/all");
    }

    public function qna()
    {
        return response()->setJSON($this->qna->findAll());
    }
}
