import { Star, Quote, Building, Calendar, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const [showModal, setShowModal] = useState(false);
  const [reviewForm, setReviewForm] = useState({
    name: "",
    rating: 5,
    content: "",
  });
  const [allTestimonials, setAllTestimonials] = useState([
    {
      id: 1,
      name: "Sarah Wijaya",
      role: "Ibu Rumah Tangga",
      company: "-",
      rating: 5,
      content:
        "Kuenya enak banget, teksturnya lembut dan rasa manisnya pas. Anak-anak di rumah suka sekali dengan Maksubah!",
      project: "Maksubah",
      date: "Januari 2025",
      image: "/testimonials/Sarah Wijaya.jpeg?height=80&width=80",
    },
    {
      id: 2,
      name: "Budi Santoso",
      role: "Pengusaha Kue",
      company: "Santoso Cake Shop",
      rating: 5,
      content:
        "Maksubah Prunes benar-benar favorit pelanggan di toko saya. Rasa prunes-nya menambah cita rasa unik!",
      project: "Maksubah Prunes",
      date: "Februari 2025",
      image: "/testimonials/Budi Santoso.jpeg?height=80&width=80",
    },
    {
      id: 3,
      name: "Maya Sari",
      role: "Pecinta Kue",
      company: "-",
      rating: 5,
      content:
        "Maksubah Keju sangat lembut dan kejunya melimpah. Cocok untuk hantaran keluarga!",
      project: "Maksubah Keju",
      date: "Maret 2025",
      image: "/testimonials/Maya Sari.jpeg?height=80&width=80",
    },
    {
      id: 4,
      name: "Dr. Ahmad Fauzi",
      role: "Dosen",
      company: "Universitas Palembang",
      rating: 4,
      content:
        "Lapan Jam Duren aromanya harum dan rasa duriannya terasa. Cocok untuk oleh-oleh khas Palembang.",
      project: "Lapan Jam Duren",
      date: "April 2025",
      image: "/testimonials/Dr. Ahmad Fauzi.jpeg?height=80&width=80",
    },
    {
      id: 5,
      name: "Rina Kusuma",
      role: "Ibu Rumah Tangga",
      company: "-",
      rating: 5,
      content:
        "Lapis Kojo Duren warnanya cantik dan rasa duriannya pas, tidak terlalu manis. Anak-anak suka!",
      project: "Lapis Kojo Duren",
      date: "Mei 2025",
      image: "/testimonials/Rina Kusuma.jpeg?height=80&width=80",
    },
    {
      id: 6,
      name: "Pak Joko Widodo",
      role: "Pecinta Kue Tradisional",
      company: "-",
      rating: 5,
      content:
        "Engkak Duren teksturnya legit dan rasa duriannya mantap. Sangat recommended untuk acara keluarga!",
      project: "Engkak Duren",
      date: "Juni 2025",
      image: "/testimonials/profil12.jpg?height=60&width=60",
    },
    {
      id: 7,
      name: "Andini Pratiwi",
      role: "Mahasiswa",
      company: "-",
      rating: 4,
      content:
        "Maksubah Coklat cocok untuk pecinta coklat, rasa manis dan coklatnya seimbang.",
      project: "Maksubah Coklat",
      date: "Juli 2025",
      image: "/testimonials/profil7.jpg",
    },
    {
      id: 8,
      name: "Eka Saputra",
      role: "Guru",
      company: "SMA 1 Palembang",
      rating: 5,
      content:
        "Lapis Legit Original sangat lembut dan aromanya harum. Cocok untuk hantaran lebaran.",
      project: "Lapis Legit Original",
      date: "Agustus 2025",
      image: "/testimonials/profil8.jpg",
    },
    {
      id: 9,
      name: "Eva Lestari",
      role: "Ibu Rumah Tangga",
      company: "-",
      rating: 5,
      content:
        "Lapan Jam Keju rasanya unik, manis dan gurih kejunya terasa. Pasti order lagi!",
      project: "Lapan Jam Keju",
      date: "September 2025",
      image: "/testimonials/profil9.jpg",
    },
    {
      id: 10,
      name: "Hatta Ramadhan",
      role: "Karyawan Swasta",
      company: "-",
      rating: 5,
      content:
        "Maksubah Engkak Kojo (MakEngKo) sangat spesial, kombinasi rasa yang unik dan enak!",
      project: "Maksubah Engkak Kojo (MakEngKo)",
      date: "Oktober 2025",
      image: "/testimonials/profil10.jpg",
    },
    {
      id: 11,
      name: "Dewi Anggraini",
      role: "PNS",
      company: "Kantor Gubernur",
      rating: 5,
      content:
        "Lapis Legit Prunes cocok untuk oleh-oleh, rasa prunes-nya segar dan tidak terlalu manis.",
      project: "Lapis Legit Prunes",
      date: "November 2025",
      image: "/testimonials/profil11.jpg",
    },
    {
      id: 12,
      name: "Rizal Fadli",
      role: "Mahasiswa",
      company: "Universitas Sriwijaya",
      rating: 4,
      content:
        "Maksubah Kojo (Makjo) Prunes recommended untuk pecinta prunes, teksturnya lembut dan rasa buahnya terasa.",
      project: "Maksubah Kojo (Makjo) Prunes",
      date: "Desember 2025",
      image: "/testimonials/profil12.jpg",
    },
  ]);

  const [search, setSearch] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);
  const [sortBy, setSortBy] = useState("Terbaru");
  const [categoryFilter, setCategoryFilter] = useState('');
  const [showVideo1, setShowVideo1] = useState(false);
  const [showVideo2, setShowVideo2] = useState(false);
  const [showVideo3, setShowVideo3] = useState(false);

  // Ambil daftar unik kategori/proyek dari data testimonial
  const testimonialProjects = Array.from(new Set(allTestimonials.map(t => t.project))).filter(Boolean);
  // Daftar produk dari Product.jsx (hardcode judul produk, urutkan abjad, tanpa duplikat)
  const productNames = [
    "Maksubah",
    "Maksubah Prunes",
    "Maksubah Keju",
    "Maksubah Coklat",
    "Lapan Jam",
    "Lapan Jam Duren",
    "Lapan Jam Keju",
    "Lapis Kojo",
    "Lapis Kojo Duren",
    "Engkak",
    "Engkak Duren",
    "Maksubah Kojo (Makjo)",
    "Maksubah Kojo (Makjo) Prunes",
    "Maksubah Engkak Kojo (MakEngKo)",
    "Lapis Legit Original",
    "Lapis Legit Nanas",
    "Lapis Legit Keju",
    "Lapis Legit Coklat",
    "Lapis Legit Prunes"
  ];
  // Gabungkan dan urutkan, tanpa duplikat
  const projectOptions = Array.from(new Set([...testimonialProjects, ...productNames])).sort();

  // Hitung statistik rating
  const totalReview = allTestimonials.length;
  const totalRating = allTestimonials.reduce((sum, t) => sum + t.rating, 0);
  const avgRating = totalReview ? totalRating / totalReview : 0;
  const ratingDist = [5, 4, 3, 2, 1].map((star) =>
    allTestimonials.filter((t) => t.rating === star).length
  );

  // Helper untuk parsing tanggal (format: "Januari 2024", "Ongoing", "01 Jan 2024")
  function parseDate(str) {
    if (!str) return 0;
    if (str.toLowerCase().includes("ongoing")) return new Date().getTime();
    // Coba format "01 Jan 2024"
    const d1 = Date.parse(str);
    if (!isNaN(d1)) return d1;
    // Format "Januari 2024"
    const bulan = [
      "januari",
      "februari",
      "maret",
      "april",
      "mei",
      "juni",
      "juli",
      "agustus",
      "september",
      "oktober",
      "november",
      "desember",
    ];
    const parts = str.toLowerCase().split(" ");
    if (parts.length === 2) {
      const idx = bulan.indexOf(parts[0]);
      if (idx !== -1) {
        return Date.parse(
          `01 ${bulan[idx][0].toUpperCase() + bulan[idx].slice(1)} ${parts[1]}`
        );
      }
    }
    return 0;
  }

  // Filter, search, sort
  let filteredTestimonials = allTestimonials.filter((t) => {
    const matchSearch =
      t.project.toLowerCase().includes(search.toLowerCase()) ||
      t.content.toLowerCase().includes(search.toLowerCase());
    const matchRating = ratingFilter === 0 || t.rating === ratingFilter;
    const matchCategory = !categoryFilter || t.project === categoryFilter;
    return matchSearch && matchRating && matchCategory;
  });

  if (sortBy === "Terbaru") {
    filteredTestimonials = filteredTestimonials
      .slice()
      .sort((a, b) => parseDate(b.date) - parseDate(a.date));
  } else if (sortBy === "Terlama") {
    filteredTestimonials = filteredTestimonials
      .slice()
      .sort((a, b) => parseDate(a.date) - parseDate(b.date));
  } else if (sortBy === "Rating Tertinggi") {
    filteredTestimonials = filteredTestimonials.slice().sort((a, b) => b.rating - a.rating);
  } else if (sortBy === "Rating Terendah") {
    filteredTestimonials = filteredTestimonials.slice().sort((a, b) => a.rating - b.rating);
  }

  const stats = [
    { number: "1000+", label: "Klien Puas" },
    { number: "98%", label: "Tingkat Kepuasan" },
    { number: "4.9/5", label: "Rating Rata-rata" },
    { number: "500+", label: "Review Positif" },
  ];

  const testimonialsToShow = allTestimonials.slice(0, 5);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-batik-cream to-batik-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-batik-brown mb-6">
            Testimoni Klien
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kepuasan klien adalah kebanggaan kami. Simak pengalaman mereka yang
            telah mempercayakan proyek handycraft kepada kami.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">
            {/* Left: Average Rating */}
            <div className="w-full md:w-1/3 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-gray-200 pb-8 md:pb-0 md:pr-8">
              <div className="text-5xl font-bold text-batik-brown font-serif mb-2">
                {avgRating.toFixed(1)}
              </div>
              <div className="flex items-center mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${
                      i < Math.round(avgRating)
                        ? "text-batik-gold fill-current"
                        : "text-batik-gold/40"
                    } mr-1`}
                  />
                ))}
              </div>
              <div className="text-gray-500 text-sm">
                {totalReview} Total Review
              </div>
            </div>
            {/* Right: Rating Distribution */}
            <div className="w-full md:w-2/3 flex flex-col justify-center">
              <div className="font-semibold text-batik-brown mb-2">
                Distribusi Rating:
              </div>
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((star, idx) => (
                  <div key={star} className="flex items-center gap-2">
                    <span className="w-8 flex items-center text-base font-bold" style={{color: '#D4AF37'}}>
                      {star}
                      <Star className="w-4 h-4 ml-1" style={{color: '#D4AF37', fill: '#D4AF37'}} />
                    </span>
                    <div className="flex-1 h-2 rounded-full overflow-hidden" style={{background: '#E5E7EB'}}>
                      <div
                        className="h-2 rounded-full"
                        style={{
                          background: '#D4AF37',
                          width: totalReview ? `${(ratingDist[idx] / totalReview) * 100}%` : '0%'
                        }}
                      ></div>
                    </div>
                    <span className="w-6 text-xs font-semibold" style={{color: '#444'}}>
                      ({ratingDist[idx]})
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter/Action Bar */}
      <section className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-4 md:gap-2 items-center justify-between">
          <div className="flex-1 flex items-center w-full md:w-auto">
            <input
              type="text"
              placeholder="Cari review (kue, komentar)..."
              className="w-full md:w-72 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-batik-gold"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto justify-end md:justify-end">
            <select
              className="w-48 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none"
              value={categoryFilter}
              onChange={e => setCategoryFilter(e.target.value)}
            >
              <option value="">Semua Kategori</option>
              {projectOptions.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            <select
              className="w-40 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none"
              value={ratingFilter}
              onChange={(e) => setRatingFilter(Number(e.target.value))}
            >
              <option value={0}>Semua Rating</option>
              <option value={5}>5 Bintang</option>
              <option value={4}>4 Bintang</option>
              <option value={3}>3 Bintang</option>
              <option value={2}>2 Bintang</option>
              <option value={1}>1 Bintang</option>
            </select>
            <select
              className="w-40 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option>Terbaru</option>
              <option>Terlama</option>
              <option>Rating Tertinggi</option>
              <option>Rating Terendah</option>
            </select>
            <button
              className="bg-batik-orange hover:bg-batik-gold text-white font-semibold px-4 py-2 rounded-lg text-sm ml-2 flex items-center gap-2 transition-all duration-200"
              onClick={() => setShowModal(true)}
            >
              <span>Beri Ulasan Kue</span>
            </button>
          </div>
        </div>
      </section>

      {/* Modal Form Review */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
            <button
              className="absolute top-3 right-3 text-batik-brown hover:text-batik-gold"
              onClick={() => setShowModal(false)}
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="font-serif text-xl font-bold text-batik-brown mb-4">
              Beri Ulasan Kue
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setAllTestimonials([
                  {
                    id: allTestimonials.length + 1,
                    name: reviewForm.name || "Anonim",
                    role: "Pelanggan Baru",
                    company: "-",
                    rating: reviewForm.rating,
                    content: reviewForm.content,
                    project: "-",
                    date: new Date().toLocaleDateString("id-ID", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    }),
                    image: "",
                  },
                  ...allTestimonials,
                ]);
                setReviewForm({ name: "", rating: 5, content: "" });
                setShowModal(false);
              }}
              className="flex flex-col gap-3"
            >
              <input
                type="text"
                placeholder="Nama Anda (opsional)"
                className="border px-3 py-2 rounded-lg text-sm"
                value={reviewForm.name}
                onChange={(e) =>
                  setReviewForm((f) => ({ ...f, name: e.target.value }))
                }
              />
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Rating:</span>
                {[1, 2, 3, 4, 5].map((i) => (
                  <button
                    type="button"
                    key={i}
                    className={`focus:outline-none ${
                      reviewForm.rating >= i
                        ? "text-batik-gold"
                        : "text-gray-300"
                    }`}
                    onClick={() =>
                      setReviewForm((f) => ({ ...f, rating: i }))
                    }
                  >
                    <Star className="w-5 h-5 fill-current" />
                  </button>
                ))}
              </div>
              <textarea
                placeholder="Tulis ulasan Anda..."
                className="border px-3 py-2 rounded-lg text-sm min-h-[80px]"
                value={reviewForm.content}
                onChange={(e) =>
                  setReviewForm((f) => ({ ...f, content: e.target.value }))
                }
                required
              />
              <button
                type="submit"
                className="bg-batik-gold hover:bg-batik-orange text-white font-semibold px-4 py-2 rounded-lg mt-2"
              >
                Kirim Ulasan
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Testimonials Grid */}
      <section className="py-10 bg-batik-cream/30">
        <div className="max-w-full xl:max-w-[1600px] 2xl:max-w-[1920px] mx-auto px-2 md:px-4 xl:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsToShow.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-xl shadow p-10  flex flex-col gap-3 border border-gray-100 text-base"
                style={{ minHeight: 220 }}
              >
                <div className="flex items-center gap-3 mb-1">
                  {testimonial.image ? (
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-batik-brown text-lg">
                      {testimonial.name?.split(" ").map((w) => w[0]).join("")}
                    </div>
                  )}
                  <div>
                    <div className="font-semibold text-batik-brown text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-gray-400">
                      {testimonial.role} • {testimonial.date}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-batik-gold fill-current" />
                  ))}
                  {[...Array(5 - testimonial.rating)].map((_, i) => (
                    <Star
                      key={i + 10}
                      className="w-4 h-4 text-gray-200 fill-current"
                    />
                  ))}
                  <span className="ml-2 text-xs font-semibold text-batik-brown">
                    {testimonial.project}
                  </span>
                </div>
                <div className="text-gray-700 text-sm mb-2">{testimonial.content}</div>
                <button className="flex items-center text-xs text-batik-orange hover:underline w-fit">
                  <span>Membantu (0)</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-full xl:max-w-[1600px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-batik-brown mb-4">
              Video Testimoni
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dengarkan langsung pengalaman klien kami melalui video testimoni
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-3 gap-8">
            {/* Video 1 */}
            <div className="relative group cursor-pointer">
              <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-batik-gold/10 to-batik-brown/10 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:brightness-95">
                {!showVideo1 ? (
                  <>
                    <img
                      src="/testimonials/Sarah Wijaya.jpeg?height=400&width=600"
                      alt="Sarah Wijaya"
                      className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:opacity-100 transition-all duration-300"
                    />
                    <button
                      className="relative z-10 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-300 shadow-lg"
                      onClick={() => setShowVideo1(true)}
                    >
                      <div className="w-0 h-0 border-l-[18px] border-l-batik-brown border-y-[12px] border-y-transparent ml-1"></div>
                    </button>
                  </>
                ) : (
                  <video
                    controls
                    autoPlay
                    poster="/testimonials/Sarah Wijaya.jpeg?height=400&width=600"
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                  </video>
                )}
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white drop-shadow">
                <h3 className="font-semibold mb-1">Testimoni Klien 1</h3>
                <p className="text-sm opacity-90">Sarah Wijaya</p>
              </div>
            </div>
            {/* Video 2 */}
            <div className="relative group cursor-pointer">
              <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-batik-gold/10 to-batik-brown/10 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:brightness-95">
                {!showVideo2 ? (
                  <>
                    <img
                      src="/testimonials/Budi Santoso.jpeg?height=400&width=600"
                      alt="Budi Santoso"
                      className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:opacity-100 transition-all duration-300"
                    />
                    <button
                      className="relative z-10 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-300 shadow-lg"
                      onClick={() => setShowVideo2(true)}
                    >
                      <div className="w-0 h-0 border-l-[18px] border-l-batik-brown border-y-[12px] border-y-transparent ml-1"></div>
                    </button>
                  </>
                ) : (
                  <video
                    controls
                    autoPlay
                    poster="/testimonials/Budi Santoso.jpeg?height=400&width=600"
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src="https://www.w3schools.com/html/movie.mp4" type="video/mp4" />
                  </video>
                )}
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white drop-shadow">
                <h3 className="font-semibold mb-1">Testimoni Klien 2</h3>
                <p className="text-sm opacity-90">Budi Santoso</p>
              </div>
            </div>
            {/* Video 3 */}
            <div className="relative group cursor-pointer">
              <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-batik-gold/10 to-batik-brown/10 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:brightness-95">
                {!showVideo3 ? (
                  <>
                    <img
                      src="/testimonials/Maya Sari.jpeg?height=400&width=600"
                      alt="Maya Sari"
                      className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:opacity-100 transition-all duration-300"
                    />
                    <button
                      className="relative z-10 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-300 shadow-lg"
                      onClick={() => setShowVideo3(true)}
                    >
                      <div className="w-0 h-0 border-l-[18px] border-l-batik-brown border-y-[12px] border-y-transparent ml-1"></div>
                    </button>
                  </>
                ) : (
                  <video
                    controls
                    autoPlay
                    poster="/testimonials/Maya Sari.jpeg?height=400&width=600"
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                  </video>
                )}
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white drop-shadow">
                <h3 className="font-semibold mb-1">Testimoni Klien 3</h3>
                <p className="text-sm opacity-90">Maya Sari</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <span
              className="text-batik-gold hover:text-batik-orange font-semibold text-base cursor-pointer underline underline-offset-4 transition-colors duration-200 flex items-center gap-1"
              onClick={() => window.location.href = '/galeri'}
              role="button"
              tabIndex={0}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') window.location.href = '/galeri'; }}
            >
              Lihat Video Lainnya <span className="text-lg font-bold">&gt;</span>
            </span>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Testimonials;
