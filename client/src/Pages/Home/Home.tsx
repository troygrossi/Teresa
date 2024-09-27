// import photo1 from "../../assets/photos/imageT2.2.jpg";
// import photo2 from "../../assets/photos/imageT4.png";
import photo3 from "../../assets/photos/image5hs.png";
import { Style } from "./_style_/home.style";
import { useSelector } from "../../redux/redux";

const {
  ImageContainerSC,
  ResponsiveImageSC,
  PageLayoutSC,
  Title1SC,
  Title2SC,
  Title3SC,
    Section,
  ...style
} = Style();


export const Home = () => {
  const window = useSelector((state) => state.window.windowQuery);

  return (
    <PageLayoutSC window={window}>
      <Section row center top style={style.imageColumn()}  window={window} h="1000px">
        {!window?.desktop ? (
     
            <Section column center  window={window} h="300px"  hTS='220px' hM='150px' w="100%">
              <div style={style.titleContainer2({ window })}>
                <Title1SC window={window}>Cocktails</Title1SC>
                <Title2SC window={window}>by</Title2SC>
                <Title3SC window={window}>T</Title3SC>
              </div>
          
                <ImageContainerSC w="300px" wTS='200px' wM='130px' m='0px 0px 0px min(260px, 24vw)' mM='0px 0px 0px 100px'  h='260px' hM='150px'  window={window}>
                  <ResponsiveImageSC window={window} src={photo3} />
                </ImageContainerSC>
          
            </Section>
    
        ) : (
          <>
            <Section column flex={1}></Section>
            <Section column center left
            window={window} h="600px" w="800px"  wTB="800px">
              <div style={style.titleContainer1()}>
                <Title1SC window={window}>Cocktails</Title1SC>
                <Title2SC window={window}>by</Title2SC>
                <Title3SC window={window}>T</Title3SC>
              </div>

              <ImageContainerSC w="70%"  window={window}>
                <ResponsiveImageSC window={window} src={photo3} />
              </ImageContainerSC>
            </Section>
          </>
        )}
      </Section>
    </PageLayoutSC>
  );
};
