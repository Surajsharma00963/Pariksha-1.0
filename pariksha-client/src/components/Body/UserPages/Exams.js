import React, { useEffect, useState } from "react";
import UserNav from "../../SideNavbar/UserNavbar";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { fetchExam, dispatchGetExam } from "../../../redux/action/ExamActions";
import {
  dispatchCategory,
  fetchCategory,
} from "../../../redux/action/CategoryAction";
import {
  showErrMsg,
  showSuccessMsg,
} from "../../utils/Notification/Notification";
import axios from "axios";

function Exam() {
  const initialState = {
    ExamTitle: "",
    ExamDescription: "",
    ExamDate: "",
    ExamCode: "",
    CategoryName: "",
    err: "",
    success: "",
  };
  const token = useSelector((state) => state.token);
  const exam = useSelector((state) => state.exam);
  const categories = useSelector((state) => state.category);

  const [addExam, setaddExam] = useState(initialState);
  const {
    ExamTitle,
    ExamDescription,
    ExamDate,
    ExamCode,
    CategoryName,
    err,
    success,
  } = addExam;

  const dispatch = useDispatch();

  useEffect(() => {
    fetchExam(token).then((res) => {
      dispatch(dispatchGetExam(res));
    });
    fetchCategory(token).then((res) => {
      dispatch(dispatchCategory(res));
    });
  }, [token, dispatch]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setaddExam({ ...addExam, [name]: value, err: "", success: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "/user/exam/AddExam",
        {
          ExamTitle,
          ExamDescription,
          ExamDate,
          ExamCode,
          CategoryName,
        },
        {
          headers: { Authorisation: token },
        }
      );
      setaddExam({ ...addExam, err: "", success: res.data.msg });
      window.location.reload();
    } catch (err) {
      setaddExam({ ...addExam, err: err.response.data.msg, success: "" });
    }
  };

  return (
    <>
      <UserNav />
      <div className="container-fluid text-center bg-black text-light py-3 border-top border-3 border-info">
        <h1 className="text-center ">Exams</h1>
      </div>

      <div className="container my-3">
        <div className="text-end">
          <button
            type="button"
            class="btn bg-black text-light"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Add Exam
          </button>
        </div>

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h3 class="modal-title" id="exampleModalLabel">
                  Add Exam
                </h3>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div>
                  {err && showErrMsg(err)}
                  {success && showSuccessMsg(success)}
                </div>

                <form
                  className="form-control w-auto  mx-auto"
                  onSubmit={handleSubmit}
                >
                  <div className="my-2">
                    <label htmlFor="ExamTitle" className="form-label">
                      Exam Title
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Exam Title"
                      onChange={handleChangeInput}
                      name="ExamTitle"
                      value={ExamTitle}
                      className="form-control "
                    />
                  </div>
                  <div className="my-2">
                    <label
                      htmlFor="ExamDescription"
                      className="form-label text-start"
                    >
                      Exam Description
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Exam Description"
                      onChange={handleChangeInput}
                      name="ExamDescription"
                      value={ExamDescription}
                      className="form-control "
                    />
                  </div>
                  <div className="my-2">
                    <label htmlFor="ExamDate" className="form-label">
                      Select Date
                    </label>
                    <input
                      type="Date"
                      placeholder="Select Date"
                      onChange={handleChangeInput}
                      name="ExamDate"
                      value={ExamDate}
                      className="form-control"
                    />
                  </div>
                  <div className="my-2">
                    <label htmlFor="ExamCode" className="form-label">
                      Exam Code
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Exam Code"
                      onChange={handleChangeInput}
                      name="ExamCode"
                      value={ExamCode}
                      className="form-control "
                    />
                  </div>
                  <div className="my-2">
                    <label htmlFor="CategoryName" className="form-label">
                      Select Category
                    </label>
                    <select
                      class="form-select"
                      name="CategoryName"
                      onChange={handleChangeInput}
                      select={CategoryName}
                    >
                      <option selected>Select a Category</option>
                      {categories.map((e) => (
                        <option key={e._id} value={e.CategoryName}>
                          {e.CategoryName}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button class="btn bg-dark text-light my-3">Add</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className=" col-12 mx-auto">
          <h1>List of Exams</h1>
          <table class="table table-bordered border-dark">
            <thead>
              <tr className="table-dark text-center ">
                <th scope="col">Exam Title</th>

                <th scope="col">Description</th>
                <th scope="col">Category</th>
                <th scope="col">ExamDate</th>
                <th scope="col">View Questions</th>
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
                  <td className="pt-3 fw-bold px-3">{e.ExamDate}</td>
                  <td className="pt-3 fw-bold px-3 text-center">
                    <button className="btn p-0">
                    <Link to={`/ViewQuestions/${e._id}`}>
                      <FaIcons.FaEye size="22px" />
                      </Link>
                    </button>
                  </td>
                  <td className="py-2 fw-bold px-3 text-center">
                    <button className="btn bg-info" >
                        <Link to={`/Addquestion/${e._id}`}>
                        <AiIcons.AiOutlineAppstoreAdd size="22px" color="white" />
                        </Link>
                      
                    </button>
                  </td>
                  <td className="py-2 fw-bold px-3 text-center">
                    <button className="btn bg-danger">
                      <AiIcons.AiOutlineDelete size="22px" color="white" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Exam;
