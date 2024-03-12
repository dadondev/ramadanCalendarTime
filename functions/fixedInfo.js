import regions from "../data/regions.js";

function fixedInfo(region, id, fixTime) {
  const { start_time, end_time, day } = fixTime;
  const times = regions.find((e) => e.city === region);

 

  const obj = {
    start_time: start_time
      .split("")
      .filter((e) => e !== ":")
      .join(""),
    end_time: end_time
      .split("")
      .filter((e) => e !== ":")
      .join(""),
  };

  //   console.log(times, id, fixTime);
}

export default fixedInfo;
