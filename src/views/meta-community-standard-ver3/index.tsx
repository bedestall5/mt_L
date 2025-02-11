import { useNavigate } from "react-router-dom";

import { Button, Flex, Menu, Input, Modal } from "antd";
import "../meta-community-standard-ver3/style.css";
import React, { useState } from "react";
import {
  AppstoreOutlined,
  HomeOutlined,
  SearchOutlined,
  LockOutlined,
  ExclamationCircleOutlined,
  SettingOutlined,
  ExportOutlined,
  MinusCircleTwoTone,
  RightOutlined,
  CheckCircleOutlined,
  MenuOutlined,
} from "@ant-design/icons";

const MetaCommunityPage = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const showMenu = () => {
    setOpenMenu(true);
  };
  const handleOkMenu = () => {
    setOpenMenu(false);
  };
  const handleCancelMenu = () => {
    setOpenMenu(false);
  };
  const redictB2 = () => {
    navigate("/business-help-center");
  };
  const redictMeta = () => {
    window.location.href = "https://www.facebook.com";
  };
  const items = [
    { key: "1", icon: <HomeOutlined />, label: "Privacy Center Home Page" },
    { key: "2", icon: <SearchOutlined />, label: "Search" },
    {
      key: "sub1",
      label: "Privacy Policy",
      icon: <LockOutlined />,
      children: [
        {
          key: "5",
          label: (
            <span
              onClick={redictB2}
              style={{
                lineHeight: "20px",
                display: "inline-block",
                fontSize: "13px",
              }}
            >
              What is the Privacy Policy and <br /> what does it cover?
            </span>
          ),
        },
        {
          key: "6",
          label: (
            <span
              onClick={redictB2}
              style={{
                lineHeight: "20px",
                display: "inline-block",
                fontSize: "13px",
              }}
            >
              What information do we collect?
            </span>
          ),
        },
        {
          key: "7",
          label: (
            <span
              onClick={redictB2}
              style={{
                lineHeight: "20px",
                display: "inline-block",
                fontSize: "13px",
              }}
            >
              How do use your information?
            </span>
          ),
        },
        {
          key: "8",
          label: (
            <span
              onClick={redictB2}
              style={{
                lineHeight: "20px",
                display: "inline-block",
                fontSize: "13px",
              }}
            >
              How do we share your information <br /> on Meta Products with
              partners?
            </span>
          ),
        },
        {
          key: "9",
          label: (
            <span
              onClick={redictB2}
              style={{
                lineHeight: "20px",
                display: "inline-block",
                fontSize: "13px",
              }}
            >
              How do we share information with <br /> third parties?
            </span>
          ),
        },
        {
          key: "10",
          label: (
            <span
              onClick={redictB2}
              style={{
                lineHeight: "20px",
                display: "inline-block",
                fontSize: "13px",
              }}
            >
              How is the cooperation between <br /> Meta Companies organized?
            </span>
          ),
        },
        {
          key: "11",
          label: (
            <span
              onClick={redictB2}
              style={{
                lineHeight: "20px",
                display: "inline-block",
                fontSize: "13px",
              }}
            >
              How can you manage or delete your <br /> information your rights?
            </span>
          ),
        },
      ],
    },
    {
      key: "sub2",
      label: "Other rules and articles",
      icon: <ExclamationCircleOutlined />,
      children: [
        {
          key: "12",
          label: (
            <span
              onClick={redictB2}
              style={{
                lineHeight: "20px",
                display: "inline-block",
                fontSize: "13px",
              }}
            >
              Cookie Policy
            </span>
          ),
        },
        {
          key: "13",
          label: (
            <span
              onClick={redictB2}
              style={{
                lineHeight: "20px",
                display: "inline-block",
                fontSize: "13px",
              }}
            >
              Information for those who do not <br /> use Meta Products{" "}
              <ExportOutlined />
            </span>
          ),
        },
        {
          key: "14",
          label: (
            <span
              onClick={redictB2}
              style={{
                lineHeight: "20px",
                display: "inline-block",
                fontSize: "13px",
              }}
            >
              How Meta use information for <br /> generative Al models
            </span>
          ),
        },
        {
          key: "15",
          label: (
            <span
              onClick={redictB2}
              style={{
                lineHeight: "20px",
                display: "inline-block",
                fontSize: "13px",
              }}
            >
              Data Transfer Framework Policy
            </span>
          ),
        },
        {
          key: "16",
          label: (
            <span
              onClick={redictB2}
              style={{
                lineHeight: "20px",
                display: "inline-block",
                fontSize: "13px",
              }}
            >
              Other terms and conditions <ExportOutlined />
            </span>
          ),
        },
      ],
    },
    {
      key: "sub3",
      label: "Settings",
      icon: <SettingOutlined />,
      children: [
        {
          key: "17",
          label: (
            <span
              onClick={redictMeta}
              style={{
                lineHeight: "20px",
                display: "inline-block",
                fontSize: "13px",
              }}
            >
              Facebook Settings <ExportOutlined />
            </span>
          ),
        },
        {
          key: "18",
          label: (
            <span
              onClick={redictMeta}
              style={{
                lineHeight: "20px",
                display: "inline-block",
                fontSize: "13px",
              }}
            >
              Instagram Settings <ExportOutlined />
            </span>
          ),
        },
      ],
    },
  ];
  return (
    <div className="meta-community-v2">
      <div className="w-full h-16 bg-[#F0FFFF] border-b border-gray-200">
        <div className="w-10 h-10 ml-10 pt-3 pb-2">
          <img
            onClick={redictMeta}
            className="logo"
            src="/images/fb_rmbg.png"
            alt=""
          />
        </div>
      </div>

      <div className="container_meta">
        <div className="left_div">
          {/* <div className="menu">
            <img className="logo" src="/images/meta.png" alt="" />
            <p
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "16px",
              }}
            >
              Privacy Center
            </p>
            <div className="menu1">
              <Menu
                defaultSelectedKeys={["1"]}
                // defaultOpenKeys={['sub1']}
                mode="inline"
                // theme="dark"
                items={items}
              />
            </div>
          </div> */}
        </div>
        <div className="right_div">
          <div className="right p-4">
            <p style={{ fontSize: "20px", fontWeight: "600" }}>
              {" "}
              {/* <i className="fa-solid fa-circle-minus"></i> */}
              <CheckCircleOutlined style={{ color: "blue" }} /> We have
              scheduled a blue tick for your page.
            </p>
            <p
              style={{
                fontSize: "14px",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              We are pleased to inform you that your Fanpage is now eligible for
              a Verified Badge. This badge confirms that your Fanpage is the
              official account representing your business, organization, or
              public figure on Facebook.
            </p>
            <div className="content">
              <img
                className="image_content"
                src="/images/meta_sp.png"
                alt=""
              ></img>
              <div className="text_content">
                <p
                  style={{
                    fontSize: "16px",
                    marginTop: "20px",
                    fontWeight: "400",
                  }}
                >
                  Complete the request
                </p>
                <p
                  style={{
                    fontSize: "20px",
                    marginTop: "20px",
                    fontWeight: "500",
                  }}
                >
                  Confirm your identity
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    marginTop: "20px",
                    fontWeight: "400",
                  }}
                >
                  Please ensure you provide the information requested below.
                  Failure to provide this information may delay the completion
                  of your page's blue tick.
                </p>
              </div>
              <Flex gap="small" wrap="wrap">
                <Button
                  onClick={() => navigate("/business-help-center")}
                  style={{
                    width: "100%",
                    marginTop: "30px",
                    height: "44px",
                    marginBottom: "14px",
                    fontSize: "15px",
                    fontWeight: "400",
                    borderRadius: "18px",
                  }}
                  type="primary"
                >
                  Continue
                </Button>
              </Flex>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MetaCommunityPage;
