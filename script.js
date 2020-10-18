// get the elements #input-list, .list-group
let nodeInputList = document.querySelector("#input-list");
let nodeListGroup = document.querySelector(".list-group");
let nodeRemoveList = document.querySelector("#remove-button");

// do event here
// input list
nodeInputList.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    if (nodeInputList.value != "") {
      // create element li, checkbox and add attributes
      let nodeLi = document.createElement("li");
      let nodeCheckbox = document.createElement("input");
      nodeLi.setAttribute("class", "list-group-item");
      nodeCheckbox.setAttribute("type", "checkbox");
      nodeCheckbox.setAttribute("class", "checkbox");
      // append all to list group
      nodeLi.appendChild(nodeCheckbox);
      nodeLi.append(nodeInputList.value);
      nodeListGroup.appendChild(nodeLi);
      // clear input
      nodeInputList.value = null;
      // show remove list
      nodeRemoveList.classList.remove("hide");
    }
  }
});

// done list
nodeListGroup.addEventListener("click", (e) => {
  if (e.target.className == "checkbox" && e.target.checked == true) {
    e.target.parentElement.style.textDecoration = "line-through";
  } else {
    e.target.parentElement.style.textDecoration = "none";
  }
});

// remove list
nodeRemoveList.addEventListener("click", () => {
  nodeListGroup.innerHTML = null;
  // hidden button remove
  nodeRemoveList.classList.add("hide");
});
