import { Style } from "../../_style_/Header.style";

const { DropDownSC, ...style } = Style();

interface IDropDown {
  setDropDown(arg: boolean): void;
  dropDown: boolean;
}
export const DropDown: React.FC<IDropDown> = ({ setDropDown, dropDown }) => {
  return (
    <DropDownSC
      data-drop-down="true"
      onClick={() => {
        setDropDown(!dropDown);
      }}
    >
      <div data-drop-down="true" style={style.dropDownLine()}></div>
      <div data-drop-down="true" style={style.dropDownLine()}></div>
      <div data-drop-down="true" style={style.dropDownLine()}></div>
    </DropDownSC>
  );
};
