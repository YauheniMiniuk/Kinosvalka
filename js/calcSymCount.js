function calcSymCount(){
    var label = document.getElementById('max_sym_count');
    var text = document.getElementById('message');
    var result = 255 - text.textContent.length;
    label.innerHTML = 'Осталось символов: '+result;
}