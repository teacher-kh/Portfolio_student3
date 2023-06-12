// $(document).ready(function(){
//  $('.header').height($(window).height());
// })
let parent = document.getElementById("randomizer");
  let minField = parent.querySelector("input#min");
  let maxField = parent.querySelector("input#max");
  let btn = parent.querySelector(".btn");
  let result = parent.querySelector("#result");

  btn.addEventListener("click", function() {
    let minValue = parseInt(minField.value) || 1;
    let maxValue = parseInt(maxField.value) || 100;

    result.innerHTML = getRandomInt(minValue, maxValue);
  });

  function getRandomInt(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
  }