// extract the data from the checkboxes
function filterCheckboxes(checkboxes) {
  console.log(checkboxes);
  let checkboxArray = Array.from(checkboxes);
  let checkedValues = checkboxArray
    .filter((checkbox) => checkbox.checked === true)
    .map((checkbox) => checkbox.value);

  // if (checkedValues.length < 1 || checkedValues.length > 2) {
  //     alert("Please select the corrent number of checkboxes");
  // } else {
  //     return checkedValues;
  // }

  return checkedValues;
}
