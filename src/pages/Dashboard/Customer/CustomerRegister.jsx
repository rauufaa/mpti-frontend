import React from 'react'
import { Form, Link } from 'react-router-dom'

function CustomerRegister() {
    return (
        <div className="w-full py-2">
            <div className="flex justify-start">
                <Link to="/pelanggan" className="btn btn-ghost w-fit lg:hidden">
                    <span className="material-symbols-outlined">
                        arrow_back_ios
                    </span>
                </Link>
                <div>
                    <h1 className="text-[2em]">Pendaftaran Pelanggan</h1>
                    <p className="text-[1.2em]">Lengkapi Form Di Bawah ini untuk Melakukan Pendaftaran</p>
                </div>
            </div>


            <Form className="grid gap-3">
                <div className="card max-w-5xl bg-base-100 shadow-xl overflow-x-auto">
                    <div className="card-body">
                        <h2 className="card-title">NIK</h2>
                        {/* <p>Masukkan dan cek NIK pelanggan untuk melanjutkan transaksi LPG 3Kg</p> */}
                        <label className="input truncate border-none flex items-center gap-2 before:bg-black relative before:absolute before:w-full before:h-0.5 before:bottom-0 before:left-0">
                            <input type="text" className="w-full" placeholder="Masukkan 16 digit NIK KTP Pelanggan" required />
                        </label>

                    </div>
                </div>
                <div className="card max-w-5xl bg-base-100 shadow-xl overflow-x-auto">
                    <div className="card-body">
                        <h2 className="card-title">Nama</h2>
                        {/* <p>Masukkan dan cek NIK pelanggan untuk melanjutkan transaksi LPG 3Kg</p> */}
                        <label className="input truncate border-none flex items-center gap-2 before:bg-black relative before:absolute before:w-full before:h-0.5 before:bottom-0 before:left-0">
                            <input type="text" className="w-full" placeholder="Masukkan Nama Pelanggan" required />
                        </label>

                    </div>
                </div>
                <div className="card max-w-5xl bg-base-100 shadow-xl overflow-x-auto">
                    <div className="card-body">
                        <h2 className="card-title">Alamat</h2>
                        {/* <p>Masukkan dan cek NIK pelanggan untuk melanjutkan transaksi LPG 3Kg</p> */}
                        <label className="input truncate border-none flex items-center gap-2 before:bg-black relative before:absolute before:w-full before:h-0.5 before:bottom-0 before:left-0">
                            <input type="text" className="w-full" placeholder="Masukkan Alamat Pelanggan" required />
                        </label>

                    </div>
                </div>
                <div className="card max-w-5xl bg-base-100 shadow-xl overflow-x-auto">
                    <div className="card-body">
                        <h2 className="card-title">Pilih Jenis Penggunaan Subsidi</h2>
                        <div className="form-control">
                            <div className="flex justify-between items-center">
                                <label className="label cursor-pointer justify-start gap-3">

                                    <input type="radio" name="radio-10" className="radio" checked />
                                    <span className="label-text">Rumah Tangga</span>
                                </label>
                                <span className="label-text">Maksimum pembelian 1/pengiriman</span>
                            </div>


                        </div>
                        <div className="form-control">
                            <div className="flex justify-between items-center">
                                <label className="label cursor-pointer justify-start gap-3">

                                    <input type="radio" name="radio-10" className="radio" checked />
                                    <span className="label-text">Usaha Mikro</span>
                                </label>
                                <span className="label-text">Maksimum pembelian 1/pengiriman</span>
                            </div>


                        </div>


                    </div>
                </div>
                <div className="card max-w-5xl bg-base-100 shadow-xl overflow-x-auto">
                    <div className="card-body">
                        <h2 className="card-title">Upload KTP</h2>
                        <input type="file" className="file-input file-input-bordered w-full max-w-xs" />


                    </div>
                </div>
                <button className="btn place-self-center my-3">Daftarkan Pelanggan</button>
            </Form>
        </div>
    )
}

export default CustomerRegister