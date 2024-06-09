import { useSelector } from "react-redux"
import { Form, Link } from "react-router-dom"

function Stok() {
    const stokState = useSelector(state=>state.stok)
    return (
        <div className="w-full py-2">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-[2em]">Atur Stok</h1>
                    <p className="text-[1.2em]">Stok LPG 2Kg saat ini</p>
                </div>
                <h2 className="text-[3em] px-4">0<span className="text-sm">tabung</span></h2>
            </div>
            <Form className="grid gap-3">

                <Link to="/stok/tambah" className="btn justify-between px-8 py-6 h-auto max-w-5xl bg-base-100 shadow-xl">
                    <div className="justify-between sm:flex-row sm:items-center">
                        <div>
                            <h2 className="card-title">ReStok</h2>
                            <p className="font-normal">Melengkapi Stok saat ini</p>
                        </div>

                    </div>
                    <span className="material-symbols-outlined">
                        arrow_forward_ios
                    </span>
                </Link>
                <Link to="/stok/riwayat" className="btn justify-between px-8 py-6 h-auto max-w-5xl bg-base-100 shadow-xl" disabled={stokState.loading}>
                    <h2 className="card-title">Riwayat Stok</h2>

                    <span className="material-symbols-outlined">
                        arrow_forward_ios
                    </span>
                </Link>
                <div className="card max-w-5xl bg-base-100 shadow-xl overflow-x-auto">
                    <div className="card-body">
                        <h2 className="card-title">Atur Harga Produk</h2>
                        <div className="flex justify-between items-center flex-col sm:flex-row">
                            <h4 className="font-medium">Harga Beli (Harga per Tabung)</h4>
                            <h4 className="font-semibold place-self-center pt-3 sm:pt-0">Rp14.250,-</h4>
                        </div>
                        <hr className="my-1 border border-blue-gray-50" />
                        <div className="flex justify-between items-center flex-col sm:flex-row">
                            <h4 className="font-medium">Harga Jual (Harga per Tabung)</h4>
                            <h4 className="font-semibold place-self-center pt-3 sm:pt-0">Rp14.250,-</h4>
                        </div>
                        <hr className="my-1 border border-blue-gray-50" />
                        <Link to="/stok/harga" className="btn w-full rounded-full">Atur Harga Beli dan Jual</Link>
                        {/* <p>Masukkan dan cek NIK pelanggan untuk melanjutkan transaksi LPG 3Kg</p> */}
                        {/* <label className="input truncate border-none flex items-center gap-2 before:bg-black relative before:absolute before:w-full before:h-0.5 before:bottom-0 before:left-0">
                            <input type="text" className="w-full" placeholder="Masukkan Nama Pelanggan" required />
                        </label> */}

                    </div>
                </div>

            </Form>
        </div>
    )
}

export default Stok