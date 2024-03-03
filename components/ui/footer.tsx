"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";

export const Footer=() =>{
  return (
    <>
  <footer className=" bg-[#910048] mx-auto w-full ">
      <div className="flex flex-col rounded-b-md px-12 pt-16">
      
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md: items-start mb-24">
    <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
        <div className="flex grow items-center  w-full rounded-lg">
            <div className="text-2xl font-semibold tracking-tight leading-7 text-pink-800 uppercase mr-6">
            <img src="./images/keyeslogosvg.png"/>
            </div>

            <div className=" bg-white w-[1px] h-[55px]">
        
            </div>
            <div className="text-2xl font-semibold tracking-tight leading-7 text-pink-800 uppercase ml-6">
            <img src="../../images/span.font-montserrat.png"/>
            </div>
            </div>
    </div>
  

    <div className="flex flex-col w-2/12 max-md:ml-0 max-md:w-full">
        <div className="w-full flex justify-center">
       <div>
            <h6 className="uppercase text-lg font-bold text-white mb-1">
            top cities
            </h6>
            <ul>
              <li className="text-white text-lg leading-[28px] mb-[3px]" >Miami, FL</li>
              <li className="text-white text-lg leading-[28px] mb-[3px]" > Fort Lauderdale, FL</li>
              <li className="text-white text-lg leading-[28px] mb-[3px]" > Aventura, FL </li>
              <li className="text-white text-lg leading-[28px] mb-[3px]" > Sunny Isles, FL</li>
              <li className="text-white text-lg leading-[28px] mb-[3px]" > Miami Beach, FL</li>
            </ul>
            </div>
            </div>
    </div>

    <div className="flex flex-col w-2/12 max-md:ml-0 max-md:w-full">
    <div className="w-full flex justify-center">
       <div>
            <h6 className="uppercase text-lg font-bold text-white mb-1">
            top buildings
            </h6>
            <ul>
              <li className="text-white text-lg leading-[28px] mb-[3px]" >Miami, FL</li>
              <li className="text-white text-lg leading-[28px] mb-[3px]" > Fort Lauderdale, FL</li>
              <li className="text-white text-lg leading-[28px] mb-[3px]" > Aventura, FL </li>
              <li className="text-white text-lg leading-[28px] mb-[3px]" > Sunny Isles, FL</li>
              <li className="text-white text-lg leading-[28px] mb-[3px]" > Miami Beach, FL</li>
            </ul>
            </div>
            </div>
    </div>

    <div className="flex flex-col w-2/12 max-md:ml-0 max-md:w-full">
    <div className="w-full flex justify-center">
       <div>
            <h6 className="uppercase text-lg font-bold text-white mb-1">
            resources
            </h6>
            <ul>
              <li className="text-white text-lg leading-[28px] mb-[3px]" >Miami, FL</li>
              <li className="text-white text-lg leading-[28px] mb-[3px]" > Fort Lauderdale, FL</li>
              <li className="text-white text-lg leading-[28px] mb-[3px]" > Aventura, FL </li>
              <li className="text-white text-lg leading-[28px] mb-[3px]" > Sunny Isles, FL</li>
              <li className="text-white text-lg leading-[28px] mb-[3px]" > Miami Beach, FL</li>
            </ul>
            </div>
            </div>
    </div>
     
    <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full justify-end">
       <div className="flex justify-end">
       <div>
        <div className="flex grow items-center  w-full rounded-lg">
            <div className="mr-8">
           <h5 className="text-base font-bold tracking-tight leading-7 text-white uppercase mb-1">Call or Text</h5>
           <h5 className="text-xl font-normal tracking-tight leading-7 text-white tracking-wide">(954) 555-4545</h5>
            </div>
    <div className="text-2xl font-semibold tracking-tight leading-7 text-pink-800 uppercase">
            
            <button className="px-6 text-lg bg-white pt-3 pb-2 uppercase rounded-md">Contact</button>

            </div>

            </div> 
            <div className="w-[279px] h-[1px] bg-white my-8">
            </div> 

            <div className="flex grow items-center  justify-between  w-[279px] rounded-lg">
            <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ceaea6c5426c92d05510557db4456ee82364e84f8321f27f11d8904265e0951?apiKey=e288177870584f19969717bd4cd663f8&"
                  className="self-stretch my-auto w-8 aspect-square"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4951d156596b100398e41514e076677d0e5cdbb1d9aa46e86b9dfeeb043199e?apiKey=e288177870584f19969717bd4cd663f8&"
                  className="self-stretch my-auto aspect-[1.02] w-8"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/617d3ef86e3819f037f9f8011bd7f5a0232f95418a570876b5a907d3089a686e?apiKey=e288177870584f19969717bd4cd663f8&"
                  className="self-stretch my-auto aspect-square w-8"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/82e075c1930a1b58156cb89b4318c593f9dfa9da3db8747f48f523460b7c9dbb?apiKey=e288177870584f19969717bd4cd663f8&"
                  className="self-stretch my-auto aspect-[1.08] w-8"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b83055f5fbe82c83611629af5f548aeb66a2e1d78dd046afbaf918b13d78999?apiKey=e288177870584f19969717bd4cd663f8&"
                  className="self-stretch my-auto aspect-square w-8"
                />

            </div>   
            </div>
            </div>
    </div>
  
</div>
       
      </div>

      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md: px-16 pb-5 pt-6  items-start bg-[#680332]">
  
  <div className="lg:flex justify-between items-center w-full">
   <div className="text-[#FF7DBA] text-base font-normal uppercase">
   ® Copyright 2024 all rights reserved the keyes company inc.
   </div>

   <div className="text-[#FF7DBA] text-base font-normal ">
  <ul>
  
   <li>
      <a href="#" className="uppercase mr-12">terms & conditions</a>
      <a href="#" className="uppercase">privacy</a>
    </li>
  </ul>
   </div>
  
   </div>

</div>
    </footer>
    </>
  );
}
