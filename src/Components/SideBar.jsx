import React from 'react'
import { Link } from 'react-router-dom';
function SideBar() {
  return (
    <div>
         <aside className="left-sidebar">
    {/* Sidebar scroll*/}
    <div>
      <div className="brand-logo d-flex align-items-center justify-content-between">
        <div className="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
          <i className="ti ti-x fs-8" />
        </div>
        <Link to={"/"}><a  target="_blank" className="btn btn-primary fs-2 fw-semibold lh-sm">LOGOUT</a></Link>
      </div>
      {/* Sidebar navigation*/}
      <nav className="sidebar-nav scroll-sidebar" data-simplebar>
        <ul id="sidebarnav">
          <li className="sidebar-item">
          <Link to={"/InsuranceClaim"}>
          <a className="sidebar-link" href="./index.html" aria-expanded="false">
              <iconify-icon icon="solar:widget-add-line-duotone" />
              <span className="hide-menu">Insurance Claim</span>
            </a>
          </Link>
          </li>
          <li className="sidebar-item">
          <Link to={"/PoliciesPage"}>
          <a className="sidebar-link" aria-expanded="false">
              <iconify-icon icon="solar:widget-add-line-duotone" />
              <span className="hide-menu">Policy Page</span>
            </a>
          </Link>
          </li>
        </ul>
        <div className="d-flex align-items-center hide-menu position-relative fixed-bottom mb-7 mt-4 p-3 rounded">
          
        </div>
      </nav>
      {/* End Sidebar navigation */}
    </div>
    {/* End Sidebar scroll*/}
  </aside>
    </div>
  )
}

export default SideBar