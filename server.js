const express = require('express');
const path = require('path');

const app = express();

/* Server Port */
const PORT = process.env.PORT || 5000;

/* Middleware */
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* Home Route */
app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

/* Dashboard Route */
app.get('/dashboard', (req, res) => {
res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

/* Health Check */
app.get('/status', (req, res) => {
res.json({
status: "Running",
project: "Dixon Technologies SAP MM Procure-to-Pay Simulator",
port: PORT
});
});

/* 404 Handler */
app.use((req, res) => {
res.status(404).send(`
<h1 style="font-family:Arial;text-align:center;margin-top:50px;color:#003366;">
404 - Page Not Found
</h1>
<p style="text-align:center;font-family:Arial;">
Invalid route in SAP P2P Project
</p>
`);
});

/* Start Server */
app.listen(PORT, () => {
console.log(`SAP Project Running on http://localhost:${PORT}`);
});