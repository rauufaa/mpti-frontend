import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Form, Link } from 'react-router-dom'
import { updateAddressCustomer, updateKtpCustomer, updateNameCustomer, updateNikCustomer, updateTypeCustomer } from '../../../state/CustomerSlice';

function CustomerRegister() {
    const customerState = useSelector(state => state.customer);
    const [sourceKtp, setSourceKtp] = useState();
    const dispatch = useDispatch();

    const handleNikInputChange = (event) => {
        event.target.value = event.target.value.replace(/[^0-9]/g, '');
        dispatch(updateNikCustomer(event.target.value));
    }

    const handleNameInputChange = (event) => {
        event.target.value = event.target.value.replace(/[^a-zA-Z]/g, '');
        dispatch(updateNameCustomer(event.target.value));
    }

    const handleAddressInputChange = (event) => {
        dispatch(updateAddressCustomer(event.target.value));
    }

    const handleCustomerTypeInputChange = (event) => {
        dispatch(updateTypeCustomer(event.target.value));
        console.log(event.target.value)
    }

    const handleKtpInputChange = (event) => {
        if (event.target.files[0]) {
            console.log("picture: ", event.target.value);
            // setPicture(e.target.files[0]);
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setSourceKtp(reader.result)
                const prepData = {
                    ktpSource: reader.result,
                    ktpName: event.target.files[0].name
                }
                dispatch(updateKtpCustomer(prepData));
            });
            reader.readAsDataURL(event.target.files[0]);
        }
    }

    const handleRegisterCustomerSubmit = (event) => {
        event.preventDefault();
    }

    

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


            <Form className="grid gap-3" onSubmit={handleRegisterCustomerSubmit}>
                <div className="card max-w-5xl bg-base-100 shadow-xl overflow-x-auto">
                    <div className="card-body">
                        <h2 className="card-title">NIK</h2>
                        {/* <p>Masukkan dan cek NIK pelanggan untuk melanjutkan transaksi LPG 3Kg</p> */}
                        <label className="input truncate border-none flex items-center gap-2 before:bg-black relative before:absolute before:w-full before:h-0.5 before:bottom-0 before:left-0">
                            <input defaultValue={customerState.data.nik} onChange={handleNikInputChange} type="text" className="w-full" placeholder="Masukkan 16 digit NIK KTP Pelanggan" required />
                        </label>
                    </div>
                </div>
                <div className="card max-w-5xl bg-base-100 shadow-xl overflow-x-auto">
                    <div className="card-body">
                        <h2 className="card-title">Nama</h2>
                        {/* <p>Masukkan dan cek NIK pelanggan untuk melanjutkan transaksi LPG 3Kg</p> */}
                        <label className="input truncate border-none flex items-center gap-2 before:bg-black relative before:absolute before:w-full before:h-0.5 before:bottom-0 before:left-0">
                            <input defaultValue={customerState.data.nama} onChange={handleNameInputChange} type="text" className="w-full" placeholder="Masukkan Nama Pelanggan" required />
                        </label>

                    </div>
                </div>
                <div className="card max-w-5xl bg-base-100 shadow-xl overflow-x-auto">
                    <div className="card-body">
                        <h2 className="card-title">Alamat</h2>
                        {/* <p>Masukkan dan cek NIK pelanggan untuk melanjutkan transaksi LPG 3Kg</p> */}
                        <label className="input truncate border-none flex items-center gap-2 before:bg-black relative before:absolute before:w-full before:h-0.5 before:bottom-0 before:left-0">
                            <input defaultValue={customerState.data.alamat} onChange={handleAddressInputChange} type="text" className="w-full" placeholder="Masukkan Alamat Pelanggan" required />
                        </label>
                    </div>
                </div>
                <div className="card max-w-5xl bg-base-100 shadow-xl overflow-x-auto">
                    <div className="card-body">
                        <h2 className="card-title">Pilih Jenis Penggunaan Subsidi</h2>
                        <div className="form-control">
                            <div className="flex justify-between items-center">
                                <label className="label cursor-pointer justify-start gap-3">

                                    <input onChange={handleCustomerTypeInputChange} value="Rumah Tangga" type="radio" name="typeCustomer" className="radio" defaultChecked />
                                    <span className="label-text">Rumah Tangga</span>
                                </label>
                                <span className="label-text">Maksimum pembelian 1/pengiriman</span>
                            </div>
                        </div>
                        <div className="form-control">
                            <div className="flex justify-between items-center">
                                <label className="label cursor-pointer justify-start gap-3">

                                    <input onChange={handleCustomerTypeInputChange} value="Usaha Mikro" type="radio" name="typeCustomer" className="radio" />
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
                        <input onChange={handleKtpInputChange} type="file" accept="image/jpeg, image/jpg, image/png" className="file-input file-input-bordered w-full" />
                        <img
                            className="w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
                            src={sourceKtp}
                        />
                    </div>
                </div>
                <button type="submit" className="btn place-self-center my-3">Daftarkan Pelanggan</button>
            </Form>
        </div>
    )
}

export default CustomerRegister