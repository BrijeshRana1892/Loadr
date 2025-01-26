import React from 'react';
import HeroVideo from '../assets/img/hero.mp4';
import UploadArea from './UploadArea';

const Home = () => {
  return (
    <div className="hero">
      <div className="hero__left">
        <h1 className="hero__title">
          Streamlining File Sharing
        </h1>
        <h1 className="hero__subtitle">
          Get Shareable Link & <br /> Automate Link Sharing via EMail.
        </h1>
        <UploadArea />
      </div>
      <div className="hero__right">
        <video
          src={HeroVideo}
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '100%',
            maxWidth: '500px',
            borderRadius: '10px',
            objectFit: 'cover'
          }}
        />
      </div>
    </div>
  );
};

export default Home;
