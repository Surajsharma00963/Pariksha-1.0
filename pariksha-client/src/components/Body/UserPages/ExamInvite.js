import React, { useEffect } from "react";
import UserNav from "../../SideNavbar/UserNavbar";
import * as AiIcons from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { fetchExam, dispatchGetExam } from "../../../redux/action/ExamActions";
import {
  dispatchCategory,
  fetchCategory,
} from "../../../redux/action/CategoryAction";


function ExamInvite() {
 
  const token = useSelector((state) => state.token);
  const exam = useSelector((state) => state.exam);

  

  const dispatch = useDispatch();

  useEffect(() => {
    fetchExam(token).then((res) => {
      dispatch(dispatchGetExam(res));
    });
    fetchCategory(token).then((res) => {
      dispatch(dispatchCategory(res));
    });
  }, [token, dispatch]);

  
  

  return (
    <>
      <UserNav />
      <div className="container-fluid text-center bg-black text-light py-3 border-top border-3 border-info">
        <h1 className="text-center ">Exam Invite</h1>
      </div>

      
      <div className="container mt-5">
        <div className=" col-xl-6 col-12 mx-auto">
          <h1>List of Exams</h1>
          <table class="table table-bordered border-dark">
            <thead>
              <tr className="table-dark text-center ">
                <th scope="col">Exam Title</th>

                <th scope="col">Description</th>
                <th scope="col">Category</th>
                <th scope="col" colSpan="2">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {exam.map((e) => (
                <tr key={e.id}>
                  <td className="pt-3 fw-bold px-3">{e.ExamTitle}</td>
                  <td className="pt-3 fw-bold px-3">{e.ExamDescription}</td>
                  <td className="pt-3 fw-bold px-3">{e.CategoryName}</td>
                  
                  <td className="py-2 fw-bold px-3 text-center">
                    <button className="btn bg-primary"
                    type="button"
                    class="btn bg-black text-light"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal" >
                        {/* <Link to={`/Addquestion/${e._id}`}> */}
                        <AiIcons.AiOutlineSend size="22px" color="white" />
                        {/* </Link> */}
                      
                    </button>
                  </td>
                  
                </tr>
              ))}
            </tbody>
          </table>
          <div
          class="modal fade shadow-lg"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h3 class="modal-title" id="exampleModalLabel">
                  Send test Mail
                </h3>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body  shadow-lg mx-3 my-4 rounded">
                <div>
                  {/* {err && showErrMsg(err)}
                  {success && showSuccessMsg(success)} */}
                </div>

                <form
                  className="form-control w-auto  mx-auto my-3"
                //   onSubmit={handleSubmit}
                >
                  <div className="my-2">
                    <label htmlFor="CategoryName" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Enter Recepient ID"
                    //   onChange={handleChangeInput}
                      name="CategoryName"
                    //   value={CategoryName}
                      className="form-control "
                    />
                  </div>
                  

                  <button class="btn bg-dark text-light my-3">Send</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default ExamInvite;
