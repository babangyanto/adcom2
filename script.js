// alert('ok berhasil terhubung')

//1. set pasword
const password = 'paasword anda'

// 2.ambil element pada html
const getUsername = document.querySelector('#username')
const getPassword = document.querySelector('#password')
const getForm = document.querySelector('#form')

// 3. lakukan event on clickk ketika user klik pada login button
getForm.addEventListener('submit',(e)=>{
    // agar saat user klik login halaman website tidak ter-refresh
    e. preventDefault()
    // ambil data username user
    alert(getUsername.value)
    alert(getPassword.value)
})
// 4. lalukan percabangan

// 5. lalukan value apakah dua nilai yang diinputkan  user sama  dengan password