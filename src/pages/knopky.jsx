import { useState } from "react";
import { users } from "../data";
const Knop = () => {
    const [logout, setDark] = useState();
    const [pasvord, setLight] = useState();

    if (localStorage.getItem('gold') == null) {
        window.location.href = '/stranica';
    }
    function Click() {
        const signIn = users.filter((i) => i.login == logout && i.password == pasvord);
        if (signIn.length > 0) {
            localStorage.setItem('gold', signIn[0].id);
            window.location.href = "/stranica";
        }
        else {
            alert('Неправильный логин или пароль!')
        }                                                                                                                                                                                                                                                                                                                                                                                                                   
    }

    function Vhod() {
        localStorage.removeItem('gold');
        window.location.href = '/profile';
    }
    return (
        <>
            <div className="container">
                <div className="row">                                                                                                                                                                                                                                                                                                                                                                                                                   
                    <div className="col-4 ali border border-dark text-center">
                        <div class="form-floating mb-3">
                            <input onChange={(e) => setDark(e.target.value)} type="text" class="form-control mt-3" placeholder="Login" />
                            <input onChange={(e) => setLight(e.target.value)} type="password" class="form-control mt-3" placeholder="Password" />
                            <button onClick={Click} className="btn btn-primary mt-3">Click</button>
                            <button onClick={Vhod} className="btn btn-danger mt-3">Выход</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Knop;