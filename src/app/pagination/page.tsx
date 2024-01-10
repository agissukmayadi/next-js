"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [number, setNumber] = useState(1);
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/blogs").then((res) => {
      console.log(res);
    });
  }, []);
  return <div>Page</div>;
}
