import "./SoundList.css";
import Sound from "../Sound/Sound";

function SoundList({ playAll, stop, loop, sounds, slider, changeSlider }) {
  return (
    <div className="list__container">
      <Sound
        loop={loop}
        stop={stop}
        play={playAll}
        name="Vocals"
        sound={sounds.song1}
      />
      <Sound
        loop={loop}
        stop={stop}
        play={playAll}
        name="Uuoh vocal"
        sound={sounds.song2}
      />
      <Sound
        loop={loop}
        stop={stop}
        play={playAll}
        name="Drumps"
        sound={sounds.song3}
      />
      <Sound
        loop={loop}
        stop={stop}
        play={playAll}
        name="Echo"
        sound={sounds.song4}
      />
      <Sound
        loop={loop}
        stop={stop}
        play={playAll}
        name="Echo high"
        sound={sounds.song5}
      />
      <Sound
        loop={loop}
        stop={stop}
        play={playAll}
        name="Jibrish"
        sound={sounds.song6}
      />
      <Sound
        loop={loop}
        stop={stop}
        play={playAll}
        name="Lead"
        sound={sounds.song7}
      />
      <Sound
        loop={loop}
        stop={stop}
        play={playAll}
        name="Tambourine"
        sound={sounds.song8}
      />
      <Sound
        loop={loop}
        stop={stop}
        play={playAll}
        name="Uuoh high"
        sound={sounds.song9}
      />
    </div>
  );
}

export default SoundList;
