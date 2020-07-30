import React from 'react';
import { apiUrl } from '../utils/functions';

export default function CardIcon({ src, alt='' }) {
  return <img src={apiUrl(src)} alt={alt} />
}
