const Warning = () => {
    if (localStorage.getItem('token') == null) {
        window.location.href = '/parol';
    }
    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-4 ali border border-dark">
                        <div className="row">
                            <div className="col-1"><a href="/bars"><i class="fa-solid fa-arrow-left fa-2x mt-1 text-dark mt-1"></i></a></div>
                            <div className="col-11 mt-1"><h4><b>Безопасность</b></h4></div>
                            <div className="col-12 mt-2"><b>Безопасность входа</b></div>
                            <div class="col-12 p-3">
                                <div className="row">
                                    <div className="col-1 text-center">
                                        <i className="fa-solid fa-shield-halved"></i>
                                    </div>
                                    <div className="col-11">
                                        <a className="text-dark" href="/passworl">Пароль</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 p-3">
                                <div className="row">
                                    <div className="col-1 text-center">
                                        <i className="fa-solid fa-location-dot"></i>
                                    </div>
                                    <div className="col-11">
                                        Входы в аккаунт
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 p-3">
                                <div class="row">
                                    <div class="col-1 text-center">
                                        <i class="fa-solid fa-floppy-disk"></i>
                                    </div>
                                    <div class="col-11">
                                        Сохраненные данные для входа
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 p-3">
                                <div class="row">
                                    <div class="col-1 text-center">
                                        <i class="fa-regular fa-circle-check"></i>
                                    </div>
                                    <div class="col-11">
                                        Двухфакторная аутентификация
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 p-3">
                                <div class="row">
                                    <div class="col-1 text-center">
                                        <i class="fa-solid fa-envelope"></i>
                                    </div>
                                    <div class="col-11">
                                        Электронные письма от Instagram
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 p-3">
                                <div class="row">
                                    <div class="col-1 text-center">
                                        <i class="fa-solid fa-atom"></i>
                                    </div>
                                    <div class="col-11">
                                        Проверка безопасности
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 mt-3">
                                <b>Данные и история</b>
                            </div>
                            <div class="col-12 mt-3">
                                <div class="row">
                                    <div class="col-1 text-center">
                                        <i class="fa-solid fa-laptop"></i>
                                    </div>
                                    <div class="col-11">
                                        Приложения и сайты
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Warning;