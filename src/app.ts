import express, { Request, Response } from 'express';
import { books } from './data/books';
import { Book } from './models/Book';

const app = express();

app.use(express.json());

// Ruta raíz (Evita "Cannot GET /" y responde un mensaje JSON)
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: "Bienvenido a la API REST de Libros",
    description: "API REST con Express y TypeScript para la gestión de libros",
    endpoints: "/api/books"
  });
});

// GET - Consultar todos los libros
app.get('/api/books', (req: Request, res: Response) => {
  res.status(200).json(books);
});

// GET - Consultar libro por ID
app.get('/api/books/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const book = books.find((b) => b.id === id);

  if (!book) {
    return res.status(404).json({ message: 'Libro no encontrado' });
  }

  res.status(200).json(book);
});

// POST - Crear un nuevo libro
app.post('/api/books', (req: Request, res: Response) => {
  const { title, author, year } = req.body;

  if (!title || !author || !year) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios' });
  }

  const newBook: Book = {
    id: books.length > 0 ? Math.max(...books.map(b => b.id)) + 1 : 1,
    title,
    author,
    year
  };

  books.push(newBook);
  res.status(201).json({ message: 'Libro creado exitosamente', book: newBook });
});

// PATCH - Modificar un libro parcialmente
app.patch('/api/books/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const book = books.find((b) => b.id === id);

  if (!book) {
    return res.status(404).json({ message: 'Libro no encontrado' });
  }

  if (req.body.title) book.title = req.body.title;
  if (req.body.author) book.author = req.body.author;
  if (req.body.year) book.year = req.body.year;

  res.status(200).json({ message: 'Libro actualizado parcialmente', book });
});

// DELETE - Eliminar un libro
app.delete('/api/books/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex((b) => b.id === id);

  if (index === -1) {
    return res.status(404).json({ message: 'Libro no encontrado' });
  }

  const deletedBook = books.splice(index, 1);
  res.status(200).json({ message: 'Libro eliminado exitosamente', book: deletedBook[0] });
});

export default app;