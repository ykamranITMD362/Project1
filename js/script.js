window.onload = function(){
  const button = document.querySelector('input[type="submit"]');

  button.addEventListener("click", inputValid);

  function inputValid(){
    //check if text inputs get numbers /^[A-Za-z]+$
    const letters = /[a-zA-Z]/;
    let input = document.querySelector('input[id="name"]');
    if(letters.test(input.value) == false){
      alert("Input a name please");
    } else {
      alert("You have successfully signed up!");
    }
  }
}