// express框架
const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');
const port = 3003;

app.get('/', (req, res) => {
    // 讀取外部 HTML 檔案
    // __dirname 當前執行檔案的目錄
    const filePath = path.join(__dirname, 'main.html');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.status(500).send('Internal Server Error');
        } else {
            // 傳送讀取到的 HTML 內容給客戶端
            res.send(data);
        }
    });
});

// 啟動伺服器
app.listen(port, () => {
    console.log(`Server running at http://localhost`+':'+port+'/');
});
