const Bars = () => {
    if (localStorage.getItem('token') == null) {
        window.location.href = '/parol';
    }
    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-4 border border-dark ali">
                        <div className="row">
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-1">
                                        <a href="/profile"><i class="fa-solid fa-arrow-left fa-2x mt-1 text-dark"></i></a>
                                    </div>
                                    <div className="col-11 text-center mt-2">
                                        <b>Настройки</b>
                                    </div>
                                </div>
                            </div>
                            <div className="col-11">
                                <div className="row">
                                    <div className="col-1 aot">
                                        <i class="fa-solid fa-magnifying-glass mt-2"></i>
                                    </div>
                                    <div className="col-8 fer">
                                        <input type="Search" placeholder="Search" className="form-control border-0" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-1">
                                        <i class="fa-solid fa-user-plus wni"></i>
                                    </div>
                                    <div className="col-11 text-center mt-5">
                                        <b>Подписки и приглашения</b>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-1">
                                        <i class="fa-solid fa-bell wni"></i>
                                    </div>
                                    <div className="col-11 text-center mt-5">
                                        <b>Подписки и приглашения</b>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-1">
                                    <a href="/warn"><i class="fa-solid fa-lock wni text-dark"></i></a>
                                    </div>
                                    <div className="col-11 text-center mt-5">
                                        <a className="text-dark" href="/warn"><b>Безопасность</b></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-1">
                                        <i class="fa-solid fa-user-group wni"></i>
                                    </div>
                                    <div className="col-11 text-center mt-5">
                                        <b>Подписки и приглашения</b>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-1">
                                        <i class="fa-solid fa-check wni"></i>
                                    </div>
                                    <div className="col-11 text-center mt-5">
                                        <b>Подписки и приглашения</b>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-1">
                                        <i class="fa-solid fa-user-plus wni"></i>
                                    </div>
                                    <div className="col-11 text-center mt-5">
                                        <b>Подписки и приглашения</b>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-1">
                                        <i class="fa-solid fa-user-plus wni"></i>
                                    </div>
                                    <div className="col-11 text-center mt-5">
                                        <b>Подписки и приглашения</b>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-1">
                                        <i class="fa-solid fa-user-plus wni"></i>
                                    </div>
                                    <div className="col-11 text-center mt-5">
                                        <b>Подписки и приглашения</b>
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
export default Bars;