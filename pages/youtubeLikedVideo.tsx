
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
            mainBody.data.items.map((ele: any, index: number) => {
                if (index == 0){
                    return <>
                        <h1>{ele.snippet.channelTitle}</h1>
                        <div>{ele.title}</div>
                    </>
                }
                return <div>
                    {ele.title}
                </div>
            })
        ) : (
          "Loading..."
        )}
      </main>
    </div>
  );
};

export default YoutubeLikedVideo;