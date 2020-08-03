import React from 'react';
import { apiUrl } from '../../utils/functions';


const CardIcon = ({ src, alt = '' }) =>
  <img src={apiUrl(src)} alt={alt} />


export default CardIcon;
