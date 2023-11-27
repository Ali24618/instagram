import { useState } from "react";
import { users } from "../data";
const Parol = () => {
    const [login, setFlowel] = useState();
    const [pasword, setPremium] = useState();

    if (localStorage.getItem('token') != null) {
        window.location.href = '/';
    }
    function Vhod() {
        const signIn = users.filter((i) => i.login == login && i.password == pasword);
        if (signIn.length > 0) {
            localStorage.setItem('token', signIn[0].id);
            window.location.href = "/";
        }
        else {
            alert('Неправильный логин или пароль!')
        }
    }
    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-4 border border-dark ali">
                        <div className="row">
                            <div className="col-12 text-center">
                                <img src="https://cdn.telanganatoday.com/wp-content/uploads/2022/05/Instagram-users-irked-with-the-new-update.jpg" width="275" height={150} />
                            </div>
                            <div className="col-12">
                                <input onChange={(e) => setFlowel(e.target.value)} className="form-control" type="text" placeholder="Номер телефона, эл. адрес или имя пользователя" />
                                <input onChange={(e) => setPremium(e.target.value)} className="form-control mt-3" type="password" placeholder="Пароль" />
                            </div>
                            <div className="col-12 mt-3">
                                <button onClick={Vhod} className="btn btn-primary form-control">Вход</button>
                            </div>
                            <div className="col-12 text-center">
                                <small>Забыли свои учетные данные? <a href="https://www.instagram.com/accounts/password/reset/"><b>Получить помощь.</b></a></small>
                                <p>ИЛИ</p>
                            </div>
                            <div className="col-12 text-center mt-5">
                                <i class="fa-brands fa-facebook text-primary"></i> <a href="/"><b>Войти через Facebook</b></a>
                            </div>
                            <div className="col-12 text-center mt-5">
                                <hr />
                                <p>У вас еще нет аккаунта? <a href="/new"><b>Зарегестрируйтесь</b></a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Parol;