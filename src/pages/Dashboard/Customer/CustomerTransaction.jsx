import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Link, useNavigate } from "react-router-dom"
import { updateInputDateCustomer } from "../../../state/CustomerSlice";

function CustomerTransaction() {
    const userState = useSelector(state => state.user);
    const customerState = useSelector(state => state.customer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDateInputChange = (event) => {
        console.log(event.target.value)
    }

    useEffect(() => {
        if (customerState.data.nik == null) {
            return navigate("/pelanggan")
        }
        fetch('https://worldtimeapi.org/api/timezone/Asia/Jakarta')
            .then(response => response.json())
            .then(data => {
                dispatch(updateInputDateCustomer(data.datetime.slice(0, 16)))
                console.log("macan")
            })
            .catch(error => {
                console.error('Error:', error);
            });
        setInterval(() => {
            fetch('https://worldtimeapi.org/api/timezone/Asia/Jakarta')
                .then(response => response.json())
                .then(data => {
                    dispatch(updateInputDateCustomer(data.datetime.slice(0, 16)))
                    console.log("macan")
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }, 60000)
    }, [])
    return (
        <div className="w-full py-2">
            <div className="flex justify-start">
                <Link to="/pelanggan" className="btn btn-ghost w-fit lg:hidden">
                    <span className="material-symbols-outlined">
                        arrow_back_ios
                    </span>
                </Link>
                <div>
                    <h1 className="text-[2em]">Transaksi</h1>
                    <p className="text-[1.2em]">Pembelian Gas LPG 3Kg</p>
                </div>
            </div>


            <Form className="grid gap-3">
                <div className="card max-w-5xl bg-base-100 shadow-xl overflow-x-auto">
                    <div className="card-body ">
                        <h2 className="card-title">Tanggal</h2>
                        <input defaultValue={customerState.data.inputDate} disabled type="datetime-local" className="input" />
                    </div>
                </div>

                <div className="card max-w-5xl bg-base-100 shadow-xl overflow-x-auto">
                    <div className="card-body">
                        <h2 className="card-title">Informasi Pembelian</h2>
                        <div >
                            <div className="grid grid-cols-2">
                                <p>NIK</p>
                                <p className="truncate">{customerState.data.nik}</p>
                            </div>
                            <hr className="my-2 border border-blue-gray-50" />
                            <div className="grid grid-cols-2">
                                <p>Nama</p>
                                <p>{customerState.data.name}</p>
                            </div>
                            <hr className="my-2 border border-blue-gray-50" />
                            <div className="grid grid-cols-2">
                                <p>Jenis Subsidi</p>
                                <p>{customerState.data.type}</p>
                            </div>
                            <hr className="my-2 border border-blue-gray-50" />

                        </div>
                        <div className="overflow-x-auto">
                            <table className="table">
                                <thead>
                                    <tr className="bg-base-200">
                                        <th>Item</th>
                                        <th>Jumlah</th>
                                        <th>Satuan</th>
                                        <th>Sub Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>LPG 3Kg</td>
                                        <td>1</td>
                                        <td>Rp21.000,-</td>
                                        <td>Rp21.000,-</td>
                                    </tr>
                                    <tr className="bg-base-300">
                                        <th colSpan={3}>Total</th>
                                        <td className="text-[1.2em]">Rp21.000,-</td>
                                    </tr>

                                </tbody>

                            </table>
                        </div>

                    </div>
                </div>

                <button className="btn  place-self-center my-3">Melakukan Pembelian</button>
            </Form>
        </div>
    )
}

export default CustomerTransaction