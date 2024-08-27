    window.onload = function() {
      var script = document.createElement('script');
      script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
      script.onload = function() {
          new window.VLibras.Widget('https://vlibras.gov.br/app');
      };
      document.head.appendChild(script);
  };
