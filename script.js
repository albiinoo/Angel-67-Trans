/**
 * ==============================================================================
 * ANGEL 67 TRANS × GEMILANG GOLD - OFFICIAL JAVASCRIPT
 * Perusahaan: ANGELS67TRANSINDO
 * Architecture: Pure Vanilla JavaScript (Clean, Modular, Event-Driven)
 * Tanpa Framework / Siap dihubungkan ke MySQL, Backend & Dashboard Admin
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. DATA KONFIGURASI PERUSAHAAN (CONFIG)
       Satu-satunya sumber konfigurasi kontak & identitas perusahaan
       ========================================================================== */
    const CONFIG = {
        companyName: "ANGELS67TRANSINDO",
        brandName: "Angel 67 Trans × Gemilang Gold",
        whatsappNumber: "6287700600067",
        phonePrimary: "087700600067",
        phoneSecondary: "087722195222",
        email: "angeltransindo@gmail.com",
        instagram: "angel_trans67"
    };

    /* ==========================================================================
       2. DATA ARMADA KENDARAAN (ARRAY OF OBJECTS)
       Struktur siap integrasi MySQL / REST API nantinya.
       Mencakup Kategori: Kendaraan Kecil, Elf, Hiace, Medium Bus, Big Bus
       ========================================================================== */
    const vehicles = [
        // --- HIACE ---
        {
            id: 1,
            category: "Hiace",
            name: "Hiace Commuter 15 Seat",
            capacity: "15 Seat",
            variant: "Dalkot",
            price: 1200000,
            priceLabel: "Rp 1.200.000",
            priceUnit: "/ hari",
            status: "available",
            image: "assets/Hiace_Commuter_15Seat.png",
            facilities: [
                "Full AC Double Blower",
                "Kursi Reclining Nyaman",
                "Audio & USB Charger",
                "Bagasi Luas"
            ],
            description: "Armada Hiace Commuter 15 Seat untuk kebutuhan perjalanan dalam kota dengan kabin luas dan suspensi empuk."
        },
        {
            id: 2,
            category: "Hiace",
            name: "Hiace Commuter 15 Seat",
            capacity: "15 Seat",
            variant: "Luar Kota",
            price: 1500000,
            priceLabel: "Rp 1.500.000",
            priceUnit: "/ hari",
            status: "available",
            image: "assets/Hiace_Commuter_15Seat.png",
            facilities: [
                "Full AC Double Blower",
                "Kursi Reclining Nyaman",
                "Audio & USB Charger",
                "Bagasi Luas"
            ],
            description: "Pilihan ideal perjalanan jarak jauh luar kota bersama rombongan atau keluarga dengan performa tangguh."
        },
        {
            id: 3,
            category: "Hiace",
            name: "Hiace Premio 14 Seat",
            capacity: "14 Seat",
            variant: "Dalkot",
            price: 1400000,
            priceLabel: "Rp 1.400.000",
            priceUnit: "/ hari",
            status: "available",
            image: "assets/Hiace_Premio_14Seat.png",
            facilities: [
                "Full AC Double Blower",
                "Desain Kabin Modern Senyap",
                "Kursi Ergonomis",
                "Fast USB Charger Port"
            ],
            description: "Hiace Premio generasi modern dengan moncong depan elegan, kabin senyap, dan kenyamanan prima untuk rute dalam kota."
        },
        {
            id: 4,
            category: "Hiace",
            name: "Hiace Premio 14 Seat",
            capacity: "14 Seat",
            variant: "Luar Kota",
            price: 1500000,
            priceLabel: "Rp 1.500.000",
            priceUnit: "/ hari",
            status: "available",
            image: "assets/Hiace_Premio_14Seat.png",
            facilities: [
                "Full AC Double Blower",
                "Desain Kabin Modern Senyap",
                "Kursi Ergonomis",
                "Fast USB Charger Port"
            ],
            description: "Kenyamanan ekstra Hiace Premio 14 Seat untuk perjalanan luar kota, dinas luar daerah, maupun wisata keluarga."
        },
        {
            id: 5,
            category: "Hiace",
            name: "Hiace Premio Luxury Class 8 Seat",
            capacity: "8 Seat",
            variant: "Dalkot",
            price: 1700000,
            priceLabel: "Rp 1.700.000",
            priceUnit: "/ hari",
            status: "available",
            image: "assets/Hiace_Premio_Luxury_Class.png",
            facilities: [
                "Full AC Individual",
                "Luxury Captain Seat",
                "Smart Android TV",
                "Audio Karaoke System",
                "Ambient Lighting"
            ],
            description: "Varian termewah Hiace Premio Luxury Class 8 Seat dengan captain seat berkelas eksekutif untuk perjalanan VIP dalam kota."
        },
        {
            id: 6,
            category: "Hiace",
            name: "Hiace Premio Luxury Class 8 Seat",
            capacity: "8 Seat",
            variant: "Luar Kota",
            price: 2200000,
            priceLabel: "Rp 2.200.000",
            priceUnit: "/ hari",
            status: "available",
            image: "assets/Hiace_Premio_Luxury_Class.png",
            facilities: [
                "Full AC Individual",
                "Luxury Captain Seat",
                "Smart Android TV",
                "Audio Karaoke System",
                "Ambient Lighting"
            ],
            description: "Kenyamanan VIP eksekutif tingkat tinggi untuk perjalanan luar kota dengan fasilitas hiburan lengkap dan jok captain seat mewah."
        },
        {
            id: 7,
            category: "Hiace",
            name: "Hiace Premio Luxury 10 Seat",
            capacity: "10 Seat",
            variant: "",
            price: null,
            priceLabel: "Hubungi kami untuk harga",
            priceUnit: "",
            status: "available",
            image: "assets/Hiace_Premio_Luxury_Class.png",
            facilities: [
                "Full AC Individual",
                "Luxury Seat 10 Penumpang",
                "Audio & Entertainment",
                "USB Port Charger"
            ],
            description: "Konfigurasi mewah 10 seat untuk kenyamanan rombongan eksekutif. Menyesuaikan durasi dan kebutuhan perjalanan Anda."
        },

        // --- ELF ---
        {
            id: 8,
            category: "Elf",
            name: "Elf 19 Seat",
            capacity: "19 Seat",
            variant: "Dalkot",
            price: 1200000,
            priceLabel: "Rp 1.200.000",
            priceUnit: "/ hari",
            status: "available",
            image: "assets/Elf_19Seat.png",
            facilities: [
                "Full AC Duckting",
                "Kursi Reclining Nyaman",
                "Audio Karaoke & USB",
                "Bagasi Luas"
            ],
            description: "Microbus Isuzu Elf 19 seat kapasitas besar, pilihan ekonomis dan handal untuk rombongan wisata dalam kota."
        },
        {
            id: 9,
            category: "Elf",
            name: "Elf 19 Seat",
            capacity: "19 Seat",
            variant: "Luar Kota",
            price: 1500000,
            priceLabel: "Rp 1.500.000",
            priceUnit: "/ hari",
            status: "available",
            image: "assets/Elf_19Seat.png",
            facilities: [
                "Full AC Duckting",
                "Kursi Reclining Nyaman",
                "Audio Karaoke & USB",
                "Bagasi Luas"
            ],
            description: "Isuzu Elf 19 seat tangguh di segala medan untuk perjalanan luar kota yang efisien, aman, dan nyaman."
        },
        {
            id: 10,
            category: "Elf",
            name: "Elf 19 Seat E4",
            capacity: "19 Seat",
            variant: "Dalkot",
            price: 1400000,
            priceLabel: "Rp 1.400.000",
            priceUnit: "/ hari",
            status: "available",
            image: "assets/Elf_19Seat.png",
            facilities: [
                "Full AC Duckting",
                "Mesin Euro 4 Ramah Lingkungan",
                "Kursi Reclining Nyaman",
                "Audio & USB Port"
            ],
            description: "Isuzu Elf Euro 4 generasi baru dengan mesin bertenaga halus, ramah lingkungan, dan kabin nyaman untuk rute dalam kota."
        },
        {
            id: 11,
            category: "Elf",
            name: "Elf 19 Seat E4",
            capacity: "19 Seat",
            variant: "Luar Kota",
            price: 1600000,
            priceLabel: "Rp 1.600.000",
            priceUnit: "/ hari",
            status: "available",
            image: "assets/Elf_19Seat.png",
            facilities: [
                "Full AC Duckting",
                "Mesin Euro 4 Ramah Lingkungan",
                "Kursi Reclining Nyaman",
                "Audio & USB Port"
            ],
            description: "Elf 19 Seat Euro 4 tangguh untuk rute jarak jauh luar kota dengan kenyamanan prima bagi seluruh rombongan."
        },

        // --- MEDIUM BUS ---
        {
            id: 12,
            category: "Medium Bus",
            name: "Medium Bus 31 Seat",
            capacity: "31 Seat",
            variant: "",
            price: 2500000,
            priceLabel: "Rp 2.500.000",
            priceUnit: "/ hari",
            status: "available",
            image: "assets/Medium_Bus.png",
            facilities: [
                "Full AC Dingin Merata",
                "Kursi Reclining Konfigurasi 2-2",
                "LED TV & Audio Karaoke",
                "Bagasi Samping & Belakang Luas"
            ],
            description: "Medium Bus kapasitas 31 kursi, sangat ideal untuk agenda kantor, study tour sekolah, ziarah, atau family gathering."
        },
        {
            id: 13,
            category: "Medium Bus",
            name: "Medium Bus 35 Seat",
            capacity: "35 Seat",
            variant: "",
            price: 2700000,
            priceLabel: "Rp 2.700.000",
            priceUnit: "/ hari",
            status: "available",
            image: "assets/Medium_Bus.png",
            facilities: [
                "Full AC Dingin Merata",
                "Kursi Reclining 2-2",
                "LED TV & Audio Karaoke",
                "Bagasi Luas & Nyaman"
            ],
            description: "Medium Bus 35 kursi memberikan kapasitas ekstra dengan kenyamanan tempat duduk reclining dan fasilitas hiburan audio karaoke."
        },

        // --- BIG BUS ---
        {
            id: 14,
            category: "Big Bus",
            name: "Big Bus 50/59 Seat Jetbus 3",
            capacity: "50/59 Seat",
            variant: "Jetbus 3",
            price: 3500000,
            priceLabel: "Rp 3.500.000",
            priceUnit: "/ hari",
            status: "available",
            image: "assets/Big_Bus.png",
            facilities: [
                "Full AC Dingin",
                "Kursi Reclining Ergonomis",
                "LED TV & Audio Karaoke",
                "Charger Port & Bagasi Ekstra Luas"
            ],
            description: "Big Bus bodi Jetbus 3 kapasitas 50 hingga 59 kursi untuk rombongan instansi, ziarah besar, study tour, atau tour wisata antar provinsi."
        },
        {
            id: 15,
            category: "Big Bus",
            name: "Big Bus 50/59 Seat Jetbus 5",
            capacity: "50/59 Seat",
            variant: "Jetbus 5",
            price: 4200000,
            priceLabel: "Rp 4.200.000",
            priceUnit: "/ hari",
            status: "available",
            image: "assets/Big_Bus.png",
            facilities: [
                "Full AC Modern",
                "Bodi Mewah Jetbus 5 Terbaru",
                "Reclining Seat Premium",
                "Entertainment Full HD & USB Charger"
            ],
            description: "Big Bus bodi termewah Jetbus 5 dengan desain eksterior futuristik dan kenyamanan interior premium berkelas untuk perjalanan jauh."
        },

        // --- SEWA KENDARAAN KECIL ---
        {
            id: 16,
            category: "Kendaraan Kecil",
            name: "Toyota Avanza",
            capacity: "6-7 Seat",
            variant: "",
            price: null,
            priceLabel: "Hubungi kami untuk harga",
            priceUnit: "",
            status: "available",
            image: "assets/Toyota_Avanza.png",
            facilities: [
                "Full AC",
                "Kursi Nyaman Ergonomis",
                "Audio & MP3 USB",
                "Bagasi Fleksibel"
            ],
            description: "Mobil keluarga yang praktis dan efisien untuk perjalanan dalam maupun luar kota. Menyesuaikan durasi dan kebutuhan perjalanan."
        },
        {
            id: 17,
            category: "Kendaraan Kecil",
            name: "Toyota Innova Reborn",
            capacity: "7 Seat",
            variant: "",
            price: null,
            priceLabel: "Hubungi kami untuk harga",
            priceUnit: "",
            status: "available",
            image: "assets/Toyota_Innova_Reborn.png",
            facilities: [
                "Full AC Double Blower",
                "Kabin Luas & Senyap",
                "Kursi Nyaman Ergonomis",
                "Audio Touchscreen"
            ],
            description: "Pilihan favorit untuk kenyamanan ekstra keluarga dan perjalanan dinas kantor. Menyesuaikan durasi dan kebutuhan perjalanan."
        },
        {
            id: 18,
            category: "Kendaraan Kecil",
            name: "Toyota Innova Zenix",
            capacity: "7 Seat",
            variant: "",
            price: null,
            priceLabel: "Hubungi kami untuk harga",
            priceUnit: "",
            status: "available",
            image: "assets/Toyota_Innova_Zenix.png",
            facilities: [
                "Full AC Digital Modern",
                "Kabin Mewah & Senyap",
                "Captain Seat Nyaman",
                "Modern Entertainment"
            ],
            description: "Generasi terbaru dengan kabin mewah, senyap, efisiensi tinggi, dan teknologi modern. Menyesuaikan durasi dan kebutuhan perjalanan."
        }
    ];

    /* ==========================================================================
       3. DATA TESTIMONIAL PELANGGAN
       ========================================================================== */
    const testimonials = [
        {
            id: 1,
            name: "Bambang Sudiro",
            role: "Penyewa Hiace Premio",
            stars: 5,
            comment: "Pelayanan Angel 67 Trans × Gemilang Gold luar biasa! Mobil Hiace Premio sangat bersih, AC dingin, dan drivernya ramah serta mengutamakan keselamatan. Sangat recommended untuk perjalanan keluarga.",
            initials: "BS"
        },
        {
            id: 2,
            name: "Ibu Ratna Dewi",
            role: "Penyewa Hiace Luxury VIP",
            stars: 5,
            comment: "Kami sewa Hiace Luxury untuk tamu dinas kantor. Tamu sangat puas dengan kenyamanan captain seat dan fasilitas di dalamnya. Komunikasi pemesanan via WhatsApp sangat cepat dan profesional!",
            initials: "RD"
        },
        {
            id: 3,
            name: "Hendrik Prasetyo",
            role: "Penyewa Medium Bus & Elf",
            stars: 5,
            comment: "Armada terawat prima dan tepat waktu saat penjemputan. Harga sangat transparan tanpa ada biaya siluman. Pasti akan selalu berlangganan dengan ANGELS67TRANSINDO.",
            initials: "HP"
        }
    ];

    /* ==========================================================================
       4. HELPER: FORMAT RUPIAH
       ========================================================================== */
    function formatPriceDisplay(price, unit = "/ hari") {
        if (price === null || price === undefined || price === "" || isNaN(price)) {
            return "Hubungi kami untuk harga";
        }
        const formatted = "Rp " + price.toLocaleString('id-ID');
        return unit ? `${formatted} ${unit}` : formatted;
    }

    /* ==========================================================================
       5. HELPER: BUKA WHATSAPP
       Semua tombol WA menggunakan fungsi ini dengan nomor CONFIG.whatsappNumber
       ========================================================================== */
    function openWhatsApp(message) {
        const cleanNumber = CONFIG.whatsappNumber.replace(/\D/g, '');
        const encodedMessage = encodeURIComponent(message);
        const waUrl = `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
        window.open(waUrl, '_blank', 'noopener,noreferrer');
    }

    /* ==========================================================================
       6. STATE MANAJEMEN & DOM SELECTORS
       ========================================================================== */
    let currentFilter = 'all';
    let currentSearchQuery = '';

    // DOM Elements - Fleet
    const fleetGrid = document.getElementById('fleet-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('search-input');
    const noResults = document.getElementById('no-results');

    // DOM Elements - Pricing & Testimonials
    const pricingCardsContainer = document.getElementById('pricing-cards-container');
    const testimonialsContainer = document.getElementById('testimonials-container');

    // DOM Elements - Booking Form
    const bookingForm = document.getElementById('booking-form');
    const inputNama = document.getElementById('nama');
    const inputNomor = document.getElementById('nomor');
    const inputJenisPerjalanan = document.getElementById('jenis_perjalanan');
    const selectKategoriBooking = document.getElementById('kategori_kendaraan');
    const selectKendaraan = document.getElementById('kendaraan');
    const variantGroup = document.getElementById('variant-group');
    const selectVariant = document.getElementById('variant');
    const inputTanggal = document.getElementById('tanggal');
    const inputJam = document.getElementById('jam');
    const inputJumlah = document.getElementById('jumlah');
    const inputLokasi = document.getElementById('lokasi');
    const inputTujuan = document.getElementById('tujuan');
    const inputCatatan = document.getElementById('catatan');
    const selectedUnitBanner = document.getElementById('selected-unit-banner');
    const selectedUnitText = document.getElementById('selected-unit-text');
    const selectedUnitPrice = document.getElementById('selected-unit-price');

    // DOM Elements - Modal
    const vehicleModal = document.getElementById('vehicle-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalImg = document.getElementById('modal-img');
    const modalCategory = document.getElementById('modal-category');
    const modalTitle = document.getElementById('modal-vehicle-title');
    const modalCapacity = document.getElementById('modal-capacity');
    const modalStatus = document.getElementById('modal-status');
    const modalPrice = document.getElementById('modal-price');
    const modalDesc = document.getElementById('modal-desc');
    const modalFacilitiesList = document.getElementById('modal-facilities-list');
    const modalBookingBtn = document.getElementById('modal-booking-btn');

    // DOM Elements - Navigation & Global Buttons
    const navbar = document.getElementById('navbar');
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const btnFloatingWa = document.getElementById('btn-floating-wa');
    const btnTanyaHarga = document.getElementById('btn-tanya-harga');
    const btnChatContact = document.getElementById('btn-chat-contact');

    // Set minimum date input to today
    if (inputTanggal) {
        const today = new Date().toISOString().split('T')[0];
        inputTanggal.min = today;
    }

    /* ==========================================================================
       7. HELPER: STATUS FORMATTER & BADGES
       ========================================================================== */
    function getStatusInfo(status) {
        switch (status) {
            case 'available':
                return { label: 'Tersedia', className: 'status-available', isBookable: true };
            case 'booked':
                return { label: 'Sudah Dibooking', className: 'status-booked', isBookable: false };
            case 'maintenance':
                return { label: 'Dalam Perawatan', className: 'status-maintenance', isBookable: false };
            default:
                return { label: 'Tersedia', className: 'status-available', isBookable: true };
        }
    }

    /* ==========================================================================
       8. RENDER ARMADA KENDARAAN (renderVehicles)
       ========================================================================== */
    function renderVehicles(list = vehicles) {
        if (!fleetGrid) return;
        fleetGrid.innerHTML = '';

        if (list.length === 0) {
            if (noResults) noResults.classList.remove('hidden');
            return;
        } else {
            if (noResults) noResults.classList.add('hidden');
        }

        list.forEach(vehicle => {
            const statusInfo = getStatusInfo(vehicle.status);

            const card = document.createElement('div');
            card.className = 'vehicle-card';
            card.setAttribute('data-id', vehicle.id);

            // Tampilan harga format Rupiah per hari
            const displayPrice = formatPriceDisplay(vehicle.price, vehicle.priceUnit);

            // Chips fasilitas
            const facilitiesHtml = vehicle.facilities.slice(0, 3).map(f =>
                `<span class="facility-chip"><span style="color:var(--color-gold)">•</span> ${escapeHtml(f)}</span>`
            ).join('');

            // Badge varian jika ada
            const variantBadgeHtml = vehicle.variant ?
                `<span class="vehicle-variant-chip">${escapeHtml(vehicle.variant)}</span>` : '';

            // Tombol booking
            const bookingBtnDisabledAttr = statusInfo.isBookable ? '' : 'disabled';
            const bookingBtnText = statusInfo.isBookable ? 'BOOKING VIA WHATSAPP' : 'TIDAK TERSEDIA';
            const bookingBtnClass = statusInfo.isBookable ? 'btn btn-whatsapp btn-sm' : 'btn btn-whatsapp btn-sm disabled';

            // Tampilan Foto atau Placeholder
            let imageHtml = '';
            if (vehicle.image) {
                imageHtml = `<img src="${escapeHtml(vehicle.image)}" alt="${escapeHtml(vehicle.name)}" loading="lazy" class="vehicle-img" onerror="this.onerror=null;this.parentElement.innerHTML='<div class=\\'vehicle-img-placeholder\\'><span class=\\'placeholder-tag\\'>[ FOTO BELUM TERSEDIA ]</span><span class=\\'placeholder-unit\\'>${escapeHtml(vehicle.name)}</span></div>';">`;
            } else {
                imageHtml = `
                    <div class="vehicle-img-placeholder">
                        <div class="placeholder-icon-box">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="2" y="6" width="20" height="12" rx="2.5"></rect>
                                <circle cx="7" cy="18" r="2"></circle>
                                <circle cx="17" cy="18" r="2"></circle>
                                <path d="M5 14h14M7 6v4M17 6v4"></path>
                            </svg>
                        </div>
                        <span class="placeholder-tag">[ FOTO BELUM TERSEDIA ]</span>
                        <span class="placeholder-unit">${escapeHtml(vehicle.name)}</span>
                    </div>
                `;
            }

            card.innerHTML = `
                <div class="vehicle-img-wrapper">
                    ${imageHtml}
                    <span class="vehicle-category-badge">${escapeHtml(vehicle.category)}</span>
                    <span class="status-badge ${statusInfo.className}">${statusInfo.label}</span>
                </div>
                <div class="vehicle-body">
                    <div style="display: flex; align-items: flex-start; justify-content: space-between; gap: 8px; margin-bottom: 6px;">
                        <h3 class="vehicle-name">${escapeHtml(vehicle.name)}</h3>
                    </div>
                    ${variantBadgeHtml}
                    <div class="vehicle-capacity" style="margin-top: 8px;">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                        <span>${escapeHtml(vehicle.capacity)}</span>
                    </div>

                    <div class="vehicle-price-box">
                        <span class="vehicle-price-label">Tarif Sewa:</span>
                        <span class="vehicle-price">${escapeHtml(displayPrice)}</span>
                    </div>

                    <div class="vehicle-facilities">
                        ${facilitiesHtml}
                    </div>

                    <div class="vehicle-actions">
                        <button class="btn btn-secondary btn-sm btn-detail" data-id="${vehicle.id}">
                            DETAIL
                        </button>
                        <button class="${bookingBtnClass} btn-card-booking" data-id="${vehicle.id}" ${bookingBtnDisabledAttr}>
                            ${bookingBtnText}
                        </button>
                    </div>
                </div>
            `;

            fleetGrid.appendChild(card);
        });

        attachVehicleCardEvents();
    }

    /**
     * Event listener tombol Detail dan Booking pada Card Armada
     */
    function attachVehicleCardEvents() {
        const detailButtons = fleetGrid.querySelectorAll('.btn-detail');
        detailButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const vehicleId = parseInt(e.currentTarget.getAttribute('data-id'), 10);
                showVehicleDetail(vehicleId);
            });
        });

        const cardBookingButtons = fleetGrid.querySelectorAll('.btn-card-booking');
        cardBookingButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                if (e.currentTarget.hasAttribute('disabled')) return;
                const vehicleId = parseInt(e.currentTarget.getAttribute('data-id'), 10);
                selectVehicleForBooking(vehicleId);
            });
        });
    }

    /* ==========================================================================
       9. FILTER & SEARCH ARMADA
       Kategori: [ SEMUA ], [ KENDARAAN KECIL ], [ ELF ], [ HIACE ], [ MEDIUM BUS ], [ BIG BUS ]
       Search: nama, kategori, kapasitas, variant
       ========================================================================== */
    function filterVehicles() {
        const filtered = vehicles.filter(vehicle => {
            // Evaluasi Kategori
            let matchesCategory = true;
            if (currentFilter !== 'all') {
                const filterLower = currentFilter.toLowerCase().trim();
                const vehicleCatLower = vehicle.category.toLowerCase().trim();
                matchesCategory = vehicleCatLower === filterLower;
            }

            // Evaluasi Pencarian (Search Armada)
            let matchesSearch = true;
            if (currentSearchQuery.trim() !== '') {
                const q = currentSearchQuery.toLowerCase().trim();
                // Buat teks pencarian gabungan termasuk variasi kapasitas (e.g. 50/59 Seat -> 50 seat, 59 seat)
                let searchable = `${vehicle.name} ${vehicle.category} ${vehicle.capacity} ${vehicle.variant || ''} ${vehicle.description || ''}`;
                if (vehicle.capacity.includes('50/59')) {
                    searchable += ' 50 seat 59 seat 50 59';
                }
                const searchableLower = searchable.toLowerCase();

                if (searchableLower.includes(q)) {
                    matchesSearch = true;
                } else {
                    const tokens = q.split(/\s+/).filter(t => t.length > 0);
                    matchesSearch = tokens.every(token => searchableLower.includes(token));
                }
            }

            return matchesCategory && matchesSearch;
        });

        renderVehicles(filtered);
    }

    // Event listener Filter Buttons
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.getAttribute('data-filter') || 'all';
            filterVehicles();
        });
    });

    // Event listener Search Input
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearchQuery = e.target.value;
            filterVehicles();
        });
    }

    /**
     * Memfilter armada langsung dari kartu kategori atau menu lain
     */
    window.filterByCategory = function (categoryKey) {
        currentFilter = categoryKey;
        filterButtons.forEach(btn => {
            if (btn.getAttribute('data-filter') && btn.getAttribute('data-filter').toLowerCase() === categoryKey.toLowerCase()) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        filterVehicles();

        const fleetSection = document.getElementById('armada');
        if (fleetSection) {
            fleetSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    /* ==========================================================================
       10. DETAIL KENDARAAN (Modal Detail)
       ========================================================================== */
    function showVehicleDetail(vehicleId) {
        const vehicle = vehicles.find(v => v.id === vehicleId);
        if (!vehicle || !vehicleModal) return;

        const statusInfo = getStatusInfo(vehicle.status);
        const displayPrice = formatPriceDisplay(vehicle.price, vehicle.priceUnit);

        if (vehicle.image) {
            modalImg.style.display = 'block';
            modalImg.src = vehicle.image;
            modalImg.alt = vehicle.name;
            const existingPlaceholder = modalImg.parentElement ? modalImg.parentElement.querySelector('.vehicle-img-placeholder') : null;
            if (existingPlaceholder) existingPlaceholder.remove();
        } else {
            modalImg.style.display = 'none';
            modalImg.src = '';
            let modalPlaceholder = modalImg.parentElement ? modalImg.parentElement.querySelector('.vehicle-img-placeholder') : null;
            if (!modalPlaceholder && modalImg.parentElement) {
                modalPlaceholder = document.createElement('div');
                modalPlaceholder.className = 'vehicle-img-placeholder modal-placeholder';
                modalImg.parentElement.appendChild(modalPlaceholder);
            }
            if (modalPlaceholder) {
                modalPlaceholder.innerHTML = `
                    <div class="placeholder-icon-box">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="2" y="6" width="20" height="12" rx="2.5"></rect>
                            <circle cx="7" cy="18" r="2"></circle>
                            <circle cx="17" cy="18" r="2"></circle>
                            <path d="M5 14h14M7 6v4M17 6v4"></path>
                        </svg>
                    </div>
                    <span class="placeholder-tag">[ FOTO BELUM TERSEDIA ]</span>
                    <span class="placeholder-unit" style="font-size: 1.05rem; margin-top: 4px;">${escapeHtml(vehicle.name)}</span>
                `;
            }
        }
        modalCategory.textContent = vehicle.category + (vehicle.variant ? ` • ${vehicle.variant}` : '');
        modalTitle.textContent = vehicle.name;
        modalCapacity.textContent = vehicle.capacity;
        modalPrice.textContent = displayPrice;
        modalDesc.textContent = vehicle.description;

        modalStatus.textContent = statusInfo.label;
        modalStatus.className = `status-badge ${statusInfo.className}`;

        modalFacilitiesList.innerHTML = '';
        vehicle.facilities.forEach(fac => {
            const li = document.createElement('li');
            li.className = 'facility-item';
            li.innerHTML = `<span class="facility-item-check">✓</span> <span>${escapeHtml(fac)}</span>`;
            modalFacilitiesList.appendChild(li);
        });

        modalBookingBtn.onclick = () => {
            closeModal();
            selectVehicleForBooking(vehicle.id);
        };

        if (!statusInfo.isBookable) {
            modalBookingBtn.disabled = true;
            modalBookingBtn.classList.add('disabled');
            modalBookingBtn.textContent = 'UNIT TIDAK TERSEDIA SAAT INI';
        } else {
            modalBookingBtn.disabled = false;
            modalBookingBtn.classList.remove('disabled');
            modalBookingBtn.textContent = 'BOOKING VIA WHATSAPP';
        }

        vehicleModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        if (!vehicleModal) return;
        vehicleModal.classList.add('hidden');
        document.body.style.overflow = '';
        if (modalImg) {
            modalImg.style.display = 'block';
            const existingPlaceholder = modalImg.parentElement ? modalImg.parentElement.querySelector('.vehicle-img-placeholder') : null;
            if (existingPlaceholder) existingPlaceholder.remove();
        }
    }

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeModal);
    }

    if (vehicleModal) {
        vehicleModal.addEventListener('click', (e) => {
            if (e.target === vehicleModal) closeModal();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !vehicleModal.classList.contains('hidden')) {
                closeModal();
            }
        });
    }

    /* ==========================================================================
       10B. DOKUMENTASI ARMADA - GALLERY LIGHTBOX
       ========================================================================== */
    const galleryLightbox = document.getElementById('gallery-lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxCloseBtn = document.getElementById('lightbox-close-btn');
    const lightboxBackdrop = document.getElementById('lightbox-backdrop');
    const galleryItems = document.querySelectorAll('.gallery-item');

    function openGalleryLightbox(imgSrc, captionText) {
        if (!galleryLightbox || !lightboxImg) return;
        lightboxImg.src = imgSrc;
        lightboxImg.alt = captionText || 'Dokumentasi Armada';
        if (lightboxCaption) {
            lightboxCaption.textContent = captionText || 'Dokumentasi Armada';
        }
        galleryLightbox.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    function closeGalleryLightbox() {
        if (!galleryLightbox) return;
        galleryLightbox.classList.add('hidden');
        document.body.style.overflow = '';
        if (lightboxImg) {
            lightboxImg.src = '';
        }
    }

    if (galleryItems.length > 0) {
        galleryItems.forEach(item => {
            const handleItemClick = () => {
                const fullSrc = item.getAttribute('data-full') || (item.querySelector('img') ? item.querySelector('img').src : '');
                const caption = item.getAttribute('data-caption') || (item.querySelector('.gallery-caption-title') ? item.querySelector('.gallery-caption-title').textContent : 'Dokumentasi Armada');
                openGalleryLightbox(fullSrc, caption);
            };

            item.addEventListener('click', handleItemClick);
            item.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleItemClick();
                }
            });
        });
    }

    if (lightboxCloseBtn) {
        lightboxCloseBtn.addEventListener('click', closeGalleryLightbox);
    }

    if (lightboxBackdrop) {
        lightboxBackdrop.addEventListener('click', closeGalleryLightbox);
    }

    if (galleryLightbox) {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !galleryLightbox.classList.contains('hidden')) {
                closeGalleryLightbox();
            }
        });
    }

    /* ==========================================================================
       11. POPULATE DROPDOWN PADA FORM BOOKING
       Mengatur keterkaitan: Kategori -> Kendaraan -> Varian (jika ada)
       ========================================================================== */
    // Dapatkan daftar nama kendaraan unik beserta kategori & varian
    function getUniqueVehicles(categoryFilter = 'all') {
        const map = new Map();
        vehicles.forEach(v => {
            if (categoryFilter !== 'all' && v.category.toLowerCase() !== categoryFilter.toLowerCase()) {
                return;
            }
            if (!map.has(v.name)) {
                map.set(v.name, {
                    name: v.name,
                    category: v.category,
                    capacity: v.capacity,
                    variants: []
                });
            }
            if (v.variant && !map.get(v.name).variants.includes(v.variant)) {
                map.get(v.name).variants.push(v.variant);
            }
        });
        return Array.from(map.values());
    }

    function populateVehicleSelect(categoryFilter = 'all', preserveSelected = '') {
        if (!selectKendaraan) return;
        selectKendaraan.innerHTML = '<option value="">-- Pilih Armada Kendaraan --</option>';

        const uniqueList = getUniqueVehicles(categoryFilter);
        uniqueList.forEach(item => {
            const opt = document.createElement('option');
            opt.value = item.name;
            opt.textContent = `${item.name} (${item.capacity})`;
            opt.setAttribute('data-category', item.category);
            opt.setAttribute('data-capacity', item.capacity);
            if (preserveSelected && item.name === preserveSelected) {
                opt.selected = true;
            }
            selectKendaraan.appendChild(opt);
        });

        updateVariantDropdown();
    }

    function updateVariantDropdown(selectedVariant = '') {
        if (!selectKendaraan || !variantGroup || !selectVariant) return;

        const currentVehicleName = selectKendaraan.value;
        if (!currentVehicleName) {
            variantGroup.classList.add('hidden');
            selectVariant.innerHTML = '<option value="">-- Pilih Paket / Area --</option>';
            return;
        }

        // Cari varian dari kendaraan yang dipilih
        const vehicleItems = vehicles.filter(v => v.name === currentVehicleName);
        const variants = vehicleItems.map(v => v.variant).filter(v => Boolean(v && v.trim() !== ''));

        if (variants.length > 0) {
            variantGroup.classList.remove('hidden');
            selectVariant.innerHTML = '<option value="">-- Pilih Paket / Area --</option>';
            variants.forEach(variantName => {
                const opt = document.createElement('option');
                opt.value = variantName;
                opt.textContent = variantName;
                if (selectedVariant && variantName.toLowerCase() === selectedVariant.toLowerCase()) {
                    opt.selected = true;
                }
                selectVariant.appendChild(opt);
            });
        } else {
            variantGroup.classList.add('hidden');
            selectVariant.innerHTML = '<option value="">-- Pilih Paket / Area --</option>';
        }

        updateSelectedUnitBanner();
    }

    function updateSelectedUnitBanner() {
        if (!selectedUnitBanner || !selectKendaraan) return;
        const vehicleName = selectKendaraan.value;

        if (!vehicleName) {
            selectedUnitBanner.classList.add('hidden');
            return;
        }

        const variantVal = selectVariant ? selectVariant.value : '';
        // Cari unit yang cocok
        const matched = vehicles.find(v => {
            if (v.name !== vehicleName) return false;
            if (variantVal) return v.variant.toLowerCase() === variantVal.toLowerCase();
            return true;
        });

        selectedUnitBanner.classList.remove('hidden');
        if (matched) {
            selectedUnitText.textContent = `${matched.name} ${matched.variant ? '(' + matched.variant + ')' : ''}`;
            selectedUnitPrice.textContent = formatPriceDisplay(matched.price, matched.priceUnit);
        } else {
            selectedUnitText.textContent = vehicleName + (variantVal ? ` (${variantVal})` : '');
            selectedUnitPrice.textContent = "Hubungi kami untuk harga";
        }
    }

    // Event listener kategori booking dropdown
    if (selectKategoriBooking) {
        selectKategoriBooking.addEventListener('change', (e) => {
            const cat = e.target.value;
            populateVehicleSelect(cat);
        });
    }

    // Event listener kendaraan dropdown
    if (selectKendaraan) {
        selectKendaraan.addEventListener('change', () => {
            updateVariantDropdown();
        });
    }

    // Event listener variant dropdown
    if (selectVariant) {
        selectVariant.addEventListener('change', () => {
            updateSelectedUnitBanner();
        });
    }

    /* ==========================================================================
       12. SELECT VEHICLE FOR BOOKING (DARI CARD ARMADA / HARGA)
       Ketika customer menekan BOOKING VIA WHATSAPP pada:
       Hiace Premio 14 Seat Dalkot
       maka form otomatis terisi:
       Kendaraan: Hiace Premio 14 Seat
       Paket: Dalkot
       Harga: Rp 1.400.000 / hari
       Customer hanya mengisi data pribadinya.
       ========================================================================== */
    function selectVehicleForBooking(vehicleId) {
        const vehicle = vehicles.find(v => v.id === vehicleId);
        if (!vehicle) return;

        // Set kategori booking jika ada
        if (selectKategoriBooking) {
            selectKategoriBooking.value = vehicle.category;
        }

        // Populate kendaraan sesuai kategori
        populateVehicleSelect(vehicle.category, vehicle.name);

        // Pilih kendaraan
        if (selectKendaraan) {
            selectKendaraan.value = vehicle.name;
        }

        // Set varian jika ada
        updateVariantDropdown(vehicle.variant);

        // Auto pilih jenis perjalanan jika varian adalah Dalkot / Luar Kota
        if (inputJenisPerjalanan) {
            if (vehicle.variant && vehicle.variant.toLowerCase().includes('dalkot')) {
                inputJenisPerjalanan.value = "Dalam Kota";
            } else if (vehicle.variant && vehicle.variant.toLowerCase().includes('luar kota')) {
                inputJenisPerjalanan.value = "Luar Kota";
            }
        }

        // Update banner info unit terpilih
        updateSelectedUnitBanner();

        // Clear error flags
        clearAllErrors();

        // Scroll mulus ke formulir booking
        const bookingSection = document.getElementById('booking');
        if (bookingSection) {
            bookingSection.scrollIntoView({ behavior: 'smooth' });

            setTimeout(() => {
                if (inputNama) inputNama.focus();
            }, 600);
        }
    }

    /* ==========================================================================
       13. SECTION DAFTAR HARGA SEWA (renderPricingOverview)
       Menampilkan kelompok harga sesuai data resmi:
       - ELF
       - HIACE
       - MEDIUM BUS
       - BIG BUS
       - SEWA KENDARAAN KECIL
       ========================================================================== */
    function renderPricingOverview() {
        if (!pricingCardsContainer) return;
        pricingCardsContainer.innerHTML = '';

        // Tampilkan kartu harga untuk seluruh unit
        vehicles.forEach(vehicle => {
            const card = document.createElement('div');
            card.className = 'pricing-card';

            const displayPrice = formatPriceDisplay(vehicle.price, vehicle.priceUnit);
            const featuresList = vehicle.facilities.slice(0, 3).map(f =>
                `<li><span>✓</span> ${escapeHtml(f)}</li>`
            ).join('');

            const variantTitle = vehicle.variant ? ` - ${vehicle.variant}` : '';

            card.innerHTML = `
                <div class="pricing-card-header">
                    <span class="pricing-card-category">${escapeHtml(vehicle.category)}</span>
                    <h3 class="pricing-card-title">${escapeHtml(vehicle.name)}${escapeHtml(variantTitle)}</h3>
                </div>
                <div class="pricing-card-price">${escapeHtml(displayPrice)}</div>
                <span class="pricing-card-unit">Kapasitas: ${escapeHtml(vehicle.capacity)}</span>
                <ul class="pricing-card-features">
                    ${featuresList}
                </ul>
                <button class="btn btn-primary btn-sm btn-pricing-inquiry" data-id="${vehicle.id}">
                    PILIH UNIT INI
                </button>
            `;

            pricingCardsContainer.appendChild(card);
        });

        // Pasang event listener pada tombol harga
        const inquiryButtons = pricingCardsContainer.querySelectorAll('.btn-pricing-inquiry');
        inquiryButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(e.currentTarget.getAttribute('data-id'), 10);
                selectVehicleForBooking(id);
            });
        });
    }

    /* ==========================================================================
       14. RENDER TESTIMONIALS
       ========================================================================== */
    function renderTestimonials() {
        if (!testimonialsContainer) return;
        testimonialsContainer.innerHTML = '';

        testimonials.forEach(item => {
            const card = document.createElement('div');
            card.className = 'testimonial-card';
            const starsHtml = '★'.repeat(item.stars);

            card.innerHTML = `
                <div>
                    <div class="stars">${starsHtml}</div>
                    <p class="testimonial-quote">"${escapeHtml(item.comment)}"</p>
                </div>
                <div class="testimonial-author">
                    <div class="author-avatar">${escapeHtml(item.initials)}</div>
                    <div class="author-info">
                        <h4>${escapeHtml(item.name)}</h4>
                        <p>${escapeHtml(item.role)}</p>
                    </div>
                </div>
            `;

            testimonialsContainer.appendChild(card);
        });
    }

    /* ==========================================================================
       15. BOOKING DARI LAYANAN TOUR (Requirement 24)
       Format pesan WhatsApp:
       Halo Angel 67 Trans × Gemilang Gold.
       Saya tertarik dengan layanan:
       {Nama Tour}
       ...
       ========================================================================== */
    window.bookTour = function (tourName) {
        const message = `Halo Angel 67 Trans × Gemilang Gold.

Saya tertarik dengan layanan:

${tourName}

Saya ingin mendapatkan informasi mengenai:

Tanggal: 
Jumlah Peserta: 
Lokasi Keberangkatan: 
Catatan: 

Mohon informasi paket dan harga.`;

        openWhatsApp(message);
    };

    // Pasang listener ke semua tombol layanan tour
    const tourButtons = document.querySelectorAll('.btn-tour-booking');
    tourButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const tourName = e.currentTarget.getAttribute('data-tour') || 'Layanan Tour';
            bookTour(tourName);
        });
    });

    /* ==========================================================================
       16. VALIDASI FORMULIR BOOKING
       ========================================================================== */
    function validateBookingForm() {
        let isValid = true;
        clearAllErrors();

        // 1. Validasi Nama Lengkap
        const namaVal = inputNama ? inputNama.value.trim() : '';
        if (!namaVal) {
            setError(inputNama, 'error-nama', 'Nama lengkap wajib diisi.');
            isValid = false;
        } else if (namaVal.length < 3) {
            setError(inputNama, 'error-nama', 'Nama terlalu singkat (minimal 3 karakter).');
            isValid = false;
        }

        // 2. Validasi Nomor WhatsApp
        const nomorVal = inputNomor ? inputNomor.value.trim() : '';
        const phoneRegex = /^(\+?62|08)[0-9]{8,13}$/;
        const cleanPhone = nomorVal.replace(/[-\s]/g, '');

        if (!nomorVal) {
            setError(inputNomor, 'error-nomor', 'Nomor WhatsApp wajib diisi.');
            isValid = false;
        } else if (!phoneRegex.test(cleanPhone)) {
            setError(inputNomor, 'error-nomor', 'Masukkan nomor WhatsApp yang valid (contoh: 087700600067).');
            isValid = false;
        }

        // 3. Validasi Jenis Perjalanan
        const jenisVal = inputJenisPerjalanan ? inputJenisPerjalanan.value : '';
        if (!jenisVal) {
            setError(inputJenisPerjalanan, 'error-jenis_perjalanan', 'Silakan pilih jenis perjalanan.');
            isValid = false;
        }

        // 4. Validasi Pilihan Kendaraan
        const kendaraanVal = selectKendaraan ? selectKendaraan.value : '';
        if (!kendaraanVal) {
            setError(selectKendaraan, 'error-kendaraan', 'Silakan pilih armada kendaraan.');
            isValid = false;
        }

        // 5. Validasi Varian jika variant-group aktif
        if (variantGroup && !variantGroup.classList.contains('hidden')) {
            const variantVal = selectVariant ? selectVariant.value : '';
            if (!variantVal) {
                setError(selectVariant, 'error-variant', 'Silakan pilih paket / varian area perjalanan.');
                isValid = false;
            }
        }

        // 6. Validasi Tanggal Keberangkatan
        const tanggalVal = inputTanggal ? inputTanggal.value : '';
        if (!tanggalVal) {
            setError(inputTanggal, 'error-tanggal', 'Tanggal keberangkatan wajib diisi.');
            isValid = false;
        } else {
            const selectedDate = new Date(tanggalVal);
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            if (selectedDate < today) {
                setError(inputTanggal, 'error-tanggal', 'Tanggal tidak boleh sebelum hari ini.');
                isValid = false;
            }
        }

        // 7. Validasi Jumlah Penumpang
        const jumlahVal = inputJumlah ? parseInt(inputJumlah.value, 10) : 0;
        if (!inputJumlah || !inputJumlah.value) {
            setError(inputJumlah, 'error-jumlah', 'Jumlah penumpang wajib diisi.');
            isValid = false;
        } else if (isNaN(jumlahVal) || jumlahVal <= 0) {
            setError(inputJumlah, 'error-jumlah', 'Jumlah penumpang minimal 1 orang.');
            isValid = false;
        }

        // 8. Validasi Lokasi Jemput
        const lokasiVal = inputLokasi ? inputLokasi.value.trim() : '';
        if (!lokasiVal) {
            setError(inputLokasi, 'error-lokasi', 'Alamat/lokasi jemput wajib diisi.');
            isValid = false;
        }

        // 9. Validasi Tujuan
        const tujuanVal = inputTujuan ? inputTujuan.value.trim() : '';
        if (!tujuanVal) {
            setError(inputTujuan, 'error-tujuan', 'Kota atau lokasi destinasi tujuan wajib diisi.');
            isValid = false;
        }

        return isValid;
    }

    function setError(inputElement, errorElementId, message) {
        if (inputElement) inputElement.classList.add('is-invalid');
        const errSpan = document.getElementById(errorElementId);
        if (errSpan) errSpan.textContent = message;
    }

    function clearAllErrors() {
        const errorSpans = document.querySelectorAll('.error-msg');
        errorSpans.forEach(span => { span.textContent = ''; });

        const invalidInputs = document.querySelectorAll('.form-control.is-invalid');
        invalidInputs.forEach(input => { input.classList.remove('is-invalid'); });
    }

    // Realtime error removal saat input diisi
    const allFormInputs = [inputNama, inputNomor, inputJenisPerjalanan, selectKendaraan, selectVariant, inputTanggal, inputJam, inputJumlah, inputLokasi, inputTujuan];
    allFormInputs.forEach(input => {
        if (!input) return;
        const evt = input.tagName === 'SELECT' ? 'change' : 'input';
        input.addEventListener(evt, () => {
            input.classList.remove('is-invalid');
            const errorSpan = document.getElementById(`error-${input.id}`);
            if (errorSpan) errorSpan.textContent = '';
        });
    });

    /* ==========================================================================
       17. GENERATE PESAN WHATSAPP TEMPLATE (Requirement 22)
       Jika field variant kosong: JANGAN tampilkan "Paket:".
       ========================================================================== */
    function generateWhatsAppMessage(data) {
        let formattedDate = data.tanggal;
        if (data.tanggal) {
            const parts = data.tanggal.split('-');
            if (parts.length === 3) {
                formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
            }
        }

        const jamDisplay = data.jam ? `${data.jam} WIB` : '-';
        const catatanDisplay = data.catatan ? data.catatan : '-';

        // Aturan: Jika field variant kosong, JANGAN tampilkan field variant
        let variantSection = '';
        if (data.variant && data.variant.trim() !== '' && data.variant.trim() !== '-') {
            variantSection = `\n\nPaket/Area:\n${data.variant}`;
        }

        return `Halo Angel 67 Trans × Gemilang Gold.

Saya ingin melakukan pemesanan.

DETAIL PEMESANAN

Nama:
${data.nama}

No. WhatsApp:
${data.nomor}

Jenis Layanan:
${data.layanan}

Kendaraan:
${data.kendaraan}

Kapasitas:
${data.kapasitas}${variantSection}

Tanggal Keberangkatan:
${formattedDate}

Jam:
${jamDisplay}

Jumlah Penumpang:
${data.jumlah}

Lokasi Jemput:
${data.lokasi}

Tujuan:
${data.tujuan}

Catatan:
${catatanDisplay}

Mohon informasi mengenai ketersediaan unit dan total harga.

Terima kasih.`;
    }

    // Event Submit Form Booking
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();

            if (!validateBookingForm()) {
                const firstInvalid = document.querySelector('.form-control.is-invalid');
                if (firstInvalid) firstInvalid.focus();
                return;
            }

            // Dapatkan kapasitas dari data kendaraan
            const selectedOpt = selectKendaraan.options[selectKendaraan.selectedIndex];
            const kapasitasText = selectedOpt ? (selectedOpt.getAttribute('data-capacity') || '-') : '-';
            const variantVal = (variantGroup && !variantGroup.classList.contains('hidden') && selectVariant) ? selectVariant.value.trim() : '';

            const bookingData = {
                nama: inputNama.value.trim(),
                nomor: inputNomor.value.trim(),
                layanan: inputJenisPerjalanan ? inputJenisPerjalanan.value : '-',
                kendaraan: selectKendaraan.value,
                kapasitas: kapasitasText,
                variant: variantVal,
                tanggal: inputTanggal.value,
                jam: inputJam ? inputJam.value : '',
                jumlah: inputJumlah.value.trim() + ' Orang',
                lokasi: inputLokasi.value.trim(),
                tujuan: inputTujuan.value.trim(),
                catatan: inputCatatan ? inputCatatan.value.trim() : ''
            };

            const message = generateWhatsAppMessage(bookingData);
            openWhatsApp(message);
        });
    }

    /* ==========================================================================
       18. QUICK WHATSAPP BUTTONS (FLOATING, TANYA HARGA, CHAT ADMIN)
       Nomor: 6287700600067
       ========================================================================== */
    // Floating WhatsApp Button (Requirement 28)
    if (btnFloatingWa) {
        btnFloatingWa.addEventListener('click', () => {
            const message = `Halo Angel 67 Trans × Gemilang Gold, saya ingin bertanya mengenai layanan sewa kendaraan dan tour.`;
            openWhatsApp(message);
        });
    }

    // Tombol Tanya Harga di Section Harga
    if (btnTanyaHarga) {
        btnTanyaHarga.addEventListener('click', () => {
            const message = `Halo Angel 67 Trans × Gemilang Gold, saya ingin menanyakan informasi tarif dan harga sewa kendaraan travel.`;
            openWhatsApp(message);
        });
    }

    // Tombol Chat via WhatsApp di Section Kontak
    if (btnChatContact) {
        btnChatContact.addEventListener('click', () => {
            const message = `Halo Angel 67 Trans × Gemilang Gold, saya ingin bertanya mengenai layanan sewa kendaraan dan tour.`;
            openWhatsApp(message);
        });
    }

    /* ==========================================================================
       19. NAVBAR INTERAKSI & MOBILE MENU
       ========================================================================== */
    function toggleMobileMenu() {
        if (!hamburgerBtn || !navMenu) return;
        const isOpen = navMenu.classList.toggle('open');
        hamburgerBtn.classList.toggle('active', isOpen);
        hamburgerBtn.setAttribute('aria-expanded', isOpen);
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }

    function closeMobileMenu() {
        if (!navMenu || !navMenu.classList.contains('open')) return;
        navMenu.classList.remove('open');
        if (hamburgerBtn) {
            hamburgerBtn.classList.remove('active');
            hamburgerBtn.setAttribute('aria-expanded', 'false');
        }
        document.body.style.overflow = '';
    }

    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', toggleMobileMenu);
    }

    const allNavClickables = document.querySelectorAll('.nav-link, .nav-cta');
    allNavClickables.forEach(link => {
        link.addEventListener('click', () => {
            closeMobileMenu();
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu && navMenu.classList.contains('open')) {
            closeMobileMenu();
        }
    });

    window.addEventListener('scroll', () => {
        if (!navbar) return;
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        updateActiveNavLink();
    });

    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    /* ==========================================================================
       20. HELPER: ESCAPE HTML KEAMANAN XSS
       ========================================================================== */
    function escapeHtml(string) {
        if (!string) return '';
        const div = document.createElement('div');
        div.textContent = string;
        return div.innerHTML;
    }

    /* ==========================================================================
       21. INITIALIZATION (STARTUP)
       ========================================================================== */
    renderVehicles(vehicles);
    populateVehicleSelect('all');
    renderPricingOverview();
    renderTestimonials();

});
