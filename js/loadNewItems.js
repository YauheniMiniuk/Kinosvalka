var list = document.getElementById('new_item_container');
            
            list.innerHTML = '';
            function addNewItem(posterPath){
            list.innerHTML += '\
            <a href="movie.html">\
            <div class="new_item">\
            <img class="new_item_logo" src="images/poster'+i+'.jpg" alt="">\
            <div class="new_item_title">\
                <span>Title</span>\
            </div>\
            <div class="new_item_desc">\
                <div class="desc_title">\
                    <h2>Title</h2>\
                </div>\
                <div class="desc_info">\
                    <span>Author: Author</span>\
                    <span>Genres: Genre1, Genre2, Genre3</span>\
                    <span>Rating: 16+</span>\
                    <span>Time: 120 min</span>\
                    <span>Actors: Actor1, Actor2, Actor3</span>\
                </div>\
            </div>\
        </div></a>';
            }
            for (var i = 1;i<10;i++){
                var posterPath = 'images/poster'+i+'.jpg';
                addNewItem(posterPath);
            }