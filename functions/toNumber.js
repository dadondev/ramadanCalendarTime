let myTime = 1;
function toNumber(startT, endT, time, isLate) {
  myTime = time;
  const startTime = Number(
    startT
      .split("")
      .filter((e) => e !== ":")
      .join("")
  );
  const endTime = Number(
    endT
      .split("")
      .filter((e) => e !== ":")
      .join("")
  );
  let obj = {};
  if (!isLate) {
    obj = {
      startTime: minus(startTime, time),
      endTime: minus(endTime, time),
      isLate,
    };
  } else {
    obj = {
      startTime: plus(startTime, time),
      endTime: plus(endTime, time),
      isLate,
    };
  }
  return obj;
}

const minus = (time = 1, howMuch) => {
  let full;
  if (time.toString().length === 3) {
    full = Number(time.toString().split("").slice(0, 1).join(""));
  } else {
    full = Number(time.toString().split("").slice(0, 2).join(""));
  }
  let minutes = Number(time.toString().split("").slice(-2).join(""));
  if (minutes.toString().length === 2) {
    if (Number(time.toString().split("").slice(-2).join("")) > howMuch) {
      return full + ":" + (minutes - howMuch);
    } else {
      full--;
      return full + ":" + (60 - howMuch + minutes);
    }
  } else {
    if (Number(time.toString().split("").slice(-2).join("")) > howMuch) {
      return full + ":" + "0" + (minutes - howMuch);
    } else {
      full--;
      return full + ":" + "0" + (60 - hoswMuch + minutes);
    }
  }
};

const plus = (time = 1, howMuch) => {
  let full;
  if (time.toString().length === 3) {
    full = Number(time.toString().split("").slice(0, 1).join(""));
  } else {
    full = Number(time.toString().split("").slice(0, 2).join(""));
  }
  let minutes = Number(time.toString().split("").slice(-2).join(""));

  if (minutes.toString().length === 1) {
    if (minutes + howMuch < 60) {
      return full + ":" + (minutes + howMuch);
    } else {
      full++;
      return full + ":" + Math.abs(60 - (minutes + howMuch));
    }
  } else {
    if (minutes + howMuch < 60) {
      return full + ":" + (minutes + howMuch);
    } else {
      full++;
      return full + ":" + Math.abs(60 - (minutes + howMuch));
    }
  }
};

export default toNumber;
