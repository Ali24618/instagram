import { useState } from "react";

const Verst = () => {
    const [num1, setNum1] = useState();
    const [num2, setNum2] = useState();
    const [result, setResult] = useState();
    const [state, setState] = useState(0);
    const [stata, setStata] = useState(true);
    let hour=new Date().getHours();
    let min=new Date().getMinutes();
    let sek=new Date().getSeconds();
    if (localStorage.getItem('token') == null) {
        window.location.href = '/parol';
    }
    function Vhod() {
        setResult(parseFloat(num1) + parseFloat(num2));
    }
    function Voity() {
        setResult(parseFloat(num1) - parseFloat(num2));
    }
    function Zaity() {
        setResult(parseFloat(num1) * parseFloat(num2));
    }
    function Knopka() {
        setResult(parseFloat(num1) / parseFloat(num2));
    }
    function Click() {
        setResult((parseFloat(num1) * parseFloat(num2)) / 100);
    }
    function Klick() {
        setResult(parseFloat(num1) * parseFloat(num1));
    }
    function statePhoto() {
        if (state == 0) {
            setState(1);
        } else {
            setState(0);
        }
    }
    function jsClick() {
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
                    <div className="col-4 bg-dark ali">
                        <div className="row">
                            <div className="col-12 text-center"><a href="/profile"><i class="fa-solid fa-arrow-left fa-2x mt-1"></i></a><a href="/knopky"><i class="fa-solid fa-arrow-right fa-2x mt-1"></i></a></div>
                            <div className="col-12 text-light text-center">
                                    <h1><b>{hour}:{min}:{sek}</b></h1>
                                </div>
                            <div className="col-12"><input onChange={(e) => setNum1(e.target.value)} type="text" className="form-control rounded-0" /></div>
                            <div className="col-12"><input onChange={(e) => setNum2(e.target.value)} type="text" className="form-control rounded-0" /></div>
                            <div className="col-12 text right text-light">
                                <h1>{result}</h1>
                            </div>
                            <div className="col-12 wniz">
                                <div className="row">
                                    <div className="col-2 bg-light text-center p-2 rounded-circle dev" onClick={e => setResult('')}><h1>AC</h1></div>
                                    <div className="col-1"></div>
                                    <div className="col-2 bg-light text-center p-2 rounded-circle" onClick={Klick}><h1>2<sup>2</sup></h1></div>
                                    <div className="col-1"></div>
                                    <div className="col-2 bg-light text-center p-2 rounded-circle" onClick={Click}><h1>%</h1></div>
                                    <div className="col-1"></div>
                                    <div className="col-2 bg-warning text-center text-light p-2 rounded-circle" onClick={Knopka}><h1>/</h1></div>

                                    <div className="col-2 bg-secondary text-light text-center p-2 rounded-circle dev mt-3"><h1>7</h1></div>
                                    <div className="col-1 mt-3"></div>
                                    <div className="col-2 bg-secondary text-light text-center p-2 rounded-circle mt-3"><h1>8</h1></div>
                                    <div className="col-1 mt-3"></div>
                                    <div className="col-2 bg-secondary text-light text-center p-2 rounded-circle mt-3"><h1>9</h1></div>
                                    <div className="col-1 mt-3"></div>
                                    <div className="col-2 bg-warning text-center text-light p-2 rounded-circle mt-3" onClick={Zaity}><h1>X</h1></div>

                                    <div className="col-2 bg-secondary text-light text-center p-2 rounded-circle dev mt-3"><h1>4</h1></div>
                                    <div className="col-1 mt-3"></div>
                                    <div className="col-2 bg-secondary text-light text-center p-2 rounded-circle mt-3"><h1>5</h1></div>
                                    <div className="col-1 mt-3"></div>
                                    <div className="col-2 bg-secondary text-light text-center p-2 rounded-circle mt-3"><h1>6</h1></div>
                                    <div className="col-1 mt-3"></div>
                                    <div className="col-2 bg-warning text-center text-light p-2 rounded-circle mt-3" onClick={Voity}><h1>-</h1></div>

                                    <div className="col-2 bg-secondary text-light text-center p-2 rounded-circle dev mt-3"><h1>1</h1></div>
                                    <div className="col-1 mt-3"></div>
                                    <div className="col-2 bg-secondary text-light text-center p-2 rounded-circle mt-3"><h1>2</h1></div>
                                    <div className="col-1 mt-3"></div>
                                    <div className="col-2 bg-secondary text-light text-center p-2 rounded-circle mt-3"><h1>3</h1></div>
                                    <div className="col-1 mt-3"></div>
                                    <div className="col-2 bg-warning text-center text-light p-2 rounded-circle mt-3" onClick={Vhod}><h1>+</h1></div>
                                </div>
                                <div className="col-12 mt-3">
                                    <div className="row">
                                        <div className="col-3 text-center">{state == 1 ?
                                            <>
                                                <div className="col-12 bg-warning block"></div>
                                            </>
                                            :
                                            <> </>}
                                        </div>
                                        <div className="col-6">
                                            <button className="btn btn-secondary mt-2" onClick={statePhoto}>Submit</button>
                                            <button className="btn btn-secondary mt-2 sld" onClick={jsClick}>Click</button>
                                        </div>
                                        <div className="col-3 text-center">{stata == true ?
                                            <>
                                                <img src="https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg?quality=85&w=1024&h=628&crop=1" width={100} height={100} />
                                            </>
                                            :
                                            <> 
                                            </>}
                                        </div>
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
export default Verst;