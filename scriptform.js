//Javascript form
// Mengambil data yang telah dimasukkan oleh pengguna
var Nama = document.forms["form"]["Nama"];
var tgllahir = document.forms["form"]["tgllahir"];
var jnskelamin = document.getElementsByName("gender");
var alamat = document.forms["form"]["alamat"];
var NoHP = document.forms["form"]["NoHP"];
var emaiL = document.forms["form"]["email"];
var cbox = document.forms["form"]["setuju"];


// Membuat variabel baru yang berguna agar nantinya bisa digunakan untuk menampilkan pesan eror
var Nama_eror = document.getElementById("Nama_eror");
var tgllahir_eror = document.getElementById("tgllahir_eror");
var jnsklmn_eror = document.getElementById("gender_eror");
var alamat_eror = document.getElementById("alamat_eror");
var NoHP_eror = document.getElementById("Nohp_eror");
var email_eror = document.getElementById("email_Eror");
var setuju_eror = document.getElementById("setuju_eror");


// // Membuat eventlistener
Nama.addEventListener("blur",NameVer, true);
tgllahir.addEventListener("blur",tgllahirVer, true);
alamat.addEventListener("blur",alamatVer, true);
NoHP.addEventListener("blur",NoHPVer, true);
emaiL.addEventListener("blur",emailVer, true);

// Membuat regular expresion untuk menentukan masukan hanya angka,hanya huruf ataupun ketentuan email
var Namecheck = /^[A-Za-z ]/gm;
var tgllahircheck = /(\d{2})-(\d{2})-(\d{4})$/g;
var NoHPcheck = /^(\+62|62|0)8[1-9][0-9]{8,10}$/gm;
var emailcheck = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi;


// Fungsi untuk event listener
// Fungsi ini dibuat agar ketika masukan pengguna telah benar maka pesan eror yang sebelumnya muncul akan dihilangkan
function NameVer(){
	if (Nama.value !=""){
		Nama.style.border = "1px solid #008000";
		Nama_eror.innerHTML = "";
		return ;
	}
}
function tgllahirVer(){
	if (tgllahir.value !=""){
		tgllahir.style.border = "1px solid #008000";
		tgllahir_eror.innerHTML = "";
		return true;
	}
}
function alamatVer(){
	if (alamat.value !=""){
		alamat.style.border = "1px solid #008000";
		alamat_eror.innerHTML = "";
		return true;
	}
}
function NoHPVer(){
	if (NoHP.value !=""){
		NoHP.style.border = "1px solid #008000";
		NoHP_eror.innerHTML = "";
		return true;
	}
}
function emailVer(){
	if (email.value !=""){
		email.style.border = "1px solid #008000";
		email_eror.innerHTML = "";
		return true;
	}
}


// Fungsi Validasi Form
// .value == "" berarti bahwa masukan pengguna masih kosong
// .match() berguna untuk mencocokkan apakah masukan sesuai dengan regular expresion
// .focus() berguna ketika masukan pengguna salah maka pengguna bisa langsung mengisi kembali masukan yang salah tanpa mengklik masukan itu lagi 
function Validate(){
	// NAMA SALAH
	if (Nama.value == ""){
		Nama.style.border = "1px solid  #FF0000";
		Nama_eror.textContent = "*Nama wajib diisi";
		Nama.focus();
		return false;
	}
	if(!Nama.value.match(Namecheck)){
		Nama.style.border = "1px solid  #FF0000";
		Nama_eror.textContent = "*Nama harus alfabet";
		Nama.focus();
		return false;
	}
	if (Nama.value.length > 50){
		Nama.style.border = "1px solid  #FF0000";
		Nama_eror.textContent = "*Nama maksimal 50 huruf";
		Nama.focus();
		return false;
	}

	//RADIO BUTTON HARUS MEMILIH SALAH SATU
	if (jnskelamin[0].checked == true){
		jnsklmn_eror.textContent = "";
	}
	else if (jnskelamin[1].checked == true){
		jnsklmn_eror.textContent = "";
	}
	else{
		jnsklmn_eror.textContent = "*Wajib memilih jenis kelamin";
		return false
	}
	
	// TANGGAL LAHIR SALAH
	if (tgllahir.value == ""){
		tgllahir.style.border = "1px solid  #FF0000";
		tgllahir_eror.textContent = "*Tanggal lahir wajib diisi";
		tgllahir.focus();
		return false;
	}
	if (!tgllahir.value.match(tgllahircheck)){
		tgllahir.style.border = "1px solid  #FF0000";
		tgllahir_eror.textContent = "*Tanggal lahir tidak sesuai ketentuan";
		tgllahir.focus();
		return false;
	}

	//RADIO BUTTON HARUS MEMILIH SALAH SATU
	if (jnskelamin[0].checked == true){
		jnsklmn_eror.textContent = "";
	}
	else if (jnskelamin[1].checked == true){
		jnsklmn_eror.textContent = "";
	}
	else{
		jnsklmn_eror.textContent = "*Wajib memilih jenis kelamin";
		return false
	}

	// ALAMAT SALAH
	if (alamat.value == ""){
		alamat.style.border = "1px solid  #FF0000";
		alamat_eror.textContent = "*Alamat wajib diisi";
		alamat.focus();
		return false;
	}
	if (alamat.value.length > 50){
		Nama.style.border = "1px solid  #FF0000";
		Nama_eror.textContent = "*Alamat maksimal 100 huruf";
		Nama.focus();
		return false;
	}


	// NOMOR HP SALAH
	if (NoHP.value == ""){
		NoHP.style.border = "1px solid  #FF0000";
		NoHP_eror.textContent = "*Nomor HP wajib diisi";
		NoHP.focus();
		return false;
	}
	if (!NoHP.value.match(NoHPcheck)){
		NoHP.style.border = "1px solid  #FF0000";
		NoHP_eror.textContent = "*Nomor HP tidak cocok. Minimal 10 digit & Maksimal 13 digit";
		NoHP.focus();
		return false;
	}
	// EMAIL SALAH
	if (emaiL.value == ""){
		emaiL.style.border = "1px solid  #FF0000";
		email_eror.textContent = "*E-Mail wajib diisi";
		emaiL.focus();
		return false;
	}
	if(!emaiL.value.match(emailcheck)){
		emaiL.style.border = "1px solid  #FF0000";
		email_eror.textContent = "*Format E-Mail salah";
		emaiL.focus();
		return false;
	}

	// CHECKBOX WAJIB CENTANG
	if (cbox.checked == false){
		setuju_eror.textContent = "*Untuk menyumbangkan buku wajib menyetujui syarat dan ketentuan";
		return false;
	}
	else{
		setuju_eror.textContent = "";
		return true;
	}
}

let btn = document.querySelector("#btn")
		let sidebar = document.querySelector(".sidebar")
		let search = document.querySelector("bx-search")

		btn.onclick = function() {
			sidebar.classList.toggle("active");
		}
		searchBtn.onclick = function() {
			sidebar.classList.toggle("active");
		}