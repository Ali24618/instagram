import { message, stat } from "../data";

const Pere = () => {
    const id = 1;
    let photo = stat;
    let pere = message;

    if (localStorage.getItem('token') == null) {
        window.location.href = '/parol';
    }
    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-4 border border-dark ali">
                        <div className="row">
                            {
                                photo.map((a) =>
                                    <>
                                        <div className="col-1"><a href="/chat"><i class="fa-solid fa-arrow-left fa-2x mt-1 text-dark mt-4"></i></a></div>
                                        <div className="col-3"><img className="rounded-circle mt-1" src={a.img} width={75} height={75} /></div>
                                        <div className="col-6 mt-3"><b>{a.name}</b><p>{a.message}</p></div>
                                        <div className="col-2"><i class="fa-solid fa-video fa-2x mt-4"></i></div>
                                        <div className="col-12 text-center"><p><small><small>{a.date}</small></small></p></div>
                                    </>
                                )
                            }
                            {
                                pere.map((b) =>
                                    <>
                                        {b.user_id == id ?
                                            <div className="col-12">
                                                <div className="row">
                                                    <div className="col-8"></div>
                                                    <div className="col-4 bg-primary text-light text-center p-2 rounded-pill mt-3"><b>{b.mesagelef}</b></div>
                                                </div>
                                            </div>

                                            :
                                            <div className="col-12">
                                                <div className="row">
                                                    <div className="col-8 bg-primary text-light text-center p-2 rounded-pill mt-3"><b>{b.mesagelef}</b></div>
                                                </div>
                                            </div>
                                        }
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Pere;