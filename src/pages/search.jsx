import { useState } from "react";
import Navbar from "../components/navbar";
import { image } from "../data";
import { Card, Image } from "antd";

let poisk = image;

const Search = () => {
    const [prof, setRound] = useState();
    const [users, setUsers] = useState(null);
    const [stata, setStata] = useState(true);

    if (localStorage.getItem('token') == null) {
        window.location.href = '/parol';
    }

    function Click() {
        const search = poisk.filter((i) => i.nickname == prof);
        if (search.length > 0) {
            setUsers(search);
        } else {
            setUsers(null)
        }
            if (stata == true) {
                setStata(false);
            } else {
                setStata(true);
            }
    }
    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-md-4 fixed-bottom border border-dark sez">
                        <Navbar />
                    </div>
                    <div className="col-md-4 border border-dark elo">
                        <div className="row">
                            <div class="input-group mb-3">
                                <span onClick={Click} class="input-group-text"><i class="fa-solid fa-magnifying-glass"></i></span>
                                <div class="form-floating">
                                    <input onChange={(e) => setRound(e.target.value)} type="Search" class="form-control" id="floatingInputGroup1" placeholder="Поиск" />
                                    <label for="floatingInputGroup1">Поиск</label>
                                </div>
                            </div>
                            {stata == true ?
                            <>
                                <div className="col-4"><Image width={153} height={150} src="https://i.pinimg.com/736x/58/4b/53/584b53e9eacc70e9a5a18a4fd329be48--dynamic-duos-beautiful-men.jpg" /></div>
                            <div className="col-4"><Image width={153} height={150} src="https://i.pinimg.com/originals/d8/ff/c2/d8ffc285afd6d76cfc18b5a3b03d04be.jpg" /></div>
                            <div className="col-4"><Image width={141} height={150} src="https://i.pinimg.com/1200x/49/ce/c3/49cec3b1d142e113baba69e7f75f6b15.jpg" /></div>
                            <div className="col-4"><Image width={153} height={150} src="https://cdn.justjared.com/wp-content/uploads/2016/01/pitt-globes/brad-pitt-ryan-gosling-golden-globes-2016-03.jpg" /></div>
                            <div className="col-4"><Image width={153} height={150} src="https://static01.nyt.com/images/2019/05/25/arts/22dicaprio-pitt/merlin_155237451_8a5ca9e7-f08f-49b1-8e77-d8e57b275a6e-superJumbo.jpg" /></div>
                            <div className="col-4"><Image width={141} height={150} src="https://hips.hearstapps.com/hmg-prod/images/shutterstock-editorial-5884287s-1571089587.jpg?crop=0.668xw:1.00xh;0.131xw,0&resize=1200:*" /></div>
                            <div className="col-4"><Image width={153} height={150} src="https://pbs.twimg.com/profile_images/1329949157486854150/2vhx3rm9_400x400.jpg" /></div>
                            <div className="col-4"><Image width={153} height={150} src="https://pbs.twimg.com/media/DwkxYGMU0AAfGjm.jpg" /></div>
                            <div className="col-4"><Image width={141} height={150} src="https://i.pinimg.com/736x/8f/be/74/8fbe74a486fd6b2e09264b7a17495e0e.jpg" /></div>
                            <div className="col-4"><Image width={153} height={150} src="https://www.film.ru/sites/default/files/people/1456177-1191023.jpg" /></div>
                            <div className="col-4"><Image width={153} height={150} src="https://i.tribune.com.pk/media/images/1282863-benedict-1483427137/1282863-benedict-1483427137.jpg" /></div>
                            <div className="col-4"><Image width={141} height={150} src="https://upload.wikimedia.org/wikipedia/commons/b/b6/SimonBakerHWOFFeb2013.jpg" /></div>
                            </>
                            :
                            <>
                            </>
                            }
                            {users == null ?
                                <>
                                    {
                                        poisk.map((a) =>
                                            <>
                                                <div className="col-md-12">
                                                    <div className="row">
                                                        <div className="col-3"><img className="rounded-circle mt-1" src={a.foto} width={75} height={75} /></div>
                                                        <div className="col-5 mt-3"><b>{a.name}</b><p>{a.nickname}</p></div>
                                                        <div className="col-4 text-center"><button className="btn btn-primary mt-3">Подписаться</button></div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    }
                                </>
                                :
                                <>
                                    {
                                        users.map((a) =>
                                            <>
                                                <div className="col-md-12">
                                                    <div className="row">
                                                        <div className="col-3"><img className="rounded-circle mt-1" src={a.foto} width={75} height={75} /></div>
                                                        <div className="col-5 mt-3"><b>{a.name}</b><p>{a.nickname}</p></div>
                                                        <div className="col-4 text-center"><button className="btn btn-primary mt-3">Подписаться</button></div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    }
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Search; 