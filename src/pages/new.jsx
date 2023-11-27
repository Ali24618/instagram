const New = () => {
    if (localStorage.getItem('token') == null) {
        window.location.href = '/parol';
    }
    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-4 border border-dark ali">
                        <div className="col-12 text-center">
                            <img src="https://cdn.telanganatoday.com/wp-content/uploads/2022/05/Instagram-users-irked-with-the-new-update.jpg" width="275" height={150} />
                            <b>Зарегистрируйтесь, чтобы смотреть фото и видео ваших друзей.</b>
                        </div>
                        <div className="col-12 mt-3">
                            <a href="/parol"><button className="btn btn-primary form-control"><i class="fa-brands fa-square-facebook"></i><b> Войти через Facebook</b></button></a>
                        </div>
                        <div className="col-12 mt-3">
                            <div className="row">
                                <div className="col-4"><hr /></div>
                                <div className="col-4 text-center">ИЛИ</div>
                                <div className="col-4"><hr /></div>
                            </div>
                        </div>
                        <div className="col-12 mt-3">
                            <input className="form-control mt-2 rounded-0" type="text" placeholder="Моб. телефон или  эл. адрес"/>
                            <input className="form-control mt-2 rounded-0" type="text" placeholder="Имя и фамилия"/>
                            <input className="form-control mt-2 rounded-0" type="text" placeholder="Имя пользователя"/>
                            <input className="form-control mt-2 rounded-0" type="password" placeholder="Пароль"/>
                        </div>
                        <div className="col-12 text-center mt-3">
                            <small><small>Люди, которые пользуются нашим сервисом, могли загрузить вашу контактную информацию в Instagram. Подробнее</small></small>
                        </div>
                        <div className="col-12">
                        <button className="btn btn-info text-light mt-3 form-control"><b>Регистрация</b></button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default New;