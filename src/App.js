
import { useRef, useState, useEffect } from "react";
import video from "./bg.mp4";

import Hero from "./pages/hero-frame";
import Timer from "./pages/Countdown";
import Glimps from "./pages/Glimps";
import Venue from "./pages/venue";
import Invite from "./pages/Invitations";
import Form from "./pages/form";
import Footer from "./pages/footer";

function App() {
  const videoRef = useRef(null);
  const audioRef = useRef(null);

  const [showMain, setShowMain] = useState(false);
  const [entryStarted, setEntryStarted] = useState(false);

  // Attempt music autoplay as soon as the website loads
  useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      audio.volume = 0.7;

      audio.play().catch((error) => {
        console.log("Browser blocked automatic audio playback:", error);
      });
    }
  }, []);

  const handleOpenInvitation = async () => {
    const introVideo = videoRef.current;

    if (!introVideo) {
      setShowMain(true);
      return;
    }

    if (entryStarted) {
      introVideo.pause();
      setShowMain(true);
      return;
    }

    setEntryStarted(true);
    introVideo.muted = true;

    try {
      await introVideo.play();
    } catch (error) {
      console.warn("Intro video could not play:", error);
      setShowMain(true);
    }
  };

  const handleVideoEnd = () => {
    setShowMain(true);
  };

  const handleVideoError = () => {
    setShowMain(true);
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
      >
        <source
          src="https://res.cloudinary.com/dwtzcpmzo/video/upload/v1795437924/aa_vwh6zg.mp3"
          type="audio/mpeg"
        />
      </audio>

      {!showMain && (
        <div id="entry-gate">
          <video
            ref={videoRef}
            className="entry-video"
            playsInline
            muted
            preload="metadata"
            onEnded={handleVideoEnd}
            onError={handleVideoError}
          >
            <source
              src="https://res.cloudinary.com/dwtzcpmzo/video/upload/v1795430938/start_z9ncot.mp4"
              type="video/mp4"
            />
          </video>

          <button
            type="button"
            className="entry-open-button"
            onClick={handleOpenInvitation}
          >
            {entryStarted
              ? "Skip Intro · Open Invitation"
              : "Tap to Open Invitation"}
          </button>
        </div>
      )}

      {showMain && (
        <main className="main-container">

          <video
            className="bg-video"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-hidden="true"
          >
            <source src={video} type="video/mp4" />
          </video>

          <div className="App">
            <div className="content-1"><Hero /></div>
            <div className="content-2"><Timer /></div>
            <div className="content-3"><Glimps /></div>
            <div className="content-4"><Venue /></div>
            <div className="content-5"><Invite /></div>
            <div className="content-6"><Form /></div>
            <div className="content-7"><Footer /></div>
          </div>

        </main>
      )}
    </>
  );
}

export default App;
