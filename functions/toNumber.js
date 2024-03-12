function toNumber(startT, endT, time, isLate) {
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
  //
  let curSTime = null;
  let curETime = null;

  //   this is to number from string
  if (minus(startT) - time >= 0) {
    curSTime = minus(startT) - time;
    if (minus(endT) - time >= 0) {
      curETime = minus(endT) - time;
    } else {
    }
  } else {
    curSTime = procent(minus(startT), time);
    if (minus(endT) - time >= 0) {
      curETime = minus(endT) - time;
    } else {
    }
  }
}

const minus = (number) => {
  const num = number.toString().split("").slice(-2).join("");
  return Number(num);
};

const procent = (a, b) => {
  let num = Math.floor(a / b);
  let numTwo = a % b;
  console.log(num, numTwo);
  //   return
};
