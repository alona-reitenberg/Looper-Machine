import "./Player.css";
import SoundList from "../SoundList/SoundList";
import PlayerControl from "../PlayerControl/PlayerControl";
import { useState, useRef } from "react";
import allTracks from "../../sounds/ALL TRACK.mp3";
import BVOC from "../../sounds/B VOC.mp3";
import DRUMS from "../../sounds/DRUMS.mp3";
import HEHEVOC from "../../sounds/HE HE VOC.mp3";
import HIGHVOC from "../../sounds/HIGH VOC.mp3";
import JIBRISH from "../../sounds/JIBRISH.mp3";
import LEAD1 from "../../sounds/LEAD 1.mp3";
import tambourine from "../../sounds/_tambourine_shake_higher.mp3";
import UUHOVOC from "../../sounds/UUHO VOC.mp3";

const sounds = {
  song1: new Audio(allTracks),
  song2: new Audio(BVOC),
  song3: new Audio(DRUMS),
  song4: new Audio(HEHEVOC),
  song5: new Audio(HIGHVOC),
  song6: new Audio(JIBRISH),
  song7: new Audio(LEAD1),
  song8: new Audio(tambourine),
  song9: new Audio(UUHOVOC),
};

function Player() {
  const [play, setPlay] = useState(false);
  const [loop, setLoop] = useState(false);
  const [stop, setStop] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);

  const toggleLoop = () => setLoop((prev) => !prev);
  const slider = useRef();
  const animationRef = useRef();

  const changeSlider = () => {
    for (const sound of Object.values(sounds)) {
      sound.currentTime = slider.current.value;
    }
    setCurrentTime(slider.current.value);
  };

  const sliderAnimation = () => {
    const seconds = parseInt(sounds.song1.currentTime);
    if (seconds > currentTime) {
      setCurrentTime(seconds);
    }
    slider.current.value = sounds.song1.currentTime;
    animationRef.current = requestAnimationFrame(sliderAnimation);
  };

  const togglePlay = () => {
    setStop(false);
    setPlay((prev) => {
      for (const sound of Object.values(sounds)) {
        prev ? sound.pause() : sound.play();
      }

      if (prev) {
        cancelAnimationFrame(animationRef);
      }
      return !prev;
    });
    animationRef.current = requestAnimationFrame(sliderAnimation);
  };

  const handleStop = () => {
    setPlay(false);
    setStop(true);
    setCurrentTime(0);
    cancelAnimationFrame(animationRef.current);
    slider.current.value = 0;
  };

  return (
    <div className="player">
      <div className="player__container">
        <input
          className="slider"
          onChange={changeSlider}
          type="range"
          min="0"
          max="17"
          defaultValue="0"
          ref={slider}
        />
        <SoundList
          playAll={play}
          stop={stop}
          loop={loop}
          sounds={sounds}
          slider={slider}
          changeSlider={changeSlider}
        />
        <PlayerControl
          togglePlay={togglePlay}
          handleStop={handleStop}
          toggleLoop={toggleLoop}
          play={play}
          stop={stop}
          loop={loop}
          time={currentTime}
        ></PlayerControl>
      </div>
    </div>
  );
}

export default Player;
