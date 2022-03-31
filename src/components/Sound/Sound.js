import { useEffect, useState } from "react";
import "./Sound.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp, faVolumeMute } from "@fortawesome/free-solid-svg-icons";

function Sound({ sound, name, play, stop, loop }) {
  const [mute, setMute] = useState(false);

  const toggleMute = () => setMute((prev) => !prev);

  useEffect(() => {
    if (play && !stop) {
      sound.play();
    }
    if (stop) {
      console.log("stopping");
      sound.pause();
      sound.currentTime = 0;
    }

    sound.muted = mute;
    sound.loop = loop;
  }, [play, stop, loop, sound, mute]);

  return (
    <div className="sound__container">
      <div className="sound__details">
        <span className="sound__name">{name}</span>
        <FontAwesomeIcon
          className="sound__icon"
          icon={mute ? faVolumeMute : faVolumeUp}
          onClick={toggleMute}
        ></FontAwesomeIcon>
        {play}
        <audio src={sound}></audio>
      </div>
    </div>
  );
}

export default Sound;
