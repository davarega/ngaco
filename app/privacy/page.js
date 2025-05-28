import styles from "./privacy.module.css";

export default function Privacy() {
    const email = "-";
    const phone = "-";
    return (
        <div className={styles.container}>
            <div className={styles.policy_card}>
                <div className={styles.header}>
                    <div className={styles.logo}>NGACO</div>
                    <div className={styles.subtitle}>
                        Aplikasi Chat Grup Terpercaya
                    </div>
                </div>

                <h1>Kebijakan Privasi</h1>

                <div className={styles.highlight}>
                    <strong>Komitmen Kami:</strong> NGACO berkomitmen untuk
                    melindungi privasi dan keamanan data pribadi pengguna.
                    Kebijakan ini menjelaskan bagaimana kami mengumpulkan,
                    menggunakan, dan melindungi informasi Anda.
                </div>

                <div className={styles.section}>
                    <h2>1. Informasi yang Kami Kumpulkan</h2>

                    <h3>1.1 Informasi Akun</h3>
                    <p>Saat Anda mendaftar di NGACO, kami mengumpulkan:</p>
                    <ul>
                        <li>Alamat email untuk autentikasi dan komunikasi</li>
                        <li>Nama pengguna yang Anda pilih</li>
                        <li>Kata sandi yang dienkripsi untuk keamanan akun</li>
                        <li>Tanggal pembuatan akun</li>
                    </ul>

                    <h3>1.2 Informasi Grup Chat</h3>
                    <ul>
                        <li>Pesan yang Anda kirim dalam grup</li>
                        <li>ID grup yang Anda buat atau ikuti</li>
                        <li>Waktu pengiriman pesan</li>
                        <li>Status keanggotaan grup</li>
                    </ul>

                    <h3>1.3 Informasi Teknis</h3>
                    <ul>
                        <li>
                            Alamat IP untuk keamanan dan pencegahan
                            penyalahgunaan
                        </li>
                        <li>Informasi perangkat (model, sistem operasi)</li>
                        <li>
                            Log aktivitas aplikasi untuk debugging dan
                            peningkatan layanan
                        </li>
                    </ul>
                </div>

                <div className={styles.section}>
                    <h2>2. Bagaimana Kami Menggunakan Informasi</h2>
                    <p>Informasi yang kami kumpulkan digunakan untuk:</p>
                    <ul>
                        <li>
                            <strong>Menyediakan Layanan:</strong> Memungkinkan
                            Anda untuk login, membuat grup, dan berpartisipasi
                            dalam chat
                        </li>
                        <li>
                            <strong>Keamanan:</strong> Melindungi akun Anda dari
                            akses tidak sah dan mencegah spam
                        </li>
                        <li>
                            <strong>Peningkatan Layanan:</strong> Menganalisis
                            penggunaan untuk meningkatkan fitur aplikasi
                        </li>
                        <li>
                            <strong>Komunikasi:</strong> Mengirim notifikasi
                            penting terkait layanan
                        </li>
                    </ul>
                </div>

                <div className={styles.section}>
                    <h2>3. Penyimpanan dan Keamanan Data</h2>

                    <h3>3.1 Firebase Security</h3>
                    <p>
                        Kami menggunakan Firebase sebagai backend yang
                        menyediakan:
                    </p>
                    <ul>
                        <li>Enkripsi data saat transit dan saat disimpan</li>
                        <li>
                            Autentikasi multi-faktor untuk akses administratif
                        </li>
                        <li>Pemantauan keamanan real-time</li>
                        <li>Backup otomatis dan recovery data</li>
                    </ul>

                    <h3>3.2 Measures Keamanan Tambahan</h3>
                    <ul>
                        <li>
                            Kata sandi di-hash menggunakan algoritma yang aman
                        </li>
                        <li>
                            Akses data dibatasi berdasarkan prinsip least
                            privilege
                        </li>
                        <li>Audit log untuk semua akses data administratif</li>
                        <li>Pembaruan keamanan berkala</li>
                    </ul>
                </div>

                <div className={styles.section}>
                    <h2>4. Pembagian Informasi</h2>

                    <div className={styles.highlight}>
                        <strong>Prinsip Utama:</strong> Kami TIDAK menjual,
                        menyewakan, atau membagikan data pribadi Anda kepada
                        pihak ketiga untuk tujuan komersial.
                    </div>

                    <p>
                        Informasi Anda mungkin dibagikan dalam situasi terbatas:
                    </p>
                    <ul>
                        <li>
                            <strong>Dengan Persetujuan:</strong> Ketika Anda
                            secara eksplisit memberikan izin
                        </li>
                        <li>
                            <strong>Kepatuhan Hukum:</strong> Jika diwajibkan
                            oleh hukum yang berlaku
                        </li>
                        <li>
                            <strong>Keamanan:</strong> Untuk mencegah penipuan
                            atau ancaman keamanan
                        </li>
                        <li>
                            <strong>Penyedia Layanan:</strong> Dengan
                            Firebase/Google Cloud untuk operasional aplikasi
                        </li>
                    </ul>
                </div>

                <div className={styles.section}>
                    <h2>5. Hak-Hak Pengguna</h2>
                    <p>Sebagai pengguna NGACO, Anda memiliki hak untuk:</p>
                    <ul>
                        <li>
                            <strong>Akses:</strong> Melihat data pribadi yang
                            kami simpan tentang Anda
                        </li>
                        <li>
                            <strong>Koreksi:</strong> Memperbarui atau
                            mengoreksi informasi yang tidak akurat
                        </li>
                        <li>
                            <strong>Penghapusan:</strong> Meminta penghapusan
                            akun dan data pribadi Anda
                        </li>
                        <li>
                            <strong>Portabilitas:</strong> Mengekspor data Anda
                            dalam format yang dapat dibaca
                        </li>
                        <li>
                            <strong>Pembatasan:</strong> Membatasi pemrosesan
                            data pribadi tertentu
                        </li>
                    </ul>
                </div>

                <div className={styles.section}>
                    <h2>6. Retensi Data</h2>
                    <ul>
                        <li>
                            <strong>Akun Aktif:</strong> Data disimpan selama
                            akun aktif dan fungsional
                        </li>
                        <li>
                            <strong>Penghapusan Akun:</strong> Data pribadi
                            dihapus dalam 30 hari setelah penghapusan akun
                        </li>
                        <li>
                            <strong>Pesan Chat:</strong> Disimpan selama grup
                            masih aktif atau hingga 2 tahun untuk grup tidak
                            aktif
                        </li>
                        <li>
                            <strong>Log Teknis:</strong> Disimpan maksimal 90
                            hari untuk tujuan keamanan dan debugging
                        </li>
                    </ul>
                </div>

                <div className={styles.section}>
                    <h2>7. Privasi Anak</h2>
                    <p>
                        NGACO tidak dirancang untuk anak-anak di bawah 13 tahun.
                        Kami tidak secara sengaja mengumpulkan informasi pribadi
                        dari anak-anak di bawah 13 tahun. Jika kami mengetahui
                        bahwa seorang anak di bawah 13 tahun telah memberikan
                        informasi pribadi kepada kami, kami akan segera
                        menghapus informasi tersebut.
                    </p>
                </div>

                <div className={styles.section}>
                    <h2>8. Cookies dan Teknologi Pelacakan</h2>
                    <p>NGACO menggunakan teknologi minimal untuk pelacakan:</p>
                    <ul>
                        <li>Token autentikasi untuk menjaga sesi login</li>
                        <li>
                            Preferensi aplikasi lokal (tema, pengaturan
                            notifikasi)
                        </li>
                        <li>
                            Tidak menggunakan cookies pihak ketiga untuk iklan
                            atau pelacakan
                        </li>
                    </ul>
                </div>

                <div className={styles.section}>
                    <h2>9. Perubahan Kebijakan</h2>
                    <p>
                        Kami dapat memperbarui Kebijakan Privasi ini dari waktu
                        ke waktu. Perubahan signifikan akan diberitahukan
                        melalui:
                    </p>
                    <ul>
                        <li>Notifikasi dalam aplikasi</li>
                        <li>Email ke alamat yang terdaftar</li>
                        <li>Pengumuman di halaman utama aplikasi</li>
                    </ul>
                    <p>
                        Penggunaan berkelanjutan aplikasi setelah perubahan
                        menunjukkan persetujuan Anda terhadap kebijakan yang
                        diperbarui.
                    </p>
                </div>

                <div className={styles.section}>
                    <h2>10. Kepatuhan Hukum</h2>
                    <p>Kebijakan ini dirancang untuk mematuhi:</p>
                    <ul>
                        <li>
                            Undang-Undang No. 27 Tahun 2022 tentang Pelindungan
                            Data Pribadi (UU PDP) Indonesia
                        </li>
                        <li>
                            Peraturan Menteri Komunikasi dan Informatika terkait
                        </li>
                        <li>Standar internasional untuk perlindungan data</li>
                    </ul>
                </div>

                <div className={styles.contact_info}>
                    <h2>Hubungi Kami</h2>
                    <p>
                        Jika Anda memiliki pertanyaan tentang Kebijakan Privasi
                        ini atau ingin menggunakan hak-hak Anda, silakan hubungi
                        kami:
                    </p>
                    <p>
                        <strong>Email:</strong> {email || ""}
                    </p>
                    <p>
                        <strong>Telepon:</strong> {phone || ""}
                    </p>
                </div>

                <div className={styles.last_updated}>
                    <p>
                        <strong>Terakhir diperbarui:</strong> 28 Mei 2025
                    </p>
                    <p>Versi 1.0</p>
                </div>
            </div>
        </div>
    );
}
