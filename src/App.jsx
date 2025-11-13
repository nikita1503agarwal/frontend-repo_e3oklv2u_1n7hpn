import { useState, useEffect } from 'react'

function Stat({ value, label }) {
  return (
    <div className="text-center">
      <p className="text-3xl sm:text-4xl font-bold text-gray-900">{value}</p>
      <p className="mt-1 text-sm text-gray-600">{label}</p>
    </div>
  )
}

function SectionTitle({ overline, title, subtitle }) {
  return (
    <div className="max-w-3xl mx-auto text-center">
      {overline && <p className="text-xs font-semibold tracking-wider text-blue-600 uppercase">{overline}</p>}
      <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900">{title}</h2>
      {subtitle && <p className="mt-3 text-gray-600">{subtitle}</p>}
    </div>
  )
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onHash = () => setMobileOpen(false)
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const navItems = [
    { href: '#beranda', label: 'Beranda' },
    { href: '#profil', label: 'Profil' },
    { href: '#program', label: 'Program' },
    { href: '#berita', label: 'Berita' },
    { href: '#fasilitas', label: 'Fasilitas' },
    { href: '#kontak', label: 'Kontak' },
  ]

  return (
    <div className="min-h-screen text-gray-900">
      {/* Navbar */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#beranda" className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">S1</div>
              <div className="leading-tight">
                <p className="font-semibold">SMAN 1 Kertasari</p>
                <p className="text-xs text-gray-500">Sekolah Unggul, Berkarakter</p>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((n) => (
                <a key={n.href} href={n.href} className="text-sm text-gray-600 hover:text-blue-700 transition-colors">
                  {n.label}
                </a>
              ))}
              <a href="#pendaftaran" className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors">
                PPDB 2025
              </a>
            </nav>

            <button onClick={() => setMobileOpen((v) => !v)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          {mobileOpen && (
            <div className="md:hidden pb-4">
              <div className="grid gap-2">
                {navItems.map((n) => (
                  <a key={n.href} href={n.href} onClick={() => setMobileOpen(false)} className="px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100">
                    {n.label}
                  </a>
                ))}
                <a href="#pendaftaran" onClick={() => setMobileOpen(false)} className="px-3 py-2 rounded-md bg-blue-600 text-white text-sm text-center">PPDB 2025</a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero */}
      <section id="beranda" className="pt-24 sm:pt-28">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-70" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-100 blur-3xl opacity-70" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-xs font-semibold tracking-wider text-blue-600 uppercase">Selamat Datang</p>
                <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                  SMAN 1 Kertasari
                </h1>
                <p className="mt-4 text-gray-600 max-w-xl">
                  Mencetak generasi berprestasi, berkarakter, dan berwawasan global melalui pembelajaran yang inovatif dan lingkungan sekolah yang kondusif.
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <a href="#pendaftaran" className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700">Daftar PPDB</a>
                  <a href="#profil" className="inline-flex items-center rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50">Pelajari Lebih Lanjut</a>
                </div>
                <div className="mt-8 grid grid-cols-3 gap-6">
                  <Stat value="40+" label="Tenaga Pendidik" />
                  <Stat value="1000+" label="Siswa Aktif" />
                  <Stat value="25+" label="Ekstrakurikuler" />
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-gray-100 shadow-sm overflow-hidden">
                  <div className="h-full w-full flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-3 p-6">
                      {[...Array(9)].map((_, i) => (
                        <div key={i} className="h-20 w-24 bg-white/80 border border-gray-100 rounded-lg shadow-sm flex items-center justify-center text-sm text-gray-500">
                          Foto {i + 1}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-3 -left-3 bg-white border border-gray-100 rounded-xl shadow-sm px-4 py-2 text-xs text-gray-600">
                  Ilustrasi fasilitas sekolah
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profil */}
      <section id="profil" className="scroll-mt-24 py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle overline="Profil" title="Sekilas Tentang SMAN 1 Kertasari" subtitle="Sekolah menengah atas yang berkomitmen pada pendidikan berkualitas dengan menanamkan nilai integritas, disiplin, dan kepedulian." />
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Visi',
                desc: 'Terwujudnya peserta didik yang beriman, berkarakter, unggul dalam prestasi, serta peduli lingkungan.'
              },
              {
                title: 'Misi',
                desc: 'Menyelenggarakan pembelajaran kreatif, meningkatkan budaya literasi, serta mendorong prestasi akademik dan non-akademik.'
              },
              {
                title: 'Nilai',
                desc: 'Integritas, Disiplin, Tanggung Jawab, Gotong Royong, dan Inovasi.'
              }
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program */}
      <section id="program" className="scroll-mt-24 py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle overline="Program" title="Program Unggulan" subtitle="Berbagai program akademik dan pengembangan diri untuk mendukung potensi siswa." />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Kurikulum Merdeka', desc: 'Pembelajaran berpusat pada siswa untuk mengembangkan kompetensi abad 21.' },
              { title: 'Kelas Riset', desc: 'Pembinaan ilmiah menuju kompetisi penelitian dan olimpiade sains.' },
              { title: 'Literasi Digital', desc: 'Peningkatan kemampuan TIK dan keamanan digital.' },
              { title: 'Bahasa & Budaya', desc: 'Penguatan bahasa asing dan apresiasi budaya lokal.' },
              { title: 'Career Coaching', desc: 'Pendampingan studi lanjut dan persiapan karier.' },
              { title: 'Kewirausahaan', desc: 'Proyek bisnis siswa untuk menumbuhkan jiwa entrepreneur.' },
            ].map((p) => (
              <div key={p.title} className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center font-semibold">★</div>
                <h3 className="mt-4 font-semibold text-gray-900">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Berita */}
      <section id="berita" className="scroll-mt-24 py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle overline="Berita" title="Kabar Terbaru" subtitle="Informasi kegiatan, prestasi, dan pengumuman sekolah." />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <article key={i} className="group rounded-xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-[16/9] bg-gray-100" />
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-700">Judul Berita {i}</h3>
                  <p className="mt-2 text-sm text-gray-600">Ringkasan singkat mengenai berita terbaru di SMAN 1 Kertasari.</p>
                  <div className="mt-4 text-xs text-gray-500">12 Nov 2025 • Humas</div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href="#" className="text-sm font-medium text-blue-700 hover:text-blue-800">Lihat semua berita →</a>
          </div>
        </div>
      </section>

      {/* Fasilitas */}
      <section id="fasilitas" className="scroll-mt-24 py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle overline="Fasilitas" title="Lingkungan Belajar Nyaman" subtitle="Didukung sarana prasarana yang lengkap untuk menunjang pembelajaran." />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Ruang Kelas Nyaman',
              'Laboratorium Sains',
              'Perpustakaan Modern',
              'Lapangan Olahraga',
              'Ruang Komputer',
              'Aula Serbaguna',
              'Studio Musik',
              'Mushola Bersih',
            ].map((f, idx) => (
              <div key={idx} className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
                <div className="h-28 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 border border-gray-100" />
                <p className="mt-3 text-sm font-medium text-gray-800">{f}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PPDB CTA */}
      <section id="pendaftaran" className="scroll-mt-24 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden border border-blue-100 bg-gradient-to-r from-blue-600 to-cyan-600">
            <div className="px-6 sm:px-10 py-10 sm:py-14 text-white grid lg:grid-cols-2 gap-6 items-center">
              <div>
                <p className="text-xs font-semibold tracking-wider uppercase text-white/80">PPDB 2025</p>
                <h3 className="mt-2 text-2xl sm:text-3xl font-bold">Bergabung Menjadi Bagian dari SMAN 1 Kertasari</h3>
                <p className="mt-3 text-white/90">Daftar sekarang dan raih masa depan cemerlang bersama kami.</p>
              </div>
              <div className="flex lg:justify-end">
                <a href="#" className="inline-flex items-center rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-blue-700 shadow-sm hover:bg-blue-50">Panduan & Pendaftaran</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kontak & Footer */}
      <section id="kontak" className="scroll-mt-24 py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle overline="Kontak" title="Hubungi Kami" subtitle="Kami siap membantu Anda mendapatkan informasi yang dibutuhkan." />
          <div className="mt-10 grid lg:grid-cols-2 gap-8">
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <h4 className="font-semibold text-gray-900">Alamat</h4>
              <p className="mt-2 text-sm text-gray-600">Jl. Pendidikan No. 1, Kertasari, Jawa Barat</p>
              <h4 className="mt-6 font-semibold text-gray-900">Kontak</h4>
              <p className="mt-2 text-sm text-gray-600">Telp: (022) 123-4567 • Email: info@sman1kertasari.sch.id</p>
              <h4 className="mt-6 font-semibold text-gray-900">Jam Layanan</h4>
              <p className="mt-2 text-sm text-gray-600">Senin–Jumat, 07.00–15.00 WIB</p>
            </div>
            <form className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm grid gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="Nama" />
                <input className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="Email" />
              </div>
              <input className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="Subjek" />
              <textarea rows={4} className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="Pesan" />
              <div>
                <button type="button" className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700">Kirim Pesan</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-100 py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">S1</div>
            <p className="text-sm text-gray-600">© {new Date().getFullYear()} SMAN 1 Kertasari. All rights reserved.</p>
          </div>
          <div className="text-sm text-gray-500">Dikelola oleh Humas SMAN 1 Kertasari</div>
        </div>
      </footer>
    </div>
  )
}

export default App
