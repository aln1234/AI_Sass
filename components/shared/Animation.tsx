"use client";

import React, { Component } from "react";
import Lottie from "react-lottie";


type AnimationProps ={
    data:any,
    height:number,
    width:number
}

const CustomAnimation = ({data,height,width}:AnimationProps) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: data,
    renderer: "svg",
    speed:1,
  };
  return (
    <div className="flex items-center">
      <Lottie options={defaultOptions} height={height} width={width} />
    </div>
  );
};

export default CustomAnimation;
