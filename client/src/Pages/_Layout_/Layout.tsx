import { Section } from '../../Components/UI/Section';
import { palette } from '../../palette/palette';
import cocktailBg from '../../assets/photos/cocktail-background-teal.png';

interface IWrapper {
  children: React.ReactNode;
  className?: string;
}

export const Layout: React.FC<IWrapper> = ({ children, className }) => {
  return (
    <Section
      className={`layout-wrapper ${className || ''}`}
      shadow={`inset 1px 5px 20px ${palette.secondary('.2')}, inset -1px -5px 20px ${palette.secondary('.2')}`}
      mobile={{ shadow: false }}
      width="100%"
      height="auto"
      bg="primary"
      center
      position="relative"
      overflow="visible"
      padding={0}
      margin={0}
    >
      {/* Background wallpaper */}
              <Section
        className="layout-background"
        position="absolute"
        width="100%"
        height="100%"
        bgImage={cocktailBg}
        bgSize="35% auto"
        bgPosition="center"
        bgAttachment="fixed"
        bgOpacity={0.1}
        zIndex={0}
      />
      
      {/* Main content container */}
      <Section
      position="relative"
        className="layout-page"
        width="100%"
        minHeight="100vh"
        marginTop="0px"
        marginRight="30px"
        marginBottom="30px"
        marginLeft="30px"
        borderRadius="35px"
        mobile={{
          marginTop: "0px",
          marginRight: "0px",
          marginBottom: "0px",
          marginLeft: "0px",
          borderRadius: "0px"
        }}
        bg="primary"
        bgAlpha='0'
        maxWidth="1600px"
        zIndex={1}
    
        
      >

        {children}
        
      </Section>
    </Section>
  );
};