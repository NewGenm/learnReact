// props和组件传值和插槽
import React from "react";
import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
function Page3(props) {
  let params = useParams()
  console.log('useParams', params)
  return (
    <div>
      page3
    </div>
  );
}

export default Page3;
