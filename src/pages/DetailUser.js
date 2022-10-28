import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

function DetailUser() {
  const [data, setData] = useState();
  const location = useLocation();
  console.log(location);
  return (
    <div className="container">
      <h1 className="text-center mt-5">CUSTOMER DETAILS</h1>
      <div class="container mt-5">
        <div class="row">
          <div class="col">
            <form>
              <label className="fullname">
                Full Name
                <br />
                <input type="text" value={location.state.name} />
              </label>
              <br />
              <label className="accountid mt-3">
                AccountID
                <br />
                <input
                  type="text"
                  value={`@${location.state.name
                    .toLowerCase()
                    .replace(/ /g, "_")}`}
                />
              </label>
              <br />
              <label className="gender mt-3">
                Gender
                <br />
                <input type="text" value={location.state.gender} />
              </label>
              <br />
              <label className="email mt-3">
                Email
                <br />
                <input type="email" value={location.state.email} />
              </label>
            </form>
          </div>

          <div className="col">
            <label className="fullname">
              Status Account
              <br />
              {location.state.status == "active" ? (
                <button
                  type="button"
                  className="btn btn-outline-success"
                  style={{ color: "green" }}
                >
                  Active
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  style={{ color: "red" }}
                >
                  Inactive
                </button>
              )}
            </label>
            <br />

            <button type="button" className="btn btn-primary">
              <Link to="/" state={data} style={{ color: "white" }}>
                RETURN TO LIST CUSTOMER
              </Link>
            </button>
            <br />
            <button type="button" className="btn btn-danger">
              DELETE CUSTOMER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailUser;
