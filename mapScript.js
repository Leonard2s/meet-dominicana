function handleClick(id,title) {
  alert('Clicked on ' + id+ title);
}

function handleMouseOver(id) {
  document.getElementById(id).setAttribute('style', 'fill: #f00'); // Cambia el color al pasar el ratón
}

function handleMouseOut(id) {
  document.getElementById(id).setAttribute('style', 'fill: #000'); // Restaura el color original al quitar el ratón
}