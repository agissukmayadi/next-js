"use client";

import axios from "axios";
import { randomUUID } from "crypto";
import React, { useEffect, useState } from "react";

export default function Page() {
  const user = {
    name: "admin",
    email: "admin@gmail.com",
    password: "123456",
    c_password: "123456",
    role: "admin",
  };
  const registerAPI = async () => {
    await axios
      .post("http://127.0.0.1:8000/api/register", user)
      .then((res) => {
        console.log(res.data);
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
