const btn = document.querySelector(".btn");
const emojiName = document.querySelector(".emoji-name");

const emoji = [];

async function getEmoji() {
  let response = await fetch(
    "https://emoji-api.com/emojis?access_key=ad9e38dc04f1e5259fbd93841ce0bc1070228130"
  );

  data = await response.json();

  for (let i = 0; i < 1500; i++) {
    emoji.push({
      emojiName: data[i].character,
      emojiCode: data[i].unicodeName,
    });
  }
}

getEmoji();

console.log(emoji);

btn.addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * emoji.length);
  btn.innerText = emoji[randomNumber].emojiName;
  emojiName.innerText = emoji[randomNumber].emojiCode;
});
