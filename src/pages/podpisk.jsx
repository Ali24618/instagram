import { otpisky, podpisky } from "../data";

const Podpis = () => {
    let subscribe = podpisky;
    let like = otpisky;
    if (localStorage.getItem('token') == null) {
        window.location.href = '/parol';
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4 ali border border-dark">
                        <div className="row">
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-1">
                                        <a className="soul" href="/skala"><i class="fa-solid fa-arrow-left mt-2 text-dark"></i></a>
                                    </div>
                                    <div className="col-11 mt-1">
                                        <b>skala_jons</b>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-3">
                                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                    <div className="col-3 text-center">
                                        <li class="nav-item" role="presentation">
                                            <button className="border-0 bg-white" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Общих</button>
                                        </li>
                                    </div>
                                    <div className="col-3 text-center">
                                        <li class="nav-item" role="presentation">
                                            <button className="border-0 bg-white" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Подписчики</button>
                                        </li>
                                    </div>
                                    <div className="col-3">
                                        <li class="nav-item" role="presentation">
                                            <button className="border-0 bg-white" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">2 Подписки</button>
                                        </li>
                                    </div>
                                    <div className="col-3">
                                        <li class="nav-item">
                                            <button className="border-0 bg-white" id="pills-mouse-tab" data-bs-toggle="pill" data-bs-target="#pills-mouse" role="tab" aria-controls="pills-mouse" aria-selected="false">Для вас</button>
                                        </li>
                                    </div>
                                </ul>
                            </div>
                            {/* 1 Вкладка */}
                            <div class="tab-content" id="pills-tabContent">
                                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                                    <div className="col-12">
                                        <b>Вы являетесь подписчиком</b>
                                    </div>
                                    {
                                        podpisky.map((a) =>
                                            <>
                                                <div className="col-12">
                                                    <div className="row">
                                                        <div className="col-3"><img className="rounded-circle mt-1" src={a.img} width={75} height={75} /></div>
                                                        <div className="col-5 mt-3"><b>{a.name}</b><p>{a.nickname}</p></div>
                                                        <div className="col-4 text-center"><button className="btn btn-secondary mt-3">Подписки</button></div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    }
                                    <div className="col-12">
                                        <b>Рекомендуем вам</b>
                                    </div>
                                    {
                                        like.map((l) =>
                                            <>
                                            <div className="col-12">
                                                <div className="row">
                                                    <div className="col-3"><img className="rounded-circle mt-1" src={l.img} width={75} height={75}/></div>
                                                    <div className="col-5 mt-3"><b>{l.name}</b><p>{l.nickname}</p></div>
                                                    <div className="col-4"><button className="btn btn-primary mt-3">Подписаться</button></div>
                                                </div>
                                            </div>
                                            </>
                                        )
                                    }
                                </div>
                                {/* 2 Вкладка */}
                                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
                                    <div className="col-12">
                                        <div class="input-group mb-3">
                                            <span class="input-group-text"><i class="fa-solid fa-magnifying-glass"></i></span>
                                            <div class="form-floating">
                                                <input type="text" class="form-control" id="floatingInputGroup1" placeholder="Username" />
                                                <label for="floatingInputGroup1">Поиск</label>
                                            </div>
                                        </div>
                                    </div>
                                    {
                                        subscribe.map((a) =>
                                            <>
                                                <div className="col-12">
                                                    <div className="row">
                                                        <div className="col-3"><img className="rounded-circle mt-1" src={a.img} width={75} height={75} /></div>
                                                        <div className="col-6 mt-3"><b>{a.name}</b><p>{a.nickname}</p></div>
                                                        <div className="col-3 text-center"><button className="btn btn-secondary mt-3">Подписки</button></div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    }
                                </div>
                                {/* 3 Вкладка */}
                                <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
                                    <div className="col-12">
                                        <div class="input-group mb-3">
                                            <span class="input-group-text"><i class="fa-solid fa-magnifying-glass"></i></span>
                                            <div class="form-floating">
                                                <input type="text" class="form-control" id="floatingInputGroup1" placeholder="Username" />
                                                <label for="floatingInputGroup1">Поиск</label>
                                            </div>
                                        </div>
                                    </div>
                                    {
                                        subscribe.map((a) =>
                                            <>
                                                <div className="col-12">
                                                    <div className="row">
                                                        <div className="col-3"><img className="rounded-circle mt-1" src={a.img} width={75} height={75} /></div>
                                                        <div className="col-6 mt-3"><b>{a.name}</b><p>{a.nickname}</p></div>
                                                        <div className="col-3 text-center"><button className="btn btn-secondary mt-3">Подписки</button></div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    }
                                </div>
                                {/* 4 Вкладка */}
                                <div class="tab-pane fade" id="pills-mouse" role="tabpanel" aria-labelledby="pills-mouse-tab" tabindex="0">
                                {
                                        like.map((f) =>
                                        <>
                                        <div className="col-12">
                                                <div className="row">
                                                    <div className="col-3"><img className="rounded-circle mt-1" src={f.img} width={75} height={75}/></div>
                                                    <div className="col-4 mt-3"><b>{f.name}</b><p>{f.nickname}</p></div>
                                                    <div className="col-3 text-center"><button className="btn btn-primary mt-3">Подписаться</button></div>
                                                    <div className="col-2 text-center"><button class="border-0 bg-white" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-solid fa-ellipsis-vertical fa-2x mt-3"></i></button></div>
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
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-sm">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4>Убрать пользователя</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Podpis;
