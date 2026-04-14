let namabarang = document.getElementById("nama barang");
let jumlah = document.getElementById("jumlah");
let keterangan = document.getElementById("keterangan");

function simpan() {
    console.log(namabarang.value)
    console.log(jumlah.value)
    console.log(keterangan.value)

    // localStorage.setItem("npm", npm.value)
    // localStorage.setItem("nama", nama.value)

    // kalo local storage blm ad isi
    if(localStorage.getItem("mahasiswa")===null) {
        // simpan array kosong []
        localStorage.setItem("mahasiswa", "[]")
    }

    // panggil local storage (konversi string => obj)
    let data = JSON.parse(localStorage.getItem("mahasiswa"))
    console.log(data)

    //simpan value npm, nama ke dalam obj data
    data.push({
        namabarang: namabarang.value,
        jumlah: jumlah.value,
        keterangan: keterangan.value
    })
    console.log(data)

    //simpan data terbaru ke dalam local storage
    // konversi dari objek menjadi string
    localStorage.setItem("mahasiswa", JSON.stringify(data))

    //panggil tampil()
    tampil()
}

function tampil() {
    //panggil slu local strg
    let hasil = JSON.parse(localStorage.getItem("mahasiswa"))

    //clear element ul
    document.getElementById("list-mhs").innerHTML = " "

    //lakukan perulangan (foreach)
    hasil.forEach(element => {
        // console.log(element)
        document.getElementById("list-mhs").
        innerHTML += `<div class="col-lg-4 col-md-6">
        <h4 class="text-primary">${element.namabarang}</h4>
        <h6 class="text-danger">${element.jumlah}</h6>
        <img class="img-fluid" src=${element.keterangan}/>
        </div>`
    });
}

//jalankan func tmpil()
tampil()