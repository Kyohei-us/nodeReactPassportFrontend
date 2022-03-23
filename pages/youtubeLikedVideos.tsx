import ResponsiveGrid from "../components/responsiveGrid";
import useFetchYoutubeLikedVideos from "../hooks/useFetchYoutubeLikedVideos";
import styles from "../styles/YoutubeLikedVideos.module.css"

const YoutubeLikedVideos = () => {
  const youtubeLikedVideos = useFetchYoutubeLikedVideos();
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {youtubeLikedVideos ? (
          <ResponsiveGrid
            contents={youtubeLikedVideos.data.items.map(
              (ele: any) => {
                let tempEle = {"content": ele.snippet.title, "link": "https://nodereactpassport.herokuapp.com/api/youtube/popularVideosByChannelId/" + ele.snippet.channelId}
                return tempEle
              } 
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
