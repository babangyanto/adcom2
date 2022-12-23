// cek apakah sudah terkoneksi
 // alert('oke sudah terhubung')

// ambil elemen
const getUsername = document.querySelector("#username")
const getPassword = document.querySelector("#Password")
const getForm = document.querySelector("form")

// buat user dan password
const USERS = [
    {
        name: "ys6367885.com",
        password : "12345"
    }
]

// testling consologe.log('user')
console.log(USERS) ;

// lalukan perulangan untuk ambil data dari database
// USERS.forEach(user => {
//     console.log(user) ;
    
// });


// getForm.addEventListener("submit",(e)=>{
//     e.preventDefault()
//        // ambil value dari input username
// //alert(getUsername.value)

// }
// )


// lakukan percabangan  dan perulangan 
USERS.forEach(user=>{ 
    if (getUsername.value == user.name && get.getPassword.value == user.password) {
        alert("oke berhasil login")
        
    } else {
        alert("invalid credentials")
    } 
}) 

    