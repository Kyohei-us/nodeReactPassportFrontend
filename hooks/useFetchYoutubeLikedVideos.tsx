import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useEffect, useState } from "react";

export default function useFetchYoutubeLikedVideos() {
  let baseURL = `https://nodereactpassport.herokuapp.com`;
  let url = `${baseURL}/api/youtube/getLikedVideos`;

  const [response, setResponse] = useState<AxiosResponse>();

  useEffect(() => {
    const result = async () => {
      let options: AxiosRequestConfig = {
        url: url,
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      };
      let ret = await axios(options);
      setResponse(ret);
      console.log(ret);
    };
    result();
  }, []);

  return response;
}
