import { useState } from "react";

function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

 const handleEditClick = () => {
    setIsEditing((editing) => !editing);
  };

  let playerName = <span className="player-name">{name}</span>;
  let btnCaption = 'Edit';

  if (isEditing) {
    playerName = <input type="text" required  value={name}/>;
    btnCaption = 'Save';
  }
  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
}

export default Player;
