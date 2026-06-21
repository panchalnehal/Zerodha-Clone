import React from "react";
function Universe() {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="text-center mb-3">
          <h3>The Zerodha Universe</h3>
          <p className="text-muted">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="media/images/smallcaseLogo.png"></img>
          <div className="mb-5">
          <p>
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
          </div>
          <img src="media/images/sensibullLogo.svg"></img>
          <p>
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="media/images/goldenpiLogo.png"></img>
          <div className="mb-5">
          <p>
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
          </div>
          <img src="media/images/sensibullLogo.svg"></img>
          <p>
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="media/images/smallcaseLogo.png"></img>
          <div className="mb-5">
          <p>
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
          </div>
          <img src="media/images/goldenpiLogo.png"></img>
          <p>
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
