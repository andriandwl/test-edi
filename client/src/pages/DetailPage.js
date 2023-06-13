import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getUserById } from "../states/userDetail/action";

export default function DetailPage() {
  const { id } = useParams();
  const { userDetail } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserById(id));
  }, [id, dispatch]);

  console.log(userDetail);
  return (
    <div className="py-5">
      <ul className="list-unstyled" key={userDetail.id}>
        <li>Nama Lengkap : {userDetail.namalengkap}</li>
        <li>Username : {userDetail.username}</li>
        <li>Status : {userDetail.status}</li>
      </ul>
      <Link to="/">Kembali ke Home</Link>
    </div>
  );
}
