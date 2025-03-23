import video1 from "./assets/video.mp4";

export default function Hero_video() {
  return (
    <div>
      <video
        loop
        muted
        autoPlay
        style={{
          width: "100%",
          position: "absolute",
          top: "0px",
          zIndex: "-1",
        }}
      >
        <source src={video1} type="video/mp4" />
      </video>
    </div>
  );
}
