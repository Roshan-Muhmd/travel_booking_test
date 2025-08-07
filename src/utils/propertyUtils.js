export const handleToggleBlock = (block, setOpenBlocks) => {
  // Toggle block in openBlocks array
  setOpenBlocks((prev) => {
    const temp = [...prev];
    const index = temp.indexOf(block);

    if (index >= 0) {
      // If block exists, remove it
      temp.splice(index, 1);
    } else {
      // If block doesn't exist, add it
      temp.push(block);
    }

    return temp;
  });

  // Optional: perform actions based on block name
  switch (block) {
    case "flight":
      console.log("Flight block toggled");
      break;

    case "hotel":
      console.log("Hotel block toggled");
      break;

    default:
      break;
  }
};
