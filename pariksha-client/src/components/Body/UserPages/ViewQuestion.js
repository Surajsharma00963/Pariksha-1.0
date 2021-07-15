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
          <div key={e.id} className="my-2">
            <h4>
              {e.id}
              {e.QuestionName}
            </h4>

            <div className="row gap-4">
              <div className="col">
                <h4>A. {e.options.option1}</h4>
              </div>
              <div className="col">
                <h4>B. {e.options.option2}</h4>
              </div>
            </div>
            <div className="row gap-4 mt-4">
              <div className="col">
                <h4>C. {e.options.option3}</h4>
              </div>
              <div className="col">
                <h4>D. {e.options.option4}</h4>
              </div>
            </div>
            <div>
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
