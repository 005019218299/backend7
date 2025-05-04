const express = require('express');
const app = express();
const port = 3000;

// Middleware cơ bản
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route mẫu
app.get('/', (req, res) => {
  res.send('Xin chào từ Express! 7');
});

// Khởi động server
app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`);
});