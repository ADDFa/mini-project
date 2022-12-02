const getData = new Promise((resolve, reject) => {
    fetch('https://mixtimid.000webhostapp.com/mini-project/new-years/index.php?hope=want')
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