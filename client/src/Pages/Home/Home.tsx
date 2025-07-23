
import photo2 from "../../assets/photos/imageT2.2.jpg";
import photo1 from "../../assets/photos/image5hs.png";
import imageT4 from "../../assets/photos/imageT4.png";
import imageT5 from "../../assets/photos/imageT5.jpg";
import { palette } from "../../palette/palette";
import { Section } from "../../Components/UI/Section";
import { resizeRatio } from "../../modules/resizeRatio";

export const Home = () => {

  return (
    <Section className="home-page" column width="100%">
    <Section
      className="cover-photo-container"
      as="section"
      position="absolute"
      center
      width="100vw"
      height={700}
      mobile={{ height: 400 }}
      zIndex={4}
      role="banner"
      ariaLabel="Cover photo section featuring Teresa Laughner, professional bartender"
      style={{
        left: '0',
        right: '0',
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)',
      }}
    >
      {/* Background Image */}
      <Section
        className="cover-photo-background"
        as="div"
        position="absolute"
        width="100%"
        height="100%"
        bgImage={photo2}
        bgSize="cover"
        bgPosition="center"
        bgAttachment="scroll"
        borderRadius={10}
        maskImage="linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 2%)"
        willChange="transform"
        zIndex={-1}
        role="img"
        ariaLabel="Cocktail preparation background showcasing bartending craftsmanship"
      />

      {/* Overlay */}
      <Section
        className="cover-photo-overlay"
        position="absolute"
        width="100%"
        height="100%"
        borderRadius={10}
        zIndex={9}
        style={{
          backgroundImage: `linear-gradient(45deg, ${palette.white("0")} 55%, ${palette.white(".2")} 65%, ${palette.white("0")} 70%, ${palette.white("0")} 100%)`,
        }}
      />

      {/* Title Container */}
      <Section
        className="cover-photo-title-container"
        position="relative"
        width="100%"
        height="100%"
        column
        center
        zIndex={4}
        marginTop={80}
        mobile={{ marginTop: 40 }}
      >
        {/* Title Border Card */}
        <Section
          className="cover-photo-title-card"
          column
          center
          bg="primary"
          bgAlpha=".9"
          color="tertiary"
          padding={25}
          mobile={{ fontSize: 45, padding: 12, width: 330 }}
          border
          borderColor="tertiary"
          borderAlpha=".7"
          borderRadius={10}
          shadow="lg"
          fontSize={100}
          backdropFilter="blur(5px)"
          style={{
            borderWidth: resizeRatio('12px'),
          }}
        >
          {/* Main Title */}
          <Section
            className="cover-photo-main-title"
            color="tertiary"
            borderRadius={10}
            fontSize="1.5em"
            mobile={{ fontSize: "1.1em" }}
            textAlign="center"
            fontWeight="bold"
            filter={`drop-shadow(0px 5px 1px ${palette.primary('.6')})`}
          >
            COCKTAILS
          </Section>

          {/* Subtitle with lines */}
          <Section className="cover-photo-subtitle-container" row around width="100%">
            <Section
              className="cover-photo-line-left"
              width="30%"
              height="50%"
              color="tertiary"
              filter={`drop-shadow(0px 1px 1px ${palette.primary('1')})`}
              style={{
                borderBottom: resizeRatio('5px') + ' solid ' + palette.tertiary(),
              }}
            />
            <Section
              className="cover-photo-subtitle"
              color="tertiary"
              fontSize=".8em"
              mobile={{ fontSize: ".55em" }}
              textAlign="center"
              filter={`drop-shadow(0px 1px 1px ${palette.primary('1')})`}
            >
              by T
            </Section>
            <Section
              className="cover-photo-line-right"
              width="30%"
              height="50%"
              color="tertiary"
              filter={`drop-shadow(0px 1px 1px ${palette.primary('1')})`}
              style={{
                borderBottom: resizeRatio('5px') + ' solid ' + palette.tertiary(),
              }}
            />
          </Section>

          {/* Name */}
          <Section
            className="cover-photo-name"
            color="contrast"
            colorAlpha=".7"
            fontSize=".6em"
            mobile={{ fontSize: ".45em" }}
            textAlign="center"
            filter={`drop-shadow(0px 1px 3px ${palette.primary('.1')})`}
          >
            Teresa Laughner
          </Section>

          {/* Title */}
          <Section
            className="cover-photo-position"
            color="tertiary"
            fontSize=".5em"
            mobile={{ fontSize: ".38em" }}
            fontStyle="italic"
            textAlign="center"
            filter={`drop-shadow(0px 1px 1px ${palette.primary('.7')})`}
          >
            Proprietor/Bartendress
          </Section>

          {/* Profile Image */}
          <Section
            as="img"
            className="cover-photo-profile-image"
            height="100%"
            position="absolute"
            bottomPos={0}
            rightPos="-5%"
            borderRadius={10}
            transform="translateX(50%)"
            filter={`drop-shadow(10px 10px 10px ${palette.black()})`}
            src={photo1}
            alt="Teresa Laughner"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            style={{
              objectFit: 'cover',
            }}
          />
        </Section>
      </Section>
    </Section>

    {/* Bio Section */}
    <Section
      className="bio-section"
      as="section"
      column
      center
      width="100%"
      marginTop={750}
      padding="80px 40px"
      mobile={{
        marginTop: 420,
        padding: "30px 8px"
      }}
      role="main"
      ariaLabel="About Teresa Laughner - Professional Bartender Biography"
    >
      {/* Bio Title */}
      <Section
        className="bio-title"
        center
        marginBottom={60}
        mobile={{ marginBottom: 20 }}
      >
        <Section
          className="bio-title-text"
          color="tertiary"
          fontSize={100}
          mobile={{ fontSize: 65, letterSpacing: "0.02em" }}
          fontWeight="bold"
          textAlign="center"
          filter={`drop-shadow(0px 3px 2px ${palette.primary('.4')})`}
          letterSpacing="0.05em"
        >
          Meet Teresa
        </Section>
      </Section>

      {/* Bio Content Container */}
      <Section
        className="bio-content-container"
        row
        mobileColumn
        center
        width="100%"
        maxWidth={1400}
        gap={60}
        mobile={{
          maxWidth: "100%",
          gap: 40
        }}
      >
        {/* Left Image */}
        <Section
          className="bio-image-left"
          width={300}
          height={400}
          mobile={{
            width: 250,
            height: 320
          }}
          borderRadius={15}
          overflow="hidden"
          shadow="lg"
          style={{
            flexShrink: 0,
          }}
        >
          <img
            src={imageT5}
            alt="Teresa Laughner crafting cocktails"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: `drop-shadow(5px 5px 10px ${palette.black('0.3')})`,
            }}
            loading="lazy"
          />
        </Section>

        {/* Bio Text */}
        <Section
          className="bio-text"
          column
          flex="1"
          gap={25}
          padding={20}
          mobile={{
            gap: 20,
            padding: 15
          }}
          bg="primary"
          bgAlpha="0.3"
          borderRadius={15}
          border
          borderColor="tertiary"
          borderAlpha="0.3"
          backdropFilter="blur(10px) saturate(1.2)"
        >
          <Section
            className="bio-paragraph"
            color="tertiary"
            fontSize={32}
            mobile={{ fontSize: 22 }}
            lineHeight="1.6"
            textAlign="left"
            filter={`drop-shadow(0px 1px 2px ${palette.primary('.3')})`}
          >
            With over a decade of experience behind the bar, Teresa Laughner has mastered the art of mixology and hospitality. Her journey began in intimate cocktail lounges where she developed her signature style of combining classic techniques with innovative flavor profiles.
          </Section>

          <Section
            className="bio-paragraph"
            color="tertiary"
            fontSize={32}
            mobile={{ fontSize: 22 }}
            lineHeight="1.6"
            textAlign="left"
            filter={`drop-shadow(0px 1px 2px ${palette.primary('.3')})`}
          >
            Teresa's passion for craft cocktails extends beyond mixing drinks—she believes in creating memorable experiences through carefully curated ingredients, artful presentation, and genuine connection with every guest who visits her bar.
          </Section>

          <Section
            className="bio-paragraph"
            color="tertiary"
            fontSize={32}
            mobile={{ fontSize: 22 }}
            lineHeight="1.6"
            textAlign="left"
            filter={`drop-shadow(0px 1px 2px ${palette.primary('.3')})`}
          >
            Whether crafting a perfect Old Fashioned or developing a bespoke cocktail menu, Teresa brings creativity, precision, and warmth to every aspect of her craft.
          </Section>
        </Section>

        {/* Right Image */}
        <Section
          className="bio-image-right"
          width={300}
          height={400}
          mobile={{
            width: 250,
            height: 320
          }}
          borderRadius={15}
          overflow="hidden"
          shadow="lg"
          style={{
            flexShrink: 0,
          }}
        >
          <Section
            as="img"
            width="100%"
            height="100%"
            src={imageT4}
            alt="Teresa Laughner in her element"
            loading="lazy"
            filter={`drop-shadow(5px 5px 10px ${palette.black('0.3')})`}
            style={{
              objectFit: 'cover',
            }}
          />
        </Section>
      </Section>
    </Section>

    </Section>
  );
};
