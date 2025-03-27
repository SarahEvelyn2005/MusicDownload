import { useState } from "react";
import PlaylistSearch from "../components/PlaylistSearch";
import PlaylistDisplay from "../components/PlaylistDisplay";

const Home = () => {
  const [playlist, setPlaylist] = useState(null);

  return (
    <div className="w-[1200px] bg-gradient-to-b from-indigo-900 to-black text-white py-16 font-sans">
      <div className="max-w-6xl mx-auto px-8">
        <header className="flex justify-between items-center mb-12">
          <div className="flex items-center">
            <i className="fa-brands fa-spotify text-4xl text-green-500 mr-3"></i>
            <h1 className="text-3xl font-bold">Spotify Playlist Downloader</h1>
          </div>
        </header>
        <PlaylistSearch setPlaylist={setPlaylist} />
        {playlist && <PlaylistDisplay playlist={playlist} />}
      </div>
    </div>
  );
};

export default Home;