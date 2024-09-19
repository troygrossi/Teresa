import { Style } from "../../_style_/Header.style";
import { ILink } from "../links";

const { DropDownListSC, DropDownLinkSC, LinkTitleSC } = Style();

interface IDropDownList {
  setDropDown(arg: boolean): void;
  dropDown: boolean;
  links: Array<ILink>;
}
export const DropDownList: React.FC<IDropDownList> = ({
  links,
  dropDown,
  setDropDown,
}) => {
  return (
    <DropDownListSC
      data-drop-down="true"
      id="drop-down-list"
      dropDown={dropDown}
    >
      {links.map((link, index) => (
        <DropDownLinkSC data-drop-down="true" key={index} dropDown={dropDown}>
          <LinkTitleSC
          data-drop-down="true"
            onClick={() => {
              setTimeout(() => {
                console.log("test");
                setDropDown(false);
              }, 500);

              link.onClick();
            }}
          >
            {link.title}
          </LinkTitleSC>
        </DropDownLinkSC>
      ))}
    </DropDownListSC>
  );
};
