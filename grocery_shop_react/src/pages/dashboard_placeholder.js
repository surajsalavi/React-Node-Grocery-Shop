import React from 'react'
import { Outlet } from 'react-router-dom'
import '../assets/dashboard/dashboard.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Topbar from './topbar'
import Sidebar from './sidebar'

const Dashboard = () => {
  return (
    <>
      <Topbar />
      <div className='container-fluid'>
        <div className='row'>
          <nav className='col-md-3 col-lg-2 d-md-block bg-body-tertiary sidebar collapse '>
            <Sidebar />
          </nav>
          <main className='col-md-9 ms-sm-auto col-lg-10 px-md-4'>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  )
}

export default Dashboard
