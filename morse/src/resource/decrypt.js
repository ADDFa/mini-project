import morse from "./morse.js"
import showMessage from "./message.js"

const validation = value => !/[^\.\-\s]/.test(value)

const convertion = value => {
    const values = value.split(/\s/)
    console.log(values)

    const convertions = []
    values.map(ele => {
        const convertionVal = (ele === "") ? { text: " ", code: " " } : morse.find(code => ele === code.code)
        if (convertionVal) convertions.push(convertionVal.text)
    })

    return convertions.join("")
}

const decrypt = async value => {
    await showMessage(`Konversi Kode Morse Ke Teks`)
    await showMessage(`Melakukan Validasi Input`)
    if (!validation(value)) {
        await showMessage(`
            Gagal Validasi
            <br>
            Sandi Morse Tidak Valid
        `)

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

export default decrypt