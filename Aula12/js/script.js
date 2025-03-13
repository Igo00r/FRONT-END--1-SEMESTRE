function Validar(){
    let userEl = document.getElementById('txtUser');
    let passEl = document.getElementById('pwdPass');
    let manterLogadoEl = document.getElementById('manterLogado')

    if(userEl.value == 'admin' && passEl.value == '123'){
        if(manterLogadoEl.checked){
            localStorage.setItem('logado','true');
        }
        else{
            sessionStorage.setItem('logado','true');
        }
        localStorage.setItem('nome','Clark Kent');
        window.location.href = 'perfil.html'; // redirecionamento
    }
    else{
        localStorage.setItem('erro','1');
        sessionStorage.setItem('logado','false');
        window.location.href = 'formLogin.html';
    }
}