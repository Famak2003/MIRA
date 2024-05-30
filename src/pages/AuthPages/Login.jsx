import "./authPages.scss";

import LOCK from "./../../assets/lock.png";
import { AutoComplete, Form, Input } from "antd";
import { useState } from "react";
import handleAutoSearch from "../../utilities/handleAutoSearch";
import { useTranslation } from "react-i18next";

function Login() {
  const { t } = useTranslation();
  const [option, setOption] = useState([]);

  return (
    <>
      <Form.Item name="email">
        <AutoComplete
          className=" autocomplete text-start email h-[5.3rem] "
          onSearch={(value) => handleAutoSearch(value, setOption)}
          options={option}
          placeholder={` ${t("ENTER_MAIL")}`}
          aria-required
        />
      </Form.Item>
      <Form.Item name="password">
        <Input.Password
          className=" input bg-charcoal-gray h-[5.3rem] rounded-[2rem] px-[2rem] border-none "
          prefix={<img src={LOCK} alt="lock" />}
          placeholder={` ${t("ENTER_PASSWORD")}`}
          required
        />
      </Form.Item>
      <span className=" self-end text-custom-red">Forgot Password?</span>
    </>
  );
}

export default Login;
