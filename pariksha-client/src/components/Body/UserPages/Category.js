import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  dispatchCategory,
  fetchCategory,
} from "../../../redux/action/CategoryAction";
import UserNav from "../../SideNavbar/UserNavbar";
import * as AiIcons from "react-icons/ai";
import {
  showErrMsg,
  showSuccessMsg,
} from "../../utils/Notification/Notification";
import { isEmpty } from "../../utils/Validation/Validation";

function Category() {
  const auth = useSelector((state) => state.auth);
  const token = useSelector((state) => state.token);
  const categories = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchCategory(token).then((res) => {
      dispatch(dispatchCategory(res));
    });
  }, [token, dispatch]);

  const initialState = {
    CategoryName: "",
    err: "",
    success: "",
  };
  const [category, setCategory] = useState(initialState);


  const { CategoryName, err, success } = category;

  const firstToken = useSelector((state) => state.token);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setCategory({ ...category, [name]: value, err: "", success: "" });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEmpty(CategoryName))
      return setCategory({
        ...user,
        err: "Please fill Category Name.",
        success: "",
      });
    try {
      const res = await axios.post(
        "/user/category/AddCategory",
        {
          CategoryName,
        },
        {
          headers: { Authorisation: firstToken },
        }
      );
      setCategory({ ...category, err: "", success: res.data.msg });
      window.location.reload();
    } catch (err) {
      err.response.data.msg &&
        setCategory({ ...category, err: err.response.data.msg, success: "" });
    }
  };
  const handleDelete = async (id) => {
    try {
        if(categories._id !== id){
            if(window.confirm("Are you sure you want to delete this account?")){
                await axios.delete(`/user/category/Delete/${id}`, {
                    headers: {Authorisation: firstToken}
                })
            }
            window.location.reload();

        }
        
    } catch (err) {
        setCategory({...category, err: err.response.data.msg , success: ''})
    }
}

  const { user } = auth;
  return (
    <>
      <UserNav />
      <div className="container-fluid text-center bg-black text-light py-3 border-top border-3 border-info">
        <h1>Category</h1>
      </div>
      <div className="container  my-3">
        <div className="text-end">
          <button
            type="button"
            class="btn bg-black text-light"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Add Category
          </button>
        </div>

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
                  Add Category
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
                  {err && showErrMsg(err)}
                  {success && showSuccessMsg(success)}
                </div>

                <form
                  className="form-control w-auto  mx-auto my-3"
                  onSubmit={handleSubmit}
                >
                  <div className="my-2">
                    <label htmlFor="CategoryName" className="form-label">
                      Category Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Category Name"
                      onChange={handleChangeInput}
                      name="CategoryName"
                      value={CategoryName}
                      className="form-control "
                    />
                  </div>
                  

                  <button class="btn bg-dark text-light my-3">Add</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="col-xl-6 col-12 mx-auto">
          <h1>Category List</h1>
          <table class="table mx-auto table-bordered border-dark">
            <thead>
              <tr className="table-dark text-center">
                <th scope="col">Category Name</th>
                <th scope="col">User Name</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((e) => (
                <tr key={e.id}>
                  <td className="py-2 fw-bold px-3">{e.CategoryName}</td>
                  <td className="py-2 fw-bold px-3">{e.userName}</td>

                  <td className="py-2 fw-bold px-3 text-center">
                    <button className="btn bg-danger" onClick={() => handleDelete(e._id)}>
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

export default Category;
