import { Card, Image } from "antd";
import Navbar from "../components/navbar";
import { image, phorum, users, } from "../data";
import { useEffect, useState } from "react";
const Profile = () => {

    if (localStorage.getItem('token') == null) {
        window.location.href = '/parol';
    }
    
    const local = localStorage.getItem('token');
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);

    const userPosts = () => {
        const detail = phorum.filter((i) => i.user_id == local);
        if (detail.length > 0) {
            setPosts(detail);
        } else {
            setPosts([]);
        }
    }

    const userDetails = () => {
        const detail = users.filter((i) => i.id == local);
        if (detail.length > 0) {
            setUser(detail[0]);
        } else {
            setUser(null);
        }
    }

    useEffect(() => {
        userDetails();
        userPosts();
    }, [])

    function Vhod() {
        localStorage.removeItem('token');
        window.location.href = '/parol';
    }

    return (
         <>
           {user != null ?
                <>

                    <div className="container">
                        <div className="row">
                            <div className="col-4 fixed-bottom border border-dark sez">
                                <Navbar />
                            </div>
                            <div className="col-4 border border-dark ali">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="row">
                                            <div className="col-9"><b className="ml-2 mt-1">{user.login}</b></div>
                                            <div className="col-1"><i data-bs-toggle="modal" data-bs-target="#exampleModal" class="fa-regular fa-square-plus mt-2 text-dark"></i></div>
                                            <div className="col-1"><i data-bs-toggle="modal" data-bs-target="#exampleModal" class="fa-solid fa-bars mt-2 text-dark"></i></div>
                                            <div className="col-1"><a href="/verst"><i class="fa-solid fa-calculator mt-2 text-dark"></i></a></div>
                                        </div>
                                    </div>
                                    <div className="col-3 mt-3"><img className="rounded-circle" src={user.avatar} width={70} height={70} />
                                        <p><b>{user.nickname}</b></p></div>
                                    <div className="col-3 mt-3 que"><b>6</b><p>Публикации</p></div>
                                    <div className="col-3 mt-3 que"><a className="soul" href="/bredpitt"><b>5</b><p>Подписчики</p></a></div>
                                    <div className="col-3 mt-3 que"><a className="soul" href="/bredpitt"><b>5</b><p>Подписки</p></a></div>
                                    <div className="col-12 mt-2">
                                        <div className="row">
                                            <div className="col-5 mt-1">
                                                <a className="btn btn-white border" href="/editor"><b>Редактировать</b></a>
                                            </div>
                                            <div className="col-5 mt-1">
                                                <a className="btn btn-white border" href="/podel"><b>Поделится</b></a>
                                            </div>
                                            <div class="col-1 mt-1">
                                                <p class="d-inline-flex gap-1">
                                                    <a className="text-dark" data-bs-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                                        <i class="fa-solid fa-user-plus fa-2x mt-1"></i>
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <b><small>Описание</small></b>
                                        <p><small><small>{user.description}</small></small></p>
                                    </div>

                                    <div class="collapse" id="collapseExample">
                                        <div class="card card-body border-0">
                                            <div className="col-12 mt-2">
                                                <div className="row">
                                                    <div className="col-4 text-center border rounded p-2">
                                                        <img className="rounded-circle" src="https://www.film.ru/sites/default/files/people/1455579-884296.jpg" width={100} height={100} />
                                                        <b>stethem__</b>
                                                        <p><small><small>JasonStatham</small></small></p>
                                                        <button className="btn btn-primary">Подписаться</button>
                                                    </div>
                                                    <div className="col-4 text-center border rounded p-2">
                                                        <img className="rounded-circle" src="https://flxt.tmsimg.com/assets/435_v9_bc.jpg" width={100} height={100} />
                                                        <b>leonar_dicaprio</b>
                                                        <p><small><small>LeoDicaprio</small></small></p>
                                                        <button className="btn btn-primary">Подписаться</button>
                                                    </div>
                                                    <div className="col-4 text-center border rounded p-2">
                                                        <img className="rounded-circle" src="https://image.tmdb.org/t/p/w500/4SYTH5FdB0dAORV98Nwg3llgVnY.jpg" width={100} height={100} />
                                                        <b>ryan_reyolds</b>
                                                        <p><small><small>RyanReyolds</small></small></p>
                                                        <button className="btn btn-primary">Подписаться</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 mt-2">
                                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                                            <div className="row">
                                                <div className="col-4">
                                                    <li class="nav-item" role="presentation">
                                                        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true"><i class="fa-solid fa-image"></i></button>
                                                    </li>
                                                </div>
                                                <div className="col-4">
                                                    <li class="nav-item" role="presentation">
                                                        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false"><i class="fa-solid fa-circle-play"></i></button>
                                                    </li>
                                                </div>
                                                <div className="col-4">
                                                    <li class="nav-item" role="presentation">
                                                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false"><i class="fa-solid fa-circle-user"></i></button>
                                                    </li>
                                                </div>
                                            </div>
                                        </ul>
                                    </div>
                                    <div class="tab-content" id="myTabContent">
                                        <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                                            <div className="col-12">
                                                <div className="row">
                                                    {posts.length > 0 ?
                                                        <>
                                                            {posts.map((i) =>
                                                                <div className="col-4 text-center">
                                                                    <Image
                                                                        width={143} height={153}
                                                                        src={i.publi}
                                                                    />
                                                                </div>
                                                            )}
                                                        </>
                                                        : <></>

                                                    }
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="row">
                                                    {posts.length > 0 ?
                                                        <>
                                                            {posts.map((i) =>
                                                                <div className="col-4 text-center">
                                                                    <Image
                                                                        width={143} height={153}
                                                                        src={i.image}
                                                                    />
                                                                </div>
                                                            )}
                                                        </>
                                                        : 
                                                        <></>

                                                    }
                                                </div>
                                            </div>
                                        </div>

                                        <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                                            <div className="col-12">
                                                <div className="row">
                                                    <div className="col-4">
                                                        <iframe width="152" height="250" src="https://www.youtube.com/embed/V1L0CTaTGRo"></iframe>
                                                    </div>
                                                    <div className="col-4">
                                                        <iframe width="152" height="250" src="https://www.youtube.com/embed/V_Kg8uNTnDU"></iframe>
                                                    </div>
                                                    <div className="col-4">
                                                        <iframe width="142" height="250" src="https://www.youtube.com/embed/OPIRjka5xdw"></iframe>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                                            <div className="col-12 text-center mt-5">
                                                <i class="fa-solid fa-house-user fa-5x mt-5"></i>
                                                <p><b><h4><b>Фото и видео с вами</b></h4></b></p>
                                                <small><small><small>Здесь показываются фото и видео на которых вас отметили</small></small></small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog mod">
                            <div class="modal-content">
                                <div class="modal-header text-center">
                                    <div className="col-12">
                                        <div className="row">
                                            <i data-dismiss="modal" aria-label="Close" class="fa-solid fa-grip-lines fa-2x"></i>
                                            <b><b><h4>Уведомления</h4></b></b>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-body">

                                    <div className="col-12">
                                        <div className="row">
                                            <div className="col-2"><i class="fa-solid fa-play"></i></div>
                                            <div className="col-10"><p><b>Видео в Reels</b></p></div>

                                            <div className="col-2"><a href="/photo"><i class="fa-regular fa-calendar-days text-dark"></i></a></div>
                                            <div className="col-10"><a className="soul" href="/photo"><p><b>Публикация</b></p></a></div>

                                            <div className="col-2"><i class="fa-solid fa-plus-minus"></i></div>
                                            <div className="col-10"><p><b>История</b></p></div>

                                            <div className="col-2"><a href="/bars"><i class="fa-solid fa-gear text-dark"></i></a></div>
                                            <div className="col-10"><a className="soul" href="/bars"><p><b>Настройки</b></p></a></div>

                                            <div className="col-2"><i class="fa-brands fa-gratipay"></i></div>
                                            <div className="col-10"><p><b>Актуальное из истории</b></p></div>

                                            <div className="col-2"><i class="fa-brands fa-first-order"></i></div>
                                            <div className="col-10"><p><b>Выйти в эфир</b></p></div>

                                            <div className="col-2"><i class="fa-solid fa-book"></i></div>
                                            <div className="col-10"><p><b>Советы</b></p></div>

                                            <div className="col-12 text-center"><button className="btn btn-danger" onClick={Vhod}>Вход</button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
                : <></>
            }
        </>
    )
}
export default Profile;