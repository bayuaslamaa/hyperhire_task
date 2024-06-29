import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    onClickLeftButton: { action: "onClickLeftButton" },
    onClickRightButton: { action: "onClickRightButton" },
  },
};

export const Default = {
  args: {
    button: {
      id: "1",
      title: "Test Button",
      state: "BUTTON_DEFAULT",
    },
  },
};

export const Pinned = {
  args: {
    button: {
      ...Default.args.button,
      state: "BUTTON_PINNED",
    },
  },
};

export const Archived = {
  args: {
    button: {
      ...Default.args.button,
      state: "BUTTON_ARCHIVED",
    },
  },
};
export const Login = {
  args: {
    button: {
      ...Default.args.button,
      state: "BUTTON_LOGIN",
    },
  },
};
