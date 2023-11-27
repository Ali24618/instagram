const Stranica = () => {
    if (localStorage.getItem('gold') != null) {
        window.location.href = '/parol';
    }
    function Vhod() {
        localStorage.removeItem('gold');
        window.location.href = '/knopky';
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4 ali border border-dark text-center">
                        <img src="https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg" width={440} height={350} />
                        <button onClick={Vhod} className="btn btn-danger mt-3">Выход</button>
                    </div>
                </div>
            </div>
        </>
    )                                                               
}
export default Stranica;