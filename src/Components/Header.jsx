import React, { useContext } from 'react'
import ContextAPI from '../Context/ContextAPI'


function Header() {

    // calling global varibles using contextAPI
    const { ExpPolicies} = useContext(ContextAPI);
    const {GlobalUserName} = useContext(ContextAPI)

  return (
    <div>
        <header className="app-header">
      <nav className="navbar navbar-expand-lg navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item d-block d-xl-none">
            <a className="nav-link sidebartoggler" id="headerCollapse">
              <i className="ti ti-menu-2" />
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" data-bs-toggle="dropdown">
              <iconify-icon icon="solar:bell-linear" className="fs-6" />
              <div className="notification bg-primary rounded-circle" />
            </a>

            <ul className='dropdown-menu'>
                <h5 className='text-center'> Expiring in Eight(8) Months</h5>
                {ExpPolicies?.map(index => 
                   <li>
                   <a className='dropdown-item'>
                    <strong>Policy Type</strong>:{index?.PolicyType}
                    <br/>
                    <strong>Policy End Date</strong>:{index?.EndDate}
                   </a>
               </li>

                )

                }
            </ul>

          </li>
        </ul>
        <div className="navbar-collapse justify-content-end px-0" id="navbarNav">
          <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-end">
            <a href="" target="_blank" className="btn btn-primary">{GlobalUserName}</a>
            
          </ul>
        </div>
      </nav>
    </header>
    </div>
  )
}

export default Header