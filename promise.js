const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  let theaterIXX = await promiseTheaterIXX();
  let theaterVGC = await promiseTheaterVGC();
  let theater = theaterIXX.concat(theaterVGC);

  let result = theater.filter((item) => item.hasil === emosi);
  return result.length;
};

//2
//4
module.exports = {
  promiseOutput,
};
