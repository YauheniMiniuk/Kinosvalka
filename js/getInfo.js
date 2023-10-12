var a = 0;
            function getInfo(id_value){
                var info = document.getElementById('item_desc'+id_value);       
                var item = document.getElementById('item'+id_value);
                var logo = document.getElementById('item_poster'+id_value);        
                if (a == 0){
                    // body[0].style.backgroundColor = 'rgba(0,0,0,0.5)';  
                    info.style.opacity = 1;
                    info.style.visibility = 'visible';
                    // info.style.width = '100%';
                    // info.style.height = '100%';
                    // info.style.right = 50;
                    // info.style.top = -300;
                    item.style.transform = 'rotateY(180deg)';
                    info.style.transform = 'rotateY(180deg)';
                    logo.style.visibility = 'hidden';
                    info.style.background = 'rgba(50, 233, 25, 0.9)';
                    // item.style.width = '90%';
                    // logo.style.width = 0;
                    a++;
                }
                else if (a == 1){
                    // body[0].style.backgroundColor = 'rgba(0,0,0,0)';
                    info.style.opacity = 0;
                    info.style.visibility = 'hidden';
                    // info.style.width = 0;
                    // info.style.height = 0;
                    logo.style.visibility = 'visible';
                    item.style.transform = 'rotateY(0deg)';
                    info.style.transform = 'rotateY(0deg)';
                    // item.style.width = '27.6%';
                    // logo.style.width = '100%';
                    a--;
                }
            }