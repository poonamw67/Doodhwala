
const SVGVideo = () =>
{
  return (
    <>
    <div className='SVGVideo'>
      <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="none"
          stroke="lightgrey"
          d="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z"
        />
        <circle r="5" fill="red">
          <animateMotion
            dur="10s"
            repeatCount="indefinite"
            path="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z"
          />
        </circle>
      </svg>
    </div>

    <div className='Navbody'>
      <div className='menu'>
        <div className='Navcontainer'>
          <div className='toggle'></div>
        </div><span className='hidden'><a href="#">Home </a></span><span className='hidden'><a href="#">About </a></span>
        <span class="hidden"><a href="#">Info</a></span><span className="hidden"><a href="#">Contact</a></span>
      </div>
    </div>
    </>
  )
}

export default SVGVideo
