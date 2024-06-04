import { Form, Link } from "react-router-dom"

function StokAdd() {
    return (
        <div className="w-full py-2">
            <div className="flex justify-start">
                <Link to="/stok" className="btn btn-ghost w-fit lg:hidden">
                    <span className="material-symbols-outlined">
                        arrow_back_ios
                    </span>
                </Link>
                <div>
                    <h1 className="text-[2em]">ReStok</h1>
                    <p className="text-[1.2em]">Melengkapi Stok saat ini dengan stok baru</p>
                </div>
            </div>
            <Form className="grid gap-3">
                <div className="card max-w-5xl bg-base-100 shadow-xl overflow-x-auto">
                    <div className="card-body ">
                        <h2 className="card-title">Pilih Tanggal</h2>
                        <input type="datetime-local" className="input" />
                    </div>
                </div>
                <div className="card max-w-5xl bg-base-100 shadow-xl overflow-x-auto">
                    <div className="card-body justify-between md:flex-row">
                        <h2 className="card-title">Jumlah stok yang ditambahkan</h2>
                        {/* <p>Masukkan dan cek NIK pelanggan untuk melanjutkan transaksi LPG 3Kg</p> */}
                        <label className="input truncate border-none flex place-self-center gap-2 before:bg-black relative before:absolute before:w-full before:h-0.5 before:bottom-0 before:left-0">
                            <input type="number" className="w-full text-center" placeholder="" required />
                        </label>

                    </div>
                </div>
                <div className="card max-w-5xl bg-base-100 shadow-xl overflow-x-auto">
                    <div className="card-body">
                        <h2 className="card-title">Keterangan</h2>
                        {/* <p>Masukkan dan cek NIK pelanggan untuk melanjutkan transaksi LPG 3Kg</p> */}
                        <textarea className="textarea textarea-bordered" placeholder="Informasi"></textarea>

                    </div>
                </div>
                <button className="btn w-full rounded-full">Perbarui Stok</button>
            </Form>
        </div>
    )
}

export default StokAdd