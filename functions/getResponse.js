let obj;
let miniObj;

function equalFunc(data) {
  if (data === "give") {
    miniObj = { ...obj };
    obj = null;
    return { ...miniObj };
  } else if (data === "error") {
    obj = "error";
  } else {
    miniObj = null;
    obj = { ...data };
  }
}

export default equalFunc;
