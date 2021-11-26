import ResponsiveGrid from "../components/responsiveGrid";
import useFetchYoutubeLikedVideos from "../hooks/useFetchYoutubeLikedVideos";

const YoutubeLikedVideos = () => {
  const youtubeLikedVideos = useFetchYoutubeLikedVideos();
  return (
    <>
      <div>
        {youtubeLikedVideos ? (
          <ResponsiveGrid contents={youtubeLikedVideos.data.items} />
        ) : (
          "Loading..."
        )}
      </div>
    </>
  );
};

export default YoutubeLikedVideos;
