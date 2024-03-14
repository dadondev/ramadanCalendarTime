import regions from "../data/regions.js";
import toNumber from "./toNumber.js";

function fixedInfo(region, id, fixTime) {
  const { start_time, end_time, day } = fixTime;
  const times = regions.find((e) => e.city === region);
  if (times) {
    return { ...toNumber(start_time, end_time, times.howMuch, times.isLate) };
  } else {
    return "error";
  }
}

export default fixedInfo;
