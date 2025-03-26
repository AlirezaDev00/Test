const sign_in = () => {
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let data = { email: email, password: password }
    // fetch('/sign_in', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data)
    // })
    // .then(response => response.json())
    return false
}
