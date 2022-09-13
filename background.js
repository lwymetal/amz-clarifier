function clarify() {
  let ooS = document.getElementsByTagName("span");
  let searchText = "Out of Stock";
  for (var i = 0; i < ooS.length; i++) {
    if (ooS[i].textContent == searchText ) {
      ooS[i].closest("[data-uuid]").remove();
    }
  }
};

clarify();
clarify();
clarify();
