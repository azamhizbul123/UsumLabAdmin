const validate = values => {
    const errors = {};
    if (!values.NamaUnit) {
        errors.NamaUnit = 'Nama Unit Tidak Boleh Kosong';
    }
    if (!values.DeskripsiUnit) {
        errors.DeskripsiUnit = 'Deskripsi Uni Tidak Boleh Kosong';
    }
    // if (!values.email) {
    //     errors.email = 'Required';
    // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    //     errors.email = 'Invalid email address';
    // }
    if (!values.SingkatanUnit) {
        errors.SingkatanUnit = 'Singkatan Unit Tidak Boleh Kosong';
    }
    if (!values.NoTelepon) {
        errors.NoTelepon = 'No Telefon Tidak Boleh Kosong';
    } else if (isNaN(Number(values.NoTelepon))){
        errors.NoTelepon = 'Harus Diisi Dengan Nomor';
    }
    if (!values.AlamatUnit) {
        errors.AlamatUnit = 'Alamat Tidak Boleh Kosong';
    }
    if (!values.KodesPos) {
        errors.KodesPos = 'Kode Pos Unit Tidak Boleh Kosong';
    } else if(isNaN(Number(values.KodesPos))){
        errors.KodesPos = 'Harus Diisi Dengan Nomor';
    }
    if (!values.AlamatWebsiteUnit) {
        errors.AlamatWebsiteUnit = 'Alamat Web Tidak Boleh Kosong';
    }
    if (!values.logo) {
        errors.logo = 'File Logo Tidak Ditemukan';
    }
    if (!values.media1) {
        errors.media1 = 'File Media Tidak Ditemukan';
    }
    if (!values.NoUrutMisi) {
        errors.NoUrutMisi = 'No Urut Tidak Boleh Kosong';
    }
    if (!values.DeskripsiMisi) {
        errors.DeskripsiMisi = 'Deskripsi Misi Tidak Boleh Kosong';
    }
    if (!values.DeskripsiUnit) {
        errors.DeskripsiUnit = 'Deskripsi Unit Tidak Boleh Kosong';
    }
    return errors;
};

export default validate;
