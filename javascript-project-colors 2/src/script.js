var index = 0;

function changeColors(){
  var colors = [ '#F84545', '#4287f5', '#f56f42', 'f5d442', '#3bc460', 'b0a3a2'];
  document.getElementsByTagName("body")[0].style.background = colors[index++];
  
  if(index > colors.length-1)
    index = 0;
}



