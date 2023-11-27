import Navbar from "../components/navbar";

const Albom = () => {
    if (localStorage.getItem('token') == null) {
        window.location.href = '/parol';
    }
    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-4 fixed-bottom border border-dark sez">
                        <Navbar/>
                    </div>
                    <div className="col-4 border border-dark ali border border-bottom-0">
                        <div className="row">
                        <a href="/"><i class="fa-solid fa-xmark fa-2x mt-2 text-dark"></i></a> <h4 className="sentr mt-2">Новая публикация</h4>
                        <a href="/profile"><i class="fa-solid fa-arrow-right fa-2x mt-2 rew text-dark"></i></a>
                        <div className="col-12 leo">
                            <img src="https://media.gettyimages.com/id/513145516/photo/88th-annual-academy-awards-arrivals.jpg?s=612x612&w=gi&k=20&c=PMBIQOO-hXckVuMKzAxIUIEM_0lonfRupVNR03F_OII=" width="447" height={350}/>
                        </div>
                        <div className="col-12 vniz">
                            <div className="row">
                                <div className="col-3">
                                <select className="form-control border-0 wew">
                                <option>Telegram :</option>
                                <option>WhatsApp</option>
                                <option>Albom</option>
                                <option>Gallery</option>
                            </select>
                                </div>
                                <div className="col-7 mt-2 bg-black text-white rounded">
                                    <b>ВЫБЕРИТЕ НЕСКОЛЬКО ФОТО</b>
                                </div>
                                <div className="col-2">
                                <i class="fa-solid fa-camera fa-2x "></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                                <img src="https://media.gettyimages.com/id/84978310/photo/oscar-nominated-actors-brad-pitt-and-ang.jpg?s=612x612&w=gi&k=20&c=fkAWuVXNb74DzWPYu8tZrgKy9PrF2lrVb_pT2tDUWuc=" className="drad" width="150" height={150}/>
                                <img src="https://media.gettyimages.com/id/102987654/photo/premiere-of-sony-pictures-salt-arrivals.jpg?s=612x612&w=gi&k=20&c=eBA5lea_qROkWf0beMjEi8sR98_Eg5qkK-5QU_zOrfI=" className="drat" width="150"  height={150}/>
                                <img src="https://media.gettyimages.com/id/183694348/photo/us-film-premiere-fight-club-brad-pitt.jpg?s=612x612&w=gi&k=20&c=VOGlr_r-VNttootVtX-uveyHktV30-uSLQqGqHiwfFo=" className="dart" width="150" height={150}/>
                                <img src="https://media.gettyimages.com/id/51619664/photo/los-angeles-united-states-us-actor-edward-norton-arrives-at-the-premiere-of-his-new-film-fight.jpg?s=612x612&w=gi&k=20&c=Ol9F0DXjctyVb95OKhDwi52fr0BvOTIO_fj83jsQvkM=" className="pitt" width="150" height={150}/>
                                <img src="https://media.gettyimages.com/id/461237184/photo/actors-brad-pitt-and-edward-norton-attend-the-15th-annual-afi-awards-at-four-seasons-hotel-los.jpg?s=612x612&w=0&k=20&c=yACiSoVZciHxqyO1Z3brQCHlKAIKTM1lbG0BOYJ5gxM=" className="club" width="150"  height={150}/>
                                <img src="https://media.gettyimages.com/id/1181677040/photo/edward-norton-attends-the-motherless-brooklyn-red-carpet-during-the-14th-rome-film-festival.jpg?s=612x612&w=0&k=20&c=73fxZ1WigVgQATs-bZTyuZuln1EzJ_gDsdDFQHl6xP0=" className="pisk" width="150" height={150}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Albom;