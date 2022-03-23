import ResponsiveGrid from "../components/responsiveGrid";
import useFetchYoutubeLikedVideos from "../hooks/useFetchYoutubeLikedVideos";

const YoutubeLikedVideos = () => {
  const youtubeLikedVideos = useFetchYoutubeLikedVideos();
  return (
    <div>
      <main style={{width: "80vw"}}>
        {youtubeLikedVideos ? (
          <ResponsiveGrid
            contents={youtubeLikedVideos.data.items.map(
              (ele: any) => ele.snippet.title
            )}
          />
        ) : (
          "Loading..."
        )}
      </main>
    </div>
  );
};

export default YoutubeLikedVideos;
