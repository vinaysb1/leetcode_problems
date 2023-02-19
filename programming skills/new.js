function msg(vinay, call) {
    console.log('Hi' + ' ' + vinay);
    call();
}
function call() {
    console.log('I am calling sanjay');
}
msg('san', call);