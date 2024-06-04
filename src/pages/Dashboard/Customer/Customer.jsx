import { Link } from "react-router-dom"

function Customer() {
    return (
        <div className="w-full py-2 flex flex-col gap-10">
            <div className="card max-w-5xl bg-base-100 shadow-xl overflow-x-auto">
                <div className="card-body">
                    <h2 className="card-title">NIK KTP Pelanggan</h2>
                    <p>Masukkan dan cek NIK pelanggan untuk melanjutkan transaksi LPG 3Kg</p>
                    <label className="input truncate border-none flex items-center gap-2 before:bg-black relative before:absolute before:w-full before:h-0.5 before:bottom-0 before:left-0">
                        <input type="text" className="w-full" placeholder="Masukkan 16 digit NIK KTP Pelanggan" required />
                    </label>
                    <div className="card-actions justify-center">
                        <Link to="/pelanggan/transaksi" className="btn rounded-full w-full">
                            <button className="btn rounded-full w-full">Cek</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="card max-w-5xl bg-base-100 shadow-xl overflow-x-auto">
                <div className="card-body">
                    <h2 className="card-title">Pelanggan Belum Terdaftar?</h2>
                    <p>Daftarkan Pelanggan Rumah Tangga atau Usaha Mikro untuk dapat Transaksi LPG 3Kg</p>
                    <div className="card-actions justify-center">
                        <Link to="/pelanggan/daftar" className="btn rounded-full w-full">
                            Daftarkan Pelanggan Baru
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Customer