const Skala = () => {
    if (localStorage.getItem('token') == null) {
        window.location.href = '/parol';
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4 border border-dark ali">
                        <div className="row">
                            <div className="col-1"><a href="/"><i class="fa-solid fa-arrow-left text-dark mt-2"></i></a></div>
                            <div className="col-1 mt-1"><b>skala_jons</b></div>
                            <div className="col-8"></div>
                            <div className="col-1">
                                <button type="button" class="border-0 bg-white" data-toggle="modal" data-target="#exampleModal">
                                    <i class="fa-solid fa-bell mt-2 mt-2"></i>
                                </button>
                            </div>
                            <div className="col-1">
                                <button type="button" class="border-0 bg-white" data-toggle="modal" data-target="#exerleModal">
                                    <i class="fa-solid fa-ellipsis-vertical mt-2"></i>
                                </button>
                            </div>
                            <div className="col-3 mt-3"><img className="rounded-circle" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Dwayne_Johnson_2014%28Cropped%29.jpg/800px-Dwayne_Johnson_2014%28Cropped%29.jpg" width={70} height={70} />
                                <p><b>Skaala_Dwayne</b></p></div>
                            <div className="col-3 mt-3 que"><b>0</b><p>Публикации</p></div>
                            <div className="col-3 mt-3 que"><a className="soul text-dark" href="/podpisk"><b>4</b><p>Подписчики</p></a></div>
                            <div className="col-3 mt-3 que"><a className="soul text-dark" href="/podpisk"><b>4</b><p>Подписки</p></a></div>
                            <div className="col-12">
                                <img className="rounded-circle" src="https://static.apostrophe.ua/uploads/image/402e11c640aeeb8b8a0af941bc3f4226.jpg" width={25} height={25} />
                                <img className="rounded-circle" src="https://graziamagazine.ru/upload/attach/e6b/e6b512b4232be912a087f9166040e6ec.jpg" width={25} height={25} />
                                <small><small>Подписчики: <b>robert_downey</b> и <b>leonardo-dikaprio</b></small></small>
                            </div>
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-5 mt-2">
                                        <button type="button" class="bg-white btn btn-white border" data-toggle="modal" data-target="#eseleModal">
                                            <b>Подписки</b>
                                        </button>
                                    </div>
                                    <div className="col-5 mt-2">
                                        <a className="btn btn-white border" href="/shifr"><b>Сообщения</b></a>
                                    </div>
                                    <div class="col-1 mt-2">
                                    <p class="d-inline-flex gap-1">
                                            <a className="text-dark" data-bs-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                                <i class="fa-solid fa-user-plus fa-2x mt-1"></i>
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="collapse" id="collapseExample">
                                <div class="card card-body border-0">
                                    <div className="col-12 mt-2">
                                        <div className="row">
                                            <div className="col-4 text-center border rounded p-2">
                                                <img className="rounded-circle" src="https://www.film.ru/sites/default/files/people/1455579-884296.jpg" width={100} height={100} />
                                                <b>stethem__</b>
                                                <p><small><small>JasonStatham</small></small></p>
                                                <button className="btn btn-primary">Подписаться</button>
                                            </div>
                                            <div className="col-4 text-center border rounded p-2">
                                                <img className="rounded-circle" src="https://flxt.tmsimg.com/assets/435_v9_bc.jpg" width={100} height={100} />
                                                <b>leonar_dicaprio</b>
                                                <p><small><small>LeoDicaprio</small></small></p>
                                                <button className="btn btn-primary">Подписаться</button>
                                            </div>
                                            <div className="col-4 text-center border rounded p-2">
                                                <img className="rounded-circle" src="https://image.tmdb.org/t/p/w500/4SYTH5FdB0dAORV98Nwg3llgVnY.jpg" width={100} height={100} />
                                                <b>ryan_reyolds</b>
                                                <p><small><small>RyanReyolds</small></small></p>
                                                <button className="btn btn-primary">Подписаться</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 mt-3">
                                <nav>
                                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                        <button class="nav-link active" id="nav-home-tab" data-toggle="tab" data-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                                            <i className="fa-solid fa-layer-group fa-2x text-dark"></i>
                                        </button>
                                        <button class="nav-link" id="nav-profile-tab" data-toggle="tab" data-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                                            <i class="fa-solid fa-user fa-2x text-dark"></i>
                                        </button>
                                    </div>
                                </nav>
                            </div>

                            <div class="tab-content" id="nav-tabContent">
                                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                    <div className="col-12 text-center mt-5">
                                        <i class="fa-solid fa-camera fa-5x mt-5"></i>
                                        <p><b><h2><b>Публикаций пока нет</b></h2></b></p>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                    <div className="col-12 text-center mt-5">
                                        <i class="fa-solid fa-house-user fa-5x mt-5"></i>
                                        <p><b><h2><b>Публикаций пока нет</b></h2></b></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog mod">
                    <div class="modal-content">
                        <div class="modal-header text-center">
                            <div className="col-12">
                                <div className="row">
                                    <i data-dismiss="modal" class="fa-solid fa-grip-lines fa-3x"></i>
                                    <b><b><h4>Уведомления</h4></b></b>
                                </div>
                            </div>
                        </div>
                        <div class="modal-body">
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-10"><p>Публикации</p></div>
                                    <div className="col-2">
                                        <label class="switch">
                                            <input type="checkbox" />
                                            <span class="slider round"></span>
                                        </label>
                                    </div>
                                    <div className="col-10"><p>Истории</p></div>
                                    <div className="col-2">
                                        <label class="switch">
                                            <input type="checkbox" />
                                            <span class="slider round"></span>
                                        </label>
                                    </div>
                                    <div className="col-10"><p>Видео</p></div>
                                    <div className="col-2">
                                        <label class="switch">
                                            <input type="checkbox" />
                                            <span class="slider round"></span>
                                        </label>
                                    </div>
                                    <div className="col-10"><p>Reels</p></div>
                                    <div className="col-2">
                                        <label class="switch">
                                            <input type="checkbox" />
                                            <span class="slider round"></span>
                                        </label>
                                    </div>
                                    <div className="col-10"><p>Начало трансляций</p></div>
                                    <div className="col-2"><small><small>Некоторые</small></small></div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer text-center">
                            <small><small><small>
                                Получайте Уведомления когда skala_jons делится фото, видео и каналами-рассылками.
                            </small></small></small>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="exerleModal" tabindex="-1" aria-labelledby="exerleModalLabel" aria-hidden="true">
                <div class="modal-dialog mod">
                    <div class="modal-content">
                        <div class="modal-header text-center">
                            <div className="col-12">
                                <div className="row">
                                    <i data-dismiss="modal" class="fa-solid fa-grip-lines fa-3x"></i>
                                </div>
                            </div>
                        </div>
                        <div class="modal-body">
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-10"><p>Пожаловаться</p></div>
                                    <div className="col-10"><p>Заблокировать</p></div>
                                    <div className="col-10"><p>Информация об аккаунте</p></div>
                                    <div className="col-10"><p>Ограничить доступ</p></div>
                                    <div className="col-10"><p>Посмотреть общие действия</p></div>
                                    <div className="col-10"><p>Скрыть мою историю</p></div>
                                    <div className="col-10"><p>Скопировать URl профиля</p></div>
                                    <div className="col-10"><p>Показать QR-код</p></div>
                                    <div className="col-10"><p>Поделится этим профилем</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="eseleModal" tabindex="-1" aria-labelledby="eseleModal" aria-hidden="true">
                <div class="modal-dialog mod">
                    <div class="modal-content">
                        <div class="modal-header text-center">
                            <div className="col-12">
                                <div className="row">
                                    <i data-dismiss="modal" class="fa-solid fa-grip-lines fa-3x"></i>
                                    <b><b><h4>Skaala_Dwayne</h4></b></b>
                                </div>
                            </div>
                        </div>
                        <div class="modal-body">
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-10"><p>Добавить в список близкие друзья</p></div>
                                    <div className="col-2 text-center"><i class="fa-solid fa-chess-rook fa-2x"></i></div>
                                    <div className="col-10 mt-1"><p>Добавить в избранное</p></div>
                                    <div className="col-2 text-center"><i class="fa-regular fa-star fa-2x"></i></div>
                                    <div className="col-10"><p>Скрыть пользователя</p></div>
                                    <div className="col-2 text-center"><i class="fa-solid fa-chevron-right text-secondary fa-2x"></i></div>
                                    <div className="col-10"><p>Ограничить доступ</p></div>
                                    <div className="col-2 text-center"><i class="fa-solid fa-chevron-right text-secondary fa-2x"></i></div>
                                    <div className="col-10"><p>Отменить подписку</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Skala;   