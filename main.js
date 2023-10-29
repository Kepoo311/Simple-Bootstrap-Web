const scriptURL = 'ISI BRO'
const form = document.forms['contact-submit']
const btnKirim = document.querySelector('.btn-kirim')
const btnLoading = document.querySelector('.btn-loading')
const alertSucc = document.querySelector('.alert-berhasil')
const alertFail = document.querySelector('.alert-gagal')

form.addEventListener('submit', e => {
  e.preventDefault()
//   untuk memunculakn tombol loading
    btnKirim.classList.toggle('d-none')
    btnLoading.classList.toggle('d-none')
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        console.log('Success!', response)
        //   untuk Mengembalikan tombol Submit
        btnKirim.classList.toggle('d-none')
        btnLoading.classList.toggle('d-none')
        // Tambilkan Alert Succes
        alertSucc.classList.toggle('d-none')
        // reset form
        form.reset()
    })
    .catch(error => {
        console.error('Error!', error.message)
        // Tambilkan Alert gagal
        alertFail.classList.toggle('d-none')
})
})