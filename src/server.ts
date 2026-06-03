import app from './app';
import 'dotenv/config';

const PORT: number = Number(process.env.PORT);

const start = async () => {
  try {
    await app.listen({port:PORT, host: '0.0.0.0'});
    console.log(`Server is running on port ${PORT}`);
  } catch (error) {
    console.error('Error starting server:', error);
    process.exit(1);
  }
}

start()