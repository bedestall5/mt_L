import { useNavigate } from "react-router-dom";

import { Button, Flex, Menu, Input, Modal } from "antd";
import React, { useState } from "react";
import { MinusCircleTwoTone } from "@ant-design/icons";
import {
  faCheckCircle,
  faAddressCard,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../meta-community-standard/style.css";
const MetaCommunityPage = () => {
  const navigate = useNavigate();
  const redictB2 = () => {
    navigate("/infor");
  };
  const today = new Date();
  // Format ngày theo yêu cầu
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(today);
  return (
    <div className="w-full h-full bg-white overflow-scroll">
      <div className="sm:w-11/12 md:w-2/3 lg:w-2.5/5 xl:w-2/5 w-11/12 mx-auto pt-14">
        <div className="rounded-lg overflow-hidden mb-5">
          <img
            className="mx-auto block mb-10 w-full h-full"
            src="/images/auth.png"
            alt=""
          ></img>
          <p className="font-bold text-2xl">Welcome To Facebook Protect.</p>
          <p className="my-5 text-[15px] leading-6">
            Your page's accessibility is limited, so we ask that higher security
            requirements be applied to that account. We created this security
            program to unlock your Pages.
            <a
              href="https://www.facebook.com/help"
              className="text-blue-500 hover:underline block"
            >
              More information
            </a>
          </p>
          <div className="px-[14px]">
            <ol className="relative text-gray-500 border-s-2 border-gray-200">
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-[#C4C4C4] rounded-full -start-[14px] ring-4 ring-white">
                  <svg
                    className="w-3 h-3 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    ></path>
                  </svg>
                </span>
                <h3 className="text-black text-[15px] leading-6">
                  We've enabled advanced protections to unlock your Page.
                </h3>
              </li>
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-facebook rounded-full -start-[14px] ring-4 ring-white">
                  <FontAwesomeIcon
                    icon={faAddressCard}
                    style={{ color: "#355797", fontSize: "18px" }}
                  />{" "}
                </span>
                <h3 className="text-black text-[15px] leading-6">
                  Below, we walk you through the process in detail and help you
                  fully activate to unlock your Page.
                </h3>
              </li>
            </ol>
          </div>
          <a
            href="/infor"
            className="block text-lg cursor-pointer bg-blue-500 w-full text-center xl:py-3 sm:py-3 py-3 text-white rounded-lg font-semibold"
          >
            Countinue
          </a>
          <p className="text-center block mt-3 mb-5 text-[15px] leading-6">
            Your page was restricted on <strong>{formattedDate}.</strong>
          </p>
        </div>
      </div>
    </div>
  );
};
export default MetaCommunityPage;
