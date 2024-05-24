import { ChzzkClient } from "chzzk";
import { useState, useEffect } from "react";

function App() {
  const options = {
    nidAuth: "iyZp7KCVCPI8Vvax0o1Bq0EguMPVsHvANvJmMpczBX0zVb6WnRo4yaGFbiHYD81Z",
    nidSession:
      "AAABwkSreXL+cyH+avUGNJcpdjy232u18E5c8jHrjoNcxtTrY/Ao/wHc4pMGKVuWHH38melgG/Zo/rnHYCjg+p7tC7tbOO0aNsx3IHHjZd/IkBOoKLdEqbvZinTPKiY2E+L0Ph6Q15HQY9lZN6th1jL7hdmRw103nAm+haBm2phmin1sqpzcws8GcgW5OavFAL6F9PNp0KhGKt6a/tcKydelzOItgbijMIhdfRM9Gf1kbjjJvK5ZXCK+w5Oji7tVqb52+xc+BwGh1is/W/y63hY4N4L4fGHyUGqxImnAq0wtCrmrTWchhVeERCnfnH6xiAjPIhP3ACB+/+WEYUcShLDylKl7A1FnbJd5XkMoQmjKp02CUzdYlb35XpIXBCdnMOYSmzR7Ibz8M+D2ApMMNSJaPzzJNinCcENSHvqYvcfUsAFAqDQbiTF+3pKandcYadsexpd+EYLtJMexqxyT8mbUYEmhNsKfRI41WfKhlqOG3i9ln5B3mgKiQWzDunte+hjnyr9meh0UaDNXNVmlI272X8rJEyX3Al9nTaDnPl0g+cHdUuokHXVsylSmqnPBGD5pUx9b0uLZL/BMQt9llBS3bUYERddBxMDElSKwKokyeSH7",
    baseUrls: {
      chzzkBaseUrl: "https://api.chzzk.naver.com",
      gameBaseUrl: "https://comm-api.game.naver.com/nng_main",
    },
  };

  const client = new ChzzkClient(options);
  const [channelDetail, setChannelDetail] = useState(null);

  useEffect(() => {
    async function fetchChannelInfo() {
      try {
        const searchResult = await client.search.channels("한동숙");
        if (searchResult.channels.length > 0) {
          const channel = searchResult.channels[0];
          const detail = await client.live.detail(channel.channelId);
          console.log(searchResult);
          console.log(detail);
          setChannelDetail(detail);
        } else {
          console.log("No channels found.");
        }
      } catch (error) {
        console.error("Error fetching channel info:", error);
      }
    }

    fetchChannelInfo();
  }, []); // 컴포넌트 마운트 시 실행

  return (
    <div className="App">
      {channelDetail ? (
        <div>
          <h1>Channel Information</h1>
          <p>Channel Name: {channelDetail.channelName}</p>
          <p>Status: {channelDetail.isLive ? "Live" : "Offline"}</p>
          {channelDetail}
        </div>
      ) : (
        <p>Loading or no channel details available.</p>
      )}
    </div>
  );
}

export default App;
