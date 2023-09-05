// 架設本機server
const http = require('http');
// 引入fs模組,用來讀取html
const fs = require('fs')

const hostname='127.0.0.1';
const port =3000;

const server =http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    fs.readFile('main.html', (err, data) => { // 讀取 index.html 檔案內容
        if (err) {
            res.end('Error reading the file.'); // 如果讀取檔案出錯，回傳錯誤訊息
            return;
        }
        res.end(data); // 將讀取的檔案內容傳送給客戶端
    });
});

server.listen(port, hostname), () =>{
    console.log("server runnung")
}

server.listen (port, hostname, () => {
    console.log('Server running at http://' +hostname +':'+port+'/');
    // console.log ('Server running at http://${hostname] : $ {port]/');
});