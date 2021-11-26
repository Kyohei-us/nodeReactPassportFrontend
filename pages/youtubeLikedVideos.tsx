import useFetchYoutubeLikedVideos from "../hooks/useFetchYoutubeLikedVideos";

const YoutubeLikedVideos = () => {
  const youtubeLikedVideos = useFetchYoutubeLikedVideos();
  return (
    <>
      <div>
        {youtubeLikedVideos ? youtubeLikedVideos.data.kind : "Loading..."}
      </div>
    </>
  );
};

export default YoutubeLikedVideos;
