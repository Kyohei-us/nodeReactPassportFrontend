import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import useFetchYoutubePopularVideos from "../hooks/useFetchYoutubeChannelPopularVideos";
import styles from "../styles/YoutubeLikedVideo.module.css"

const YoutubeLikedVideo = () => {
    const router = useRouter();
    let channelId = router.query.channelId;
    if (!channelId) {
        channelId = ""
    }
    if (typeof(channelId) !== "string"){
        channelId = ""
    }
    const mainBody = useFetchYoutubePopularVideos(channelId);
  return (
    <div>
      <main>
        { mainBody ? (
            <>
                <Typography variant="h2" gutterBottom component="div">
                  {mainBody.data.items[0].snippet.channelTitle}
                </Typography>
                {
                    mainBody.data.items.map((ele: any, index: number) => {
                        if (index < 5){
                            return <div key={index}>
                                {ele.snippet.title}: <br/>
                                <iframe className={styles.player}
                                    src={"https://www.youtube.com/embed/" + ele.id.videoId + "?autoplay=0"}
                                ></iframe>
                            </div>
                        }
                    })
                }
            </>
        ) : (
          "Loading..."
        )}
      </main>
    </div>
  );
};

export default YoutubeLikedVideo;