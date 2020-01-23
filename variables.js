let extVar = {
numbers : document.querySelectorAll('.numbers'),
operators : document.querySelectorAll('.operators'),
display : document.getElementById('display'),
secondaryDisplay : document.getElementById('secondary-display'),
cancelBtn : document.querySelector('.cancel'),
deleteBtn : document.querySelector('.delete'),
equals : document.querySelector('.equal'), 
displayTotal : '',
newTotal : ''
};

export default extVar;