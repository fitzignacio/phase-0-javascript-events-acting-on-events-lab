// Your code here
function moveDodgerLeft() {
    const dodger = document.getElementById("dodger");
    let left = parseInt(dodger.style.left);
    if (left > 0) {
      left -= 5;
      dodger.style.left = `${left}px`;
    }
  }
  
  function moveDodgerRight() {
    const dodger = document.getElementById("dodger");
    let left = parseInt(dodger.style.left);
    left += 5;
    dodger.style.left = `${left}px`;
  }