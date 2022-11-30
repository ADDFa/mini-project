const area = document.querySelector('.board>textarea')

window.addEventListener('keypress', e => {
    const result = e.key.match(/[0-9|+|\-|*|/|%|\.]/)
    if (!result) e.preventDefault()

    if (e.key === 'Enter') console.log(operasi.count(area.value))
})

const operasi = {
    count(data) {
        // Pisahkan berdasarkan + | -
        const value = data.split(/[\+|\-]/)
        const operand = [...data.matchAll(/[\+|\-]/g)]

        // Gabungkan dalam 1 Array
        let n = 1
        operand.map(e => {
            value.splice(n, 0, e[0])
            n += 2
        })

        return this.calculate(value)
    },

    calculate(data) {
        const Result = (value, operand) => {
            let result = value[0]
            let n = 1

            while (n < value.length) {
                if (operand[n - 1][0] === '*') result *= value[n]
                if (operand[n - 1][0] === '/') result /= value[n]

                n++
            }

            return result
        }

        let n = 0
        const results = []

        // Hitung isi didalamnya
        while (n < data.length) {
            const value = data[n].split(/[\*|\/]/).map(e => parseFloat(e))
            const operand = [...data[n].matchAll(/[\*|\/]/g)]

            results.push(Result(value, operand))
            n += 2
        }

        // Hitung secara total
        n = 1
        let indexResults = 1
        let result = results[0]

        while (n < data.length) {
            if (data[n] === '-') result -= results[indexResults]
            if (data[n] === '+') result += results[indexResults]

            indexResults++
            n += 2
        }

        return result
    }
}

// const operasih = (data, operand) => {
//     let temp = data[0]

//     for (let i = 0; i < operand.length; i++) {
//         if (e === '*') temp *= newValue[i + 1]
//         if (e === '/') temp /= newValue[i + 1]
//     }

//     return temp
// }

// const count = function (data) {
//     // Pisahkan berdasarkan + | -
//     const value = data.split(/[\+|\-]/)
//     const operand = [...data.matchAll(/[\+|\-]/g)]

//     let n = 1
//     operand.map(e => {
//         value.splice(n, 0, e[0])
//         n += 2
//     })

//     // Lakukan operasi
//     n = 0
//     let result = []

//     while (n < value.length) {
//         const newValue = value[n].split(/[\*|\/]/).map(e => parseFloat(e))
//         const newOperand = [...value[n].matchAll(/[\*|\/]/g)]

//         console.log(operasi(newValue, newOperand))
//         console.log(newValue)
//         console.log(newOperand)

//         n += 2
//     }

//     console.log(value)
//     console.log(operand)
// }

// // ubah data menjadi array
    // const nilai = data.split(/[\+|\-|\*|\/|%]/)
    // const operand = [...data.matchAll(/[\+|\-|\*|\/|%]/g)]

    // const dataArr = []
    // for (let i = 0; i < nilai.length; i++) {
    //     dataArr.push(parseFloat(nilai[i]))
    //     if (operand[i]) dataArr.push(operand[i][0])
    // }

    // // Lakukan operasi diurutkan berdasarkan kali bagi tambah kurang
    // console.log(dataArr)

    // // Tentukan nilai awal
    // let hasil = dataArr[0]
    // // if (dataArr[1] === '*') hasil = dataArr[0] * dataArr[2]
    // // if (dataArr[1] === '/') hasil = dataArr[0] / dataArr[2]
    // let temp = []

    // let i = 1
    // while (i < dataArr.length) {
    //     if (dataArr[i] === '*') hasil *= dataArr[i + 1]
    //     if (dataArr[i] === '/') hasil /= dataArr[i + 1]

    //     if (dataArr[i] === '+') {
    //         if (dataArr[i + 2] !== '*' && dataArr[i + 2] !== '/') temp.push(dataArr[i + 1])
    //     }
    //     if (dataArr[i] === '-') {
    //         if (dataArr[i + 2] !== '*' && dataArr[i + 2] !== '/') temp.push(-dataArr[i + 1])
    //         temp.push(dataArr)
    //     }

    //     i += 2
    // }

    // const tempHasil = (temp.length > 0) ? temp.reduce((accu, curr) => accu + curr) : 0

    // console.log(hasil)
    // console.log(temp)
    // console.log(tempHasil)
    // console.log(hasil + tempHasil)