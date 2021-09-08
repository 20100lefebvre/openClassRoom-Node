const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Voilà encore la réponse du premier serveur, tiens!');
});

server.listen(process.env.PORT || 3000);
