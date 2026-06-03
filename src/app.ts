import fastify from 'fastify';
import 'dotenv/config';

const app = fastify({logger: true});

app.get('/', async (req, res) => {
  return  res.send({message: 'Hello World!'});
});

export default app;