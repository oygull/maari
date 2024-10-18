import React from 'react';
import styles from './loader.module.scss'; 
import videoFile from './loader-bg.mp4';

const Loader: React.FC = () => {
  return (
    <div className={styles.loaderWrapper}>
      <video autoPlay muted loop playsInline id="background-video" className={styles.video}>
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Loader;