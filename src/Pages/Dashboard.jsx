import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import SideBar from '../Components/SideBar';
import Header from '../Components/Header';
import {differenceInCalendarMonths} from "date-fns"
import ContextAPI from '../Context/ContextAPI';

export default function Dashboard() {
   // would normally store url in .env
    const url = "https://67898f5c2c874e66b7d90d84.mockapi.io/api/Insurancepolicies/policy"
    const [policies, setNewPolicies] = useState([])
    const [err, seterrMsg] = useState("")
    const {SetExpPolicies } = useContext(ContextAPI);
    

    const expiringPolicies = policies.filter((index, i) => {
        const EndDate = index.EndDate;
        const truncatedDate = new Date(EndDate).toLocaleDateString('en-CA', {year: 'numeric', month: '2-digit', day: '2-digit'})     
            const startDate = new Date();
            const FinalendDate = new Date(truncatedDate);
            // this return the difference in months between the current month and end month using date-fns
            return (differenceInCalendarMonths(FinalendDate,startDate) >= 1 && differenceInCalendarMonths(FinalendDate,startDate) <=8)
    })

// returns policies that are still active by their status
    const ActivePolicies = policies.filter((index, i) => {
       return index?.PolicyStatus === "Active"

})


//Awaiting data from server once the page loads
    useEffect(() => {
        const ExtractPolicies = async() => {
            await fetch(url, {method: "GET", headers: {'content-type':'application/json'},}).then(
                (res) => {
                    if(res.ok){
                        return res.json()
                    }
                }
            ).then((data) => {
                setNewPolicies(data)
            }).catch((err) => {
                seterrMsg(err)
            })
        }
        
        ExtractPolicies()
        SetExpPolicies(expiringPolicies)
       
    }, [])


   
    


  return (
        <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
  {/* Sidebar Start */}
 <SideBar/>
  {/*  Sidebar End */}
  {/*  Main wrapper */}
  <div className="body-wrapper">
    {/*  Header Start */}
    <Header/>
    {/*  Header End */}
    <div className="body-wrapper-inner">
      <div className="container-fluid">
        {/*  Row 1 */}
        <div className="row">
          
        <div className="col-lg-5">
            <div className="row">
              <div className="col-lg-12">
                <div className="card bg-danger-subtle shadow-none w-100">
                  <div className="card-body">
                    <div className="d-flex mb-10 pb-1 justify-content-between align-items-center">
                      <div className="d-flex align-items-center gap-6">
                        <h6 className="mb-0 fs-4 fw-medium text-muted">
                          Total Policies
                        </h6>
                      </div>
                      
                    </div>
                    <div className="row">

                      <div className="col-5">
                        <h2 className="mb-6 fs-8">{policies.length}</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>



          <div className="col-lg-5">
            <div className="row">
              <div className="col-lg-12">
                <div className="card bg-danger-subtle shadow-none w-100">
                  <div className="card-body">
                    <div className="d-flex mb-10 pb-1 justify-content-between align-items-center">
                      <div className="d-flex align-items-center gap-6">
                        <p className='text-danger'>{err}</p>
                        <h6 className="mb-0 fs-4 fw-medium text-muted">
                          Active Policies
                        </h6>
                      </div>
                     
                    </div>
                    <div className="row">
                      <div className="col-5">
                        <h2 className="mb-4 fs-8">{ActivePolicies.length}</h2>
                      </div>
                      <div className="col-5">
                        <div id="total-followers" className="rounded-bars" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 d-flex align-items-stretch">
            <div className="card w-100">
              <div className='d-flex jusity-content-between'>
              <div className="card-body pb-0">
                <h4 className="fs-4 mb-1 card-title">Policy Details</h4>
              </div>
              <div className='dropdown-dropstart p-4'>
               <Link to={"/PoliciesPage"}>  <a className='text-primary'> VIEW POLICIES</a></Link>
              </div>

              </div>
              <div data-simplebar className="">
                <div className="table-responsive products-tabel" data-simplebar>
                  <table className="table text-nowrap mb-0 align-middle table-hover">
                    <thead className="fs-3">
                      <tr>
                        <th className="fs-3">ID</th>
                        <th className="fs-3">Policy Type</th>
                        <th className="fs-3">Status</th>
                        <th className='fs-3'> </th>
                      </tr>
                    </thead>
                    <tbody>
                    {policies.map(index => 

                    
                      <tr>
                        <td className='text-truncate'>
                        {index.id}
                        </td>
                        <td>
                          <div className="d-flex align-items-middle justify-content-center product">
                            
                            <div className="ms-5 pl-2 product-title">
                              <h6 className=" mb-0 text-truncate-2 text-center">
                                {index.PolicyType}
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="badge rounded-pill fs-2 fw-medium bg-secondary-subtle text-secondary">{index.PolicyStatus}</span>
                        </td>
                        <td>
                      
                          <li>
                                <Link to={`/PolicyPage/`+index.id} className=" d-flex align-items-center gap-1 justify-content-center"><i className="fs-5 ti ti-eye" />View</Link>
                              </li>
                         
                        </td>
                      </tr>
                    )}
                      
                      
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          
        </div>


      </div>
    </div>
  </div>
</div>

  )
}
