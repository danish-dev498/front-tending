'use client';

import axios from 'axios';
import React, { useEffect, useState } from 'react';

axios.defaults.baseURL = 'https://opentdb.com';

// const useFetch = ({ url }) => {

//   console.log('=========URL======', url)
//   const abortController = new AbortController();

//   const [response, setResponse] = useState(null);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {

//     const FetchData = async () => {
//       try {
//         const response = await axios.get(url, {
//           // cancelToken: abortController.signal.token,
//         });
//         setResponse(response.data);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     FetchData();

//     // return () => {
//     //   abortController.abort();
//     // };
//   }, [url]);

//   return { response, error, loading };
// };

// export default useFetch;

class APIRequest {
  
  static getRequest=async(url)=>{
    const response = await axios.get(url);
    response.data;
  }
  static postRequest=async(url,data)=>{
    let headers={
      'Authorization':'Bearer ...'
    }
    const response = await axios.post(url, data, headers);
    response.data;
  }
  static putRequest=async(url,data)=>{
    const response = await axios.put(url, data, headers);
    response.data;
  }
  static deleteRequest=async(url)=>{
    const response = await axios.delete(url, data, headers);
    response.data;
  }


}

export default APIRequest;