import { useNavigate } from "react-router-dom";

import { Button, Flex, Menu, Input, Modal } from "antd";
import "../meta-community-standard-ver2/style.css";
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
      <div className="header_meta">
        <img className="logo" src="/images/meta.png" alt="" />
        <div className="icon_menu" onClick={showMenu}>
          <MenuOutlined />
        </div>
        <Modal
          open={openMenu}
          onOk={handleOkMenu}
          onCancel={handleCancelMenu}
          width={300}
          footer={false}
        >
          <p
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "16px",
            }}
          >
            Privacy Center
          </p>

          <Menu
            defaultSelectedKeys={["1"]}
            // defaultOpenKeys={['sub1']}
            mode="inline"
            // theme="dark"
            items={items}
          />
        </Modal>
      </div>

      <div className="container_meta">
        <div className="left_div">
          <div className="menu">
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
          </div>
        </div>
        <div className="right_div">
          <div className="right">
            <p style={{ fontSize: "20px", fontWeight: "600" }}>
              {" "}
              <i className="fa-solid fa-circle-minus"></i>
              <MinusCircleTwoTone twoToneColor="red" /> We have scheduled your
              page to be deleted
            </p>
            <p
              style={{
                fontSize: "14px",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              We have received several reports that your account violates our
              terms of service and community guidelines. As a result, your
              account will be sent for verification.
            </p>
            <div className="content">
              <img
                className="image_content"
                src="/images/auth.png"
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
                  Review request
                </p>
                <p
                  style={{
                    fontSize: "20px",
                    marginTop: "20px",
                    fontWeight: "500",
                  }}
                >
                  Fixing problems with account restrictions
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    marginTop: "20px",
                    fontWeight: "400",
                  }}
                >
                  Please be sure to provide the requested information below.
                  Failure to provide this information may delay the processing
                  of your appeal.
                </p>

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
                    Request Review
                  </Button>
                </Flex>
              </div>
            </div>

            <p
              style={{
                fontSize: "14px",
                marginTop: "16px",
                marginBottom: "20px",
              }}
            >
              If you believe restrictions have been placed on your account in
              error, you can request a review.
            </p>
            <p style={{ fontSize: "16px", fontWeight: "700" }}>Appeal Guide</p>
            <ul>
              <li style={{ fontSize: "14px", marginTop: "16px" }}>
                Fact checkers may not respond to requests that contain
                intimidation, hate speech, or other verbal threats.
              </li>
              <li style={{ fontSize: "14px", marginTop: "16px" }}>
                In your appeal, please include all necessary information to
                allow the fact checker to process your request in a timely
                manner. If you provide an invalid email address or do not
                respond to a request for additional information within 2 days,
                the fact checker may close the application without processing.
                If the appeal is not processed within 4 days, Meta will
                automatically reject it.
              </li>
              <li style={{ fontSize: "14px", marginTop: "16px" }}>
                {" "}
                When everything is ready, we will review your account and
                determine whether restrictions apply to it. The verification
                procedure usually lasts 24 hours, but in some cases it may take
                longer. Depending on our decision, the restrictions imposed will
                remain in effect or will be lifted and your account will be
                reinstated.
              </li>
            </ul>
            <p
              style={{
                fontSize: "16px",
                fontWeight: "700",
                marginTop: "50px",
                marginBottom: "20px",
              }}
            >
              Privacy Center
            </p>
            <div className="avt" onClick={showModal}>
              <div className="left">
                <img className="" src="/images/avt1.png" alt=""></img>
              </div>
              <div className="middle">
                <p style={{ fontSize: "14px", fontWeight: "500px" }}>
                  What is the Privacy Policy and what does it say?
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: "300px",
                    opacity: "0.8",
                  }}
                >
                  Privacy Policy
                </p>
              </div>
              <div className="right">
                <RightOutlined />
              </div>
            </div>
            <div className="avt" onClick={showModal}>
              <div className="left">
                <img className="" src="/images/avt1.png" alt=""></img>
              </div>
              <div className="middle">
                <p style={{ fontSize: "14px", fontWeight: "500px" }}>
                  How can you manage or delete your information
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: "300px",
                    opacity: "0.8",
                  }}
                >
                  Privacy Policy
                </p>
              </div>
              <div className="right">
                <RightOutlined />
              </div>
            </div>
            <p
              style={{
                fontSize: "16px",
                fontWeight: "700",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              For more details, see the User Agreement
            </p>
            <div className="avt" onClick={showModal}>
              <div className="left">
                <img className="" src="/images/note.png" alt=""></img>
              </div>
              <div className="middle">
                <p style={{ fontSize: "14px", fontWeight: "500px" }}>Meta Al</p>
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: "300px",
                    opacity: "0.8",
                  }}
                >
                  User Agreement
                </p>
              </div>
              <div className="right">
                <RightOutlined />
              </div>
            </div>

            <p
              style={{
                fontSize: "16px",
                fontWeight: "700",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              Additional resources
            </p>
            <div className="avt" onClick={showModal}>
              <div className="middle">
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "500px",
                    marginLeft: "10px",
                  }}
                >
                  How Meta uses information for generating AI models
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: "300px",
                    opacity: "0.8",
                    marginLeft: "10px",
                  }}
                >
                  Privacy Center
                </p>
              </div>
              <div className="right">
                <RightOutlined />
              </div>
            </div>
            <div className="avt" onClick={showModal}>
              <div className="middle">
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "500px",
                    marginLeft: "10px",
                  }}
                >
                  Cards with information about the operation of AI systems
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: "300px",
                    opacity: "0.8",
                    marginLeft: "10px",
                  }}
                >
                  Meta AI website
                </p>
              </div>
              <div className="right">
                <RightOutlined />
              </div>
            </div>
            <div className="avt" onClick={showModal}>
              <div className="middle">
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "500px",
                    marginLeft: "10px",
                  }}
                >
                  Introduction to Generative AI
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: "300px",
                    opacity: "0.8",
                    marginLeft: "10px",
                  }}
                >
                  For teenagers
                </p>
              </div>
              <div className="right">
                <RightOutlined />
              </div>
            </div>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "400px",
                marginTop: "20px",
              }}
            >
              We continually identify potential privacy risks, including when
              collecting, using or sharing personal information, and developing
              methods to reduce these risks. Read more about{" "}
              <span
                onClick={redictB2}
                style={{ color: "rgb(66, 107, 220)" }}
                className="cursor-pointer"
              >
                Privacy Policy <ExportOutlined />
              </span>
            </p>
            <br />
            <br />
            <br />
            <Modal
              open={open}
              onOk={handleOk}
              onCancel={handleCancel}
              width={620}
              style={{ top: "50%", transform: "translateY(-50%)" }}
              footer={false}
              className="modal-meta-community-v2"
            >
              <div className="scrollable-content">
                <p style={{ fontSize: "20px", fontWeight: "700" }}>
                  Privacy Policy
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    marginBottom: "10px",
                  }}
                >
                  What is the Privacy Policy and does it cover?
                </p>
                <div className="avt_modal avt">
                  <div className="left">
                    <img className="" src="/images/star.png" alt=""></img>
                  </div>
                  <div className="middle">
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: "500px",
                        color: "green",
                      }}
                    >
                      The main thing in the section
                    </p>
                  </div>
                  <div className="right">
                    <RightOutlined />
                  </div>
                </div>
                <p
                  style={{
                    marginBottom: "8px",
                    paddingTop: "6px",
                    marginTop: "16px",
                  }}
                >
                  At Meta, we want you to understand what information we
                  collect, how we use it, and with whom we share it. let's
                  share. Therefore, we recommend that you read our Privacy
                  Policy. This will help you use{" "}
                  <span style={{ color: "rgb(66, 107, 220)" }}>
                    Meta <ExportOutlined />
                  </span>
                  's products the way you need.
                </p>
                <p
                  style={{
                    marginBottom: "8px",
                    paddingTop: "6px",
                    marginTop: "16px",
                  }}
                >
                  In the Privacy Policy, we explain how we collect, use, store
                  information, and We also share it. We also tell you about your
                  rights. Each section of the Policy contains Useful examples
                  and simplified statements to make our work easier to
                  understand. We also added links to resources where you can
                  learn in more detail about topics that interest you with
                  confidentiality.
                </p>
                <p
                  style={{
                    marginBottom: "28px",
                    paddingTop: "6px",
                    marginTop: "16px",
                  }}
                >
                  It is important to us that you know how to manage your privacy
                  (confidentiality), so we also We show you where in the
                  settings of the Meta Products you use you can manage your
                  data. You you can{" "}
                  <span style={{ color: "rgb(66, 107, 220)" }}>
                    update these settings <ExportOutlined />
                  </span>{" "}
                  to personalize your user experience.
                </p>
                <div className="avt_modal avt">
                  <div className="middle">
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: "500px",
                        marginLeft: "10px",
                        opacity: "0.9",
                      }}
                    >
                      What products are covered by this policy?
                    </p>
                  </div>
                  <div className="right">
                    <RightOutlined />
                  </div>
                </div>
                <div className="avt_modal avt">
                  <div className="middle">
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: "500px",
                        marginLeft: "10px",
                        opacity: "0.9",
                      }}
                    >
                      Learn more about managing your privacy at Privacy Center?
                    </p>
                  </div>
                  <div className="right">
                    <RightOutlined />
                  </div>
                </div>

                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    marginBottom: "10px",
                    marginTop: "20px",
                  }}
                >
                  What information do we collect?
                </p>
                <p
                  style={{
                    marginBottom: "8px",
                    paddingTop: "6px",
                    marginTop: "16px",
                  }}
                >
                  The information we collect and process about you depends on
                  how you use our{" "}
                  <span style={{ color: "rgb(66, 107, 220)" }}>
                    Products <ExportOutlined />
                  </span>
                  . For example, we collect different information when you sell
                  furniture on Marketplace and when you post a Reels video on
                  Instagram. We collect data about you when you use our
                  Products,{" "}
                  <span style={{ color: "rgb(66, 107, 220)" }}>
                    even if you do not have an account <ExportOutlined />
                  </span>
                  .
                </p>
                <p
                  style={{
                    marginBottom: "16px",
                    paddingTop: "6px",
                    marginTop: "16px",
                  }}
                >
                  The following are the types of data we collect:
                </p>

                <div className="avt_modal avt">
                  <div className="middle">
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: "500px",
                        marginLeft: "10px",
                        opacity: "0.9",
                      }}
                    >
                      Your actions and information you provide to us
                    </p>
                  </div>
                  <div className="right">
                    <RightOutlined />
                  </div>
                </div>
                <div className="avt_modal avt">
                  <div className="middle">
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: "500px",
                        marginLeft: "10px",
                        opacity: "0.9",
                      }}
                    >
                      Friends, subscribers and other contacts
                    </p>
                  </div>
                  <div className="right">
                    <RightOutlined />
                  </div>
                </div>
                <div className="avt_modal avt">
                  <div className="middle">
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: "500px",
                        marginLeft: "10px",
                        opacity: "0.9",
                      }}
                    >
                      Application, browser and device information
                    </p>
                  </div>
                  <div className="right">
                    <RightOutlined />
                  </div>
                </div>
                <div className="avt_modal avt">
                  <div className="middle">
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: "500px",
                        marginLeft: "10px",
                        opacity: "0.9",
                      }}
                    >
                      Information from Partners, suppliers and other third
                      parties
                    </p>
                  </div>
                  <div className="right">
                    <RightOutlined />
                  </div>
                </div>

                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    marginBottom: "10px",
                    marginTop: "20px",
                  }}
                >
                  What happens if you do not allow us to collect certain types
                  of information?
                </p>
                <p
                  style={{
                    marginBottom: "16px",
                    paddingTop: "6px",
                    marginTop: "16px",
                  }}
                >
                  Some information is necessary for the operation of our
                  Products. Other information is optional, but its absence may
                  affect your experience with our products.{" "}
                  <span style={{ color: "rgb(66, 107, 220)" }}>
                    More details <ExportOutlined />
                  </span>
                  .
                </p>

                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    marginBottom: "10px",
                  }}
                >
                  What if the information we collect does not personally
                  identify individuals?
                </p>
                <p
                  style={{
                    marginBottom: "16px",
                    paddingTop: "6px",
                    marginTop: "16px",
                  }}
                >
                  In some cases, before third parties make information available
                  to us, they de-identify, aggregate, or anonymize it so that it
                  cannot be used to identify individual individuals. We use this
                  information as described below, without attempting to
                  re-identify individuals.
                </p>

                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    marginBottom: "10px",
                    marginTop: "20px",
                  }}
                >
                  Data control
                </p>
                <div className="avt_modal avt">
                  <div className="left">
                    <img className="" src="/images/avt2.png" alt=""></img>
                  </div>
                  <div className="middle">
                    <p style={{ fontSize: "14px", fontWeight: "500px" }}>
                      Manage information we collect about you
                    </p>
                    <p
                      style={{
                        fontSize: "13px",
                        fontWeight: "300px",
                        opacity: "0.8",
                      }}
                    >
                      Privacy Center
                    </p>
                  </div>
                  <div className="right">
                    <RightOutlined />
                  </div>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MetaCommunityPage;
