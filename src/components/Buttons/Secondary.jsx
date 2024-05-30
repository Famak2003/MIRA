import { Button } from "antd";

function Secondary({ type = "button", handleClick, children }) {
  return (
    <Button
      type="secondary"
      htmlType={type}
      onClick={handleClick}
      className=" secondary-btn "
    >
      {children}
    </Button>
  );
}

export default Secondary;
