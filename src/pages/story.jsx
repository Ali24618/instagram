const Story = () => {
    if (localStorage.getItem('token') == null) {
        window.location.href = '/parol';
    }
    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-4 border border-dark ali">
                        <div className="row">
                            <div className="col-1"><a href="/"><i class="fa-solid fa-xmark fa-2x text-dark mt-1"></i></a></div>
                            <div className="col-9 mt-1 ml-2"><h4>Дополнить историю</h4></div>
                            <div className="col-2 text-center"><a href="/bars"><i class="fa-solid fa-gear fa-2x text-dark mt-1"></i></a></div>
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-3">
                                        <select className="form-control border border-0">
                                            <option>Галерея</option>
                                            <option>Фото</option>
                                            <option>Видео</option>
                                            <option>Телеграм</option>
                                            <option>Снимки экрана</option>
                                        </select>
                                    </div>
                                    <div className="col-6"></div>
                                    <div className="col-3"><span class="badge badge-dark btn btn-dark p-2 mt-2">Выбрать</span></div>
                                </div>
                            </div>
                            <div className="col-12 ger">
                                <div className="row">
                                    <div className="col-4">
                                        <img src="https://static.wikia.nocookie.net/onepiece/images/e/e5/Monkey_D._Luffy_Anime_Pre_Timeskip_Infobox.png/revision/latest?cb=20230218134949" width={150} height={300}/>
                                    </div>
                                    <div className="col-4">
                                        <img src="https://avatars.mds.yandex.net/i?id=252622b74d94502630dae3d4e17495f4b4fd90a2-5101230-images-thumbs&n=13" width="150" height="300"/>
                                    </div>
                                    <div className="col-4">
                                        <img src="https://avatars.mds.yandex.net/i?id=1f5436b4dfa5bdd2fc7baa8cb1708ad0631bf98b-8496961-images-thumbs&n=13" width="150" height="300"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 ges">
                                <div className="row">
                                    <div className="col-4">
                                        <img src="https://static.wikia.nocookie.net/onepiece/images/e/e5/Monkey_D._Luffy_Anime_Pre_Timeskip_Infobox.png/revision/latest?cb=20230218134949" width="150" height="300"/>
                                    </div>
                                    <div className="col-4">
                                        <img src="https://shikimori.one/system/characters/original/40.jpg" width="150" height="300"/>
                                    </div>
                                    <div className="col-4">
                                        <img src="https://static.wikia.nocookie.net/onepiece/images/9/99/Luffy_Anime_Pre_Timeskip_Infobox.png/revision/latest/scale-to-width-down/270?cb=20130511173619&path-prefix=ru" width="150" height="300"/>
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
export default Story;