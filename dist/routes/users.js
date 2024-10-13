"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let users = [];
// POST /users
router.post('/users', (req, res) => {
    const newUser = req.body;
    if (!newUser.name || !newUser.email || !newUser.password || !newUser.DPI) {
        return res.status(400).json({ message: 'Invalid user data' });
    }
    users.push(newUser);
    res.status(201).json(newUser);
});
// GET /users
router.get('/users', (req, res) => {
    res.json(users);
});
// PUT /users/:id
router.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    const updatedUser = req.body;
    const userIndex = users.findIndex(u => u.DPI === userId);
    if (userIndex === -1) {
        return res.status(404).json({ message: 'User not found' });
    }
    users[userIndex] = Object.assign(Object.assign({}, users[userIndex]), updatedUser);
    res.json(users[userIndex]);
});
// DELETE /users/:id
router.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    const userIndex = users.findIndex(u => u.DPI === userId);
    if (userIndex === -1) {
        return res.status(404).json({ message: 'User not found' });
    }
    users.splice(userIndex, 1);
    res.status(204).send();
});
exports.default = router;
