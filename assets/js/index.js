let senha = document.getElementById('senha')
let eyeSlash = document.getElementById('eyeSlash')
let eyeSolid = document.getElementById('eyeSolid')

document.getElementById('load').onload = function () {

    document.getElementById('container').classList.add('form_load')
    document.getElementById('nago').classList.add('nago_load')
    document.getElementById('ram').classList.add('ram_load')
}

document.getElementById('eyeSlash').onclick = function () {

    if (senha.type == 'password') {
        senha.type = 'text'
        eyeSlash.style.opacity = 1
        eyeSolid.style.opacity = 0
    }

    else {
        senha.type = 'password'
        eyeSlash.style.opacity = 0
        eyeSolid.style.opacity = 1
    }
}