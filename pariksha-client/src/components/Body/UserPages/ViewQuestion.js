import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { dispatchGetExam, fetchExam } from "../../../redux/action/ExamActions";

import {
  dispatchQuestion,
  fetchQuestion,
} from "../../../redux/action/QuestionAction";
import UserNavbar from "../../SideNavbar/UserNavbar";

function ViewQuestions() {
  const { id } = useParams();
  const token = useSelector((state) => state.token);
  const exam = useSelector((state) => state.exam);
  const questions = useSelector((state) => state.question);
  const dispatch = useDispatch();
  const [Question, setQuestion] = useState([]);

  useEffect(() => {
    fetchQuestion(token, id).then((res) => {
      dispatch(dispatchQuestion(res));
    });
    fetchExam(token).then((res) => {
      dispatch(dispatchGetExam(res));
    });
  }, [token, dispatch, id]);

  useEffect(() => {
    if (exam.length !== 0) {
      exam.forEach((user) => {
        if (user._id === id) {
          setQuestion(user);
        }
      });
    }
    // else {
    //   history.push("/Dashboard");
    // }
  }, [exam, id]);
  console.log(id);
  console.log(Question._id);

  return (
    <div>
      <UserNavbar />
      <div className="container-fluid text-center bg-black text-light py-3 border-top border-3 border-info">
        <h1>Questions</h1>
      </div>

      <div className="container ">
        <h3 className="my-4">Exam Title: {Question.ExamTitle}</h3>
      </div>
      <div className="container">
        {questions.map((e) => (
          <div key={e.id} className="my-5 shadow-lg px-4 py-4">
            <div className="d-flex flex-row mb-1">
              <h4>{e.QuestionName}</h4>
            </div>
            <hr className="border-2"></hr>

            <div className="row gap-2">
              
              <div className="col">
                <h4>A. {e.options.option1}</h4>
              </div>
              <div className="col">
                <h4>B. {e.options.option2}</h4>
              </div>
            </div>
            <div className="row gap-2 mt-2">
              <div className="col">
                <h4>C. {e.options.option3}</h4>
              </div>
              <div className="col">
                <h4>D. {e.options.option4}</h4>
              </div>
            </div>
            <div className="mt-3">
              <h4>Correct Option: {e.rightoption}</h4>
            </div>
            <h4>Marks: {e.marks}</h4>
            <hr className="border-2"></hr>
          </div>
        ))}
      </div>

      <div></div>
      <div></div>
    </div>
  );
}
export default ViewQuestions;
