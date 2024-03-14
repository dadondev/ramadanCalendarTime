import fixedInfo from "./fixedInfo.js";
import obj from "./getResponse.js";

async function getTime(region, id, Schemas) {
  //   if (id > 0 && id < 31) {
  const times = await Schemas.findOne({
    day: id,
  });
  let info = fixedInfo(region, id, times);
  obj(info);
}
export default getTime;
