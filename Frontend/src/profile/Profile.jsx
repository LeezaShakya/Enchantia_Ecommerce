import React, { useState } from "react";
import { toast } from "react-toastify";
import { updateprofileApi } from "../apis/Api";
import avatar from "../assets/images/avatar.jpg";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [fname, setFname] = useState(user.fname);
  const [lname, setLname] = useState(user.lname);
  const [profileImage, setProfileImage] = useState("");

  const handleImageUpload = (event) => {
    setProfileImage(event.target.files[0]);
  };
  const userString = localStorage.getItem("user");
  let users;

  if (userString) {
    try {
      users = JSON.parse(userString);
    } catch (error) {
      console.error("Error parsing user JSON:", error);
    }
  }

  console.log(users);

  const handlesubmit = (e) => {
    e.preventDefault();

    try {
      updateprofileApi({
        fname: fname,
        lname: lname,
        image: profileImage,
      })
        .then((res) => {
          toast.success("User registered successfully");
        })
        .catch((err) => {
          console.log(err);
          toast.error("User registration failed");
        });
    } catch (error) {
      toast.error("Profile update failed");
    }
  };

  return (
    <div className="container-fluid container-padding mt-5 main-body list-page">
      {users ? (
        <div className="profile">
          <div className="row justify-content-evenly">
            <div className="col-md-4">
              <div className="card text-center">
                <div className="m-4 pt-3">
                  <img src={avatar} alt="" className="rounded-circle" />{" "}
                  <br /> <br />
                  <h2>
                    Welcome, {user.fname} {user.lname}
                  </h2>
                </div>
                <hr />
                <div className="pt-2 pb-3">
                  <h6>
                    Name: {user.fname} {user.lname}
                  </h6>
                  <h6>Email: {user.email}</h6>
                </div>
              </div>
              <div className="text-center mt-2">
                <button
                  type="button"
                  className="btn btn-about"
                  data-mdb-toggle="modal"
                  data-mdb-target="#exampleModal"
                >
                  Edit profile <i className="fas fa-user-edit"></i>
                </button>
              </div>

              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Edit Profile
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-mdb-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <form action="">
                        <label htmlFor="fname">First name</label>
                        <input
                          value={fname}
                          onChange={(e) => setFname(e.target.value)}
                          type="text"
                          name="fname"
                          id="fname"
                          className="form-control form-input"
                        />

                        <label htmlFor="lname">Last name</label>
                        <input
                          value={lname}
                          onChange={(e) => setLname(e.target.value)}
                          type="text"
                          name="lname"
                          id="lname"
                          className="form-control form-input"
                        />

                        <label htmlFor="profile">Profile</label>
                        <input
                          type="file"
                          onChange={handleImageUpload}
                          className="form-control"
                        />
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary text-dark py-3 rounded-0"
                        data-mdb-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" class="btn btn-about" onClick={handlesubmit}>
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="category-section mt-5 p-3 primary-heading">
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <div className="card p-3 mb-2">
                    <h4 className="para">Purchased Item</h4>
                    <div className="dividor"></div>
                    <h6 className="text-secondary">20</h6>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card p-3 mb-2">
                    <h4 className="para">Browsed Item</h4>
                    <div className="dividor"></div>
                    <h6 className="text-secondary">508</h6>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card p-3 mb-2">
                    <h4 className="para">Loved</h4>
                    <div className="dividor"></div>
                    <h6 className="text-secondary">362</h6>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card p-3 mb-2">
                    <h4 className="para">Reviewed</h4>
                    <div className="dividor"></div>
                    <h6 className="text-secondary">15</h6>
                  </div>
                </div>
                <div className="col-md-9"></div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Profile;
