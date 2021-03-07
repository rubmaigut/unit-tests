export const hackerSpeak = (words) => {
  const mapObj = {
   a:"4",
   A:"4",
   e:"3",
   E:"3",
   i:"1",
   I:"1",
   o:"0",
   O:"0",
   S:"5",
   s:"5"
  };
  words = words.replace(/a|e|i|o|s/gi, (matched)=>{
    return mapObj[matched];
  });
  return words
}
