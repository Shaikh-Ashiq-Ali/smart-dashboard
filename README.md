# 🚀 Smart Dashboard

A comprehensive productivity dashboard built with **Next.js 15**, **React 19**, and **TypeScript**. This application demonstrates advanced React concepts and provides practical tools for daily productivity.

![Next.js](https://img.shields.io/badge/Next.js-15.3.4-black)
![React](https://img.shields.io/badge/React-19.0.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.7-purple)

## ✨ Features

### 🧾 **Todo Manager**
- Create, toggle, and delete tasks
- Persistent storage with localStorage
- Custom `useTodos` hook for state management
- Real-time updates and data persistence

### ⏱️ **Pomodoro Timer**
- 25-minute work sessions with break intervals
- Start, pause, and reset functionality
- Visual countdown display
- Automatic cleanup on component unmount

### 📝 **Notes App**
- Markdown support with live preview
- PDF export functionality
- Tag-based organization
- Local storage for data persistence
- Rich text editing capabilities

### 🎯 **Habits Tracker**
- Daily habit tracking with streak counting
- Advanced state management using `useReducer`
- Visual progress indicators
- Persistent habit data

### 💡 **Daily Tips**
- API integration for motivational quotes
- Loading states and error handling
- Responsive card-based design
- Async/await implementation

### 🔄 **Lazy Loading Demo**
- React.lazy for code splitting
- Suspense boundaries for loading states
- Performance optimization techniques
- Dynamic component loading

### 📄 **Pagination System**
- Efficient data pagination
- Navigation controls
- Responsive list rendering
- State-based page management

### 🎨 **Theme System**
- Dark/Light mode toggle
- Context API for global state
- Bootstrap 5.3 native dark mode
- Persistent theme preferences

### ⚡ **Performance Optimizations**
- React.memo for component memoization
- useCallback for function optimization
- useMemo for expensive calculations
- Lazy loading demonstrations

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.4 (App Router)
- **Language**: TypeScript 5
- **UI Library**: React 19
- **Styling**: Bootstrap 5.3.7 + React Bootstrap
- **Icons**: React Bootstrap Icons
- **Markdown**: React Markdown
- **PDF Generation**: html2pdf.js
- **Linting**: ESLint with Next.js config

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd smart-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
smart-dashboard/
├── app/
│   ├── (dashboard)/          # Dashboard routes
│   │   ├── page.tsx         # Main dashboard
│   │   ├── pomodoro/        # Timer functionality
│   │   ├── notes/           # Notes app
│   │   ├── habits/          # Habit tracker
│   │   ├── tips/            # Daily tips
│   │   ├── lazy/            # Lazy loading demo
│   │   ├── pagination/      # Pagination system
│   │   └── performance/     # Performance demos
│   ├── components/          # Reusable components
│   ├── context/             # React Context providers
│   ├── hooks/               # Custom React hooks
│   └── type/                # TypeScript type definitions
├── public/                  # Static assets
└── package.json
```

## 🎯 React Concepts Demonstrated

### Core Hooks
- ✅ `useState` - Local state management
- ✅ `useEffect` - Side effects and lifecycle
- ✅ `useContext` - Global state sharing
- ✅ `useRef` - DOM references and values
- ✅ `useReducer` - Complex state logic
- ✅ `useCallback` - Function memoization
- ✅ `useMemo` - Value memoization

### Advanced Patterns
- ✅ Custom Hooks - Reusable logic
- ✅ Context API - Global state management
- ✅ Component Composition - Modular design
- ✅ Conditional Rendering - Dynamic UI
- ✅ Error Boundaries - Error handling
- ✅ Lazy Loading - Code splitting
- ✅ Performance Optimization - React.memo

## 🎨 UI/UX Features

- **Responsive Design** - Works on all device sizes
- **Dark/Light Theme** - User preference support
- **Bootstrap Components** - Professional styling
- **Loading States** - Better user experience
- **Error Handling** - Graceful error management
- **Accessibility** - Semantic HTML and ARIA

## 📊 Performance Features

- **Turbopack** - Fast development builds
- **Code Splitting** - Lazy loading for better performance
- **Memoization** - Optimized re-renders
- **Local Storage** - Offline data persistence
- **Efficient State Management** - Minimal re-renders

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [React](https://reactjs.org/) for the UI library
- [Bootstrap](https://getbootstrap.com/) for the styling framework
- [React Bootstrap](https://react-bootstrap.github.io/) for React components

---

**Built with ❤️ using Next.js and React**
