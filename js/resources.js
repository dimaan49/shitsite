let elements = document.querySelectorAll('.references a');
elements.forEach(element => {
    element.setAttribute('target', '_blank');
});


document.addEventListener('DOMContentLoaded', function() {
var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');

const listItems = document.querySelectorAll('.references li');


        listItems[0].addEventListener('mouseenter', () => {
            img1.style.cssText = "margin-bottom: 50px;";
        });
        listItems[0].addEventListener('mouseleave', () => {
            img1.style.cssText = "margin-bottom: 0px;";
        });


        listItems[1].addEventListener('mouseenter', () => {
            img2.style.cssText = "margin-bottom:50px;";
        });
        listItems[1].addEventListener('mouseleave', () => {
             img2.style.cssText = "margin-bottom:0px;";
        });	
});