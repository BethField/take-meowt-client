// extract the data from the checkboxes
function filterCheckboxes(checkboxes) {
  console.log(checkboxes);
  let checkboxArray = Array.from(checkboxes);
  let checkedValues = checkboxArray
    .filter((checkbox) => checkbox.checked === true)
    .map((checkbox) => checkbox.value);

  return checkedValues;
}
