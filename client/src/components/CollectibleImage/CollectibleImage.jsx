import React from 'react';
import Image from '../Image/Image';
import { collectibleImage } from "./CollectibleImage.module.sass";


const CollectibleImage = ({ src, alt = "" }) =>
  <Image variant={collectibleImage} src={src} alt={alt} />


export default CollectibleImage;
