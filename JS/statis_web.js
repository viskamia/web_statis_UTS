//clear form before unload
window.onbeforeunload = {} => {
for {const form of document.getElementByTagName("form")}
form.reset();


}

//Read more
function readmore() { 
  var dots = document.getElementById("dots");
  var moreText = document.getElementById('more');
  var btnText = document.getElementById('btn');

  if(dots.style.display === "none") 
    dots.style.display ="inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
}else{ 
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }

