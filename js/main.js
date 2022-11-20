//alert("Hello");
var one = 'Hello All';

//alert(one);
//console.log('Hello');

//document.getElementById('message').innerHTML = one;
//$('#message').text(one);
//$('#message').fadeOut('slow');

//$('.myclass').text(one);

document.getElementsByClassName("myclass")[0].innerHTML = one;
console.log(document.getElementsByClassName("myclass"));
//document.getElementsByClassName("myclass")[0].style.color = "red";
$('.myclass').css('color', 'magenta');
$('.myclass').css('background-color', 'yellow');
document.getElementsByClassName("myclass")[0].style.background = "green";


const menu = document.querySelector('.mobile-btn');
const submenu = document.querySelector('.second-menu-mobile');
let is_open = 0;

menu.addEventListener('click', () => {
  if (!is_open) {
    submenu.style.display = 'block';
    is_open = 1;
  } else {
    submenu.style.display = 'none';
    is_open = 0;
  }
  
})