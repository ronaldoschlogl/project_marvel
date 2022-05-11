const characters = document.querySelectorAll(".character");

characters.forEach((character) => {
    character.addEventListener("mouseenter", () => {
    const selectedId = character.attributes.id.value;
    if (selectedId === "ultron") return;

    const selectedName = character.getAttribute("data-name");

    const imagePlayerOne = document.getElementById("character-player-one");
    imagePlayerOne.src = `./src/images/${selectedId}.png`;

    const characterPlayerOne = document.querySelector(".big-character.character-player-one");
    characterPlayerOne.getElementsByTagName("h2")[0].innerHTML = selectedName;

    const selectedCharacter = document.querySelector(".selected");
    selectedCharacter.classList.remove("selected");

    character.classList.add("selected");
  });
});