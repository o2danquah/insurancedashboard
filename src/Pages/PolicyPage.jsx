import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function PolicyPage() {
    
   const {id} = useParams();
   const [receivedData, setreceivedData] = useState([])
    const url = `https://67898f5c2c874e66b7d90d84.mockapi.io/api/Insurancepolicies/policy/${id}`

   useEffect(() => {
    const ExtractData = async () => {
    await fetch(url, {method: 'GET',  headers: {'content': 'application/json'}}).then((res) => {
    if(res.ok){
        return res.json()
    }
   }).then((res) => {
    setreceivedData(res)
   }).catch((err)=> {
    console.log(err)
   })
    }


    ExtractData()
   }, [])

console.log(receivedData)
  return (
    <div className='container pt-5'>
        <h2>
            Policy Page
        </h2>
        <div data-simplebar className="">
                <div className="table-responsive products-tabel" data-simplebar>
                  <table className="table text-nowrap mb-0 align-middle table-hover">
                    <thead className="fs-4">
                      <tr>
                        <th className="fs-3 px-4">Policy Id</th>
                        <th className="fs-3 px-4">Policy Type</th>
                        <th className="fs-3 px-4">Coverage Details</th>
                        <th className="fs-3 px-4">Start Date</th>
                        <th className="fs-3 px-4">End Date</th>
                        <th className="fs-3 px-4">Premium Amount</th>
                        <th className="fs-3 px-4">Policy Status</th>
                        
                        <th className='fs-3'> </th>
                      </tr>
                    </thead>
                    <tbody>
                    

                    
                      <tr>
                        <td className='text-truncate'>
                        {receivedData.id}
                        </td>
                        <td>
                          <div className="d-flex align-items-center product">
                            
                            <div className="ms-3 product-title">
                              <h6 className=" mb-0 text-truncate-2">
                                {receivedData.PolicyType}
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center product">
                            
                            <div className="ms-3 product-title">
                              <h6 className=" mb-0 text-truncate-2">
                                {receivedData.CoverageDetails}
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center product">
                            
                            <div className="ms-3 product-title">
                              <h6 className=" mb-0 text-truncate-2">
                                {receivedData.StartDate}
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center product">
                            
                            <div className="ms-3 product-title">
                              <h6 className=" mb-0 text-truncate-2">
                                {receivedData.EndDate}
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center product">
                            
                            <div className="ms-3 product-title">
                              <h6 className=" mb-0 text-truncate-2">
                                {receivedData.PremiumAmount}
                              </h6>
                            </div>
                          </div>
                        </td>
                        
                        <td>
                          <span className="badge rounded-pill fs-2 fw-medium bg-secondary-subtle text-secondary">{receivedData.PolicyStatus}</span>
                        </td>
                        <td>
                          <div className="dropdown dropstart">
                            <a href="javascript:void(0)" className="text-muted" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                              <i className="ti ti-dots-vertical fs-6" />
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                              <li>
                                <a className="dropdown-item d-flex align-items-center gap-3" href="javascript:void(0)"><i className="fs-4 ti ti-eye" />View</a>
                              </li>
                              <li>
                                <a className="dropdown-item d-flex align-items-center gap-3" href="javascript:void(0)"><i className="fs-4 ti ti-trash" />Delete</a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                  
                      
                      
                    </tbody>
                  </table>
                </div>
              </div>
    </div>
  )
}

export default PolicyPage