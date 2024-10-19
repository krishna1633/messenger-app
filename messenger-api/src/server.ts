import express from 'express';
import cors from 'cors';
import chatRoutes from './routes/chatRoutes';
import friendRoutes from './routes/friendRoutes';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/chats', chatRoutes);
app.use('/api/friends', friendRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
