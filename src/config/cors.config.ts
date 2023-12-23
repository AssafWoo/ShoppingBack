export const corsConfig = {
  origin: process.env.NODE_ENV === 'production' ? 'https://aproducts.app' : 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type, Accept',
  credentials: true,
};