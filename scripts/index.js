const directToGH = function(){
    window.open('https://github.com/Jonas173', '_blank');
if (win) {
    //Browser has allowed it to be opened
    win.focus();
} else {
    //Browser has blocked it
    alert('Please allow popups for this website');
}};