window.onload = function() {
    var script = document.createElement('script');
    script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
    var script2 = document.createElement('script');

    script2.onload = function() {
        new window.VLibras.Widget('https://vlibras.gov.br/app');
    };
    document.head.appendChild(script);
    document.head.appendChild(script2);

};
