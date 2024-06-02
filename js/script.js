document.addEventListener("DOMContentLoaded", function () {

    function carregarPagina(page) {
        fetch(page)
            .then(response => {
                if (!response.ok) {
                    throw new Error('A resposta não foi carregada: ' + response.statusText);
                }
                return response.text();
            })
            .then(data => {
                document.querySelector('.container').innerHTML = data;
                addEventListener();
            })
            .catch(error => console.error('Erro ao carregar página:', error));
    }

    document.querySelectorAll('.navbar-nav a').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const page = this.getAttribute('data-page');
            carregarPagina(page);
        });
    });

    carregarPagina('/pages/principal.html');

});
