const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  var count = 0

  function keyHandler(){
    for (let i = 0 ; i < codes.length ; i++){

      if ('keydown' === codes[i]){
        count++

        if (count === codes.length){

          alert('Congratulations! You\'ve hacked it!')
          count = 0
        }
      }
      else {
        count = 0
      }
    }
  }

  document.body.addEventListener("keydown", keyHandler())
}
