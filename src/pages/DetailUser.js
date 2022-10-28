import { useLocation } from "react-router-dom";

function DetailUser() {
  const location = useLocation();
  console.log(location);
  return (
    <div className="container">
      <div className="row m-2">{location.state.id}</div>
      <div className="row m-2">{location.state.name}</div>
      <div className="row m-2">
        @{location.state.name.toLowerCase().replace(/ /g, "_")}
      </div>
      <div className="row m-2">{location.state.email}</div>
      <div className="row m-2">{location.state.gender}</div>
      {location.state.status == "active" ? (
        <div style={{ color: "green" }}>active</div>
      ) : (
        <div style={{ color: "red" }}>inactive</div>
      )}
    </div>
  );
}

export default DetailUser;
