"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Page() {
  const registerAPI = async () => {
    await axios
      .get("http://127.0.0.1:8000/api/user", {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
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
