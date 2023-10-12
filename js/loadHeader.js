var header = document.getElementById('header');
header.innerHTML = '\
        <div class="container">\
            <div class="top_header">\
            </div>\
            <div class="bottom_header">\
                <nav class="bottom_header_menu">\
                    <div class="header_menu_logo">\
                        <a href="index.html"><img src="images/logo/logo.png"></a>\
                    </div>\
                    <div class="header_menu_nav"><ul>\
                        <li>\
                            <span class="switcher_container">\
                                <label style="font-size: 14px" for="switcher">Изменить тему</label>\
                                <input type="checkbox" class="switcher" id="switcher" onchange="changeColorStyle()">\
                            </span>\
                        </li>\
                        <li><a href="regisration.html">Регистрация</a></li>\
                        <li><a href="authorizaation.html">Вход</a></li>\
                    </ul></div>\
                </nav>\
            </div>\
            <div class="genres_menu">\
                <div class="genres_container">\
                    <ul class="genres">\
                        <li class="genre_element">\
                            <a href="#">Фильмы</a>\
                            <div class="categories_container">\
                                <ul class="categories">\
                                    <li><a href="#"><div>Action</div></a></li>\
                                    <li><a href="#"><div>Drama</div></a></li>\
                                    <li><a href="#"><div>Adventure</div></a></li>\
                                    <li><a href="#"><div>Comedy</div></a></li>\
                                    <li><a href="#"><div>Horror</div></a></li>\
                                    <li><a href="#"><div>Romantic</div></a></li>\
                                    <li><a href="#"><div>Western</div></a></li>\
                                    <li><a href="#"><div>Crime</div></a></li>\
                                    <li><a href="#"><div>For Family</div></a></li>\
                                    <li><a href="#"><div>For Kids</div></a></li>\
                                    <li><a href="#"><div>Fantasy</div></a></li>\
                                    <li><a href="#"><div>War</div></a></li>\
                                    <li><a href="#"><div>Historic</div></a></li>\
                                    <li><a href="#"><div>Detective</div></a></li>\
                                    <li><a href="#"><div>Sport</div></a></li>\
                                    <li><a href="#"><div>Triller</div></a></li>\
                                    <li><a href="#"><div>Documental</div></a></li>\
                                    \
                                </ul>\
                            </div>\
                        </li>\
                        <li class="genre_element">\
                            <a href="#">Сериалы</a>\
                            <div class="categories_container">\
                                <ul class="categories">\
                                    <li><a href="#"><div>Action</div></a></li>\
                                    <li><a href="#"><div>Drama</div></a></li>\
                                    <li><a href="#"><div>Adventure</div></a></li>\
                                    <li><a href="#"><div>Comedy</div></a></li>\
                                    <li><a href="#"><div>Horror</div></a></li>\
                                    <li><a href="#"><div>Romantic</div></a></li>\
                                    <li><a href="#"><div>Western</div></a></li>\
                                    <li><a href="#"><div>Crime</div></a></li>\
                                    <li><a href="#"><div>For Family</div></a></li>\
                                    <li><a href="#"><div>For Kids</div></a></li>\
                                    <li><a href="#"><div>Fantasy</div></a></li>\
                                    <li><a href="#"><div>War</div></a></li>\
                                    <li><a href="#"><div>Historic</div></a></li>\
                                    <li><a href="#"><div>Detective</div></a></li>\
                                    <li><a href="#"><div>Sport</div></a></li>\
                                    <li><a href="#"><div>Triller</div></a></li>\
                                    <li><a href="#"><div>Documental</div></a></li>\
                                </ul>\
                            </div>\
                        </li>\
                        <li class="genre_element">\
                            <a href="#">Мультфильмы</a>\
                            <div class="categories_container">\
                                <ul class="categories">\
                                    <li><a href="#"><div>Action</div></a></li>\
                                    <li><a href="#"><div>Drama</div></a></li>\
                                    <li><a href="#"><div>Adventure</div></a></li>\
                                    <li><a href="#"><div>Comedy</div></a></li>\
                                    <li><a href="#"><div>Horror</div></a></li>\
                                    <li><a href="#"><div>Romantic</div></a></li>\
                                    <li><a href="#"><div>Western</div></a></li>\
                                    <li><a href="#"><div>Crime</div></a></li>\
                                    <li><a href="#"><div>For Family</div></a></li>\
                                    <li><a href="#"><div>For Kids</div></a></li>\
                                    <li><a href="#"><div>Fantasy</div></a></li>\
                                    <li><a href="#"><div>War</div></a></li>\
                                    <li><a href="#"><div>Historic</div></a></li>\
                                    <li><a href="#"><div>Detective</div></a></li>\
                                    <li><a href="#"><div>Sport</div></a></li>\
                                    <li><a href="#"><div>Triller</div></a></li>\
                                    <li><a href="#"><div>Documental</div></a></li>\
                                </ul>\
                            </div>\
                        </li>\
                        <li class="genre_element">\
                            <a href="#">Аниме</a>\
                            <div class="categories_container">\
                                <ul class="categories">\
                                    <li><a href="#"><div>Action</div></a></li>\
                                    <li><a href="#"><div>Drama</div></a></li>\
                                    <li><a href="#"><div>Adventure</div></a></li>\
                                    <li><a href="#"><div>Comedy</div></a></li>\
                                    <li><a href="#"><div>Horror</div></a></li>\
                                    <li><a href="#"><div>Romantic</div></a></li>\
                                    <li><a href="#"><div>Western</div></a></li>\
                                    <li><a href="#"><div>Crime</div></a></li>\
                                    <li><a href="#"><div>For Family</div></a></li>\
                                    <li><a href="#"><div>For Kids</div></a></li>\
                                    <li><a href="#"><div>Fantasy</div></a></li>\
                                    <li><a href="#"><div>War</div></a></li>\
                                    <li><a href="#"><div>Historic</div></a></li>\
                                    <li><a href="#"><div>Detective</div></a></li>\
                                    <li><a href="#"><div>Sport</div></a></li>\
                                    <li><a href="#"><div>Triller</div></a></li>\
                                    <li><a href="#"><div>Documental</div></a></li>  \
                                </ul>\
                            </div>\
                        </li>\
                    </ul>\
                </div>\
                <div class="search">\
                    <input type="search" name="search" id="search_line">\
                    <input type="image" src="images/logo/search.png">\
                </div>\
            </div>\
        </div>';