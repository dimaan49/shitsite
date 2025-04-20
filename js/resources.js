let elements = document.querySelectorAll('.references a');
elements.forEach(element => {
    element.setAttribute('target', '_blank');
});