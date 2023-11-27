const Navbar = () => {
    return (
        <>
            <div className="col-4 fixed-top border border-dark seq">
                <div className="row">
                    <div className="col-3 fly"><a href="/"><i class="fa-solid fa-house fa-2x"></i></a></div>
                    <div className="col-3 fly"><a href="/search"><i class="fa-solid fa-magnifying-glass fa-2x"></i></a></div>
                    <div className="col-3 fly"><a href="/albom"><i class="fa-regular fa-square-plus fa-2x"></i></a></div>
                    <div className="col-3 fly"><a href="/profile"><i class="fa-regular fa-circle-user fa-2x"></i></a></div>
                </div>
            </div>


        </>)
}
export default Navbar;