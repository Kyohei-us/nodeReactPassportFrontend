import useFetchYoutubeLikedVideos from "../hooks/useFetchYoutubeLikedVideos";

const YoutubeLikedVideos = () => {
  const youtubeLikedVideos = useFetchYoutubeLikedVideos();
  return <>{youtubeLikedVideos ? youtubeLikedVideos : "Loading..."}</>;
};

export default YoutubeLikedVideos;
