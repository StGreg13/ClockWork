
document.getElementById('order').onclick = function() {
  document.getElementById('background').classList.add('blur');
  document.getElementById('box_2').style.display = "block";
}

document.getElementById('feedback').onclick = function() {
  document.getElementById('background').classList.add('blur');
  document.getElementById('box_1').style.display = "flex";
}

document.getElementById('x1').onclick = function() {
  document.getElementById('background').classList.remove('blur');
  document.getElementById('box_1').style.display = "none";
}
document.getElementById('x2').onclick = function() {
  document.getElementById('background').classList.remove('blur');
  document.getElementById('box_2').style.display = "none";
}
