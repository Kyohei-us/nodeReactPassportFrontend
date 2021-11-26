import ResponsiveGrid from "../components/responsiveGrid";
import useFetchYoutubeLikedVideos from "../hooks/useFetchYoutubeLikedVideos";

const YoutubeLikedVideos = () => {
  const youtubeLikedVideos = useFetchYoutubeLikedVideos();
  return (
    <>
      <div>
        {youtubeLikedVideos ? (
          <ResponsiveGrid
            contents={youtubeLikedVideos.data.items.map(
              (ele: any) => ele.snippet.title
            )}
          />
        ) : (
          "Loading..."
        )}
      </div>
    </>
  );
};

export default YoutubeLikedVideos;
