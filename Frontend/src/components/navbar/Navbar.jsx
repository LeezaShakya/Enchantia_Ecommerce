import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png"
import black from "../../assets/images/black.png"

const Navbar = () => {
  const handleReload = () => {
    window.location.reload();
  };
  const navigate = useNavigate();

  // Get user from local storage
  const userString = localStorage.getItem("user");
  let user;

  if (userString) {
    try {
      user = JSON.parse(userString);
    } catch (error) {
      console.error("Error parsing user JSON:", error);
    }
  }

  console.log(user);

  // //  get user from local storage
  // const user = JSON.parse(localStorage.getItem("user"));
  // console.log(user)

  // logout function
  const logout = () => {
    localStorage.clear()
    navigate("/login")
  }

  const logoutandreload = () => {
    logout();
    window.location.reload();
  }

  //get cart value form reducer
  const { cart } = useSelector((state) => ({
    cart: state.cart.cart

  }))
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }


  return (
    <>


      <nav id="myNavbar" class="navbar navbar-expand-lg navbar-light fixed-top scrolling-navbar  top-nav-collapse p-0" >

        <div class="container">

          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>


          <div class="collapse navbar-collapse" id="navbarSupportedContent">

            <Link class="navbar-brand mt-2 mt-lg-0" to={'/'}>
              <img
                src={black}
                height="60px"
                width="120px"
                alt="MDB Logo"
                loading="lazy"
              />
            </Link>

            <ul class="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center  ms-auto">
              <li class="nav-item">
                <Link class="nav-link" to={'/ '}>Home</Link>
              </li>
              <li class="nav-item">
                <div className="dropdown">
                  <Link class="nav-link dropdown-toggle hidden-arrow"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false">Shop</Link>
                  <ul
                    class="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <Link className="dropdown-item text-dark" to={'/bracelet'}>Bracelet</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-dark" to={'/ring'}>Ring</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-dark" to={'/earing'}>Earing</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-dark" to={'/necklace'}>Necklace</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={'/About'} onClick={scrollToTop}>About</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={'/'}>Blog</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={'/Contact'}>Contact</Link>

              </li>
            </ul>

          </div>



          <div class="d-flex align-items-center">

            <Link to={'/cart'} className="m-2 link-nav">
              <i class="fa-solid fa-cart-shopping"></i>
              <span className="badge rounded-pill badge-notification bg-danger">{cart.length}</span>
            </Link>


            <div class="dropdown">
              <Link
                class="link-nav me-3 dropdown-toggle hidden-arrow"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fa-solid fa-heart"></i>
                {/* <span class="badge rounded-pill badge-notification bg-danger">1</span> */}
              </Link>
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link class="dropdown-item" href="#">Some news</Link>
                </li>
                <li>
                  <Link class="dropdown-item" href="#">Another news</Link>
                </li>
                <li>
                  <Link class="dropdown-item" href="#">Something else here</Link>
                </li>
              </ul>
            </div>

            {/* avatar icon  */}
            {
              user ? (
                <div class="dropdown">
                  <Link
                    class="dropdown-toggle d-flex align-items-center hidden-arrow"
                    href="#"
                    id="navbarDropdownMenuAvatar"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"

                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                      class="rounded-circle"
                      height="25"
                      alt="Black and White Portrait of a Man"
                      loading="lazy"
                    />
                    {/* {user.fname} */}
                  </Link>
                  <ul
                    class="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdownMenuAvatar"
                  >
                    {
                      user.isAdmin ? (
                        <>
                          <li><Link to={'/admin-dashboard'} class="dropdown-item">Admin Dashboard</Link></li>
                          <li><Link to={'/admin/orders'} class="dropdown-item">Admin Orders</Link></li>
                          <li><Link class="dropdown-item" onClick={logoutandreload} >Logout</Link></li>
                        </>
                      ) : (
                        <>
                          <li><Link to={'/profile'} class="dropdown-item">Profile</Link></li>
                          <li><Link to={'/orders'} class="dropdown-item">My Orders</Link></li>
                          <li><Link class="dropdown-item" onClick={logoutandreload}>Logout</Link></li>
                        </>
                      )
                    }
                  </ul>
                </div>
              ) : (
                <div class="dropdown">
                  <Link
                    class="dropdown-toggle d-flex align-items-center hidden-arrow"
                    href="#"
                    id="navbarDropdownMenuAvatar"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                      class="rounded-circle"
                      height="25"
                      alt="Black and White Portrait of a Man"
                      loading="lazy"
                    />
                    {/* {user.fname} */}
                  </Link>
                  <>
                    <ul
                      class="dropdown-menu dropdown-menu-end"
                      aria-labelledby="navbarDropdownMenuAvatar"
                    >
                      <li>
                        <Link class="dropdown-item" to={'/register'}>Register</Link>
                      </li>
                      <li>

                        <Link class="dropdown-item" to={'/login'} onClick={handleReload}>Login</Link>
                      </li>
                    </ul>
                  </>
                </div>
              )
            }


            {/* <div class="dropdown">
              <Link
                class="dropdown-toggle d-flex align-items-center hidden-arrow"
                href="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  class="rounded-circle"
                  height="25"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </Link>
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <Link class="dropdown-item" to={'/register'}>Register</Link>
                </li>
                <li>
                  <Link class="dropdown-item" to={'/login'}>Login</Link>
                </li>
              </ul>
            </div> */}
          </div>

        </div>

      </nav>

    </>
  );
};

export default Navbar;
