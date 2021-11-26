import useFetchYoutubeLikedVideos from "../hooks/useFetchYoutubeLikedVideos";

const YoutubeLikedVideos = () => {
  const youtubeLikedVideos = useFetchYoutubeLikedVideos();
  return <>{youtubeLikedVideos ? youtubeLikedVideos.data : "Loading..."}</>;
};

export default YoutubeLikedVideos;
