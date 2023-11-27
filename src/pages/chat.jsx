import { useEffect, useState } from "react";
import { ins, users } from "../data";
let chat = ins;

const Chat = () => {
    const [prof, setRound] = useState();
    const [users1, setUsers] = useState(null);
    const [user, setUser] = useState(null);
    const [search, setSearch] = useState(null);
    const local = localStorage.getItem('token');
    if (localStorage.getItem('token') == null) {
        window.location.href = '/parol';
    }
    function Knopka() {
        const search1 = chat.filter((i) => i.name == prof);
        if (search1.length > 0) {
            setSearch(search1);
        } else {
            setSearch(null);
        }
    }
    const userChats = () => {
        const chats = chat.filter((i) => i.user1_id == local || i.user2_id == local);
        if (chats.length > 0) {
            setUsers(chats);
        } else {
            setUsers(null);
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
        userChats();
    }, [])
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4 border border-dark ali">
                        <div className="row">
                            <div className="col-1"><a href="/"><i class="fa-solid fa-arrow-left fa-2x mt-1 text-dark"></i></a></div>
                            {
                                user != null ?
                                <div className="col-9 mt-2 ml-5"><a href="/parol" className="soul"><h5>{user.nickname}</h5></a></div>
                                :
                                <></>
                            }
                            <div className="col-1"><i class="fa-solid fa-video fa-2x mt-1 gym"></i></div>
                            <div className="col-1"><i class="fa-solid fa-plus fa-2x mt-1 dym"></i></div>
                            <div className="col-9">
                                <input onChange={(e) => setRound(e.target.value)} type="Search" placeholder="Поиск" className="form-control shadow mt-2" />
                            </div>
                            <div className="col-3"><button onClick={Knopka} className="btn btn-danger form-control mt-2">Кнопка</button></div>
                            <div className="col-2 mt-3"><b>Сообщения</b></div>
                            <div className="col-8"></div>
                            <div className="col-2 mt-3"><a href="">Запросы</a></div>
                            {search == null ?
                                <>
                                    {users1 != null ?
                                        <> {
                                            users1.map((s) =>
                                                <>
                                                    <div className="col-12 mt-3">
                                                        <div className="row">
                                                            <div className="col-3"><a href="/shifr"><img className="rounded-circle" src={s.photo} width={75} height={75} /></a></div>
                                                            <div className="col-7 mt-1"><b>{s.name}</b><p>{s.online}</p></div>
                                                            <div className="col-2 p-2"><i class="fa-solid fa-camera fa-2x text-dark"></i></div>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        }
                                        </>
                                        : <></>
                                    }
                                </>
                                :
                                <>
                                    {
                                        search.map((s) =>
                                            <>
                                                <div className="col-12 mt-3">
                                                    <div className="row">
                                                        <div className="col-3"><a href="/shifr"><img className="rounded-circle" src={s.photo} width={75} height={75} /></a></div>
                                                        <div className="col-7"><b>{s.name}</b><p>{s.online}</p></div>
                                                        <div className="col-2 p-2"><i class="fa-solid fa-camera fa-2x text-dark"></i></div>
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
export default Chat;