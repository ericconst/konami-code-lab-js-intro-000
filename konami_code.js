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

var count = 0;

function init() {

  document.body.addEventListener("keydown", (event)=>{
    const key = event.key
    if (key === codes[count]){
      count++;
      if (count === codes.length) {
        alert("Congratulations! You've hacked it!");
        count = 0;
    }}
    else {
      count = 0
    }}

  )
}
