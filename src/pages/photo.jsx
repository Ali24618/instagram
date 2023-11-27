const Photo = () => {
    if (localStorage.getItem('token') == null) {
        window.location.href = '/parol';
    }
    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-4 border border-dark ali">
                        <div className="row">
                            <div className="col-1"><a href="/profile"><i class="fa-solid fa-arrow-left fa-2x mt-1 text-dark mt-1"></i></a></div>
                            <div className="col-11 mt-1"><h4><b>Публикация</b></h4></div>
                            <div className="col-2"><a href="/profile"><img className="rounded-circle mt-2" src="https://static.apostrophe.ua/uploads/image/402e11c640aeeb8b8a0af941bc3f4226.jpg" width="50" height={50} /></a></div>
                            <div className="col-8 mt-2"><b>BredPitt</b><p>Song</p></div>
                            <div className="col-2"><a href="/bars"><i class="fa-solid fa-bars fa-2x mt-3 text-dark"></i></a></div>
                            <div className="col-12">
                                <img src="https://m1.quebecormedia.com/emp/emp/1_brad_pittc96a15c9-e293-4128-8b8a-e2404dac2f37_ORIGINAL.jpg?impolicy=crop-resize&x=0&y=0&w=1928&h=2700&width=925" width="435" height={600} />
                            </div>
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-10">
                                        <i class="fa-solid fa-heart fa-2x mt-1 text-danger"></i> <i class="fa-regular fa-comment fa-2x mt-1"></i> <i class="fa-regular fa-paper-plane fa-2x mt-1 ml-1"></i>
                                    </div>
                                    <div className="col-2"><i class="fa-solid fa-bars fa-2x mt-2"></i></div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-2"><a href="/skala"></a></div>
                                    <div className="col-10 mt-1">Нравится <b>skala_jons</b> и <b>ещё 3</b></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Photo;