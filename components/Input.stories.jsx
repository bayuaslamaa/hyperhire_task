import { Input } from "./Input";

export default {
  title: "Input",
  component: Input,
  argTypes: {
    onClick: { action: "onClick" },
    onChange: { action: "onChange" },
  },
};

export const Default = {
  args: {
    input: {
      id: "1",
      title: "Test Input",
      state: "INPUT_DEFAULT",
    },
  },
};

export const Down = {
  args: {
    input: { ...Default.args.input, state: "INPUT_DOWN" },
  },
};

export const Archived = {
  args: {
    input: {
      ...Default.args.input,
      state: "INPUT_ARCHIVED",
    },
  },
};
