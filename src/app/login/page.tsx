"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Page() {
  const user = {
    email: "agis123@gmail.com",
    password: "123456",
  };
  const registerAPI = async () => {
    await axios
      .post("http://127.0.0.1:8000/api/login", user)
      .then((res) => {
        console.log(res.data.success.token);
        localStorage.setItem("token", res.data.success.token);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  useEffect(() => {
    registerAPI();
  }, []);
  return <div>Page</div>;
}
