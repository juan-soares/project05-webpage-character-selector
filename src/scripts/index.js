const characters = document.querySelectorAll(".character");
const selectedCharacterImage = document.getElementById("image");
const selectedCharacterName = document.getElementById("name");
const selectedCharacterDescription = document.getElementById("description");

const resetCharacterSelection = () => {
  const selectedCharacter = document.querySelector(".character--active");
  selectedCharacter.classList.remove("character--active");
};

const selectCharacter = (character) => {
  character.classList.add("character--active");
};

const updateImage = (character) => {
  const characterID = character.attributes.id.value;
  selectedCharacterImage.src = `./public/assets/images/card-${characterID}.png`;
};

const updateName = (character) => {
  const characterName = character.getAttribute("data-name");
  selectedCharacterName.innerText = characterName;
};

const updateDescription = (character) => {
  const characterDescription = character.getAttribute("data-description");
  selectedCharacterDescription.innerText = characterDescription;
};

characters.forEach((character) => {
  character.addEventListener("mouseenter", () => {
    /*Snippet to improve experience on mobile devices, since there is no hover.*/
    if (window.innerWidth < 450) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    resetCharacterSelection();
    selectCharacter(character);
    updateImage(character);
    updateName(character);
    updateDescription(character);
  });
});
