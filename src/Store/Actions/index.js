const setData = (data) => {
  return (dispatch) => {
    dispatch({ type: "SET_DATA_REQUEST" });
    try {
      dispatch({ type: "SET_DATA_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "SET_DATA_FAIL", payload: error.message });
    }
  };
};

const getData = () => {
  return (dispatch) => {
    dispatch({ type: "Get_Data" });
  };
};

const showGrid = () => {
  var body = document.querySelector(".content-body");
  var rowCard = document.querySelectorAll(".row-card");
  var gridCard = document.querySelectorAll(".card-container");
  gridCard.forEach((element) => {
    element.style.display = "";
  });
  body.classList.add("show-grid");
  rowCard.forEach((element) => {
    element.style.display = "none";
  });
  return {
    type: "SHOW_GRID",
  };
};
const showRows = () => {
  var body = document.querySelector(".content-body");
  var rowCard = document.querySelectorAll(".row-card");
  var gridCard = document.querySelectorAll(".card-container");

  body.classList.remove("show-grid");
  rowCard.forEach((element) => {
    element.style.display = "";
  });
  gridCard.forEach((element) => {
    element.style.display = "none";
  });
  return {
    type: "SHOW_ROWS",
  };
};

export { setData, getData, showGrid, showRows };
