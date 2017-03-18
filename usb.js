var usb = require('usb');

function showDeviceList(){
    document.getElementById('display').innerHTML = JSON.stringify(usb.getDeviceList());
}

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('but').addEventListener('click',showDeviceList);
}); 

console.log(usb.getDeviceList());