import "./button.scss";

import { Button } from "antd";

function Primary({ type = "button", handleClick, children }) {
  return (
    <Button
      type="primary"
      htmlType={type}
      onClick={handleClick}
      className=" chatAI-Btn "
    >
      {children}
    </Button>
  );
}

export default Primary;
