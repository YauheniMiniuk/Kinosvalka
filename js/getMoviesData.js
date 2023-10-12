// Найти ID

function loadMovieInfo(id, title, posterPath,releaseDate, country, producer, genre, minAge, duration, actors, moviePath, description){
    var movie = document.getElementById('movie_content_container');
    movie.innerHTML = '<div class="movie_info">\
                <div class="poster">\
                    <!--  -->\
                    <img src="'+posterPath+'" alt="">\
                    <!--  -->\
                </div>\
                <div class="info">\
                    <div class="desc_title">\
                        <h2>'+title+'</h2>\
                    </div>\
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
                <div id="description" class="description">\
                    <h4 class="description">О чем:</h4>\
                    <p class="description">\
                    '+description+'\
                    </p>\
                </div>\
                </div>';
    var player = document.getElementById('player');
    player.innerHTML = '<div class="container">\
                <iframe width="780" height="430" src="'+moviePath+'" \
                title="YouTube video player" frameborder="0" \
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" \
                allowfullscreen></iframe>\
                </div>';
}
var params = window
    .location
    .search
    .replace('?','')
    .split('&')
    .reduce(
        function(p,e){
            var a = e.split('=');
            p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
            return p;
        },
        {}
    );

$.ajax({
    url: '/php/getDataById.php',    
    data: {'id': params['id']},
    type: 'POST',
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
            loadMovieInfo(movies[i].id, movies[i].title, movies[i].posterPath,movies[i].releaseDate,
                movies[i].country, movies[i].producer, movies[i].genre, movies[i].minAge,
                movies[i].duration, movies[i].actors, movies[i].moviePath, movies[i].description);
        }
    }
        
});

