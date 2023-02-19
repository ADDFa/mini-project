<?= $this->extend("./Layouts/layout") ?>

<?= $this->section("content") ?>

<div class="row mb-5">
    <h2 class="text-info mb-5">#Expression</h2>

    <div class="accordion">
        <?php foreach ($expressions as $i => $expression) : ?>
            <div class="accordion-item">
                <h2 class="accordion-header" id="expression<?= ($i + 1) ?>">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="<?= "#panelsStayOpen-expression" . ($i + 1) ?>" aria-expanded="false" aria-controls="<?= "panelsStayOpen-expression" . ($i + 1) ?>">
                        <?= "Expression " . ($i + 1) ?>
                    </button>
                </h2>
                <div id="<?= "panelsStayOpen-expression" . ($i + 1) ?>" class="accordion-collapse collapse" aria-labelledby="expression<?= $i ?>">
                    <div class="accordion-body">
                        <?= $expression['expression'] ?>
                    </div>
                </div>
            </div>
        <?php endforeach ?>
    </div>
</div>

<div class="row mb-5">
    <h2 class="text-info">#Question</h2>

    <div class="accordion">
        <?php foreach ($questions as $i => $question) : ?>
            <div class="accordion-item">
                <h2 class="accordion-header" id="question<?= ($i + 1) ?>">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-question<?= ($i + 1) ?>" aria-expanded="false" aria-controls="panelsStayOpen-question<?= ($i + 1) ?>">
                        <?= "Question " . ($i + 1) ?>
                    </button>
                </h2>
                <div id="panelsStayOpen-question<?= ($i + 1) ?>" class="accordion-collapse collapse" aria-labelledby="question<?= ($i + 1) ?>">
                    <div class="accordion-body">
                        <p><?= $question['question'] ?></p>
                        <div class="row">
                            <a href="<?= "/reply/{$question['id']}" ?>" class="btn btn-warning">Balas</a>
                        </div>
                    </div>
                </div>
            </div>
        <?php endforeach ?>
    </div>
</div>

<div class="row mb-5">
    <h2 class="text-info">#Critics</h2>

    <div class="accordion">
        <?php foreach ($critics as $i => $critic) : ?>
            <div class="accordion-item">
                <h2 class="accordion-header" id="critic<?= ($i + 1) ?>">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-critic<?= ($i + 1) ?>" aria-expanded="false" aria-controls="panelsStayOpen-critic<?= ($i + 1) ?>">
                        <?= "Critic " . ($i + 1) ?>
                    </button>
                </h2>
                <div id="panelsStayOpen-critic<?= ($i + 1) ?>" class="accordion-collapse collapse" aria-labelledby="critic<?= ($i + 1) ?>">
                    <div class="accordion-body">
                        <?= $critic['critic'] ?>
                    </div>
                </div>
            </div>
        <?php endforeach ?>
    </div>
</div>

<?= $this->endSection() ?>