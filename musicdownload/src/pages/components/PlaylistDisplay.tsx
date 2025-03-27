import TrackItem from "./TrackItem";

const PlaylistDisplay = ({ playlist }) => {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-6">Your Playlist</h2>
      <div className="bg-indigo-900 bg-opacity-40 rounded-xl overflow-hidden shadow-xl">
        <div className="flex items-center p-6 bg-gradient-to-r from-indigo-800 to-purple-900">
          <div className="w-32 h-32 rounded-md overflow-hidden shadow-lg mr-6">
            <img src="https://i.imgur.com/HaPAd2S.jpg" alt="Playlist Cover" className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="text-xl font-bold">{playlist.name}</h3>
            <div className="flex items-center">
              <button className="bg-green-500 hover:bg-green-600 text-white py-1.5 px-4 rounded-full text-sm transition-all duration-300 transform hover:scale-105 mr-3">Download All</button>
            </div>
          </div>
        </div>
        <div className="p-4">
          {playlist.tracks.map((track) => (
            <TrackItem key={track.id} track={track} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlaylistDisplay;
