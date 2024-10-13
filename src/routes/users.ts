import { Router, Request, Response } from 'express';
import { User } from '../interfaces/User';

const router = Router();
let users: User[] = [];


router.post('/users', (req: Request, res: Response) => {
  const newUser: User = req.body;
  if (!newUser.name || !newUser.email || !newUser.password || !newUser.DPI) {
    return res.status(400).json({ message: 'Invalid user data' });
  }
  users.push(newUser);
  res.status(201).json(newUser);
});

router.get('/users', (req: Request, res: Response) => {
  res.json(users);
});


router.put('/users/:id', (req: Request, res: Response) => {
  const userId = req.params.id;
  const updatedUser: Partial<User> = req.body;
  const userIndex = users.findIndex(u => u.DPI === userId);
  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }
  users[userIndex] = { ...users[userIndex], ...updatedUser };
  res.json(users[userIndex]);
});


router.delete('/users/:id', (req: Request, res: Response) => {
  const userId = req.params.id;
  const userIndex = users.findIndex(u => u.DPI === userId);
  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }
  users.splice(userIndex, 1);
  res.status(204).send();
});

export default router;
