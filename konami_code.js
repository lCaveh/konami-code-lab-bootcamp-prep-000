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
  var index=0;
  document.addEventListener('keydown',function(e){
      let key= e.key;
      if (key === codes[index]) {
         index++;
      } else {
        index = 0;
      }

      if (index === codes.length) {
<<<<<<< HEAD
           window.alert("Hurray!");
=======
           alert("Hurray!");
>>>>>>> c46acccd84e00696e2ba0d9e8cecad492b0237ee
           index = 0;
      }
  });
}
