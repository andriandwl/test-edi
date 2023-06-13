import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser, getUsers } from "../states/user/action";
import { Link, useNavigate } from "react-router-dom";

export default function HomePage() {
  const { user } = useSelector((states) => states);

  const [userData, setUserData] = useState({
    namalengkap: "",
    username: "",
    password: "",
    status: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addUser(userData));
    setUserData({
      namalengkap: "",
      username: "",
      password: "",
      status: "",
    });
  };

  const onDeleteHandler = (id) => {
    dispatch(deleteUser(id));
    navigate("/");
  };

  return (
    <div className="row g-0 py-3 align-items-center justify-content-center">
      <div className="col-lg-8">
        <main className="form-signin w-100 m-auto mb-5">
          <form onSubmit={handleSubmit}>
            <h1 className="h3 mb-3 fw-normal">Masukan User Data</h1>
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="floatingInputNama"
                placeholder="Nama Lengkap"
                value={userData.namalengkap}
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    namalengkap: e.target.value,
                  })
                }
              />
              <label htmlFor="floatingInputNama">Nama Lengkap</label>
            </div>
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="floatingInputUsername"
                placeholder="Username"
                value={userData.username}
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    username: e.target.value,
                  })
                }
              />
              <label htmlFor="floatingInputUsername">Username</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                value={userData.password}
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    password: e.target.value,
                  })
                }
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="floatingInputStatus"
                placeholder="Status"
                value={userData.status}
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    status: e.target.value,
                  })
                }
              />
              <label htmlFor="floatingInputStatus">Status</label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Tambahkan
            </button>
          </form>
        </main>
      </div>
      <div className="col-lg-12 mt-5">
        <h1 className="h3 mb-3 fw-normal">Daftar User</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nama Lengkap</th>
              <th scope="col">Username</th>
              <th scope="col">Password</th>
              <th scope="col">status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {user.map((useer, i) => {
              return (
                <tr key={useer.id}>
                  <th scope="row">{i + 1}</th>
                  <td>
                    <Link to={`/user/${useer.id}`}>{useer.namalengkap}</Link>
                  </td>
                  <td>{useer.username}</td>
                  <td>{useer.password}</td>
                  <td>{useer.status}</td>
                  <td>
                    <form onSubmit={() => onDeleteHandler(useer.id)}>
                      <button type="submit" className="btn btn-info text-light">
                        Delete
                      </button>
                    </form>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
