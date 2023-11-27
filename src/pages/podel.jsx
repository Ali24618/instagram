const Podel = () => {
    if (localStorage.getItem('token') == null) {
        window.location.href = '/parol';
    }
    return (
        <>
        
        <div className="container">
            <div className="row">
                <div className="col-4 border border-dark ali">
                    <div className="row">
                            <div className="col-1"><a href="/profile"><i class="fa-solid fa-xmark fa-2x mt-1 text-dark mt-1"></i></a></div>
                            <div className="col-9 mt-1 text-center"><span class="badge badge-dark btn btn-dark p-2 ml-3">Цвет</span></div>
                            <div className="col-2 text-center mt-1"><i class="fa-solid fa-qrcode fa-2x"></i></div>
                            <div className="col-8 border border-dark gpt text-center">
                                <img src="https://cdn5.sellbe.com/p57/s-57824/template/105461/Picture/insta_icon_logo.jpg" width="270" height={100}/>
                                <b><b>@NICKNAME</b></b>
                            </div>
                            <div className="col-8 border border-dark qaz">
                                <div className="row">
                                    <div className="col-6 text-center p-3">
                                    <i class="fa-solid fa-code-merge fa-2x"></i>
                                    <small><small><p>Поделится профилем</p></small></small>
                                    </div>
                                    <div className="col-6 text-center p-3">
                                    <i class="fa-solid fa-link fa-2x"></i>
                                    <small><small><p>Копировать ссылку</p></small></small>
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
export default Podel;