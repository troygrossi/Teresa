import React from 'react';
import { Section } from './Section';
import { palette } from '../../palette/palette';
import { resizeRatio } from '../../modules/resizeRatio';
import './LoadingScreen.css';
import LoadingGif from '../../assets/animations/Loading-Gif.gif';

interface LoadingScreenProps {
  progress: number;
  error?: string | null;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ progress, error }) => {
  return (
    <Section
      className="loading-screen"
      width="100vw"
      height="100vh"
      center
      column
      bg="black"
      color="tertiary"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999,
      }}
    >
      <Section className="loading-content" center column gap="30px">
        {/* Logo/GIF Section */}
        <Section className="loading-logo" center column gap="20px">
          {/* Loading Cocktail GIF */}
          <Section
            as="img"
            className="loading-gif"
            src={LoadingGif}
            alt="Loading cocktails..."
            width={120}
            height={120}
            mobile={{
              width: 80,
              height: 80
            }}
            style={{
              borderRadius: '15px',
              filter: 'brightness(1.1) drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.3))',
              marginBottom: '10px',
            }}
          />
          
          <Section 
            className="loading-text"
            fontSize={48}
            mobile={{ fontSize: 32 }}
            fontWeight="bold"
            textAlign="center"
            filter={`drop-shadow(0px 3px 6px ${palette.primary('0.4')})`}
          >
            Cocktails by T
          </Section>
        </Section>
        
        {/* Loading bar */}
        <Section
          className="loading-bar-container"
          width="300px"
          height="4px"
          bg="contrast"
          bgAlpha="0.3"
          borderRadius="2px"
          overflow="hidden"
        >
          <Section
            className="loading-bar"
            height="100%"
            bg="tertiary"
            transition
            style={{
              width: `${progress}%`,
              transition: 'width 0.3s ease',
            }}
          />
        </Section>
        
        <Section 
          className="loading-percentage"
          fontSize={16}
          mobile={{ fontSize: 14 }}
          style={{
            opacity: 0.8,
          }}
        >
          {Math.round(progress)}%
        </Section>
        
        {error && (
          <Section 
            className="loading-error"
            style={{
              fontSize: resizeRatio('14px'),
              color: palette.tertiary('0.7'),
              marginTop: '10px',
            }}
          >
            {error}
          </Section>
        )}
      </Section>
    </Section>
  );
};