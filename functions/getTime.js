import fixedInfo from "./fixedInfo.js";

async function getTime(region, id, Schemas) {
  //   if (id > 0 && id < 31) {
  const times = await Schemas.findOne({
    day: id,
  });
  fixedInfo(region, id, times);
  return times;
}
export default getTime;
