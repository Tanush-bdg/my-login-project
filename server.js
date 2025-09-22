const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname)));

// Serve index.html as root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve welcome.html
app.get('/welcome.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'welcome.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
