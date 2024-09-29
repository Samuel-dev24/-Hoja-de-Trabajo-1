const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

let users = [];

// Endpoint para crear un nuevo usuario
app.post('/users', (req, res) => {
    const { dpi, name, email, password } = req.body;

    // Validar si el DPI ya existe
    const existingUser = users.find(user => user.dpi === dpi);
    if (existingUser) {
        return res.status(400).json({ message: 'El DPI ya está registrado' });
    }

    const newUser = { dpi, name, email, password };
    users.push(newUser);
    res.status(201).json(newUser);
});

// Endpoint para listar todos los usuarios
app.get('/users', (req, res) => {
    res.json(users);
});

// Endpoint para actualizar un usuario existente
app.put('/users/:dpi', (req, res) => {
    const { dpi } = req.params;
    const { name, email, password } = req.body;

    // Validar si el usuario existe
    const user = users.find(user => user.dpi === dpi);
    if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Validar si se está intentando cambiar el DPI a uno ya existente
    if (req.body.dpi && req.body.dpi !== dpi) {
        const dpiExists = users.find(user => user.dpi === req.body.dpi);
        if (dpiExists) {
            return res.status(400).json({ message: 'El nuevo DPI ya está registrad0o' });
        }
    }

    // Actualizar los campos permitidos
    if (name) user.name = name;
    if (email) user.email = email;
    if (password) user.password = password;

    res.json(user);
});

// Endpoint para eliminar un usuario
app.delete('/users/:dpi', (req, res) => {
    const { dpi } = req.params;

    // Validar si el usuario existe
    const userIndex = users.findIndex(user => user.dpi === dpi);
    if (userIndex === -1) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Eliminar el usuario
    users.splice(userIndex, 1);
    res.status(204).send(); 
});

app.listen(port, () => {
    console.log(`API escuchando en el puerto ${port}`);
});

