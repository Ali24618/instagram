const Passworl = () => {
    if (localStorage.getItem('token') == null) {
        window.location.href = '/parol';
    }
    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-4 border border-dark ali">
                        <div className="row">
                            <div className="col-1"><a href="/warn"><i class="fa-solid fa-arrow-left fa-2x mt-1 text-dark mt-1"></i></a></div>
                            <div className="col-9 mt-1"><h4><b>Пароль</b></h4></div>
                            <div className="col-2 text-center"><a href="/profile"><i class="fa-solid fa-check fa-2x text-dark mt-1"></i></a></div>
                            <div className="col-12 text-center">
                                <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim</small>
                                    <p><small><small><b>Текущий пароль</b></small></small></p>
                                <input type="password" className="form-control"/>
                                <p className="text-danger"><small><small><small>Пароль должен содержать не менее 6 символов</small></small></small></p>
                                <p><small><small><small>Новый пароль</small></small></small></p>
                                <input type="password" className="form-control"/>
                                <p><small><small><small>Введите новый пароль еще раз</small></small></small></p>
                                <input type="password" className="form-control"/>
                                <a href="/parol"><small><small>Забыли пароль?</small></small></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Passworl;