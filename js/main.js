const input = document.getElementById("search");

input.addEventListener("keyup", search);

function search() {
  const input_value = input.value;

  const li = document.getElementsByTagName("li");

  for (let index = 0; index < li.length; index++) {
    if (li[index].innerHTML.toLowerCase().includes(input_value)) {
      li[index].style.display = "";
    } else {
      li[index].style.display = "none";
    }
  }
}