<?= $this->extend("./Layouts/layout") ?>

<?= $this->section("content") ?>

<div class="row">
    <div class="col">
        <div class="form-floating">
            <textarea class="form-control" placeholder="Leave a comment here" style="min-height: 100px" disabled><?= $question ?></textarea>
        </div>
    </div>

    <!-- answer -->
    <div class="col">
        <form action="<?= "/answer/$id" ?>" method="POST">
            <input type="text" name="_method" value="PUT" hidden />
            <div class="form-floating mb-3">
                <textarea name="answer" class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="min-height: 100px"></textarea>
                <label for="floatingTextarea2">Jawaban</label>
            </div>
            <div class="d-flex justify-content-end gap-3">
                <a href="/all" class="btn btn-warning">Kembali</a>
                <button class="btn btn-info">Balas</button>
            </div>
        </form>
    </div>
</div>

<?= $this->endSection() ?>