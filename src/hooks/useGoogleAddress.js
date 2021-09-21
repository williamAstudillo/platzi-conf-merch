import { useState, useEffect } from 'react';
import env from 'react-dotenv';
import axios from 'axios';

const useGoogleAddress = (address) => {
  const [map, setMap] = useState();
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${env.API_GOOGLE}`;
  
  useEffect(async () => {
    const response = await axios(API);
    console.log(env.API_GOOGLE, 'responseeeeeeeeeeee');
    setMap(response.data.results[0].geometry.location);
  }, []);
  return map;
};

export default useGoogleAddress;
