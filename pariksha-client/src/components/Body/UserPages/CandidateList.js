import React from 'react'
import UserNavbar from '../../SideNavbar/UserNavbar'
import * as AiIcons from "react-icons/ai";


function CandidateList(){
    return (
        <div>
            <UserNavbar />
      <div className="container-fluid text-center bg-black text-light py-3 border-top border-3 border-info">
        <h1 className="text-center ">Exam Invite</h1>
      </div>

      
      <div className="container mt-5">
        <div className=" col-xl-6 col-12 mx-auto">
          <h1>List of Exams</h1>
          <table class="table table-bordered border-dark">
            <thead>
              <tr className="table-dark text-center ">
                <th scope="col">Name</th>

                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col" colSpan="2">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              
                <tr>
                  <td className="pt-3 fw-bold px-3"></td>
                  <td className="pt-3 fw-bold px-3"></td>
                  <td className="pt-3 fw-bold px-3"></td>
                  
                  <td className="py-2 fw-bold px-3 text-center">
                  <button className="btn bg-danger ">
                      <AiIcons.AiOutlineDelete size="22px" color="white" />
                    </button>
                  </td>
                  
                </tr>
            </tbody>
          </table>
        </div>
      </div>
        </div>
        
    )

}

export default CandidateList	