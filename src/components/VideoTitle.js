const VideoTitle = ({title, overview}) => {
  return (
    <div className="pt-36 pl-12">
      <h1 className="font-bold text-3xl">{title}</h1>
      <p className="py-5 w-1/4 text-lg">{overview}</p>
      <div>
        <button className="bg-gray-600 p-2 px-10 rounded-md font-semibold text-lg mr-3 bg-opacity-50">Play</button>
        <button className="bg-gray-600 p-2 px-10 rounded-md font-semibold text-lg bg-opacity-50">More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle