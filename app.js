require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const users = require('./users');




const app = express();
app.use(express.json());



// Middleware para verificar JWT
function authenticateToken(req, res, next) {
  const token = req.headers['authorization'];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// Endpoint /login: Genera un token si
// las credenciales son correctas
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);
  
  if (!user) return res.status(400).send('Usuario no encontrado');

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(400).send('Contraseña incorrecta');
  
  const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '30s' });
  res.json({ token });
});

// Protege los siguientes endpoints con el middleware
app.get('/users', authenticateToken, (req, res) => {
  res.json(users);
});

app.put('/users/:id', authenticateToken, (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (!user) return res.sendStatus(404);

  user.email = req.body.email || user.email;
  res.json(user);
});

app.delete('/users/:id', authenticateToken, (req, res) => {
  users = users.filter(u => u.id != req.params.id);
  res.sendStatus(204);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
