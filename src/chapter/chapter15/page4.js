// props和组件传值和插槽
import React from "react";
import { useState, useContext } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
function Page4(props) {
  let [query, serQuery] = useSearchParams();
  let location = useLocation();
  console.log("useParams", location);
  console.log("query", query.get("id"));
  console.log("query", query.get("xyz"));
  return <div>page4</div>;
}

export default Page4;