const inputText = document.getElementById("input-text")
const outlineText = Array.prototype.slice.call(document.getElementsByClassName("outline"), 0);
inputText.value = "THANK YOU";

inputText.addEventListener('input', function() {
    let newText = inputText.value
    
    if (inputText.value === '') inputText.style.cssText = "background-color: #FF000011";
    else inputText.style.cssText = "background-color: transparent";
    
    outlineText.forEach(function(item){
      item.innerHTML = newText
    })
});
