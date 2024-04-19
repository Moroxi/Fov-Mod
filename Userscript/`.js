const messages = [
  "Nice Shot!",
  "Ngl You Should Join FOV Clan!",
  "Ngl You Should Try Fov Mod!",
  "GG!",
  "Nah, Bro Thinks He is Him",
  "Rematch?!",
  "Why You Camping Dawg",
  "1vs1?!",
  "I can defeat all of you! lol",
];

function sendRandomMessage() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  const message = messages[randomIndex];

  pc.app.fire("Network:Chat", message);
}

function handleKeyPress(event) {
  const key = event.key;
 
  if (key === "`") {
    sendRandomMessage();
  }
}

document.addEventListener("keydown", handleKeyPress);




