
const email = document.getElementById('email');
const password = document.getElementById('password');




// console.log(email, password);
const handleLogin = async (e) => {
  e.preventDefault() 
    const data = {
        email: email.value,
        password: password.value
    }
    console.log(data);
    const res = await fetch('https://amarenga-version01.herokuapp.com/users/login', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify(data),

    })
    const login = await res.json()
    console.log(login)
    sessionStorage.setItem('jwt', login.jwt)
    

    if (login.jwt) {window.location.href = "../dashboard/dashboard.html"}
    // else  {window.alert("wrong email or password try again")}
    
    // console.log(login)

}