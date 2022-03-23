
import { useRouter } from "next/router";
import useFetchYoutubePopularVideos from "../hooks/useFetchYoutubeChannelPopularVideos";

const YoutubeLikedVideo = () => {
    const router = useRouter();
    const channelId = router.query.channelId;
    let mainBody = null;
    if (channelId && typeof(channelId) == "string") {
        mainBody = useFetchYoutubePopularVideos(channelId);
    }
  return (
    <div>
      <main>
        { mainBody ? (
            <>
                <h1>{mainBody.data.items[0].snippet.channelTitle}</h1>
                {
                    mainBody.data.items.map((ele: any) => {
                        return <div>
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