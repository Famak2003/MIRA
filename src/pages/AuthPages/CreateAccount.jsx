import "./authPages.scss";

import NAMEAVATAR from "./../../assets/avatar.png";
import PASS from "./../../assets/lock.png";

import { AutoComplete, Form, Input } from "antd";
import handleAutoSearch from "../../utilities/handleAutoSearch";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function CreateAccount() {
  const { t } = useTranslation();
  const [option, setOption] = useState([]);

  return (
    <>
      <Form.Item name={"name"}>
        <Input
          className=" input h-[5.3rem] rounded-3xl bg-charcoal-gray border-none "
          placeholder={` ${t("ENTER_YOUR_NAME")}`}
          prefix={<img src={NAMEAVATAR} alt="name" />}
          required
        />
      </Form.Item>
      <Form.Item name={"email"}>
        <AutoComplete
          className=" autocomplete text-start w-full h-[5.3rem]  "
          placeholder={` ${t("ENTER_MAIL")}`}
          onSearch={(value) => handleAutoSearch(value, setOption)}
          options={option}
          aria-required
        />
      </Form.Item>
      <Form.Item name={"password"}>
        <Input.Password
          className=" input h-[5.3rem] rounded-3xl bg-charcoal-gray border-none "
          placeholder={` ${t("ENTER_PASSWORD")}`}
          prefix={<img src={PASS} alt="password" />}
          required
        />
      </Form.Item>
    </>
  );
}

export default CreateAccount;
