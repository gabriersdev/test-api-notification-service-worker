self.addEventListener('install', event => {
  console.log('Service Worker instalado!');
});

self.addEventListener('activate', event => {
  console.log('Service Worker ativado!');
});

self.addEventListener('message', event => {
  console.log('Mensagem recebida no SW:', event.data);
  // Respondendo à mensagem
  event.source.postMessage({ resposta: 'Olá do Service Worker!' });

  // Notificando todos os clientes (abas/janelas)
  self.clients.matchAll().then(clients => {
    clients.forEach(client => {
      client.postMessage({ resposta: 'Notificação para todos os clientes!' });
    });
  });
});

// Intercepta requisições fetch (opcional - descomente para testar)
self.addEventListener('fetch', event => {
  console.log('Fetch interceptado:', event.request.url);
  //  Manipule a requisição aqui, por exemplo, com cache
});
