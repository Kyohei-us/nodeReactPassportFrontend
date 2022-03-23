
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
                            {ele.title}
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