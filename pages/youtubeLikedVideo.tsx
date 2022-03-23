
import { useRouter } from "next/router";

const YoutubeLikedVideo = () => {
    const router = useRouter();
    const channelId = router.query.channelId;
  return (
    <div>
      <main>
        {channelId ? (
          channelId
        ) : (
          "Loading..."
        )}
      </main>
    </div>
  );
};

export default YoutubeLikedVideo;