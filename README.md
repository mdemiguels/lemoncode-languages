# Lemoncode Languages Module - Deliverable Exercises

This repository contains the completed deliverable exercises for the **Languages Module** from the Master Frontend Lemoncode program.

## Project Structure

```
src/
 01-practica/        # Practice exercises playground
 02-entregables/     # Main deliverable exercises
   ejercicio-01.ts # Array functions (head, tail, init, last)
   ejercicio-02.ts # Array concatenation
   ejercicio-03.ts # Object cloning and merging
   ejercicio-04.ts # Book search functionality
   ejercicio-05.ts # Slot machine class
 03-retos/          # Challenge exercises
```

## Deliverable Exercises

### Exercise 01 - Array Functions

Implementation of functional array operations:

- `head()` - Returns the first element
- `tail()` - Returns all elements except the first
- `init()` - Returns all elements except the last
- `last()` - Returns the last element

### Exercise 02 - Array Concatenation

Implementation of a `concat()` function that merges multiple arrays using spread operator and `flat()`.

### Exercise 03 - Object Operations

Implementation of:

- `clone()` - Deep cloning function for objects and arrays
- `merge()` - Object merging using spread operator

### Exercise 04 - Book Search

TypeScript implementation with interface definition for book search functionality. Checks if a book has been read from a collection.

### Exercise 05 - Slot Machine

Object-oriented implementation of a slot machine game using TypeScript classes with:

- Private properties for game state
- Random number generation for roulette simulation
- Win/lose logic based on three matching results

## Setup & Development

### Prerequisites

- Node.js
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm start
```

This command will:

- Transpile TypeScript files
- Copy HTML/CSS files
- Start browser-sync development server
- Watch for changes

### Build Only

```bash
npm run transpile
```

## Technologies Used

- **TypeScript** - Main programming language
- **Browser-sync** - Development server
- **Concurrently** - Run multiple npm scripts simultaneously
- **Copyfiles** - File copying utility

## About

This project is part of the **Master Frontend Lemoncode** curriculum, specifically the Languages module focusing on JavaScript/TypeScript fundamentals including:

- Functional programming concepts
- Array manipulation
- Object operations
- TypeScript interfaces and classes
- ES6+ features (destructuring, spread operator, etc.)

---

**Master Frontend Lemoncode** - Languages Module Deliverables
