
function changeColorStyle(){
    var switcher = document.getElementById('switcher');
    var switcher_container = document.getElementById('switcher_container');
    var desc = document.getElementsByClassName('description');
    var body = document.getElementsByTagName('body');
    var header = document.getElementById('header');
    var link = document.getElementsByTagName('a');
    var side_item = document.getElementsByClassName('side_item');
    var categories = document.getElementsByClassName('categories');
    var spans = document.getElementsByTagName('span');
    var reg_form = document.getElementById('registration_form');
    var textarea = document.getElementById('message');
    var p = document.getElementsByTagName('p');
    var label = document.getElementsByTagName('label');
    var h2 = document.getElementsByTagName('h2');
    if (switcher.checked){
        try{
            reg_form.style.color = '#fff';
            
        }
        catch{}
        try{
            for (var i = 0;i<desc.length;i++){
                desc[i].style.color = '#fff';
            }
        }
        catch{}
        switcher.style.backgroundColor = '#fff';
        body[0].style.backgroundColor = 'rgb(44,44,44)';
        header.style.backgroundColor = 'rgb(44,44,44)';
        try{
            textarea.style.backgroundColor = 'rgb(44,44,44)';
            textarea.style.color = 'white';
        }catch{}
        for (var i = 0;i<spans.length;i++){
            spans[i].style.color = '#fff';
        }
        for(var i = 0;i<link.length;i++){
            link[i].style.color = '#007bff';
        }
        for (var i = 0;i<side_item.length;i++){
            side_item[i].style.backgroundColor = 'rgb(44,44,44)';
            side_item[i].style.color = '#fff';
        }
        for (var i = 0;i<categories.length;i++){
            categories[i].style.backgroundColor = '#444444';
        }
        try{
            for (var i = 0;i<p.length;i++){
                p[i].style.color = 'white';
            }
        }catch{}
        try{
            for (var i = 0;i<label.length;i++){
                label[i].style.color = 'white';
            }
        }catch{}
        try{
            for (var i = 0;i<h2.length;i++){
                h2[i].style.color = 'white';
            }
        }catch{}
        localStorage.setItem('switcher', true);
    }
    else{
        try{
            reg_form.style.color = '#000';
            
        }catch{}
        try{
            for (var i = 0;i<desc.length;i++){
                desc[i].style.color = '#000';
            }
        }catch{}
        
        switcher.style.backgroundColor = '#000';
        body[0].style.backgroundColor = '#eee';
        header.style.backgroundColor = '#eee';
        document.cookie = "body=#fff; header=#fff";
        try{
            textarea.style.backgroundColor = '#eee';
            textarea.style.color = 'black';
        }catch{}
        for (var i = 0;i<spans.length;i++){
            spans[i].style.color = '#000';
        }
        for(var i = 0;i<link.length;i++){
            link[i].style.color = '#007bff';
        }
        for (var i = 0;i<side_item.length;i++){
            side_item[i].style.backgroundColor = '#eee';
            side_item[i].style.color = '#000';
        }
        for (var i = 0;i<categories.length;i++){
            categories[i].style.backgroundColor = '#eee';
        }
        try{
            for (var i = 0;i<p.length;i++){
                p[i].style.color = 'black';
            }
        }catch{}
        try{
            for (var i = 0;i<label.length;i++){
                label[i].style.color = 'black';
            }
        }catch{}
        try{
            for (var i = 0;i<h2.length;i++){
                h2[i].style.color = 'black';
            }
        }catch{}
        localStorage.setItem('switcher', false);
    }
}
changeColorStyle();