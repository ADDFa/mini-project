const getData = new Promise((resolve, reject) => {
    fetch('http://localhost/mini-project/new-year/index.php?hope=want')
        .then(e => e.json())
        .then(e => resolve(JSON.parse(e)))
})

const setWant = async () => {
    const data = await getData
    const hopes = document.querySelector('.hopes')

    for (want of data) {
        hopes.innerHTML += `<li>${want.harapan}</li>`
    }
}

setWant()