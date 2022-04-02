import Typography from "@mui/material/Typography";
import ResponsiveGrid from "../components/responsiveGrid";
import useFetchYoutubeLikedVideos from "../hooks/useFetchYoutubeLikedVideos";
import styles from "../styles/YoutubeLikedVideos.module.css"

const YoutubeLikedVideos = () => {
  const youtubeLikedVideos = useFetchYoutubeLikedVideos();
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {youtubeLikedVideos ? (
          <>
            <Typography variant="h2" gutterBottom component="div">
              Your Liked Videos
            </Typography>
            <ResponsiveGrid
              contents={youtubeLikedVideos.data.items.map(
                (ele: any) => {
                  let tempEle = {"content": ele.snippet.title, "link": "/youtubeLikedVideo?channelId=" + ele.snippet.channelId}
                  return tempEle
                } 
              )}
            />
          </>
        ) : (
          "Loading..."
        )}
      </main>
    </div>
  );
};

export default YoutubeLikedVideos;
