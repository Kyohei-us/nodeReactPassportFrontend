
import { useRouter } from "next/router";
import useFetchYoutubePopularVideos from "../hooks/useFetchYoutubeChannelPopularVideos";

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
                <h1>{mainBody.data.items[0].snippet.channelTitle}</h1>
                {
                    mainBody.data.items.map((ele: any, index: number) => {
                        return <div key={index}>
                            {ele.snippet.title}: 
                            <iframe id="ytplayer" width="640" height="360"
                            src={"https://www.youtube.com/embed/" + ele.snippet.id.videoId + "?autoplay=0"}
                            ></iframe>
                        </div>
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