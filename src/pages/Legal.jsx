import { Shield, Eye, Lock, FileText, Scale } from "lucide-react";
import { motion } from "framer-motion";

const Legal = () => {
  const policies = [
    {
      icon: Shield,
      title: "Kebijakan Privasi",
      description:
        "Bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda",
      lastUpdated: "15 Januari 2024",
    },
    {
      icon: FileText,
      title: "Syarat & Ketentuan",
      description: "Aturan dan ketentuan penggunaan layanan Batik Nusantara",
      lastUpdated: "10 Januari 2024",
    },
    {
      icon: Scale,
      title: "Kebijakan Pengembalian",
      description: "Prosedur dan ketentuan pengembalian atau penukaran produk",
      lastUpdated: "5 Januari 2024",
    },
    {
      icon: Lock,
      title: "Keamanan Data",
      description:
        "Langkah-langkah yang kami ambil untuk melindungi data pelanggan",
      lastUpdated: "1 Januari 2024",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-batik-cream to-batik-gold/20 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-batik-brown dark:text-batik-gold mb-6">
              Kebijakan & Ketentuan Legal
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Transparansi dan kepercayaan adalah fondasi bisnis kami. Pelajari
              kebijakan dan ketentuan yang mengatur layanan Batik Nusantara.
            </p>
          </div>
        </section>

        {/* Policy Overview */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {policies.map((policy, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <div className="w-20 h-20 bg-batik-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-batik-brown dark:group-hover:bg-batik-gold/80 transition-colors duration-300">
                    <policy.icon className="text-white" size={32} />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-batik-brown dark:text-batik-gold mb-3">
                    {policy.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                    {policy.description}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Terakhir diperbarui: {policy.lastUpdated}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Privacy Policy */}
        <section className="py-16 bg-batik-cream/30 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Shield className="text-batik-gold mr-3" size={32} />
                <h2 className="font-serif text-3xl font-bold text-batik-brown dark:text-batik-gold">
                  Kebijakan Privasi
                </h2>
              </div>

              <div className="space-y-6 text-gray-600 dark:text-gray-300">
                <div>
                  <h3 className="font-semibold text-batik-brown dark:text-batik-gold mb-3">
                    1. Informasi yang Kami Kumpulkan
                  </h3>
                  <p className="mb-3">
                    Kami mengumpulkan informasi yang Anda berikan secara langsung
                    kepada kami, termasuk:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Nama lengkap dan informasi kontak</li>
                    <li>Alamat pengiriman dan penagihan</li>
                    <li>Informasi pembayaran (dienkripsi dan aman)</li>
                    <li>Preferensi produk dan riwayat pembelian</li>
                    <li>Komunikasi dengan tim customer service</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-batik-brown dark:text-batik-gold mb-3">
                    2. Bagaimana Kami Menggunakan Informasi
                  </h3>
                  <p className="mb-3">
                    Informasi yang dikumpulkan digunakan untuk:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Memproses dan mengirimkan pesanan Anda</li>
                    <li>Memberikan layanan pelanggan yang optimal</li>
                    <li>
                      Mengirimkan update produk dan promosi (dengan persetujuan)
                    </li>
                    <li>Meningkatkan kualitas produk dan layanan</li>
                    <li>Mematuhi kewajiban hukum dan regulasi</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-batik-brown dark:text-batik-gold mb-3">
                    3. Perlindungan Data
                  </h3>
                  <p>
                    Kami menggunakan teknologi enkripsi SSL dan sistem keamanan
                    berlapis untuk melindungi informasi pribadi Anda. Data
                    disimpan di server yang aman dan hanya dapat diakses oleh
                    personel yang berwenang.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-batik-brown dark:text-batik-gold mb-3">
                    4. Berbagi Informasi
                  </h3>
                  <p>
                    Kami tidak menjual, menyewakan, atau membagikan informasi
                    pribadi Anda kepada pihak ketiga tanpa persetujuan, kecuali
                    untuk keperluan pengiriman, pembayaran, atau kewajiban hukum.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-batik-brown dark:text-batik-gold mb-3">
                    5. Hak Anda
                  </h3>
                  <p className="mb-3">Anda memiliki hak untuk:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Mengakses dan memperbarui informasi pribadi</li>
                    <li>Menghapus akun dan data pribadi</li>
                    <li>Menolak komunikasi pemasaran</li>
                    <li>Meminta salinan data yang kami miliki</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Terms & Conditions */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-6">
                <FileText className="text-batik-gold mr-3" size={32} />
                <h2 className="font-serif text-3xl font-bold text-batik-brown dark:text-batik-gold">
                  Syarat & Ketentuan
                </h2>
              </div>

              <div className="space-y-6 text-gray-600 dark:text-gray-300">
                <div>
                  <h3 className="font-semibold text-batik-brown dark:text-batik-gold mb-3">
                    1. Penerimaan Ketentuan
                  </h3>
                  <p>
                    Dengan menggunakan layanan Batik Nusantara, Anda menyetujui
                    untuk terikat dengan syarat dan ketentuan ini. Jika Anda tidak
                    setuju, mohon untuk tidak menggunakan layanan kami.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-batik-brown dark:text-batik-gold mb-3">
                    2. Pemesanan dan Pembayaran
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      Semua harga dalam Rupiah dan belum termasuk ongkos kirim
                    </li>
                    <li>
                      Pembayaran harus dilakukan sesuai metode yang disepakati
                    </li>
                    <li>Untuk pesanan custom, diperlukan DP minimal 50%</li>
                    <li>
                      Kami berhak menolak pesanan yang tidak sesuai ketentuan
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-batik-brown dark:text-batik-gold mb-3">
                    3. Pengiriman
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Estimasi waktu pengiriman tidak termasuk hari libur</li>
                    <li>Risiko kerusakan selama pengiriman ditanggung kurir</li>
                    <li>Pastikan alamat pengiriman lengkap dan benar</li>
                    <li>
                      Biaya pengiriman ulang akibat alamat salah ditanggung
                      pembeli
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-batik-brown dark:text-batik-gold mb-3">
                    4. Garansi dan Pengembalian
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Garansi kualitas berlaku 6 bulan untuk cacat produksi</li>
                    <li>
                      Pengembalian dapat dilakukan dalam 7 hari setelah penerimaan
                    </li>
                    <li>
                      Produk custom tidak dapat dikembalikan kecuali cacat
                      produksi
                    </li>
                    <li>Biaya return shipping ditanggung sesuai kebijakan</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-batik-brown dark:text-batik-gold mb-3">
                    5. Hak Kekayaan Intelektual
                  </h3>
                  <p>
                    Semua desain, motif, dan karya seni yang dibuat oleh Batik
                    Nusantara dilindungi hak cipta. Penggunaan tanpa izin dapat
                    dikenakan sanksi hukum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Return Policy */}
        <section className="py-16 bg-batik-cream/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Scale className="text-batik-gold mr-3" size={32} />
                <h2 className="font-serif text-3xl font-bold text-batik-brown">
                  Kebijakan Pengembalian
                </h2>
              </div>

              <div className="space-y-6 text-gray-600">
                <div>
                  <h3 className="font-semibold text-batik-brown mb-3">
                    Ketentuan Pengembalian
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 dark:text-green-400 mb-2">
                        ✓ Dapat Dikembalikan
                      </h4>
                      <ul className="text-sm text-green-700 dark:text-green-500 space-y-1">
                        <li>• Produk ready stock dalam 7 hari</li>
                        <li>• Produk cacat atau rusak</li>
                        <li>• Salah pengiriman dari kami</li>
                        <li>• Tidak sesuai deskripsi</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-800 dark:text-red-400 mb-2">
                        ✗ Tidak Dapat Dikembalikan
                      </h4>
                      <ul className="text-sm text-red-700 dark:text-red-500 space-y-1">
                        <li>• Produk custom/made to order</li>
                        <li>• Produk sudah dicuci/digunakan</li>
                        <li>• Kerusakan akibat kelalaian</li>
                        <li>• Produk sale/clearance</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-batik-brown mb-3">
                    Prosedur Pengembalian
                  </h3>
                  <ol className="list-decimal list-inside space-y-2 ml-4">
                    <li>
                      Hubungi customer service dalam 7 hari setelah penerimaan
                    </li>
                    <li>Sertakan foto produk dan alasan pengembalian</li>
                    <li>
                      Tunggu konfirmasi dan nomor RMA (Return Authorization)
                    </li>
                    <li>
                      Kemas produk dengan baik dan kirim ke alamat yang ditentukan
                    </li>
                    <li>
                      Refund akan diproses dalam 7-14 hari kerja setelah produk
                      diterima
                    </li>
                  </ol>
                </div>

                <div>
                  <h3 className="font-semibold text-batik-brown mb-3">
                    Biaya Pengembalian
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Gratis jika produk cacat atau salah kirim dari kami</li>
                    <li>
                      Ditanggung pembeli jika alasan pribadi (berubah pikiran,
                      dll)
                    </li>
                    <li>
                      Asuransi pengiriman return wajib untuk produk di atas Rp
                      1.000.000
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Data Security */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <Lock className="text-batik-gold mr-3" size={32} />
                <h2 className="font-serif text-3xl font-bold text-batik-brown">
                  Keamanan Data
                </h2>
              </div>

              <div className="space-y-6 text-gray-600">
                <div>
                  <h3 className="font-semibold text-batik-brown mb-3">
                    Teknologi Keamanan
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-batik-cream/30 rounded-lg">
                      <Shield
                        className="text-batik-gold mx-auto mb-2"
                        size={24}
                      />
                      <h4 className="font-semibold text-batik-brown">
                        SSL Encryption
                      </h4>
                      <p className="text-sm">256-bit SSL untuk semua transaksi</p>
                    </div>
                    <div className="text-center p-4 bg-batik-cream/30 rounded-lg">
                      <Lock className="text-batik-gold mx-auto mb-2" size={24} />
                      <h4 className="font-semibold text-batik-brown">
                        Secure Server
                      </h4>
                      <p className="text-sm">Server dengan firewall berlapis</p>
                    </div>
                    <div className="text-center p-4 bg-batik-cream/30 rounded-lg">
                      <Eye className="text-batik-gold mx-auto mb-2" size={24} />
                      <h4 className="font-semibold text-batik-brown">
                        Monitoring 24/7
                      </h4>
                      <p className="text-sm">Pemantauan keamanan berkelanjutan</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-batik-brown mb-3">
                    Komitmen Keamanan
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Tidak menyimpan informasi kartu kredit di server kami</li>
                    <li>
                      Akses data terbatas hanya untuk personel yang berwenang
                    </li>
                    <li>Audit keamanan rutin oleh pihak ketiga independen</li>
                    <li>Backup data reguler di multiple lokasi</li>
                    <li>Compliance dengan standar keamanan internasional</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-batik-brown mb-3">
                    Pelaporan Insiden
                  </h3>
                  <p>
                    Jika Anda mencurigai adanya aktivitas mencurigakan pada akun
                    Anda atau menemukan celah keamanan, segera hubungi tim
                    security kami di
                    <span className="font-semibold text-batik-brown">
                      {" "}
                      security@batiknusantara.com
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Legal */}
        <section className="py-20 bg-gradient-to-r from-batik-brown to-batik-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
              Pertanyaan Legal?
            </h2>
            <p className="text-xl text-batik-cream mb-8 max-w-3xl mx-auto">
              Tim legal kami siap membantu menjawab pertanyaan seputar kebijakan
              dan ketentuan layanan Batik Nusantara.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-batik-gold hover:bg-batik-gold/90 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                Hubungi Tim Legal
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-batik-brown font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                Download PDF
              </button>
            </div>

            <div className="mt-12 pt-8 border-t border-white/20 text-batik-cream">
              <p className="text-sm">
                Dokumen terakhir diperbarui: 15 Januari 2024 |
                <span className="ml-2">Email: legal@batiknusantara.com</span>
              </p>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Legal;
