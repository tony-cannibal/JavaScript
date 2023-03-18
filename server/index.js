const http = require('http');


const PORT = 8000;

const server = http.createServer((req, res) => {
    res.end('<h1>Te Amo Amor.</h1>')
});

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
