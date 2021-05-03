// console.log("testing");
var bubbleSortDone = false;
var i = 0;
var j = 0;
var k = 0;

function bubbleSortNext() {
  console.log("clicked next");
  // console.log(i);
  // console.log(j);
  var explanations = document.getElementById('bubble-explanations');
  if (!bubbleSortDone) {
    var v1 = bubbleValuesItems[i];
    var v2 = bubbleValuesItems[i+1]
    // console.log(v1);
    // console.log(v1.getAttribute('value'));
    // console.log(v2);
    // console.log(v2.getAttribute('value'));
    if (k === 0) {
      console.log(k);
      var prev = document.getElementsByClassName('selected');
      while(prev.length > 0){
        prev[0].classList.remove('selected');
      }
      v1.classList.add('selected');
      v2.classList.add('selected');
      explanations.innerHTML = "Compare the two highlighted values.";
      k++;
    }
    else if (k === 1) {
      console.log(k);
      if (v1.getAttribute('value') > v2.getAttribute('value')) {
        bubbleValuesItems[i], bubbleValuesItems[i+1] = v2, v1;
        v1.parentNode.insertBefore(v2, v1);

        explanations.innerHTML = "The two values aren't in order, so swap them.";
        console.log("swapped");
      } else {
        explanations.innerHTML = "The two values are in order, so leave them.";
        console.log("no swap");
      }
      i++;
      i%=bubbleValuesItems.length-1;
      if (i === 0) {
        j++;
      }
      if (j === bubbleValuesItems.length-1) {
        bubbleSortDone = true;
      }
      k++;
    }
    else if (k === 2) {
      console.log(k);
      if (i === 0){
        explanations.innerHTML = "Return to the start of the array.";
      } else {
        explanations.innerHTML = "Continue the the next pair in the array.";
      }
      k = 0;
    }
  }
  else{
    explanations.innerHTML = "In summary, this sort is not very effecient, look how many times you had to press the next button!";
    var prev = document.getElementsByClassName('selected');
    while(prev.length > 0){
      prev[0].classList.remove('selected');
    }
    var nextButton = document.getElementById('bubble-next-button');
    nextButton.remove();
  }
}

window.onload = function () {
  bubbleValues = document.getElementById('bubble-values'); 
  bubbleValuesItems = bubbleValues.getElementsByClassName('values');
}