function addItem(id, title, posterPath,releaseDate, country, producer, genre, minAge, duration, actors, moviePath, description){
    var list = document.getElementById('item_list');
    list.innerHTML += '\
    <div id="item'+id+'" class="item">\
    <button id="info_btn" onclick="getInfo('+id+')">O</button>\
        <div id="item_poster'+id+'" class="item_poster">\
            \
            <a href="movie.html?id='+id+'"><img id="item_logo'+id+'" class="item_logo" src="'+posterPath+'" alt=""></a>\
            <div class="item_title">\
                <a href="movie.html?id='+id+'" onclick(sendId('+id+'))><span>'+title+'</span></a>\
             </div>\
        </div>\
        <div id="item_desc'+id+'" class="item_desc">\
            \
            <div class="item_desc_info">\
                <div class="desc_info">\
                <span><b>Дата выхода: </b>'+releaseDate+'</span>\
                <span><b>Страна:</b>'+country+'</span>\
                <span><b>Режиссер:</b>'+producer+'</span>\
                <span><b>Жанр:</b>'+genre+'</span>\
                <span><b>Возраст:</b>'+minAge+'</span>\
                <span><b>Время:</b>'+duration+'</span>\
                <span><b>В ролях актеры:</b>'+actors+'</span>\
                </div>\
            </div>\
        </div>\
    </div>';
}
$.ajax({
    url: '/php/getData.php',
    success: function(data) {
      $('.json_data').html(data);
        var obj = JSON.parse(data);
        var movies = [];
        for (var i = 0;i<obj.length;i++){
            var movie = {id: obj[i][0],
                        title: obj[i][1],
                        posterPath: obj[i][2],
                        releaseDate: obj[i][3],
                        country:obj[i][4],
                        producer:obj[i][5],
                        genre:obj[i][6],
                        minAge:obj[i][7],
                        duration:obj[i][8],
                        actors:obj[i][9],
                        moviePath:obj[i][10],
                        description:obj[i][11]
                    };
            movies.push(movie);
        }
        for (var i = 0;i<movies.length;i++){
            addItem(movies[i].id, movies[i].title, movies[i].posterPath,movies[i].releaseDate,
                movies[i].country, movies[i].producer, movies[i].genre, movies[i].minAge,
                movies[i].duration, movies[i].actors, movies[i].moviePath, movies[i].description);
        }
    }
        
});
