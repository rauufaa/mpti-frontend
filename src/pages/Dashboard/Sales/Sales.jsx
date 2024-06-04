import { Form, Link } from "react-router-dom"

function Sales() {
    return (
        <div className="w-full py-2">

            <h1 className="text-[2em]">Laporan Penjualan</h1>
            <p className="text-[1.2em]">Data Penjualan Gas LPG</p>

            <Form className="grid gap-3">
                <div className="card bg-base-100 shadow-xl overflow-x-auto max-w-5xl ">
                    <div className="card-body gap-4 flex-col md:flex-row">
                        <div className="w-full">
                            <h2 className="card-title">Dari Tanggal</h2>
                            <input type="datetime-local" className="input input-bordered w-full" />
                        </div>
                        <div className="w-full">
                            <h2 className="card-title">Sampai Tanggal</h2>
                            <input type="datetime-local" className="input input-bordered w-full" />
                        </div>
                    </div>
                </div>
                <div className="card max-w-5xl bg-base-100 shadow-xl overflow-x-auto">
                    <div className="card-body justify-between sm:flex-row sm:items-center">
                        <div>
                            <h2 className="card-title">Keuntungan Penjualan</h2>
                            <p>Total terjual : 5</p>
                        </div>
                        <h3 className="text-[1.5em] font-bold">Rp500.000,-</h3>

                    </div>
                </div>
                <div className="card max-w-5xl bg-base-100 shadow-xl overflow-x-auto">
                    <div className="card-body">
                        <div className="flex gap-4 justify-between flex-col sm:flex-row">
                            <h2 className="card-title">Riwayat Penjualan</h2>
                            <button className="btn">
                                <span class="material-symbols-outlined">
                                    download
                                </span>
                                Unduh
                            </button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="table">
                                <thead>
                                    <tr className="bg-base-200">
                                        <th>No.</th>
                                        <th>NIK</th>
                                        <th>Jam</th>
                                        <th>Jumlah</th>
                                        <th>Total</th>
                                        <th>Edit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>1810021306030001</td>
                                        <td>20.00</td>
                                        <td>1</td>
                                        <td>Rp21.000,-</td>
                                        <td>
                                            <button className="btn btn-ghost btn-circle">
                                                <span className="material-symbols-outlined">
                                                    edit
                                                </span>
                                            </button>
                                        </td>
                                    </tr>


                                </tbody>

                            </table>
                        </div>
                        <div className="card-actions justify-center">
                            <div className="join">
                                <button className="join-item btn">«</button>
                                <button className="join-item btn">Page 22</button>
                                <button className="join-item btn">»</button>
                            </div>
                        </div>

                    </div>

                </div>

            </Form>
        </div>
    )
}

export default Sales