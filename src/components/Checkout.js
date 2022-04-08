import React from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  const state = useSelector((state) => state.addItem);
  var orderTotal = 0;
  const itemList = (item) => {
    orderTotal = orderTotal + item.price;
    return (
      <li className="list-group-item d-flex justify-content-between lh-sm">
        <div>
          <h6 className="my-0">{item.title}</h6>
        </div>
        <span className="text-muted">${item.price}</span>
      </li>
    );
  };

  return (
    <>
      <div className="container my-5">
        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Your cart</span>
              <span className="badge bg-primary rounded-pill">
                {state.length}
              </span>
            </h4>
            <ul className="list-group mb-3">
              {state.map(itemList)}
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>${orderTotal}</strong>
              </li>
            </ul>

            <form
              className="card p-2"
              data-dashlane-rid="ddf9a5df0c4809ec"
              data-form-type="other"
            >
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Promo code"
                  data-dashlane-rid="c1b240ea56db929c"
                  data-form-type="other"
                />
                <button
                  type="submit"
                  className="btn btn-secondary"
                  data-dashlane-label="true"
                  data-dashlane-rid="136a819c08b876b7"
                  data-form-type="other"
                >
                  Redeem
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Billing address</h4>
            <form
              className="needs-validation"
              novalidate=""
              data-dashlane-rid="4583d2342eeec8bd"
              data-form-type="payment,register,step"
            >
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder=""
                    value=""
                    required=""
                    data-dashlane-rid="5037ca9c486433d4"
                    data-form-type="name,first"
                    data-kwimpalastatus="alive"
                    data-kwimpalaid="1649385591575-3"
                  />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>

                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder=""
                    value=""
                    required=""
                    data-dashlane-rid="840ae272edce4737"
                    data-form-type="name,last"
                    data-kwimpalastatus="alive"
                    data-kwimpalaid="1649385591575-4"
                  />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <div className="input-group has-validation">
                    <span className="input-group-text">@</span>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Username"
                      required=""
                      data-dashlane-rid="bdce0b5ec9a36645"
                      data-form-type="other"
                    />
                    <div className="invalid-feedback">
                      Your username is required.
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="email" className="form-label">
                    Email <span className="text-muted">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="you@example.com"
                    data-dashlane-rid="f9ab4c346e2cf159"
                    data-form-type="email"
                    data-kwimpalastatus="alive"
                    data-kwimpalaid="1649385591575-5"
                  />
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="1234 Main St"
                    required=""
                    data-dashlane-rid="17f02329762efd36"
                    data-form-type="address"
                    data-kwimpalastatus="alive"
                    data-kwimpalaid="1649385591575-6"
                  />
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="address2" className="form-label">
                    Address 2 <span className="text-muted">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address2"
                    placeholder="Apartment or suite"
                    data-dashlane-rid="109f51569c1d0b05"
                    data-form-type="address,extra"
                    data-kwimpalastatus="alive"
                    data-kwimpalaid="1649385591575-7"
                  />
                </div>

                <div className="col-md-5">
                  <label htmlFor="country" className="form-label">
                    Country
                  </label>
                  <select
                    className="form-select"
                    id="country"
                    required=""
                    data-dashlane-rid="d91f3d00034f0b76"
                    data-form-type="address,country"
                  >
                    <option value="">Choose...</option>
                    <option>United States</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>

                <div className="col-md-4">
                  <label htmlFor="state" className="form-label">
                    State
                  </label>
                  <select
                    className="form-select"
                    id="state"
                    required=""
                    data-dashlane-rid="ed6a594e7bf20b8b"
                    data-form-type="address,region"
                  >
                    <option value="">Choose...</option>
                    <option>California</option>
                  </select>
                  <div className="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>

                <div className="col-md-3">
                  <label htmlFor="zip" className="form-label">
                    Zip
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="zip"
                    placeholder=""
                    required=""
                    data-dashlane-rid="b872b9b7fa475e25"
                    data-form-type="address,zip"
                    data-kwimpalastatus="alive"
                    data-kwimpalaid="1649385591575-8"
                  />
                  <div className="invalid-feedback">Zip code required.</div>
                </div>
              </div>

              <hr className="my-4" />

              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="same-address"
                  data-dashlane-rid="17281bffb1417f9e"
                  data-form-type="other"
                />
                <label className="form-check-label" for="same-address">
                  Shipping address is the same as my billing address
                </label>
              </div>

              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="save-info"
                  data-dashlane-rid="0e0b3bd6255865e9"
                  data-form-type="other"
                />
                <label className="form-check-label" for="save-info">
                  Save this information for next time
                </label>
              </div>

              <hr className="my-4" />

              <h4 className="mb-3">Payment</h4>

              <div className="my-3">
                <div className="form-check">
                  <input
                    id="credit"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    checked=""
                    required=""
                    data-dashlane-rid="5b00205b3eeb0741"
                    data-form-type="payment,type"
                  />
                  <label className="form-check-label" for="credit">
                    Credit card
                  </label>
                </div>
                <div className="form-check">
                  <input
                    id="debit"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    required=""
                    data-dashlane-rid="9071c4eacc17fa34"
                    data-form-type="payment,type"
                  />
                  <label className="form-check-label" for="debit">
                    Debit card
                  </label>
                </div>
                <div className="form-check">
                  <input
                    id="paypal"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    required=""
                    data-dashlane-rid="61a5df26f143d831"
                    data-form-type="payment,type"
                  />
                  <label className="form-check-label" for="paypal">
                    PayPal
                  </label>
                </div>
              </div>

              <div className="row gy-3">
                <div className="col-md-6">
                  <label htmlFor="cc-name" className="form-label">
                    Name on card
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-name"
                    placeholder=""
                    required=""
                    data-dashlane-rid="80faf65e2067edc7"
                    data-form-type="name,credit_card,payment"
                    data-kwimpalastatus="alive"
                    data-kwimpalaid="1649385591575-9"
                  />
                  <small className="text-muted">
                    Full name as displayed on card
                  </small>
                  <div className="invalid-feedback">
                    Name on card is required
                  </div>
                </div>

                <div className="col-md-6">
                  <label htmlFor="cc-number" className="form-label">
                    Credit card number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-number"
                    placeholder=""
                    required=""
                    data-dashlane-rid="e842ecc4a5a254b3"
                    data-form-type="payment,number,credit_card"
                    data-kwimpalastatus="alive"
                    data-kwimpalaid="1649385591575-10"
                  />
                  <div className="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>

                <div className="col-md-3">
                  <label htmlFor="cc-expiration" className="form-label">
                    Expiration
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-expiration"
                    placeholder=""
                    required=""
                    data-dashlane-rid="671e2581d66bc12d"
                    data-form-type="date,expiration,credit_card,payment"
                    data-kwimpalastatus="alive"
                    data-kwimpalaid="1649385591575-11"
                  />
                  <div className="invalid-feedback">
                    Expiration date required
                  </div>
                </div>

                <div className="col-md-3">
                  <label htmlFor="cc-cvv" className="form-label">
                    CVV
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-cvv"
                    placeholder=""
                    required=""
                    data-dashlane-rid="b2b1a729aa358362"
                    data-form-type="payment,credit_card,cvv"
                    data-kwimpalastatus="alive"
                    data-kwimpalaid="1649385591575-12"
                  />
                  <div className="invalid-feedback">Security code required</div>
                </div>
              </div>

              <hr className="my-4" />

              <button
                className="w-100 btn btn-primary btn-lg"
                type="submit"
                data-dashlane-label="true"
                data-dashlane-rid="e009a067b72d4946"
                data-form-type="action,next"
              >
                Continue to checkout
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
