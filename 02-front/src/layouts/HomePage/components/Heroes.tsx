import {useOktaAuth} from "@okta/okta-react";
import {Link} from "react-router-dom";

export const Heros = () => {
  const {authState} = useOktaAuth();

  return (
    <div>
      <div className="d-none d-lg-block">
        <div className="row g-0 mt-5">
          <div className="col-sm-6 col-md-6">
            <div className="col-image-left"></div>
          </div>

          <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
            <div className="ml-2">
              <h1>What have you been reading?</h1>
              <p className="lead">
                The library team is excited to know what you've been reading!
                Whether you're learning a new skill or diving deeper into one,
                we're here to provide the best content just for you. Let's grow
                and learn together!
              </p>
              {authState?.isAuthenticated ? (
                <Link
                  type="button"
                  className="btn main-color btn-lg text-white"
                  to="/search"
                >
                  Explore top books{" "}
                </Link>
              ) : (
                <Link className="btn main-color btn-lg text-white" to="/login">
                  Sign Up
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="row g-0">
          <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
            <div className="ml-2">
              <h1>Our collection is always changing!</h1>
              <p className="lead">
                Check in regularly because our collection is always evolving!
                We're dedicated to providing the best book selection for our
                StockShelf students. We work tirelessly to ensure our books are
                current and top-notch. Your learning experience is our priority,
                and we are committed to bringing you the most accurate and
                valuable resources.
              </p>
            </div>
          </div>
          <div className="col-sm-6  col-md-6">
            <div className="col-image-right"></div>
          </div>
        </div>
      </div>

      {/* {Mobile Heros} */}
      <div className="d-lg-none">
        <div className="container">
          <div className="m-2">
            <div className="col-image-left"></div>
            <div className="mt-2">
              <h1>Our collection is always changing!</h1>
              <p className="lead">
                The library team is excited to know what you've been reading!
                Whether you're learning a new skill or diving deeper into one,
                we're here to provide the best content just for you. Let's grow
                and learn together!
              </p>
              {authState?.isAuthenticated ? (
                <Link
                  type="button"
                  className="btn main-color btn-lg text-white"
                  to="/search"
                >
                  Explore top books{" "}
                </Link>
              ) : (
                <Link className="btn main-color btn-lg text-white" to="/login">
                  Sign Up
                </Link>
              )}
            </div>
          </div>
          <div className="mt-2">
            <div className="col-image-right"></div>
            <div className="mt-2">
              <h1>Our collection is always changing!</h1>
              <p className="lead">
                Check in regularly because our collection is always evolving!
                We're dedicated to providing the best book selection for our
                StockShelf students. We work tirelessly to ensure our books are
                current and top-notch. Your learning experience is our priority,
                and we are committed to bringing you the most accurate and
                valuable resources.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
