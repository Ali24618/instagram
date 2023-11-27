const Editor = ()=> {
    if (localStorage.getItem('token') == null) {
        window.location.href = '/parol';
    }
    return(
        <>
        
        <div className="container">
            <div className="row">
                <div className="col-4 border border-dark ali">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-1"><a href="/profile"><i class="fa-solid fa-xmark fa-2x mt-1 text-dark"></i></a></div>
                                <div className="col-10 mt-2 ml-1"><b>Редактировать</b></div>
                                <div className="col-1"><a href="/profile"><i class="fa-solid fa-check fa-2x mt-1 qwe text-dark"></i></a></div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                <div className="col-3"></div>
                                <div className="col-3"><img className="rounded-circle" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Adobe_After_Effects_CC_icon.svg/800px-Adobe_After_Effects_CC_icon.svg.png" width="100" height={100}/></div>
                                <div className="col-3"><img className="rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTirHxQzoWPUFgJlbSq2gVRsXZjZ_cxygZL7OKlpKk5DI_rWHQf4gGOFh_BKjKax2wb7OY&usqp=CAU" width="100" height={100}/></div>
                                <div className="col-3"></div>
                            </div>
                        </div>
                        <div className="col-12 text-center">
                            <p><a href=""><small><small>Изменить фото или аватар</small></small></a></p>
                            <small><small>Имя</small></small>
                            <input type="text" className="form-control" />
                            <small><small><small>Имя пользователя</small></small></small>
                            <input type="text" className="form-control" />
                            <small><small><small>Биография</small></small></small>
                            <input type="text" className="form-control" />
                            <p><small><small><small>Добавить ссылку</small></small></small></p>
                            <b>Подключенная Страница в Facebook</b>
                            <p><small><small>Страница</small></small></p>
                            <hr/>
                            <p><a href=""><small><small>Переключится на професиональный аккаунт</small></small></a></p>
                            <hr/>
                            <p><a href=""><small><small>Настройки личной информации</small></small></a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}
export default Editor;