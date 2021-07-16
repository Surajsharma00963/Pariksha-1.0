import axios from "axios";
import React, { useEffect, useState } from "react";
import {  useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import UserNavbar from "../../SideNavbar/UserNavbar";
import {
  showErrMsg,
  showSuccessMsg,
} from "../../utils/Notification/Notification";

function AddQuestion() {
  const initialState = {
    QuestionName: "",
    options: { option1: "", option2: "", option3: "", option4: "" },
    rightoption: "",
    marks: "",
    err: "",
    success: "",
  };
  const { id } = useParams();
  const history = useHistory();

  const [question, setQuestion] = useState(initialState);

  const token = useSelector((state) => state.token);
  const exams = useSelector((state) => state.exam);

  const {
    QuestionName,
    option1,
    option2,
    option3,
    option4,
    rightoption,
    marks,
    err,
    success,
  } = question;

    // const dispatch = useDispatch();

    // useEffect(() => {
    //   fetchExam(token).then((res) => {
    //     dispatch(dispatchGetExam(res));
    //   });
    // }, [token, dispatch]);

  useEffect(() => {
    if (exams.length !== 0) {
      exams.forEach((user) => {
        if (user._id === id) {
          setQuestion(user);
        }
      });
    }
    // else {
    //   history.push("/Dashboard");
    // }
  }, [exams, id, history]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setQuestion({ ...question, [name]: value, err: "", success: "" });
  };
  const options = {option1,
    option2,
    option3,
    option4}
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        
      const res = await axios.patch(
        `/user/exam/AddQuestion/${question._id}`,
        {
          QuestionName,
          options,
          rightoption,
          marks,
        },
        {
          headers: { Authorisation: token },
        }
      );
      
      setQuestion({ ...question, err: "", success: res.data.msg });
      window.location.reload();
    } catch (err) {
      setQuestion({ ...question, err: err.response.data.msg, success: "" });
    }
  };

  return (
    <div>
      <UserNavbar />
      <div className="container-fluid text-center bg-black text-light py-3 border-top border-3 border-info shadow-lg">
        <h1>Add Question</h1>
      </div>

      <div className="container">
        <div className="col-xl-6 col-12 mx-auto  rounded my-5 shadow-lg">
          <div>
            {err && showErrMsg(err)}
            {success && showSuccessMsg(success)}
          </div>
          <form className="mx-5 py-3" onSubmit={handleSubmit}>
            <div className="my-2">
              <label htmlFor="CategoryName" className="form-label">
                Question Title and Description
              </label>
              <textarea
                type="text"
                placeholder="Enter Question and its Description"
                onChange={handleChangeInput}
                name="QuestionName"
                value={QuestionName}
                className="form-control "
              ></textarea>
            </div>
            <div className="my-2">
              <div className="row gap-3">
                <div className="my-2 col">
                  <label htmlFor="ExamCode" className="form-label">
                    Option 1
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Option 1"
                    onChange={handleChangeInput}
                    name="option1"
                    value={option1}
                    className="form-control "
                  />
                </div>
                <div className="my-2 col">
                  <label htmlFor="ExamCode" className="form-label">
                    Option 2
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Option 2"
                    onChange={handleChangeInput}
                    name="option2"
                    value={option2}
                    className="form-control "
                  />
                </div>
              </div>
              <div className="row gap-3">
                <div className="my-2 col">
                  <label htmlFor="ExamCode" className="form-label">
                    Option 3{" "}
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Option 3"
                    onChange={handleChangeInput}
                    name="option3"
                    value={option3}
                    className="form-control "
                  />
                </div>
                <div className="my-2 col">
                  <label htmlFor="ExamCode" className="form-label">
                    Option 4{" "}
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Option 4"
                    onChange={handleChangeInput}
                    name="option4"
                    value={option4}
                    className="form-control "
                  />
                </div>
              </div>
              <div>
                <div className="my-2 col">
                  <label htmlFor="ExamCode" className="form-label">
                    Correct Option{" "}
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Correct Option"
                    onChange={handleChangeInput}
                    name="rightoption"
                    value={rightoption}
                    className="form-control "
                  />
                </div>
                <div className="my-2 col">
                  <label htmlFor="ExamCode" className="form-label">
                    Marks{" "}
                  </label>
                  <input
                    type="text"
                    placeholder="Enter the Marks"
                    onChange={handleChangeInput}
                    name="marks"
                    value={marks}
                    className="form-control "
                  />
                </div>
              </div>
              <button class="btn bg-dark text-light my-3">Add</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddQuestion;
