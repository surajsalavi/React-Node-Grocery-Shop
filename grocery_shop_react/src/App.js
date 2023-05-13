import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Root from './pages/root'
import LoginPage from './pages/login'
import Dashboard from './pages/dashboard_placeholder'
import Categories from './pages/admin_categories'
import Products from './pages/admin_products'

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Root />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='dashboard' element={<Dashboard />}>
          <Route index path='categories' element={<Categories />} />
          <Route path='products' element={<Products />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
