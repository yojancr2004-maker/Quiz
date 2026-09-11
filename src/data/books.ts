import { Book } from '../models/Book';

export let books: Book[] = [
  {
    id: 1,
    title: "IT",
    author: "Stepen king",
    price: 85000,
    category: "Terror",
    available: true
  },
  {
    id: 2,
    title: "Cien años de soledad",
    author: "Gabriel García Márquez",
    price: 45000,
    category: "Novela",
    available: true
  },
  {
    id: 3,
    title: "Don Quijote de la Mancha",
    author: "Miguel de Cervantes",
    price: 60000,
    category: "Parabola",
    available: false
  },
  {
    id: 4,
    title: "El principito",
    author: "Antoine de Saint-Exupéry",
    price: 30000,
    category: "Ficcion",
    available: true
  },
  {
    id: 5,
    title: "1984",
    author: "George Orwell",
    price: 52000,
    category: "Historia",
    available: false
  }
];