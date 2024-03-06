"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";
const topTab = [
  { lable: "LIST", link: "/#", selected: false },
  { lable: "GRID", link: "/#", selected: false },
  { lable: "MAP", link: "/#", selected: false },
];
function Header() {
  const [favorite, setFavorite] = useState(false);
  const favoriteHandle = () => {
    setFavorite(!favorite);
  };
  return (
    //     <header className="max-w-screen-wrap px-5  mx-auto w-full ">
    //     <div className="flex flex-col rounded-b-md shadow-md">
    //         <div className="bg-white flex justify-between items-center p-5 xl:px-10">
    //             <div className="flex gap-10  items-center">
    //                 <div className="relative">
    //                     <link href="/#"
    //                         <image src="/images/keyes-company-logo.svg" width="{150}" height="{100}" alt="" />
    //                     />
    //                 </div>
    //                 <p className="uppercase font-montserrat text-black/50 font-bold text-sm">
    //                     BUILDING
    //                     <br />
    //                     ADVISOR
    //                 </p>
    //             </div>
    //             <div className="flex gap-5">
    //                 <div className="relative" onClick="{favoriteHandle}">
    //                     <Icon name={favorite ? "heartFill" : "heart"} color="var(--primary)" size={24} stroke="transparent" />
    //                 </div>
    //                 <div className="relative">
    //                     <span className="relative flex">
    //                         <Icon name="cart" color="var(--primary)" size="{24}" stroke="transparent" />
    //                         <span className="flex absolute -top-2 -right-2 border-2 border-white rounded-xl text-[0.6rem] text-white leading-none bg-primary h-5 min-w-5 justify-center items-center font-montserrat font-bold text-center">
    //                             2
    //                         </span>
    //                     </span>
    //                 </div>
    //             </div>
    //         </div>
    //         <div className="bg-gray-100 rounded-b-md px-5 py-3 xl:px-10 flex-col md:flex-row gap-2 flex justify-between">
    //             <div className="flex flex-wrap gap-y-2 gap-x-5 justify-between items-center flex-1  lg:flex-none">
    //                 <div className="gap-2 flex items-center">
    //                     <Icon name="location" className="text-black/55 w-5 h-5 xl:w-auto xl:h-auto" size="{24}" color="currentColor" stroke="transparent" />
    //                     <p className="text-black/80 text-xl xl:text-2xl "><b className="font-bold">2557</b> buildings available in, Miami, FL</p>
    //                 </div>
    //                 <div className="border-2 border-black/20 rounded-md py-1 px-3 font-montserrat">
    //                     <p className="text-sm text-black/80 font-medium">Don’t see your building?</p>
    //                     <link href="/#" className="font-bold text-sm text-black/80 hover:text-primary ease-in-out duration-200 underline"
    //                         Add Now
    //                     />
    //                 </div>
    //             </div>
    //             <div className="gap-2 flex items-center xl:min-w-96 flex-1 lg:flex-none ">
    //                 {topTab.map((item, index) => { return (
    //                 <link
    //                     key="{index}"
    //                     href="{item.link}"
    //                     className="border-2 border-black/20 hover:bg-black/10 text-center font-montserrat ease-in-out duration-200 rounded-md py-2 px-3 uppercase flex-1 font-bold text-black/50 hover:text-black"

    //                     {item.lable}
    //                 />
    //                 ); })}
    //             </div>
    //         </div>
    //     </div>
    // </header>
    <>
      <header className="max-w-screen-wrap px-5  mx-auto w-full ">
        <div className="flex flex-col rounded-b-md shadow-md mb-4">
          <div className="bg-white flex justify-between items-center p-5 xl:px-10">
            <div className="flex gap-10  items-center">
              <div className="relative">
                <Link href="/#">
                  <Image src="/images/keyes-company-logo.svg" width={150} height={100} alt="" />
                </Link>
              </div>
              <p className="uppercase font-montserrat text-black/50 font-bold text-sm">
                BUILDING
                <br />
                ADVISOR
              </p>
            </div>

            <div className="flex gap-10  items-center">
              <div className="relative">
                <Link href="/#">
                  <p className="uppercase font-montserrat text-[#262626] font-semibold text-sm">
                    Buy
                  </p>
                </Link>
              </div>
              <div className="relative">
                <Link href="/#">
                  <p className="uppercase font-montserrat text-[#262626] font-semibold text-sm">
                    rent
                  </p>
                </Link>
              </div>
              <div className="relative">
                <Link href="/#">
                  <p className="uppercase font-montserrat text-[#262626] font-semibold text-sm">
                    buildings
                  </p>
                </Link>
              </div>
            </div>

            <div className="flex gap-5 items-center">
              <div className="flex grow items-center  w-full rounded-lg">
                <div className="mr-8">
                  <h5 className="text-base font-semibold tracking-tight leading-7 text-[#910748] uppercase mb-1">
                    Call or Text
                  </h5>
                  <h5 className="text-xl font-normal leading-7 text-black tracking-wide">
                    (954) 555-4545
                  </h5>
                </div>
                <div className="text-2xl font-semibold tracking-tight leading-7 text-pink-800 uppercase">
                  <button className="px-6 text-lg bg-white border-[#910748] border-2 pt-3 pb-2 uppercase rounded-md">
                    Contact
                  </button>
                </div>
              </div>
              <div className="relative" onClick={favoriteHandle}>
                <Icon
                  name={favorite ? "heartFill" : "heart"}
                  color="var(--primary)"
                  size={24}
                  stroke="transparent"
                />
              </div>
              <div className="relative">
                <span className="relative flex">
                  <Icon name="cart" color="var(--primary)" size={24} stroke="transparent" />
                  <span className="flex absolute -top-2 -right-2 border-2 border-white rounded-xl text-[0.6rem] text-white leading-none bg-primary h-5 min-w-5 justify-center items-center font-montserrat font-bold text-center">
                    2
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 rounded-b-md pr-5 py-5 xl:pr-10 flex-col md:flex-row gap-2 flex justify-between items-center">
          <div>
            <div className="flex flex-wrap gap-y-2 gap-x-5 justify-between items-center flex-1  lg:flex-none mb-5">
              <div className="gap-2 flex items-center">
                <a href="#">
                  <img className="mr-1" src="./icons/chevron-left.png" />
                </a>
                <p className="text-[#959595] mt-1 text-lg  xl:text-xl font-semibold">
                  Back to Results
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-y-2 gap-x-5 justify-between items-center flex-1  lg:flex-none">
              <div className="gap-2 flex items-center">
                <p className="text-[#910048] mt-1 text-lg  xl:text-5xl font-extrabold mb-2">
                  Beach House 8
                </p>
              </div>
            </div>
            <div className="gap-2 flex items-center">
              <Icon
                name="location"
                className="text-[#959595] w-5 h-5 xl:w-auto xl:h-auto"
                size={20}
                color="currentColor"
                stroke="transparent"
              />
              <p className="text-[#959595] text-xl xl:text-xl font-medium">
                3651 Collins Avenue, Miami Beach, FL 33140
              </p>
            </div>
          </div>
          <div className="gap-2 flex items-center xl:min-w-96 flex-1 lg:flex-none ">
            <Link
              href="#"
              className="border-2 w-[160px] px-8 border-black/20 bg-white hover:bg-black/10  font-montserrat ease-in-out duration-200 rounded-md py-2  uppercase flex-1 font-medium text-black hover:text-black"
            >
              add to watchlist
            </Link>
            <Link
              href="#"
              className="border-2 w-[160px] px-8 border-black/20 bg-white hover:bg-black/10  font-montserrat ease-in-out duration-200 rounded-md py-2  uppercase flex-1 font-medium text-black hover:text-black"
            >
              add to favorites
            </Link>
            <Link
              href="#"
              className="border-2 w-[160px] px-8 border-black/20 bg-white hover:bg-black/10  font-montserrat ease-in-out duration-200 rounded-md py-2  uppercase flex-1 font-medium text-black hover:text-black"
            >
              Request Infomation
            </Link>
          </div>
        </div>
      </header>
      <section className="relative">
        <img className="mr-1 w-full" src="./images/details-banner.png" />

        <div className="max-w-screen-wrap px-5  mx-auto w-full mb-5">
          <div className="flex justify-between -mt-16">
            <div className="bg-white  rounded-sm py-4 px-6 mr-3 flex items-center">
              <div>
                <p className="text-[#910748] text-lg font-medium text-center uppercase mb-2.5">
                  Total units
                </p>
                <h5 className="font-bold text-4xl text-center">8</h5>
              </div>
            </div>

            <div className="bg-white  rounded-sm py-3 px-6 mr-4 flex items-center ">
              <div>
                <p className="text-[#910748] text-lg font-medium text-center uppercase mb-2.5">
                  for sale
                </p>
                <h5 className="font-bold text-4xl text-center">1</h5>
              </div>
            </div>
            <div className="bg-white  rounded-sm py-3 px-6 mr-4  flex items-center">
              <div>
                <p className="text-[#910748] text-lg font-medium text-center uppercase mb-2.5">
                  for rent
                </p>
                <button className="bg-[#910748] text-white rounded font-semibold flex mx-auto py-1 px-5 uppercase font-">
                  Inquire
                </button>
              </div>
            </div>

            <div className="bg-white  rounded-sm py-3 px-6 mr-4 flex items-center">
              <div>
                <p className="text-[#910748] text-lg font-medium text-center uppercase mb-2.5">
                  starting from
                </p>
                <h5 className="font-bold text-4xl text-center">$8.4M</h5>
              </div>
            </div>

            <div className="bg-white  rounded-sm py-3 px-6 mr-4 flex items-center">
              <div>
                <p className="text-[#910748] text-lg font-medium text-center uppercase mb-2.5">
                  bed / bath
                </p>
                <h5 className="font-bold text-4xl text-center">1/1.5 - 4/3.5</h5>
              </div>
            </div>

            <div className="bg-white  rounded-sm py-3 px-6 mr-4 flex items-center">
              <div>
                <p className="text-[#910748] text-lg font-medium text-center uppercase mb-2.5">
                  Year built
                </p>
                <h5 className="font-bold text-4xl text-center">2016</h5>
              </div>
            </div>

            <div className="bg-white  rounded-sm py-3 px-6 mr-4 flex items-center">
              <div>
                <p className="text-[#910748] text-lg font-medium text-left uppercase mb-2.5">
                  never miss a nEW listing
                  <br /> or price reduction
                </p>
                <button className="bg-[#f2f2f2] w-full text-end px-1 py-1.5 flex justify-end">
                  <img className="mr-1 w-5" src="./icons/Arrow-forward.png" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-screen-wrap mt-1 mx-auto px-5 space-y-5 w-full mb-6">
        <div>
          <div className="flex flex-col rounded-b-md ">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md: items-start mb-4">
              <div className="flex flex-col w-8/12 max-md:ml-0 max-md:w-full">
                <div className="flex grow justify-between  w-full rounded-sm bg-white py-8 px-8 mb-8">
                  <div>
                    <h5 className="text-[#910048] text-xl uppercase mb-5">
                      Building Information
                    </h5>
                    <h4 className="text-5xl font-bold">Beach House 8</h4>
                  </div>
                  <div>
                    <div mb-5>
                      <h5 className="text-[#910048] text-lg uppercase mb-3">views</h5>
                      <ul>
                        <li className="mb-2">Ocean Views</li>
                        <li className="mb-2">Miami Beach Views</li>
                        <li className="mb-2">City Views</li>
                      </ul>
                    </div>

                    <div mb-5>
                      <h5 className="text-[#910048] text-lg uppercase mb-3">Floors</h5>
                      <ul>
                        <li className="mb-2"> 10 </li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <div>
                      <h5 className="text-[#910048] text-xl uppercase mb-3">neighborhood</h5>
                      <ul>
                        <li className="mb-2">Mid-Beach</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-[#910048] text-xl uppercase mb-3">developer</h5>
                      <ul>
                        <li className="mb-2">
                          Ugo Colombo / Valerio Morabito of Morabito Properties
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-[#910048] text-xl uppercase mb-3">architect</h5>
                      <ul>
                        <li className="mb-2">Mid-Beach</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex grow justify-between  w-full rounded-sm bg-white py-8 px-8">
                  <div>
                    <h5 className="text-[#910048] font-montserrat text-xl font-semibold uppercase mb-5">
                      Building Description
                    </h5>
                    <p className="text-xl mb-6 font-normal">
                      Beach House 8 is an exclusive mid-rise condominium building located on the
                      beachfront in Miami Beach, FL at 3651 Collins Avenue. Conveniently
                      located, it is within walking distance to South Beach. It is perfectly
                      situated for quick access to all of South Florida, perfectly combining
                      oceanfront living with the convenience of the city.
                    </p>
                    <p className="text-xl mb-4 font-normal">
                      It is a luxurious 10-story building that houses only 8 condominiums,
                      creating a unique and intimate community that is truly a boutique
                      collection of homes. Beach House 8 offers 7 four-bedroom condominiums
                      covering an entire floor, each with over 3000 square feet of living space,
                      and a duplex penthouse with 6000 square feet of outdoor living space on
                      two levels. This unique home includes elements such as a guest master
                      suite and a private landscaped plunge pool, perfect for both elegant
                      entertaining and secluded intimate living. Beach House 8 was built in
                      2015, with units benefiting from the pinnacle of contemporary interior
                      design, creating luxury homes that feature open floor plans that are
                      bathed in natural light, floor-to-ceiling windows, generous terraces,
                      gourmet kitchens with Miele appliances, marble bathrooms, and a full home
                      automation system, including audio.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-4/12 max-md:ml-0 bg-white max-md:w-full">
                <div className="flex   w-full rounded-t-lg bg-[#910048] py-6 px-6 mb-3">
                  <div className="mr-5">
                    <img className="mr-1 w-full" src="./icons/Mask-group.png" />
                  </div>
                  <div>
                    <div mb-5>
                      <p className="text-white text-base uppercase mb-3">Building advisor</p>
                      <h5 className="text-white font-semibold text-lg mb-2">
                        Jill <br /> Windsor
                      </h5>
                      <hr className="py-2" />
                      <p className="font-base pb-4 text-white">(954) 555-4545</p>
                    </div>
                    <div className="flex grow items-center  justify-between  w-[279px] rounded-lg">
                      <a href="#">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ceaea6c5426c92d05510557db4456ee82364e84f8321f27f11d8904265e0951?apiKey=e288177870584f19969717bd4cd663f8&"
                          className="self-stretch my-auto w-6 aspect-square"
                        />
                      </a>
                      <a href="#">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4951d156596b100398e41514e076677d0e5cdbb1d9aa46e86b9dfeeb043199e?apiKey=e288177870584f19969717bd4cd663f8&"
                          className="self-stretch my-auto aspect-[1.02] w-6"
                        />
                      </a>

                      <a href="#">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/617d3ef86e3819f037f9f8011bd7f5a0232f95418a570876b5a907d3089a686e?apiKey=e288177870584f19969717bd4cd663f8&"
                          className="self-stretch my-auto aspect-square w-6"
                        />
                      </a>

                      <a href="#">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/82e075c1930a1b58156cb89b4318c593f9dfa9da3db8747f48f523460b7c9dbb?apiKey=e288177870584f19969717bd4cd663f8&"
                          className="self-stretch my-auto aspect-[1.08] w-6"
                        />
                      </a>
                      <a href="#">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b83055f5fbe82c83611629af5f548aeb66a2e1d78dd046afbaf918b13d78999?apiKey=e288177870584f19969717bd4cd663f8&"
                          className="self-stretch my-auto aspect-square w-6"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex   w-full  bg-white py-6 pt-3 px-6 mb-3">
                  <div className="w-full">
                    <textarea
                      className="border-2 mb-5 border-[#910048] rounded w-full h-24 px-5 py-5"
                      placeholder="I have a quick question about Beach House 8"
                    ></textarea>

                    <form action="#" method="POST">
                      <div className="mb-4 w-full">
                        <label className="block text-gray-500 font-normal">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="mt-1 block w-full h-11 rounded-sm border-gray-400  border px-3"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-500 font-normal">Phone Number</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="mt-1 block w-full h-11 rounded-sm border-gray-400  border px-3"
                        />
                      </div>

                      <div className="mb-4">
                        <label className="block text-gray-500 font-normal">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="mt-1 block w-full h-11 rounded-sm border-gray-400  border px-3"
                        />
                      </div>

                      <div className="mb-5">
                        <label className="flex justify-between items-baseline">
                          <input className="mr-2 mt-2" type="checkbox" />{" "}
                          <span className="text-sm">
                            By clicking above you agree to be contacted by me or my brokerage
                            company. Consent is not a requirement or condition to receive real
                            estate brokerage services
                          </span>
                        </label>
                      </div>

                      <div>
                        <button
                          type="submit"
                          className="bg-[#910048] mx-auto w-full text-white px-4 py-2 rounded-md hover:bg-indigo-600"
                        >
                          Contact
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-screen-wrap mt-1 mx-auto px-5 space-y-5 w-full ">
        <div>
          <div className="flex flex-col rounded-b-md bg-white px-16 py-12 pb-8">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md: items-start">
              <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                <h5 className="text-[#910048] font-montserrat text-3xl font-normal mb-5 leading-[40px]">
                  Building <br /> Amenities
                </h5>
              </div>

              <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                <div>
                  <ul>
                    <li className="flex items-center mb-2">
                      <Image
                        src="/images/done-icon.png"
                        width={20}
                        height={20}
                        className="mr-2"
                        alt=""
                      />
                      <h5 className="text-[#000] font-montserrat text-base font-normal leading-[40px]">
                        24-hour Security
                      </h5>
                    </li>
                    <li className="flex items-center mb-2">
                      <Image
                        src="/images/done-icon.png"
                        width={20}
                        height={20}
                        className="mr-2"
                        alt=""
                      />
                      <h5 className="text-[#000] font-montserrat text-base font-normal leading-[40px]">
                        Concierge Services
                      </h5>
                    </li>
                    <li className="flex items-center mb-2">
                      <Image
                        src="/images/done-icon.png"
                        width={20}
                        height={20}
                        className="mr-2"
                        alt=""
                      />
                      <h5 className="text-[#000] font-montserrat text-base font-normal leading-[40px]">
                        Elevator
                      </h5>
                    </li>
                    <li className="flex items-center mb-2">
                      <Image
                        src="/images/done-icon.png"
                        width={20}
                        height={20}
                        className="mr-2"
                        alt=""
                      />
                      <h5 className="text-[#000] font-montserrat text-base font-normal leading-[40px]">
                        Gated Entry
                      </h5>
                    </li>
                    <li className="flex items-center mb-2">
                      <Image
                        src="/images/done-icon.png"
                        width={20}
                        height={20}
                        className="mr-2"
                        alt=""
                      />
                      <h5 className="text-[#000] font-montserrat text-base font-normal leading-[40px]">
                        Hurricane Impact Windows
                      </h5>
                    </li>
                    <li className="flex items-center mb-2">
                      <Image
                        src="/images/done-icon.png"
                        width={20}
                        height={20}
                        className="mr-2"
                        alt=""
                      />
                      <h5 className="text-[#000] font-montserrat text-base font-normal leading-[40px]">
                        Pet-Friendly
                      </h5>
                    </li>
                    <li className="flex items-center mb-2">
                      <Image
                        src="/images/done-icon.png"
                        width={20}
                        height={20}
                        className="mr-2"
                        alt=""
                      />
                      <h5 className="text-[#000] font-montserrat text-base font-normal leading-[40px]">
                        State-of-Art Fitness Center
                      </h5>
                    </li>
                    <li className="flex items-center mb-2">
                      <Image
                        src="/images/done-icon.png"
                        width={20}
                        height={20}
                        className="mr-2"
                        alt=""
                      />
                      <h5 className="text-[#000] font-montserrat text-base font-normal leading-[40px]">
                        Two Parking Spaces / Resdient
                      </h5>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                <div>
                  <ul>
                    <li className="flex items-center mb-2">
                      <Image
                        src="/images/done-icon.png"
                        width={20}
                        height={20}
                        className="mr-2"
                        alt=""
                      />
                      <h5 className="text-[#000] font-montserrat text-base font-normal leading-[40px]">
                        Yoga Terrace
                      </h5>
                    </li>
                    <li className="flex items-center mb-2">
                      <Image
                        src="/images/done-icon.png"
                        width={20}
                        height={20}
                        className="mr-2"
                        alt=""
                      />
                      <h5 className="text-[#000] font-montserrat text-base font-normal leading-[40px]">
                        Beautifully Appointed Lobby
                      </h5>
                    </li>
                    <li className="flex items-center mb-2">
                      <Image
                        src="/images/done-icon.png"
                        width={20}
                        height={20}
                        className="mr-2"
                        alt=""
                      />
                      <h5 className="text-[#000] font-montserrat text-base font-normal leading-[40px]">
                        Direct Beach Access
                      </h5>
                    </li>
                    <li className="flex items-center mb-2">
                      <Image
                        src="/images/done-icon.png"
                        width={20}
                        height={20}
                        className="mr-2"
                        alt=""
                      />
                      <h5 className="text-[#000] font-montserrat text-base font-normal leading-[40px]">
                        Hot Tub
                      </h5>
                    </li>
                    <li className="flex items-center mb-2">
                      <Image
                        src="/images/done-icon.png"
                        width={20}
                        height={20}
                        className="mr-2"
                        alt=""
                      />
                      <h5 className="text-[#000] font-montserrat text-base font-normal leading-[40px]">
                        Outdoor Lounge
                      </h5>
                    </li>
                    <li className="flex items-center mb-2">
                      <Image
                        src="/images/done-icon.png"
                        width={20}
                        height={20}
                        className="mr-2"
                        alt=""
                      />
                      <h5 className="text-[#000] font-montserrat text-base font-normal leading-[40px]">
                        Poolside Cabanas
                      </h5>
                    </li>
                    <li className="flex items-center mb-2">
                      <Image
                        src="/images/done-icon.png"
                        width={20}
                        height={20}
                        className="mr-2"
                        alt=""
                      />
                      <h5 className="text-[#000] font-montserrat text-base font-normal leading-[40px]">
                        Heated Swimming Pool
                      </h5>
                    </li>
                    <li className="flex items-center mb-2">
                      <Image
                        src="/images/done-icon.png"
                        width={20}
                        height={20}
                        className="mr-2"
                        alt=""
                      />
                      <h5 className="text-[#000] font-montserrat text-base font-normal leading-[40px]">
                        Valet Parking
                      </h5>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                <div>
                  <ul>
                    <li className="flex items-center mb-2">
                      <Image
                        src="/images/done-icon.png"
                        width={20}
                        height={20}
                        className="mr-2"
                        alt=""
                      />
                      <h5 className="text-[#000] font-montserrat text-base font-normal leading-[40px]">
                        Biking / Jogging Path
                      </h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
