document.getElementById('registerForm').addEventListener('submit', function (e) {
    // Mencegah form terkirim otomatis sebelum divalidasi
    e.preventDefault();

    let isValid = true;

    // Helper function untuk menampilkan pesan error
    function showError(inputId, errorId, message) {
        const inputElem = document.getElementById(inputId);
        const errorElem = document.getElementById(errorId);
        
        errorElem.innerText = message;
        errorElem.classList.remove('hidden');
        inputElem.classList.add('border-red-500');
        inputElem.classList.remove('border-slate-300');
        isValid = false;
    }

    // Helper function untuk membersihkan status error
    function resetError(inputId, errorId) {
        const inputElem = document.getElementById(inputId);
        const errorElem = document.getElementById(errorId);
        
        errorElem.innerText = '';
        errorElem.classList.add('hidden');
        inputElem.classList.remove('border-red-500');
    }

    // 1. Validasi Username (Tidak kosong & min 3 karakter)
    const username = document.getElementById('username').value.trim();
    resetError('username', 'error-username');
    if (username === '') {
        showError('username', 'error-username', 'Username tidak boleh kosong.');
    } else if (username.length < 3) {
        showError('username', 'error-username', 'Username minimal harus 3 karakter.');
    }

    // 2. Validasi Password (Tidak kosong & min 8 karakter)
    const password = document.getElementById('password').value;
    resetError('password', 'error-password');
    if (password === '') {
        showError('password', 'error-password', 'Password tidak boleh kosong.');
    } else if (password.length < 8) {
        showError('password', 'error-password', 'Password minimal harus 8 karakter.');
    }

    // 3. Validasi Nama (Tidak kosong)
    const nama = document.getElementById('nama').value.trim();
    resetError('nama', 'error-nama');
    if (nama === '') {
        showError('nama', 'error-nama', 'Nama lengkap tidak boleh kosong.');
    }

    // 4. Validasi Tanggal Lahir (Tidak kosong & tidak boleh future date)
    const tglLahirVal = document.getElementById('tgl_lahir').value;
    resetError('tgl_lahir', 'error-tgl_lahir');
    if (tglLahirVal === '') {
        showError('tgl_lahir', 'error-tgl_lahir', 'Tanggal lahir tidak boleh kosong.');
    } else {
        const selectedDate = new Date(tglLahirVal);
        const today = new Date();
        // Reset waktu jam ke 00:00:00 untuk perbandingan tanggal murni
        today.setHours(0, 0, 0, 0);

        if (selectedDate > today) {
            showError('tgl_lahir', 'error-tgl_lahir', 'Tanggal lahir tidak boleh melebihi tanggal hari ini.');
        }
    }

    // 5. Validasi Alamat (Tidak kosong)
    const alamat = document.getElementById('alamat').value.trim();
    resetError('alamat', 'error-alamat');
    if (alamat === '') {
        showError('alamat', 'error-alamat', 'Alamat tidak boleh kosong.');
    }

    // 6. Validasi Nomor Telepon (Tidak kosong & diawali angka 62)
    const telepon = document.getElementById('telepon').value.trim();
    resetError('telepon', 'error-telepon');
    if (telepon === '') {
        showError('telepon', 'error-telepon', 'Nomor telepon tidak boleh kosong.');
    } else if (!telepon.startsWith('62')) {
        showError('telepon', 'error-telepon', 'Nomor telepon harus berawalan angka 62.');
    }

    // Jika semua input valid, lanjutkan proses submit form ke action (dashboard.html)
    if (isValid) {
        this.submit();
    }
});