import React from "react";
import "./Cart.css";

const Cart = () => {
  return (
    <>
      <section
        class="vh-100"
        style={{
          backgroundColor: "#FEFF86",
          borderTop: "1px solid brown",
          borderRadius: "5px"
        }}
      >
        <h3 class="h2" style={{textAlign: "center", paddingTop: "2rem"}}>Shopping Cart </h3>
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center">
            <div class="col">
              <p>
                <span class="h4">(1 item in your cart)</span>
              </p>

              <div class="card mb-4">
                <div class="card-body p-4">
                  <div class="row align-items-center">
                    <div class="col-md-2">
                      <img
                        src="https://m.media-amazon.com/images/I/71wfskw--xL._AC_UL960_QL65_.jpg"
                        className="img-fluid"
                        alt="Generic placeholder"
                      />
                    </div>
                    <div class="col-md-2 d-flex justify-content-center">
                      <div>
                        <p class="small text-muted mb-4 pb-2">Name</p>
                        <p class="lead fw-normal mb-0">Pet Clothing</p>
                      </div>
                    </div>
                    <div class="col-md-2 d-flex justify-content-center">
                      <div>
                        <p class="small text-muted mb-4 pb-2">Color</p>
                        <p class="lead fw-normal mb-0">
                          <i
                            class="fas fa-circle me-2"
                            style={{ color: "brown" }}
                          ></i>
                          Brown
                        </p>
                      </div>
                    </div>
                    <div class="col-md-2 d-flex justify-content-center">
                      <div>
                        <p class="small text-muted mb-4 pb-2">Quantity</p>
                        <p class="lead fw-normal mb-0">1</p>
                      </div>
                    </div>
                    <div class="col-md-2 d-flex justify-content-center">
                      <div>
                        <p class="small text-muted mb-4 pb-2">Price</p>
                        <p class="lead fw-normal mb-0">$799</p>
                      </div>
                    </div>
                    <div class="col-md-2 d-flex justify-content-center">
                      <div>
                        <p class="small text-muted mb-4 pb-2">Total</p>
                        <p class="lead fw-normal mb-0">$799</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card mb-5">
                <div class="card-body p-4">
                  <div class="float-end">
                    <p class="mb-0 me-5 d-flex align-items-center">
                      <span class="small text-muted me-2">Order total:</span>{" "}
                      <span class="lead fw-normal">$799</span>
                    </p>
                  </div>
                </div>
              </div>

              <div class="d-flex justify-content-end">
                <button type="button" class="btn btn-outline-dark btn-lg me-2">
                  Continue shopping
                </button>
                <button type="button" class="btn btn-warning btn-lg">
                  Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
