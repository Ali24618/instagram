import Navbar from "../components/navbar";
import { image, phorum } from "../data";

const Lenta = () => {
    if (localStorage.getItem('token') == null) {
        window.location.href = '/parol';
    }
    let photo = image;
    let posts = phorum;
    return (
        <>
            <div className="container">
                <div className="row">
                    <Navbar />
                    <div className="col-md-4 ila border border-dark">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-8">
                                        <img src="https://cdn5.sellbe.com/p57/s-57824/template/105461/Picture/insta_icon_logo.jpg" width="320" height={100} />
                                    </div>
                                    <div className="col-md-4">
                                        <div className="row">
                                            <div className="col-6"><a href="/like"><i class="fa-regular fa-heart fa-2x mt-4 lev text-dark"></i></a></div>
                                            <div className="col-6"><a href="/chat"><i class="fa-solid fa-bolt fa-2x mt-4 text-dark"></i></a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="overflow-scroll d-flex">
                                    {
                                        photo.map((a) =>
                                            <>
                                                <div className="col-md-3"><a href={a.href}><img className="rounded-circle" src={a.foto} width={100} height={100} /></a></div>
                                            </>
                                        )
                                    }
                                </div>
                            </div>
                            {
                                posts.map((f) =>

                                    <>
                                        <div className="col-md-12">
                                            <div className="row">
                                                <div className="col-md-2">
                                                    <a href={f.profile}><img className="rounded-circle mt-2" src={f.foto} width={50} height={50} /></a>
                                                </div>
                                                <div className="col-md-8">
                                                    <h3 className="text-dark mt-3">{f.name}</h3>
                                                </div>
                                                <div className="col-md-2">
                                                    <i data-bs-toggle="modal" data-bs-target="#exampleModal" class="fa-solid fa-bars fa-2x mt-3 text-dark"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mt-2">
                                            <img src={f.publi} width={434} height={524} />
                                        </div>
                                        <div className="col-md-10">
                                            <i class="fa-regular fa-heart fa-2x mt-3"></i>
                                            <i class="fa-regular fa-comment fa-2x mt-3"></i>
                                            <i class="fa-regular fa-paper-plane fa-2x mt-3"></i>
                                        </div>
                                        <div className="col-md-2 text-center">
                                            <i class="fa-regular fa-bookmark fa-2x mt-3"></i>
                                        </div>
                                        <p><b>Нравится:</b> 5325</p>
                                        <p class="d-inline-flex gap-1">
                                            <a className="soul" data-bs-toggle="collapse" href={"#collapseExample" + f.id} aria-expanded="false" aria-controls="collapseExample">
                                                <small>Смотреть все коментарии (32)</small>
                                            </a>
                                        </p>
                                        <div class="collapse" id={"collapseExample" + f.id}>
                                            <div class="border-0">
                                                <small><small>Some placeholder content for the second collapse component of this multi-collapse example.
                                                    This panel is hidden by default but revealed when the user activates the relevant trigger.</small></small>
                                            </div>
                                        </div>
                                    </>

                                )
                            }
                        </div >
                    </div>
                </div>
            </div>


            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog mod">
                    <div class="modal-content">
                        <div class="modal-header text-center">
                            <div className="col-12">
                                <i data-bs-dismiss="modal" class="fa-solid fa-grip-lines fa-2x"></i>
                            </div>
                        </div>
                        <div class="modal-body">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-4 text-center">
                                        <i class="fa-regular fa-bookmark"></i>
                                        <p>Сохранить</p>
                                    </div>
                                    <div className="col-md-4 text-center">
                                        <i class="fa-solid fa-qrcode"></i>
                                        <p>Сохранить</p>
                                    </div>
                                    <div className="col-md-4 text-center">
                                        <i class="fa-solid fa-square-plus"></i>
                                        <p>Сохранить</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-3 text-center"><i class="fa-regular fa-paper-plane fa-2x mt-2"></i></div>
                                    <div className="col-md-9"><small><small><small><small>У нас перестановка!</small></small></small></small><p className="text-primary"><small><small><small><small>Узнайте как поделится или скопировать ссылку</small></small></small></small></p></div>

                                    <div className="col-md-3 text-center"><i class="fa-regular fa-star fa-2x mt-2"></i></div>
                                    <div className="col-md-9 mt-2"><small><small>Добавить в избранное</small></small></div>

                                    <div className="col-md-3 text-center"><i class="fa-solid fa-user-minus fa-2x mt-4"></i></div>
                                    <div className="col-md-9 mt-4"><small><small>Отменить подписку</small></small></div>

                                    <div className="col-md-3 text-center"><i class="fa-regular fa-eye-slash fa-2x mt-4"></i></div>
                                    <div className="col-md-9 mt-4"><small><small>Скрыть</small></small></div>

                                    <div className="col-md-3 text-center"><i class="fa-solid fa-triangle-exclamation fa-2x mt-4 text-danger"></i></div>
                                    <div className="col-md-9 mt-4 text-danger"><small><small>Пожаловаться</small></small></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Lenta;