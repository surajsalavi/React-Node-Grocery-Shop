import React from 'react'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='position-sticky pt-3 sidebar-sticky'>
      <ul className='nav flex-column'>
        <li className='nav-item'>
          <a className='nav-link ' aria-current='page' href='#'>
            {/*active*/}
            <span data-feather='home' className='align-text-bottom'></span>
            Dashboard
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link ' aria-current='page' href='#'>
            <span data-feather='home' className='align-text-bottom'></span>
            Orders
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link ' aria-current='page' href='#'>
            <span data-feather='home' className='align-text-bottom'></span>
            Customers
          </a>
        </li>
        <li className='nav-item'>
          <Link to={'/dashboard/products'} className='nav-link'>
            <span
              data-feather='shopping-cart'
              className='align-text-bottom'
            ></span>
            Products
          </Link>
        </li>
        <li className='nav-item'>
          <Link to={'/dashboard/categories'} className='nav-link'>
            <span data-feather='file' className='align-text-bottom'></span>
            Product Categories
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
