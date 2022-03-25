// import React from 'react'
// import AppBarr from "./appbar"
// function Homepage() {
//   return (
//     <>
//     <AppBarr/>
//     </>
//   )
// }

// export default Homepage

import React from "react";
import logo from "./logo.png";
import "./homepage.css";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

export default function Homepage() {
  return (
    <div className="app">
      <nav
        class="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block"
        id="templatemo_nav_top"
      >
        <div class="container text-light">
          <div class="w-100 d-flex justify-content-between">
            <div>
              <i class="fa fa-envelope mx-2"></i>
              <a
                class="navbar-sm-brand text-light text-decoration-none"
                href="#"
              >
                info@databot.com
              </a>
              <i class="fa fa-phone mx-2"></i>
              <a
                class="navbar-sm-brand text-light text-decoration-none"
                href="#"
              >
                010-000-0000
              </a>
            </div>
            <div>
              <a class="text-light" href="#" target="_blank" rel="sponsored">
                <i class="fab fa-facebook-f fa-sm fa-fw me-2"></i>
              </a>
              <a class="text-light" href="#" target="_blank">
                <i class="fab fa-instagram fa-sm fa-fw me-2"></i>
              </a>
              <a class="text-light" href="#" target="_blank">
                <i class="fab fa-twitter fa-sm fa-fw me-2"></i>
              </a>
              <a class="text-light" href="#" target="_blank">
                <i class="fab fa-linkedin fa-sm fa-fw"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <nav class="navbar navbar-expand-lg navbar-light shadow">
        <div class="container d-flex justify-content-between align-items-center">
          <img src={logo} width="70px" />

          <button
            class="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#templatemo_main_nav"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between"
            id="templatemo_main_nav"
          >
            <div class="flex-fill">
              <ul class="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Shop
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div class="navbar align-self-center d-flex">
              <div class="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    id="inputMobileSearch"
                    placeholder="Search ..."
                  />
                  <div class="input-group-text">
                    <i class="fa fa-fw fa-search"></i>
                  </div>
                </div>
              </div>
              <a
                class="nav-icon d-none d-lg-inline"
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#templatemo_search"
              >
                <i class="fa fa-fw fa-search text-dark mr-2"></i>
              </a>
              <a
                class="nav-icon position-relative text-decoration-none"
                href="#"
              >
                <i class="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
                <span class="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
                  7
                </span>
              </a>
              <a
                class="nav-icon position-relative text-decoration-none"
                href="#"
              >
                <i class="fa fa-fw fa-user text-dark mr-3"></i>
                <span class="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
                  +99
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div
        class="modal fade bg-white"
        id="templatemo_search"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg" role="document">
          <div class="w-100 pt-1 mb-5 text-right">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form
            action=""
            method="get"
            class="modal-content modal-body border-0 p-0"
          >
            <div class="input-group mb-2">
              <input
                type="text"
                class="form-control"
                id="inputModalSearch"
                name="q"
                placeholder="Search ..."
              />
              <button
                type="submit"
                class="input-group-text bg-success text-light"
              >
                <i class="fa fa-fw fa-search text-white"></i>
              </button>
            </div>
          </form>
        </div>
      </div>

      <div
        id="template-mo-jassa-hero-carousel"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-bs-target="#template-mo-jassa-hero-carousel"
            data-bs-slide-to="0"
            class="active"
          ></li>
          <li
            data-bs-target="#template-mo-jassa-hero-carousel"
            data-bs-slide-to="1"
          ></li>
          <li
            data-bs-target="#template-mo-jassa-hero-carousel"
            data-bs-slide-to="2"
          ></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="img-fluid"
              src="https://www.sanasafinaz.com/media/wysiwyg/Kids-RTW-20220-March-Main-Banner.jpg"
              alt=""
            />
          </div>

          <div class="carousel-item">
            <img
              class="img-fluid"
              src="https://cdn.shopify.com/s/files/1/0490/2443/4341/files/1880_x720_websit3.jpg?v=1646207721"
              alt=""
            />
          </div>

          <div class="carousel-item">
            <img
              class="img-fluid"
              src="https://cdn.shopify.com/s/files/1/0268/9715/4090/files/website_banner_f4f1b095-0215-4a47-9a08-59709debeec3_1512x.jpg?v=1647329659"
              alt=""
            />
          </div>
        </div>
        <a
          class="carousel-control-prev text-decoration-none w-auto ps-3"
          href="#template-mo-jassa-hero-carousel"
          role="button"
          data-bs-slide="prev"
        >
          <i class="fas fa-chevron-left"></i>
        </a>
        <a
          class="carousel-control-next text-decoration-none w-auto pe-3"
          href="#template-mo-jassa-hero-carousel"
          role="button"
          data-bs-slide="next"
        >
          <i class="fas fa-chevron-right"></i>
        </a>
      </div>

      <section class="container py-5">
        <div class="row text-center pt-3">
          <div class="col-lg-6 m-auto">
            <h1 class="h1">Categories of The Month</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-4 p-5 mt-3">
            <a href="#">
              <img
                src="https://therichpost.com/wp-content/uploads/2021/05/category_img_01.jpg"
                class="rounded-circle img-fluid border"
              />
            </a>
            <h5 class="text-center mt-3 mb-3">Watches</h5>
            <p class="text-center">
              <a class="btn btn-success">Go Shop</a>
            </p>
          </div>
          <div class="col-12 col-md-4 p-5 mt-3">
            <a href="#">
              <img
                src="https://therichpost.com/wp-content/uploads/2021/05/category_img_02.jpg"
                class="rounded-circle img-fluid border"
              />
            </a>
            <h2 class="h5 text-center mt-3 mb-3">Shoes</h2>
            <p class="text-center">
              <a class="btn btn-success">Go Shop</a>
            </p>
          </div>
          <div class="col-12 col-md-4 p-5 mt-3">
            <a href="#">
              <img
                src="https://therichpost.com/wp-content/uploads/2021/05/category_img_03.jpg"
                class="rounded-circle img-fluid border"
              />
            </a>
            <h2 class="h5 text-center mt-3 mb-3">Accessories</h2>
            <p class="text-center">
              <a class="btn btn-success">Go Shop</a>
            </p>
          </div>
        </div>
      </section>

      <section class="bg-light">
        <div class="container py-5">
          <div class="row text-center py-3">
            <div class="col-lg-6 m-auto">
              <h1 class="h1">Featured Product</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-4 mb-4">
              <div class="card h-100">
                <a href="#">
                  <img
                    src="https://therichpost.com/wp-content/uploads/2021/05/feature_prod_01.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                </a>
                <div class="card-body">
                  <ul class="list-unstyled d-flex justify-content-between">
                    <li>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-muted fa fa-star"></i>
                      <i class="text-muted fa fa-star"></i>
                    </li>
                    <li class="text-muted text-right">$240.00</li>
                  </ul>
                  <a href="#" class="h2 text-decoration-none text-dark">
                    Lorem Ipsum
                  </a>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sunt in culpa qui officia deserunt.
                  </p>
                  <p class="text-muted">Reviews (24)</p>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-4 mb-4">
              <div class="card h-100">
                <a href="#">
                  <img
                    src="https://therichpost.com/wp-content/uploads/2021/05/feature_prod_02.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                </a>
                <div class="card-body">
                  <ul class="list-unstyled d-flex justify-content-between">
                    <li>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-muted fa fa-star"></i>
                      <i class="text-muted fa fa-star"></i>
                    </li>
                    <li class="text-muted text-right">$480.00</li>
                  </ul>
                  <a href="#" class="h2 text-decoration-none text-dark">
                    Lorem Ipsum
                  </a>
                  <p class="card-text">
                    Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum
                  </p>
                  <p class="text-muted">Reviews (48)</p>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-4 mb-4">
              <div class="card h-100">
                <a href="#">
                  <img
                    src="https://therichpost.com/wp-content/uploads/2021/05/feature_prod_03.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                </a>
                <div class="card-body">
                  <ul class="list-unstyled d-flex justify-content-between">
                    <li>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-warning fa fa-star"></i>
                    </li>
                    <li class="text-muted text-right">$360.00</li>
                  </ul>
                  <a href="#" class="h2 text-decoration-none text-dark">
                    Lorem Ipsum
                  </a>
                  <p class="card-text">
                    Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum
                    Lorem Ipsum.
                  </p>
                  <p class="text-muted">Reviews (74)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer class="bg-dark" id="tempaltemo_footer">
        <div class="container">
          <div class="row">
            <div class="col-md-4 pt-5">
              <h2
                style={{ color: "#073E68" }}
                class="h2  border-bottom pb-3 border-light logo"
              >
                Jassa Shop
              </h2>
              <ul class="list-unstyled text-light footer-link-list">
                <li>
                  <i class="fas fa-map-marker-alt fa-fw"></i>
                  India
                </li>
                <li>
                  <i class="fa fa-phone fa-fw"></i>
                  <a class="text-decoration-none" href="#">
                    000-000-0000
                  </a>
                </li>
                <li>
                  <i class="fa fa-envelope fa-fw"></i>
                  <a class="text-decoration-none" href="#">
                    info@company.com
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-md-4 pt-5">
              <h2 class="h2 text-light border-bottom pb-3 border-light">
                Products
              </h2>
              <ul class="list-unstyled text-light footer-link-list">
                <li>
                  <a class="text-decoration-none" href="#">
                    Luxury
                  </a>
                </li>
                <li>
                  <a class="text-decoration-none" href="#">
                    Sport Wear
                  </a>
                </li>
                <li>
                  <a class="text-decoration-none" href="#">
                    Men's Shoes
                  </a>
                </li>
                <li>
                  <a class="text-decoration-none" href="#">
                    Women's Shoes
                  </a>
                </li>
                <li>
                  <a class="text-decoration-none" href="#">
                    Popular Dress
                  </a>
                </li>
                <li>
                  <a class="text-decoration-none" href="#">
                    Gym Accessories
                  </a>
                </li>
                <li>
                  <a class="text-decoration-none" href="#">
                    Sport Shoes
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-md-4 pt-5">
              <h2 class="h2 text-light border-bottom pb-3 border-light">
                Further Info
              </h2>
              <ul class="list-unstyled text-light footer-link-list">
                <li>
                  <a class="text-decoration-none" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a class="text-decoration-none" href="#">
                    About Us
                  </a>
                </li>
                <li>
                  <a class="text-decoration-none" href="#">
                    Shop Locations
                  </a>
                </li>
                <li>
                  <a class="text-decoration-none" href="#">
                    FAQs
                  </a>
                </li>
                <li>
                  <a class="text-decoration-none" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="row text-light mb-4">
            <div class="col-12 mb-3">
              <div class="w-100 my-3 border-top border-light"></div>
            </div>
            <div class="col-auto me-auto">
              <ul class="list-inline text-left footer-icons">
                <li class="list-inline-item border border-light rounded-circle text-center">
                  <a
                    class="text-light text-decoration-none"
                    target="_blank"
                    href="#"
                  >
                    <i class="fab fa-facebook-f fa-lg fa-fw"></i>
                  </a>
                </li>
                <li class="list-inline-item border border-light rounded-circle text-center">
                  <a
                    class="text-light text-decoration-none"
                    target="_blank"
                    href="#"
                  >
                    <i class="fab fa-instagram fa-lg fa-fw"></i>
                  </a>
                </li>
                <li class="list-inline-item border border-light rounded-circle text-center">
                  <a
                    class="text-light text-decoration-none"
                    target="_blank"
                    href="#"
                  >
                    <i class="fab fa-twitter fa-lg fa-fw"></i>
                  </a>
                </li>
                <li class="list-inline-item border border-light rounded-circle text-center">
                  <a
                    class="text-light text-decoration-none"
                    target="_blank"
                    href="#"
                  >
                    <i class="fab fa-linkedin fa-lg fa-fw"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-auto">
              <label class="sr-only" for="subscribeEmail">
                Email address
              </label>
              <div class="input-group mb-2">
                <input
                  type="text"
                  class="form-control bg-dark border-light"
                  id="subscribeEmail"
                  placeholder="Email address"
                />
                <div class="input-group-text btn-success text-light">
                  Subscribe
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-100 bg-black py-3">
          <div class="container">
            <div class="row pt-2">
              <div class="col-12">
                <p class="text-left text-light">
                  Copyright &copy; 2021 Company Name | Designed by{" "}
                  <a rel="sponsored" href="#" target="_blank">
                    Jassa
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
