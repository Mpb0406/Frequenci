import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Roses n Flames",
      artist: "C Y G N",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-1024x1024.jpg",
      id: uuidv4(),
      active: true,
      color: ["#E18EDC", "#7190CB"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=14985",
    },
    {
      name: "Cruising",
      artist: "Evil Needle",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/04/cb0cc6270d7f2e1bb13e44e8832bd5c9b2a61080-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#EC554D", "#E6B251"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=17087",
    },
  ];
}

export default chillHop;
