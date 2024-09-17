import { useNavigate } from "react-router-dom";

export interface ILink {
    title: string,
    onClick(): void
}
export const useLinks = (): Array<ILink> => {
  const navigate = useNavigate();
  return [
    {
      title: "Plan Event",
      onClick() {
        navigate("/event");
      },
    },
    {
      title: "Calendar",
      onClick() {
        navigate("/calendar");
      },
    },
    {
      title: "Contact",
      onClick() {
        navigate("/contact");
      },
    },
  ];
};
