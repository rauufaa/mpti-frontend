import React from 'react'

function Profile() {
    return (
        <div className="w-full py-2">
            <h1 className="text-[2em]">Profile</h1>


            <div className="grid gap-5 pt-2">

                <div>
                    <h2 className="card-title">Identitas Pangkalan LPG 3Kg</h2>
                    <div className="card max-w-5xl bg-base-100 shadow-xl overflow-x-auto">
                        <div className="card-body ">

                            <div className="grid grid-cols-2">
                                <p>Agen</p>
                                <p className="truncate">791732 - PT. GRAHA GAS NIAGA</p>
                            </div>
                            <hr className="my-2 border border-blue-gray-50" />
                            <div className="grid grid-cols-2">
                                <p>MID</p>
                                <p>LPG_021035</p>
                            </div>
                            <hr className="my-2 border border-blue-gray-50" />
                            <div className="grid grid-cols-2">
                                <p>Nama Pangkalan LPG 3Kg</p>
                                <p>EGI RAHAYU</p>
                            </div>
                            <hr className="my-2 border border-blue-gray-50" />



                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="card-title">Informasi Pemilik Pangkalan LPG 3Kg</h2>
                    <div className="card max-w-5xl bg-base-100 shadow-xl overflow-x-auto">
                        <div className="card-body ">

                            <div className="grid grid-cols-2">
                                <p>Nama Pemilik</p>
                                <p className="truncate">EGI RAHAYU</p>
                            </div>
                            <hr className="my-2 border border-blue-gray-50" />
                            <div className="grid grid-cols-2">
                                <p>No. KTP</p>
                                <p>3310185802690001</p>
                            </div>
                            <hr className="my-2 border border-blue-gray-50" />
                            <div className="grid grid-cols-2">
                                <p>No. Handphone</p>
                                <p>081329031131</p>
                            </div>
                            <hr className="my-2 border border-blue-gray-50" />
                            <div className="grid grid-cols-2">
                                <p>Email</p>
                                <p>rahayuegi18@gmail.com</p>
                            </div>
                            <hr className="my-2 border border-blue-gray-50" />
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="card-title">Kontak Pangkalan LPG 3Kg</h2>
                    <div className="card max-w-5xl bg-base-100 shadow-xl overflow-x-auto">
                        <div className="card-body ">

                            <div className="grid grid-cols-2">
                                <p>No. Telepon</p>
                                <p className="truncate">081329031131</p>
                            </div>
                            <hr className="my-2 border border-blue-gray-50" />

                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="card-title">Alamat Pangkalan LPG 3Kg</h2>
                    <div className="card max-w-5xl bg-base-100 shadow-xl overflow-x-auto">
                        <div className="card-body ">

                            <div className="grid grid-cols-2">
                                <p>Provinsi</p>
                                <p className="truncate">JAWA TENGAH</p>
                            </div>
                            <hr className="my-2 border border-blue-gray-50" />
                            <div className="grid grid-cols-2">
                                <p>Kota/Kab.</p>
                                <p>KABUPATEN KLATEN</p>
                            </div>
                            <hr className="my-2 border border-blue-gray-50" />
                            <div className="grid grid-cols-2">
                                <p>Kecamatan</p>
                                <p>KARANGNOM</p>
                            </div>
                            <hr className="my-2 border border-blue-gray-50" />
                            <div className="grid grid-cols-2">
                                <p>Kelurahan</p>
                                <p>GLEDEG</p>
                            </div>
                            <hr className="my-2 border border-blue-gray-50" />
                            <div className="grid grid-cols-2">
                                <p>Alamat</p>
                                <p>GLEDEG RT.002 RW.003</p>
                            </div>
                            <hr className="my-2 border border-blue-gray-50" />
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Profile