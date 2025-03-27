import { useState } from "react";
import { fetchPlaylist } from "../services/spotifyService";

const PlaylistSearch = ({ setPlaylist }) => {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    const data = await fetchPlaylist(query);
    setPlaylist(data);
  };

  return (
    <div className="bg-indigo-800 bg-opacity-30 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-indigo-700">
      <h2 className="text-2xl font-bold mb-6">Import Your Spotify Playlist</h2>
      <div className="mb-8">
        <label className="block text-sm font-medium mb-2">Paste Spotify Playlist URL</label>
        <div className="flex">
          <input
            type="text"
            placeholder="https://open.spotify.com/playlist/..."
            className="w-full px-4 py-3 bg-indigo-950 border border-indigo-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            className="bg-green-500 hover:bg-green-600 px-6 rounded-r-lg transition-all duration-300 flex items-center"
            onClick={handleSearch}
          >
            Import
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaylistSearch;