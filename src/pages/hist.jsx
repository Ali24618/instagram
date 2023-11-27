const Hist = () => {
    if (localStorage.getItem('token') == null) {
        window.location.href = '/parol';
    }
    return (

        <>
            <div className="container">
                <div className="row">
                    <div className="col-4 border border-dark ali">
                        <div className="row">
                            <a href="/"><div className="col-12"><p>

                            </p></div></a>
                            <hr />
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-3 text-center">
                                        <img className="rounded-circle" src="https://i.pinimg.com/originals/1c/ff/90/1cff90f0f2160c02dd6a9bceeb4223fc.jpg" width="60" height={60}/>
                                        <p>Публикация</p>
                                    </div>
                                    <div className="col-9 text-center">
                                        <b>M.Luffi</b>
                                        <p><i class="fa-solid fa-clapperboard"></i> Смотреть видео Reels</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <img src="https://avatars.mds.yandex.net/i?id=252622b74d94502630dae3d4e17495f4b4fd90a2-5101230-images-thumbs&n=13" width="422" height={600}/>
                            </div>
                            <div className="col-12 mt-2">
                                <div className="row">
                                    <div className="col-8">
                                        <input className="form-control rounded-0" type="text" placeholder="Добавить коментарий..."/>
                                    </div>
                                    <div className="col-2 text-center"><i class="fa-solid fa-heart fa-2x text-danger"></i></div>
                                    <div className="col-2 text-center"><i class="fa-solid fa-paper-plane fa-2x"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default Hist;