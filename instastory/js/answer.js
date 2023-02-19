import fetchData from "./src/fetchData.js"
import { el } from "./src/function/global.js"

const list = (q, a, id) => { // q : question & a: answer
    const accordion =
        /* html */
        `
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${id}" aria-expanded="false" aria-controls="collapse${id}">
                ${q}
            </button>
            </h2>
            <div id="collapse${id}" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                ${a}
            </div>
            </div>
        </div>
        `

    return accordion
}

const accordion = el(".accordion")

const answer = async () => {
    const qna = await fetchData("qna")

    qna.map(data => {
        accordion.innerHTML += list(data.question, data.answer ?? `<small class="fst-italic text-warning">Belum ada jawaban</small>`, data.id)
    })
}

answer()