function switcher(texts, delay) {
  var text = document.getElementById("swtchr");
  var i = 0;


  function updateText() {
    text.innerHTML = texts[i];
    i = (i + 1) % texts.length; 
    setTimeout(updateText, delay); 
  }

  updateText();
}
