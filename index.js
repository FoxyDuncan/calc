function print(value) {
    document.getElementById('display').value+=value;
}
function equal() {
    var result=eval(document.getElementById('display').value);
    document.getElementById('display').value=result;
}
function clr() {
    document.getElementById('display').value='';
}