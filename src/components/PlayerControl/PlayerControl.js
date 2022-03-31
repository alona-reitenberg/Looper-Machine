import "./PlayerControl.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faStop,
  faRepeat,
} from "@fortawesome/free-solid-svg-icons";

function PlayerControl({
  togglePlay,
  handleStop,
  toggleLoop,
  play,
  stop,
  loop,
  time,
}) {
  return (
    <div className="playerControl__container">
      <FontAwesomeIcon
        onClick={togglePlay}
        className={play ? "icon active" : "icon"}
        icon={play ? faPause : faPlay}
      ></FontAwesomeIcon>
      <FontAwesomeIcon
        onClick={handleStop}
        className="icon"
        icon={faStop}
      ></FontAwesomeIcon>
      <FontAwesomeIcon
        onClick={toggleLoop}
        className={loop ? "icon active" : "icon"}
        icon={faRepeat}
      ></FontAwesomeIcon>
      <span className="time">
        00:{parseInt(time).toString().padStart(2, 0)} / 00:17
      </span>
    </div>
  );
}

export default PlayerControl;
