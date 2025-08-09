# React Travel management admin App

A simple React application that fetches property data (flights, hotels, etc.) from a JSON Server, with Redux Toolkit state management, lazy loading, and memoized components for performance optimization.

## Features

- **React** with functional components
- **Redux Toolkit** for state management
- **JSON Server** for mock API
- **Lazy Loading** for pages/components
- **Memoized Components** to prevent unnecessary re-renders

##Pages

- ** Overview - Revenue, User count, Total Booking
- ** Users - List current users, Change user active status
- ** Bookings - List Bookings
- ** Inventory - List available flight hotel inventory, Add/Delete  inventory items
- ** Logout   

---

## Prerequisites

Make sure you have installed:

- **Node.js** (v16 or later)
- **npm** or **yarn**

---

## Installation

# Install dependencies
npm install

# Run Frontend
npm run dev

# Run Json-server
json-server --watch db.json --port 3001 (change port in .env)



