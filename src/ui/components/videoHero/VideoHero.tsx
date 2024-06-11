import * as React from 'react';
import * as styles from './VideoHero.module.scss'
import video from '../../../images/file_example_MP4_480_1_5MG.mp4'

export const VideoHero = () => {

  return (
    <video autoPlay muted loop className={styles.videoHero}>
      <source src={video} type="video/mp4" />
    </video>

  );
};
