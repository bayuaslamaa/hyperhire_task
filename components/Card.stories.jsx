import { Card } from "./Card";

export default {
  title: "Card",
  component: Card,
  argTypes: {
    onPinCard: { action: "onPinCard" },
    onArchiveCard: { action: "onArchiveCard" },
  },
};

export const Default = {
  args: {
    card: {
      id: "1",
      title: "Test Card",
      place: "1112",
      state: "CARD_INBOX",
    },
  },
};
