const textBox = document.getElementById('textBox')
function ClearFn () {
    textBox.value = ''

}
function display (number) {
    textBox.value += number
}

function calculate (){
    try {
        textBox.value = eval(textBox.value) 
    }
    catch (err){
        alert('invalidNumber')
    }
}
function Delfun(){
    textBox.value = textBox.value.slice(0,-1)
}


