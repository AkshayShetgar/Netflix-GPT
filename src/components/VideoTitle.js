const VideoTitle = ({title, overview}) => {
  return (
    <div className="pt-40 pl-12 absolute bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-white font-bold text-3xl">{title}</h1>
      <p className="text-white py-5 w-1/4 text-lg">{overview}</p>
      <div>
        <button className="bg-white p-2 px-10 rounded-md font-semibold text-lg mr-3 hover:bg-opacity-70">Play</button>
        <button className="bg-white p-2 px-10 rounded-md font-semibold text-lg bg-opacity-50">More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle