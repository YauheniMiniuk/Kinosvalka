function showHideSideList(){
    var value = document.getElementById('side_list_button');
    var side_list = document.getElementById ('side_list');
    var item_list = document.getElementById('item_list');
    var side_list_tools = document.getElementById('side_list_tools');
    var item_list_tools = document.getElementById('item_list_tools');
    

    if(value.value == '<<'){
        
        side_list.style.width = 0;
        side_list.style.height = 0;
        side_list.style.opacity = 0;
        side_list.style.visibility = 'hidden';
        item_list.style.width = '100%';
        item_list_tools.style.width = '100%';
        side_list_tools.style.width = 0;
        value.value = '>>';
    }
    else if (value.value == '>>'){
        side_list.style.width = '30%';
        side_list.style.opacity = 1;
        side_list.style.visibility = 'visible';
        item_list.style.width = '70%';
        item_list_tools.style.width = '70%';
        side_list_tools.style.width = '30%';

        value.value = '<<'
    }
}