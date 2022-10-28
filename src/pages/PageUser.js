import { useEffect, useState } from "react";
import axios from "axios";
import { Pagination } from "antd";
import { Link } from "react-router-dom";
import "../pages/Pages.css";

function PageUser() {
  const [data, setData] = useState();
  const [meta, setMeta] = useState();
  const [current, setCurrent] = useState(1);

  const getUser = async (current) => {
    const response = await axios.get(
      `https://gorest.co.in/public/v1/users?page=${current ? current : 1}`
    );
    console.log(response);
    setData(response.data.data);
    setMeta(response.data.meta);
  };

  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
    getUser(page);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="container">
      <h1>Halaman List Customer</h1>
      <div className="row m-2">
        {data?.map((data) => {
          return (
            <div key={data.id} className="col-sm-6 col-md-4 v my-2">
              <div key={data.id} className="row list-group-item">
                {data.name}
                <br />
                <div>@{data.name.toLowerCase().replace(/ /g, "_")}</div>
                {data.status == "active" ? (
                  <div>
                    <div id="status">
                      <div className="indicator online"></div>
                      <div className="message">Active</div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div id="status">
                      <div className="indicator offline"></div>
                      <div className="message">Inactive</div>
                    </div>
                  </div>
                )}
                <Link to="/detail" state={data}>
                  View Detail
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <Pagination
        defaultCurrent={1}
        current={current}
        onChange={onChange}
        total={meta?.pagination?.total}
        showSizeChanger={false}
      />
    </div>
  );
}

export default PageUser;
