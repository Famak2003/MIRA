import "./authPages.scss";

import NAMEAVATAR from "./../../assets/avatar.png";
import PASS from "./../../assets/lock.png";

import { AutoComplete, Form, Input } from "antd";
import handleAutoSearch from "../../utilities/handleAutoSearch";
import { useState } from "react";

function CreateAccount() {
  const [option, setOption] = useState([]);

  return (
    <>
      <Form.Item name={"name"}>
        <Input
          className=" input h-[5.3rem] rounded-3xl bg-charcoal-gray border-none "
          placeholder=" &nbsp; Enter Your Name"
          prefix={<img src={NAMEAVATAR} alt="name" />}
          required
        />
      </Form.Item>
      <Form.Item name={"email"}>
        <AutoComplete
          className=" autocomplete text-start w-full h-[5.3rem]  "
          placeholder=" &nbsp; Enter Your Name"
          onSearch={(value) => handleAutoSearch(value, setOption)}
          options={option}
          aria-required
        />
      </Form.Item>
      <Form.Item name={"password"}>
        <Input.Password
          className=" input h-[5.3rem] rounded-3xl bg-charcoal-gray border-none "
          placeholder=" &nbsp; Enter Your Password"
          prefix={<img src={PASS} alt="password" />}
          required
        />
      </Form.Item>
    </>
  );
}

export default CreateAccount;
