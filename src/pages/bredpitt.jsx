import { imafe } from "../data";

const Bred = () => {
    if (localStorage.getItem('token') == null) {
        window.location.href = '/parol';
    }
    let friend = imafe;
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4 border border-dark ali">
                        <div className="row">
                            <div className="col-1">
                                <a href="/profile"><i class="fa-solid fa-arrow-left text-dark"></i></a>
                            </div>
                            <div className="col-11"><b>bred_pitt</b>
                            </div>
                            <div className="col-12">
                                <div className="row">
                                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                                        <div className="col-6">
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Подписчики: 5</button>
                                            </li>
                                        </div>
                                        <div className="col-6">
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Подписки: 5</button>
                                            </li>
                                        </div>
                                    </ul>
                                </div>
                            </div>

                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                                    <div className="col-12 mt-2">
                                        <div class="input-group mb-3">
                                            <span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-magnifying-glass"></i></span>
                                            <input type="text" class="form-control" placeholder="Поиск" aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>
                                    </div>
                                    {
                                        friend.map((a) =>
                                            <>
                                                <div className="col-12">
                                                    <div className="row">
                                                        <div className="col-3"><img className="rounded-circle mt-1" src={a.foto} width={75} height={75} /></div>
                                                        <div className="col-5 mt-3"><b>{a.name}</b><p>{a.nickname}</p></div>
                                                        <div className="col-4 text-center"><button className="btn btn-secondary mt-3">Удалить</button></div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    }
                                </div>
                                <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                                    <div className="col-12 mt-2">
                                        <div class="input-group mb-3">
                                            <span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-magnifying-glass"></i></span>
                                            <input type="text" class="form-control" placeholder="Поиск" aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>
                                    </div>
                                    {
                                        friend.map((a) =>
                                            <>
                                                <div className="col-12">
                                                    <div className="row">
                                                        <div className="col-3"><img className="rounded-circle mt-1" src={a.foto} width={75} height={75} /></div>
                                                        <div className="col-5 mt-3"><b>{a.name}</b><p>{a.nickname}</p></div>
                                                        <div className="col-4 text-center"><button className="btn btn-secondary mt-3">Удалить</button></div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Bred;