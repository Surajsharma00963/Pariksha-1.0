import React, { Fragment, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import Home from "./components/Body/Home";
import About from "./components/Body/About";
import Register from "./components/Body/Register";
import Login from "./components/Body/Login";
import Dashboard from "./components/Body/UserPages/DashBoard";
import Activation from "./components/Body/Activation";
import axios from "axios";
import { dispatchLogin,fetchuUser,dispatchGetUser } from "./redux/action/authActions";
import Category from "./components/Body/UserPages/Category";
import Exam from "./components/Body/UserPages/Exams";
import AddQuestion from "./components/Body/UserPages/AddQuestions"
import ViewQuestions  from "./components/Body/UserPages/ViewQuestion";
import ForgotPassword from "./components/Body/ForgotPassword";
import ResetPassword from "./components/Body/ResetPassword";
import ExamInvite from "./components/Body/UserPages/ExamInvite";
import CandidateList from "./components/Body/UserPages/CandidateList";

function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    const firstLogin = localStorage.getItem('firstLogin')
    if(firstLogin){
      const getToken = async()=>{
        const res = await axios.post('/user/refresh_token',null)
        dispatch({type: 'GET_TOKEN', payload: res.data.access_token})

      }
      getToken()
    }
  
  }, [auth.isLogged,dispatch]);

  useEffect(()=>{
    if(token){
      const getUser = ()=>{
        dispatch(dispatchLogin())
        return fetchuUser(token).then(res =>{
          dispatch(dispatchGetUser(res))
        })
      }
      getUser()
    }
  },[token,dispatch])
  
  return (
    <div>
      <Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Register" component={Register} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/Category" component={Category} />
            <Route exact path="/Exam" component={Exam} />
            <Route exact path="/Addquestion/:id" component={AddQuestion} />
            <Route exact path="/ViewQuestions/:id" component={ViewQuestions} />
            <Route exact path="/forgot-password" component={ForgotPassword} />
            <Route exact path="/resetPassword/:token" component={ResetPassword} />
            <Route exact path="/ExamInvite" component={ExamInvite} />
            <Route exact path="/Candidates" component={CandidateList} />




            


            <Route
              exact
              path="/Activation/:activation_token"
              component={Activation}
            />
          </Switch>
        </BrowserRouter>
      </Fragment>
    </div>
  );
}

export default App;
