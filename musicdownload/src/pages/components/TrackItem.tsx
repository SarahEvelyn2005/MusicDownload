const TrackItem = ({ track }) => {
    const handleDownload = async () => {
      console.log(`Baixando: ${track.name}`);
    };
  
    return (
      <div className="flex items-center px-4 py-3 hover:bg-indigo-800 rounded transition-colors group">
        <div className="flex-1 flex items-center">
          <img src="https://i.imgur.com/kZJRrbe.jpg" alt="Track Cover" className="w-10 h-10 mr-3 rounded" />
          <span>{track.name} - {track.artist}</span>
        </div>
        <button
          className="opacity-0 group-hover:opacity-100 bg-green-500 hover:bg-green-600 p-2 rounded-full transition-all duration-300 transform hover:scale-110"
          onClick={handleDownload}
        >
          Download
        </button>
      </div>
    );
  };
  
  export default TrackItem;