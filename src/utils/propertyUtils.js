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

};

export const handleFilter = (item,filter)=>{
  debugger
 return  filter?.airline === null || item?.airline === filter?.airline
}

export const handleSort = (a,b,sort)=>{
  debugger
 const sortType = sort?.type
 switch (sortType) {
  case "price":

  return sort?.order === "asc" ? parseFloat(a.price) - parseFloat(b.price) : parseFloat(b.price) - parseFloat(a.price)

  case "departure": 
  

    return a.departure > b.departure ? sort?.order === "asc" ? 1  : -1 : a.departure > b.departure ? sort?.order == "asc" ? -1 : 1 : 0

  case "arrival": 
  

    return a.arrival > b.arrival ? sort?.order === "asc" ? 1  : -1 : a.arrival > b.arrival ? sort?.order == "asc" ? -1 : 1 : 0

 
  default:
    break;
 }
}

export const collectAirline = (flights) => {

  if(flights?.length > 0){
    const uniqueAirlines = [...new Set(flights.map(item => item.airline))]
 return uniqueAirlines
  }
 return []
}
