import React, { useEffect } from 'react'
import { getCoins } from '../helpers/coinsApi'
import TableCoins from '../components/TableCoins'
const HomeScreen = () => {
    const [coins , setCoins] = useState(null);
    useEffect(() => {
        traerMonedas();
    } , []);
    const traerMonedas = async () =>{
        const {data} = await getCoins();

        setCoins(data);
    }
    return (
        <>
        <div className= "container">
            <div className="row mt-5">
                <div className="col text-center">
                    <h1>Cripto Currency</h1>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-outline-success">
                            <i className="fa fa-refresh" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="row"> {/*barra de busqueda*/}</div>
            <div classname="row mt-5">
                <TableCoins coins={coins}/>
                </div>
        </div>


        </>
    )
}

export default HomeScreen