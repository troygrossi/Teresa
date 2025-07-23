import { Section } from "../../../UI/Section";

interface IDropDown {
  setDropDown(arg: boolean): void;
  dropDown: boolean;
}

export const DropDown: React.FC<IDropDown> = ({ setDropDown, dropDown }) => {
  return (
    <Section
      className="dropdown-button"
      as="button"
      column
      center
      width={50}
      height={50}
      padding={12}
      borderRadius={8}
      data-drop-down="true"
      mobile={{
        width: 40,
        height: 40,
        padding: 8
      }}
      onClick={(e) => {
        e.stopPropagation();
        console.log('Hamburger clicked, current state:', dropDown);
        setDropDown(!dropDown);
      }}
      style={{
        cursor: 'pointer',
        border: 'none',
        background: 'transparent',
        justifyContent: 'space-around',
      }}
    >
      {[1, 2, 3].map((_, index) => (
        <Section
          key={index}
          data-drop-down="true"
          width="100%"
          height={3}
          bg="tertiary"
          borderRadius={8}
          mobile={{
            height: 2
          }}
          style={{
            transition: 'all 0.3s ease',
            transformOrigin: 'center',
            transform: dropDown 
              ? index === 0 
                ? 'rotate(45deg) translateY(4px) translateX(5px)' 
                : index === 2 
                  ? 'rotate(-45deg) translateY(-5px) translateX(5px)' 
                  : 'scaleX(0)'
              : 'none',
            opacity: dropDown && index === 1 ? 0 : 1,
          }}
        />
      ))}
    </Section>
  );
};