document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Aqui você pode adicionar a lógica de autenticação
    console.log('Login attempt:', email, password);
    
    // Simulação de autenticação bem-sucedida
    // Na implementação real, você deve verificar as credenciais no servidor
    if (email && password) {
        window.location.href = '/dashboard';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

document.querySelector('.btn-google').addEventListener('click', function() {
    // Implementar lógica de login com Google
    console.log('Google login clicked');
});

document.querySelector('.btn-facebook').addEventListener('click', function() {
    // Implementar lógica de login com Facebook
    console.log('Facebook login clicked');
});