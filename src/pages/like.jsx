const Like = () => {
    if (localStorage.getItem('token') == null) {
        window.location.href = '/parol';
    }
    return(
        <>
        
        <div className="container">
            <div className="row">
                <div className="col-4 border border-dark ali">
                    <div className="row">
                    <div className="col-1"><a href="/"><i class="fa-solid fa-arrow-left fa-2x mt-1 text-dark"></i></a></div>
                    <div className="col-11 mt-1"><h4>Уведомления</h4></div>
                    <div className="col-12 mt-3">
                        <div className="row">
                            <div className="col-2"><i class="fa-solid fa-user-plus fa-2x mt-2"></i></div>
                            <div className="col-10"><b>Запросы на подписку</b> <small><small><p>Подтвердить или игнорирвать запросы</p></small></small></div>
                        </div>
                    </div>
                    <div className="col-12 mt-3 text-center">
                        <b>Сегодня</b>
                    </div>
                    <div className="col-12 mt-3">
                        <div className="row">
                            <div className="col-2"><i class="fa-solid fa-users-gear fa-2x mt-2"></i></div>
                            <div className="col-10"><b>Zoro, Usopp</b>Подтвердить запросы<p>13 ч.</p></div>
                        </div>
                    </div>
                    <div className="col-12 mt-3">
                        <div className="row">
                            <div className="col-2"><i class="fa-solid fa-users-gear fa-2x mt-2"></i></div>
                            <div className="col-10"><b>Zoro, Usopp</b>Подтвердить запросы<p>13 ч.</p></div>
                        </div>
                    </div>
                    <div className="col-12 mt-3">
                        <div className="row">
                            <div className="col-2"><i class="fa-solid fa-users-gear fa-2x mt-2"></i></div>
                            <div className="col-10"><b>Zoro, Usopp</b>Подтвердить запросы<p>13 ч.</p></div>
                        </div>
                    </div>
                    <div className="col-12 mt-3 text-center">
                        <b>Вчера</b>
                    </div>
                    <div className="col-12 mt-3">
                        <div className="row">
                            <div className="col-2"><i class="fa-solid fa-users-gear fa-2x mt-2"></i></div>
                            <div className="col-10"><b>Sanji</b> прокоментировал: классное видео<p>13 ч.</p></div>
                        </div>
                    </div>
                    <div className="col-12 mt-3 text-center">
                        <b>На этой неделе</b>
                    </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}
export default Like;