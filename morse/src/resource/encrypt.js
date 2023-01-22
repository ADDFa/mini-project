import morse from "./morse.js"
import showMessage from "./message.js"
import { el } from "./selector.js"

const validation = value => !/[^\w\s]|_/.test(value)

const convertion = value => {
    const values = value.toUpperCase().split("")

    const convertions = []
    values.map(ele => {
        const convertionVal = (ele === " ") ? { text: " ", code: " " } : morse.find(text => ele === text.text)
        convertions.push(convertionVal.code)
    })

    return convertions.join(" ")
}

const encrypt = async value => {
    await showMessage(`Konversi Teks Ke Kode Morse`)
    await showMessage(`Melakukan Validasi Input`)
    if (!validation(value)) {
        await showMessage(`
            Gagal Validasi
            <br>
            Terdapat Kata Bukan Huruf atau Angka
        `, 2000)

        await showMessage(`Membatalkan Proses Validasi`)

        await showMessage(`
            Validasi Dibatalkan
            <br>
            Silakan Cek Ulang Input Yang Anda Berikan
        `, 3000)

        return ""
    }
    await showMessage(`Validasi Berhasil`)

    await showMessage(`Melakukan Konversi`)
    const res = convertion(value)
    await showMessage(`Konversi Berhasil`)

    await showMessage(`Menampilkan Hasil Konversi`)
    return res
}

export default encrypt