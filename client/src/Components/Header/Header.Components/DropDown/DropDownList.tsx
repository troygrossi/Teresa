import { Section } from "../../../UI/Section";
import { palette } from "../../../../palette/palette";
import { ILink } from "../links";

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
    <Section
      className="dropdown-list"
      data-drop-down="true"
      position="fixed"
      width="100vw"
      column
      bg="primary"
      bgAlpha="0.95"
      overflow="hidden"
      zIndex={1000}
      shadow={dropDown ? `0 8px 24px -4px ${palette.black('0.3')}` : false}
      transition
      topPos={75}
      leftPos={0}
      mobile={{
        maxHeight: dropDown ? '250px' : '0px'
      }}
      style={{
        maxHeight: dropDown ? '300px' : '0px',
        backdropFilter: 'blur(10px) saturate(1.2)',
        opacity: dropDown ? 1 : 0,
        transform: dropDown ? 'translateY(0)' : 'translateY(-10px)',
      }}
    >
      {links.map((link, index) => (
        <Section
          key={index}
          className="dropdown-link"
          data-drop-down="true"
          height={dropDown ? 70 : 0}
          center
          padding="0 30px"
          color="tertiary"
          overflow="hidden"
          mobile={{
            height: dropDown ? 60 : 0,
            padding: "0 20px",
            border: link.title === 'Contact' ? '1px solid' : false,
            margin: link.title === 'Contact' ? '8px 15px' : '0',
            fontSize: 28
          }}
          onClick={() => {
            link.onClick();
            setTimeout(() => setDropDown(false), 300);
          }}
          border={link.title === 'Contact' ? '2px solid' : false}
          borderColor={link.title === 'Contact' ? 'tertiary' : undefined}
          borderAlpha={link.title === 'Contact' ? '0.2' : undefined}
          borderRadius={link.title === 'Contact' ? 8 : 0}
          margin={link.title === 'Contact' ? '10px 20px' : '0'}
          fontSize={32}
          transition
          style={{
            fontWeight: link.title === 'Contact' ? '600' : '500',
            cursor: 'pointer',
            opacity: dropDown ? 1 : 0,
            transform: dropDown ? 'translateY(0)' : 'translateY(-10px)',
            transitionDelay: dropDown ? `${index * 100}ms` : '0ms',
            justifyContent: 'center',
            alignItems: 'center',
            ...(index < links.length - 1 && link.title !== 'Contact' && {
              borderBottom: `1px solid ${palette.tertiary('0.2')}`,
            }),
          }}
        >
          {link.title}
        </Section>
      ))}
    </Section>
  );
};