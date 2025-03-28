function validasiKontak(dataform) {

    if (dataform.Nama.value == "") {
        alert ("Data Nama Belum Diisi");
        dataform.Nama.focus();
        return false;
    }

    if (dataform.Email.value == "") {
        alert ("Data Email Belum Diisi");
        dataform.Email.focus();
        return false;
    } 

    else {
        var email = dataform.Email.value;
        var posisiAt = email.indexOf("@");
        var posisiTitik = email.lastIndexOf(".");
        if (posisiAt < 1 || (posisiTitik - posisiAt <2))
            {
            alert("Alamat Email Anda Belum Benar");
            dataform.Email.focus();
            return false;
        }
    }

    if (dataform.Nomor.value == "") {
        alert ("Data Nomor Belum Diisi");
        dataform.Nomor.focus();
        return false; }

        if (dataform.alamat.value==""){
            alert ("Alamat Anda Belum Diisi");
            dataform.alamat.focus();
            return false;
        }
    
        if (dataform.Pesan.value =="") {
            alert ("Data Pesan Belum Diisi");
            dataform.Pesan.focus();
            return false;     
    }
    
    alert("Pesan Berhasil Dikirim, Terima Kasih");
    return true;
}