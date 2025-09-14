 // Contoh data pohon dengan kategori
        const trees = [
            {
                id: 'jati',
                nama: 'Pohon Jati',
                namaIlmiah: 'Tectona grandis',
                kategori: 'Kayu',
                gambarPohon: 'Gambar/istockphoto-859328754-170667a.jpg',
                gambarDaun: 'Gambar/jati.jpg',
                gambarAkar: 'Gambar/xistockphoto-1444417528-612x612.jpg',
                deskripsi: {
                    bentukDaun: 'Daun tunggal besar, berbentuk bulat telur terbalik (obovatus)',
                    ujungDaun: 'Meruncing (acuminatus)',
                    pangkalDaun: 'Membulat (rotundatus)',
                    tepiHelaian: 'Rata (integer)',
                    tulangDaun: 'Menyirip (pinnate)',
                    dagingDaun: 'Tipis tetapi kaku',
                    permukaanDaun: 'Atas kasar berbulu halus, bawah berbulu rapat',
                    ciriCiriTumbuhan: 'Pohon berukuran besar, dapat tumbuh hingga 40m. Batang lurus dan silindris. Kayu sangat kuat dan tahan lama.'
                }
            },
            {
                id: 'mahoni',
                nama: 'Pohon Mahoni',
                namaIlmiah: 'Swietenia mahagoni',
                kategori: 'Kayu',
                gambarPohon: 'Gambar/istockphoto-1325706694-612x612 mahoni.jpg',
                gambarDaun: 'Gambar/daun mahoni.jpeg',
                gambarAkar: 'Gambar/akar mahoni -1216657515-612x612.jpg',
                deskripsi: {
                    bentukDaun: 'Daun majemuk menyirip genap',
                    ujungDaun: 'Runcing (acutus)',
                    pangkalDaun: 'Tumpul (obtusus)',
                    tepiHelaian: 'Rata (integer)',
                    tulangDaun: 'Menyirip (pinnate)',
                    dagingDaun: 'Kaku',
                    permukaanDaun: 'Halus dan mengkilap',
                    ciriCiriTumbuhan: 'Pohon berukuran sedang hingga besar, tinggi hingga 25m. Kulit batang berwarna abu-abu kecoklatan. Kayunya berwarna merah kecoklatan dan banyak digunakan untuk furnitur.'
                }
            },
            {
                id: 'mangrove',
                nama: 'Pohon Mangrove (Bakau)',
                namaIlmiah: 'Rhizophora spp.',
                kategori: 'Pesisir',
                gambarPohon: 'Gambar/pohon bakau.jpg',
                gambarDaun: 'Gambar/Ceriops_zippeliana.jpg',
                gambarAkar: 'Gambar/pngtree-mangrove-roots-and-flowing-water-in-thai-swamp-forest-photo-image_45110010.jpg',
                deskripsi: {
                    bentukDaun: 'Daun tunggal berbentuk elips hingga jorong',
                    ujungDaun: 'Meruncing (acuminatus)',
                    pangkalDaun: 'Meruncing (acuminatus)',
                    tepiHelaian: 'Rata (integer)',
                    tulangDaun: 'Menyirip (pinnate)',
                    dagingDaun: 'Tebal dan berdaging (sukulen)',
                    permukaanDaun: 'Halus dan mengkilap di bagian atas, berpori-pori di bagian bawah',
                    ciriCiriTumbuhan: 'Pohon kecil hingga sedang, ciri khasnya adalah akar tunjang (prop root) yang menopang pohon di atas lumpur. Tumbuh di daerah pesisir, tahan terhadap air asin.'
                }
            },
            {
                id: 'beringin',
                nama: 'Pohon Beringin',
                namaIlmiah: 'Ficus benjamina',
                kategori: 'Hiasan',
                gambarPohon: 'Gambar/pohon beringin.jpg',
                gambarDaun: 'Gambar/daun beringin.jpeg',
                gambarAkar: 'Gambar/akar beringin.jpg',
                deskripsi: {
                    bentukDaun: 'Oval/elips',
                    ujungDaun: 'Meruncing',
                    pangkalDaun: 'Tumpul',
                    tepiHelaian: 'Rata',
                    tulangDaun: 'Menyirip',
                    dagingDaun: 'Tipis',
                    permukaanDaun: 'Licin dan mengkilap pada bagian atas, berwarna hijau tua',
                    ciriCiriTumbuhan: 'Pohon besar dengan akar gantung yang khas.'
                }
            },
            {
                id: 'mangga',
                nama: 'Pohon Mangga',
                namaIlmiah: 'Mangifera indica',
                kategori: 'Buah',
                gambarPohon: 'Gambar/Pohon-Mangga.png',
                gambarDaun: 'Gambar/daun mangga.jpg',
                gambarAkar: 'Gambar/akar mangga.jpg',
                deskripsi: {
                    bentukDaun: 'Lanset',
                    ujungDaun: 'Runcing',
                    pangkalDaun: 'Runcing',
                    tepiHelaian: 'Rata',
                    tulangDaun: 'Menyirip',
                    dagingDaun: 'Tipis',
                    permukaanDaun: 'Licin',
                    ciriCiriTumbuhan: 'Pohon buah tropis, terkenal dengan buahnya yang manis.'
                }
            },
            
            {
                id: 'akasia',
                nama: 'Pohon Akasia',
                namaIlmiah: 'Acacia mangium',
                kategori: 'Kayu',
                gambarPohon: 'Gambar/akasia mangium.jpg',
                gambarDaun: 'Gambar/daun akasia.jpg',
                gambarAkar: 'Gambar/akasia_akar.jpg',
                deskripsi: {
                bentukDaun: 'Daun tunggal lebar, berbentuk lonjong (oblong)',
                    ujungDaun: 'Meruncing (acuminatus)',
                    pangkalDaun: 'Membulat (rotundatus)',
                    tepiHelaian: 'Rata (integer)',
                    tulangDaun: 'Melengkung (arcuate)',
                    dagingDaun: 'Tipis namun kaku',
                    permukaanDaun: 'Licin pada kedua permukaan, berwarna hijau tua',
                    ciriCiriTumbuhan: 'Pohon berukuran sedang hingga besar, tumbuh cepat, sering digunakan untuk reboisasi dan bahan baku pulp.'
                }
            },
            {
                id: 'kenanga',
                nama: 'Pohon Kenanga',
                namaIlmiah: 'Cananga odorata',
                kategori: 'Hiasan',
                gambarPohon: 'Gambar/pohon kenanga.jpg',
                gambarDaun: 'Gambar/daun kenanga.jpeg',
                gambarAkar: 'https://placehold.co/400x400/8d8b67/fff?text=Akar+Tunggang',
                deskripsi: {
                    bentukDaun: 'Lanset',
                    ujungDaun: 'Meruncing (acuminatus)',
                    pangkalDaun: 'Membulat (rotundatus)',
                    tepiHelaian: 'Rata (integer)',
                    tulangDaun: 'Menyirip (pinnate)',
                    dagingDaun: 'Tipis dan lentur',
                    permukaanDaun: 'Licin pada bagian atas, berwarna hijau tua',
                    ciriCiriTumbuhan: 'Pohon yang terkenal dengan bunganya yang harum.Bunganya berwarna kuning kehijauan dan sering digunakan dalam upacara adat atau sebagai bahan baku parfum.'
                }
            },
            {
                id: 'durian',
                nama: 'Pohon Durian',
                namaIlmiah: 'Durio zibethinus',
                kategori: 'Buah',
                gambarPohon: 'Gambar/pohon durian.jpg',
                gambarDaun: 'Gambar/daun durian.jpg',
                gambarAkar: 'Gambar/akar durian.jpg',
                deskripsi: {
                    bentukDaun: 'Lanset',
                    ujungDaun: 'Meruncing (acuminatus)',
                    pangkalDaun: 'Membulat (rotundatus)',
                    tepiHelaian: 'Rata (integer)',
                    tulangDaun: 'Menyirip (pinnate)',
                    dagingDaun: 'Tebal dan kaku',
                    permukaanDaun: 'Hijau mengkilap di atas, keperakan atau coklat kemerahan di bawah karena sisik halus',
                    ciriCiriTumbuhan: 'Pohon buah tropis dengan buah berduri yang terkenal. Pohon berukuran besar dengan buah berduri yang khas. Buahnya terkenal dengan aroma kuat dan rasa manis. Pohonnya tumbuh subur di iklim tropis.'
                }
            },
            {
                id: 'meranti',
                nama: 'Pohon Meranti',
                namaIlmiah: 'Shorea spp.',
                kategori: 'Hutan',
                gambarPohon: 'Gambar/pohon meranti.jpg',
                gambarDaun: 'Gambar/daun meranti.jpg',
                gambarAkar: 'Gambar/akar meranti.jpg',
                deskripsi: {
                    bentukDaun: 'Memanjang',
                    ujungDaun: 'Meruncing (acuminatus)',
                    pangkalDaun: 'Membulat atau berbentuk hati',
                    tepiHelaian: 'Rata (integer)',
                    tulangDaun: 'Menyirip (pinnate)',
                    dagingDaun: 'Tipis namun kaku',
                    permukaanDaun: 'Licin dan mengkilap pada bagian atas',
                    ciriCiriTumbuhan: 'Pohon kayu tropis yang penting secara komersial.ohon berukuran sangat besar, dapat tumbuh hingga 70m. Batang lurus dan silindris.'
                }
            },
            {
                id: 'keruing',
                nama: 'Pohon Keruing',
                namaIlmiah: 'Dipterocarpus sp.',
                kategori: 'Hutan',
                gambarPohon: 'Gambar/daun keruing.jpeg',
                gambarDaun: 'Gambar/daun keruing.jpeg',
                gambarAkar: 'Gambar/akar keruing.jpg',
                deskripsi: {
                    bentukDaun: 'Oval',
                    ujungDaun: 'Meruncing (acuminatus)',
                    pangkalDaun: 'Membulat (rotundatus)',
                    tepiHelaian: 'Rata (integer)',
                    tulangDaun: 'Menyirip (pinnate)',
                    dagingDaun: 'Tipis dan lentur',
                    permukaanDaun: 'Licin pada bagian atas, berwarna hijau tua',
                    ciriCiriTumbuhan: 'Pohon hutan hujan yang menghasilkan resin.'
                }
            },
            {
                id: 'jambu_air',
                nama: 'Pohon Jambu Air',
                namaIlmiah: 'Syzygium aquem',
                kategori: 'Buah',
                gambarPohon: 'Gambar/pohon jambu air.jpeg',
                gambarDaun: 'Gambar/daun jambu air.jpg',
                gambarAkar: 'https://placehold.co/400x400/699e69/fff?text=Akar+Tunggang',
                deskripsi: {
                    bentukDaun: 'Oval',
                    ujungDaun: 'Tidak diketahui',
                    pangkalDaun: 'Tidak diketahui',
                    tepiHelaian: 'Tidak diketahui',
                    tulangDaun: 'Tidak diketahui',
                    dagingDaun: 'Tidak diketahui',
                    permukaanDaun: 'Tidak diketahui',
                    ciriCiriTumbuhan: 'Pohon buah tropis dengan buah berbentuk lonceng.'
                }
            },
            {
                id: 'cendana',
                nama: 'Pohon Cendana',
                namaIlmiah: 'Santalum album',
                kategori: 'Kayu',
                gambarPohon: 'Gambar/pohon cendana.jpg',
                gambarDaun: 'Gambar/Daun-Cendana.jpg',
                gambarAkar: 'https://placehold.co/400x400/988062/fff?text=Akar+Tunggang',
                deskripsi: {
                    bentukDaun: 'Oval',
                    ujungDaun: 'Meruncing tumpul',
                    pangkalDaun: 'Membulat',
                    tepiHelaian: 'Rata (integer)',
                    tulangDaun: 'Menyirip (pinnate)',
                    dagingDaun: 'Tipis dan kaku',
                    permukaanDaun: 'Licin dan mengkilap',
                    ciriCiriTumbuhan: 'Pohon parasit setengah yang terkenal dengan kayunya yang wangi.'
                }
            },
            {
                id: 'kayu_manis',
                nama: 'Pohon Kayu Manis',
                namaIlmiah: 'Cinnamomum verum',
                kategori: 'Bumbu',
                gambarPohon: 'Gambar/Pohon-kayu-manis.jpg',
                gambarDaun: 'Gambar/daun kayu manis.jpgs',
                gambarAkar: 'Gambar/akar kayumanis.jpg',
                deskripsi: {
                    bentukDaun: 'Oval',
                    ujungDaun: 'Meruncing (acuminatus)',
                    pangkalDaun: 'Membulat',
                    tepiHelaian: 'Rata (integer)',
                    tulangDaun: 'Menjari (palmate) dengan 3-5 tulang daun utama yang terlihat jelas',
                    dagingDaun: 'Tipis dan lentur',
                    permukaanDaun: 'Hijau mengkilap di bagian atas, hijau muda di bagian bawah',
                    ciriCiriTumbuhan: 'Pohon kecil yang kulit batangnya digunakan sebagai rempah.'
                }
            },
            {
                id: 'kersen',
                nama: 'Pohon Kersen',
                namaIlmiah: 'Muntingia calabura',
                kategori: 'Buah',
                gambarPohon: 'Gambar/pohon kersen.jpg',
                gambarDaun: 'Gambar/daun kersen.jpg',
                gambarAkar: 'Gambar/akar kersen.jpg',
                deskripsi: {
                    bentukDaun: 'Oval',
                    ujungDaun: 'Meruncing',
                    pangkalDaun: 'Membulat',
                    tepiHelaian: 'Bergerigi',
                    tulangDaun: 'Menyirip (pinnate)',
                    dagingDaun: 'Tipis dan lentur',
                    permukaanDaun: 'Berbulu halus di bagian bawah',
                    ciriCiriTumbuhan: 'Pohon kecil dengan buah merah kecil yang manis.'
                }
            },
            {
                id: 'nangka',
                nama: 'Pohon Nangka',
                namaIlmiah: 'Artocarpus heterophyllus',
                kategori: 'Buah',
                gambarPohon: 'Gambar/pohon nangka.jpg',
                gambarDaun: 'Gambar/daun nangka.jpg',
                gambarAkar: 'Gambar/akar nangka.png',
                deskripsi: {
                    bentukDaun: 'Oblong',
                    ujungDaun: 'Tumpul atau membulat',
                    pangkalDaun: 'Membulat',
                    tepiHelaian: 'Rata (integer)',
                    tulangDaun: 'Menyirip (pinnate)',
                    dagingDaun: 'Tebal dan kaku',
                    permukaanDaun: 'Hijau tua mengkilap di atas, hijau muda dan berbulu di bawah',
                    ciriCiriTumbuhan: 'Pohon buah tropis dengan buah besar yang beraroma kuat.'
                }
            },
            {
                id: 'pinang',
                nama: 'Pohon Pinang',
                namaIlmiah: 'Areca catechu',
                kategori: 'Palma',
                gambarPohon: 'Gambar/pohon pinang.jpg',
                gambarDaun: 'Gambar/daun pinang.jpg',
                gambarAkar: 'Gambar/akar pinang.jpg',
                deskripsi: {
                    bentukDaun: 'Majemuk menyirip',
                    ujungDaun: 'Meruncing',
                    pangkalDaun: 'Melebar',
                    tepiHelaian: 'Rata (integer)',
                    tulangDaun: 'Sejajar (parallel)',
                    dagingDaun: 'Tebal dan kaku',
                    permukaanDaun: 'Hijau tua dan mengkilap',
                    ciriCiriTumbuhan: 'Pohon palma dengan batang lurus, terkenal dengan bijinya.'
                }
            },
            {
                id: 'kelengkeng',
                nama: 'Pohon Kelengkeng',
                namaIlmiah: 'Dimocarpus longan/Nephelium lappaceum',
                kategori: 'Buah',
                gambarPohon: 'Gambar/pohon kelengkeng.jpg',
                gambarDaun: 'Gambar/daun kelengkeng.jpg',
                gambarAkar: 'Gambar/akar kelengkeng.jpg',
                deskripsi: {
                    bentukDaun: 'Lanset',
                    ujungDaun: 'Meruncing (acuminatus)',
                    pangkalDaun: 'Membulat',
                    tepiHelaian: 'Rata (integer)',
                    tulangDaun: 'Menyirip (pinnate)',
                    dagingDaun: 'Tebal dan kaku',
                    permukaanDaun: 'Hijau mengkilap di bagian atas, hijau muda di bawah',
                    ciriCiriTumbuhan: 'Pohon buah tropis dengan buah kecil, bundar, dan manis.'
                }
            },
            {
                id: 'leci',
                nama: 'Pohon Leci',
                namaIlmiah: 'Litchi chinensis',
                kategori: 'Buah',
                gambarPohon: 'Gambar/pohon leci.jpg',
                gambarDaun: 'Gambar/daun leci.jpg',
                gambarAkar: 'Gambar/akar leci.jpg',
                deskripsi: {
                    bentukDaun: 'Majemuk menyirip',
                    ujungDaun: 'Meruncing (acuminatus)',
                    pangkalDaun: 'Membulat',
                    tepiHelaian: 'Rata (integer)',
                    tulangDaun: 'Menyirip (pinnate)',
                    dagingDaun: 'Tebal dan kaku',
                    permukaanDaun: 'Hijau tua mengkilap di bagian atas, hijau muda di bawah',
                    ciriCiriTumbuhan: 'Pohon buah tropis dengan buah berdaging putih yang manis.'
                }
            },

            {
                id: 'ulin',
                nama: 'Pohon Ulin',
                namaIlmiah: 'Eusideroxylon zwageri',
                kategori: 'Kayu',
                gambarPohon: 'Gambar/Pohon-Ulin-di-TNK.jpg',
                gambarDaun: 'Gambar/ulin_daun.jpg',
                gambarAkar: 'Gambar/ulin_akar.jpg',
                deskripsi: {
                    bentukDaun: 'Daun tunggal, berbentuk oval atau elips',
                    ujungDaun: 'Meruncing tumpul',
                    pangkalDaun: 'Membulat',
                    tepiHelaian: 'Rata (integer)',
                    tulangDaun: 'Menyirip (pinnate)',
                    dagingDaun: 'Tebal dan kaku',
                    permukaanDaun: 'Licin dan mengkilap pada bagian atas',
                    ciriCiriTumbuhan: 'Pohon berukuran sangat besar dan berkayu keras. Dikenal sebagai "kayu besi" karena kekerasan dan ketahanannya terhadap cuaca. Pertumbuhannya sangat lambat, dan banyak ditemukan di hutan hujan tropis Kalimantan.'
                }
            },

            {
                id: 'damar',
                nama: 'Pohon Damar',
                namaIlmiah: 'Agathis alba / Agathis dammara / Agathis loranthifoli',
                kategori: 'Kayu',
                gambarPohon: 'Gambar/damar.jpg',
                gambarDaun: 'Gambar/daun damar.jpeg',
                gambarAkar: 'Gambar/damar_akar.jpg',
                deskripsi: {
                    bentukDaun: 'Daun tunggal, berbentuk lonjong atau elips',
                    ujungDaun: 'Meruncing tumpul',
                    pangkalDaun: 'Membulat',
                    tepiHelaian: 'Rata (integer)',
                    tulangDaun: 'Sejajar (parallel)',
                    dagingDaun: 'Tebal dan kaku',
                    permukaanDaun: 'Hijau mengkilap di bagian atas, hijau muda di bawah',
                    ciriCiriTumbuhan: 'Pohon berukuran besar, menghasilkan resin yang dikenal sebagai getah damar, digunakan untuk bahan pernis dan cat. Batang lurus dan silindris. Sering ditemukan di hutan hujan tropis.'
                }
        },
                {
                    id: "salam",
                    nama: "Pohon Salam",
                    namaIlmiah: "Syzygium polyanthum",
                    kategori: "Myrtaceae",
                    gambarPohon: "Gambar/pohon salam.png",
                    gambarDaun: "Gambar/daun salam.jpeg",
                    gambarAkar: "Gambar/akar salam.jpg",
                    deskripsi: {
                        bentukDaun: "Lonjong sampai elips atau bundar telur sungsang",
                        ujungDaun: "Meruncing atau runcing (acuminatus)",
                        pangkalDaun: "Runcing",
                        tepiHelaian: "Rata",
                        tulangDaun: "Menyirip (pinnate)",
                        dagingDaun: "Khas, jika diremas berbau harum",
                        permukaanDaun: "Licin, berwarna hijau tua di atas dan hijau muda di bawah",
                        ciriCiriTumbuhan: "Pohon berakar tunggang dengan batang bulat dan kulit memecah atau bersisik. Daunnya digunakan sebagai rempah pengharum masakan."
                }
        },

        {
                id: "merawan",
                nama: "Pohon Merawan",
                namaIlmiah: "Hopea odorata",
                kategori: "Dipterocarpaceae",
                gambarPohon: "Gambar/pohon merawan.jpg",
                gambarDaun: "Gambar/daun merawan.jpg",
                gambarAkar: "Gambar/akar merawan.jpg",
                deskripsi: {
                    bentukDaun: "Lonjong atau elips",
                    ujungDaun: "Meruncing",
                    pangkalDaun: "Membulat hingga meruncing",
                    tepiHelaian: "Rata",
                    tulangDaun: "Menyirip (pinnate)",
                    dagingDaun: "Tipis, agak kaku",
                    permukaanDaun: "Licin, hijau mengkilap di atas, pucat di bawah",
                    ciriCiriTumbuhan: "Merawan merupakan pohon besar hutan tropis dengan tinggi bisa mencapai 45 m. Kayunya keras, berkualitas tinggi untuk konstruksi dan perahu. Daun muda berwarna kemerahan."
                }
            },
            {
                id: "weru",
                nama: "Pohon Weru",
                namaIlmiah: "Albizia procera",
                kategori: "Fabaceae (Leguminosae)",
                gambarPohon: "Gambar/pohon weru.jpg",
                gambarDaun: "Gambar/daun pohon weru.jpg",
                gambarAkar: "Gambar/akar weru.jpg",
                deskripsi: {
                    bentukDaun: "Menyirip ganda (bipinnate), kecil-kecil",
                    ujungDaun: "Membulat atau sedikit meruncing",
                    pangkalDaun: "Membulat",
                    tepiHelaian: "Rata",
                    tulangDaun: "Menyirip ganda",
                    dagingDaun: "Tipis dan rapuh",
                    permukaanDaun: "Hijau muda, agak kusam",
                    ciriCiriTumbuhan: "Weru adalah pohon berukuran sedang hingga besar, tinggi mencapai 30 m. Kulit batang abu-abu pucat dan mudah mengelupas. Daunnya majemuk ganda, digunakan sebagai pakan ternak, sedangkan kayunya dipakai untuk bahan bangunan ringan."
                }
        },
        {
            id: "sagu",
            nama: "Pohon Sagu",
            namaIlmiah: "Metroxylon sagu",
            kategori: "Arecaceae",
            gambarPohon: "Gambar/pohon sagu.jpg",
            gambarDaun: "Gambar/daun sagu.jpg",
            gambarAkar: "Gambar/akar sagu.jpg",
            deskripsi: {
                bentukDaun: "Menyirip panjang",
                ujungDaun: "Meruncing",
                pangkalDaun: "Menyempit",
                tepiHelaian: "Rata",
                tulangDaun: "Sejajar",
                dagingDaun: "Kaku",
                permukaanDaun: "Hijau tua mengkilap",
                ciriCiriTumbuhan: "Sagu adalah palma besar penghasil pati (sagu) dari batangnya. Tinggi mencapai 25 m dengan pelepah berduri. Daunnya majemuk menyirip. Menjadi sumber pangan pokok tradisional di Papua dan Maluku."
            }
        },
        {
            id: "karet",
            nama: "Pohon Karet",
            namaIlmiah: "Hevea brasiliensis",
            kategori: "Euphorbiaceae",
            gambarPohon: "Gambar/tanaman-karet.jpg",
            gambarDaun: "Gambar/daun karet.jpg",
            gambarAkar: "Gambar/akar karet.jpg",
            deskripsi: {
                bentukDaun: "Majemuk menjari 3 helai",
                ujungDaun: "Meruncing",
                pangkalDaun: "Membulat",
                tepiHelaian: "Rata",
                tulangDaun: "Menyirip",
                dagingDaun: "Tipis kenyal",
                permukaanDaun: "Hijau mengkilap",
                ciriCiriTumbuhan: "Karet adalah pohon tropis penghasil lateks yang digunakan untuk membuat karet alam. Tingginya mencapai 25 m, batang lurus, kulit batang bergetah putih. Daun gugur musiman. Banyak dibudidayakan di Asia Tenggara."
            }
        },
        {
            id: "bidara",
            nama: "Pohon Bidara",
            namaIlmiah: "Ziziphus mauritiana",
            kategori: "Rhamnaceae",
            gambarPohon: "Gambar/pohon bidara.jpg",
            gambarDaun: "Gambar/daun bidara.jpg",
            gambarAkar: "Gambar/akar bidara.jpg",
            deskripsi: {
                bentukDaun: "Bulat telur",
                ujungDaun: "Membulat",
                pangkalDaun: "Membulat",
                tepiHelaian: "Bergerigi halus",
                tulangDaun: "Melengkung",
                dagingDaun: "Agak tebal",
                permukaanDaun: "Hijau mengkilap",
                ciriCiriTumbuhan: "Bidara adalah pohon kecil tahan kering, buahnya manis-asam dan sering dimakan segar. Daunnya dipakai dalam pengobatan tradisional dan ritual keagamaan. Tingginya 5–15 m."
            }
        },
        {
            id: "sonokeling",
            nama: "Sonokeling",
            namaIlmiah: "Dalbergia latifolia",
            kategori: "Fabaceae",
            gambarPohon: "Gambar/pohon sonokeling.jpg",
            gambarDaun: "Gambar/daun sonokeling.jpg",
            gambarAkar: "Gambar/akar sonokeling.jpg",
            deskripsi: {
                bentukDaun: "Majemuk menyirip genap",
                ujungDaun: "Membulat",
                pangkalDaun: "Membulat",
                tepiHelaian: "Rata",
                tulangDaun: "Menyirip",
                dagingDaun: "Tipis",
                permukaanDaun: "Hijau kusam",
                ciriCiriTumbuhan: "Sonokeling adalah pohon penghasil kayu indah berkualitas tinggi, berwarna cokelat kehitaman. Tinggi mencapai 20 m. Daun majemuk kecil-kecil. Kayunya digunakan untuk mebel dan ukiran."
            }
        },
        {
            id: "ketapang",
            nama: "Ketapang",
            namaIlmiah: "Terminalia catappa",
            kategori: "Combretaceae",
            gambarPohon: "Gambar/Ppohon ketapang.jpg",
            gambarDaun: "Gambar/daun ketapang.jpg",
            gambarAkar: "Gambar/akar ketapang.jpg",
            deskripsi: {
                bentukDaun: "Bulat telur lebar",
                ujungDaun: "Membulat",
                pangkalDaun: "Membulat",
                tepiHelaian: "Rata",
                tulangDaun: "Menjari",
                dagingDaun: "Tebal",
                permukaanDaun: "Hijau tua, berubah merah saat tua",
                ciriCiriTumbuhan: "Ketapang adalah pohon peneduh dengan tajuk melebar bertingkat. Tingginya bisa 25 m. Daunnya besar, berubah warna merah-oranye sebelum gugur. Bijinya menghasilkan minyak, daunnya dipakai dalam akvarium."
            }
        },
        {
            id: "melinjo",
            nama: "Melinjo",
            namaIlmiah: "Gnetum gnemon",
            kategori: "Gnetaceae",
            gambarPohon: "Gambar/pohon melinjo.jpg",
            gambarDaun: "Gambar/daun melinjo.jpeg",
            gambarAkar: "Gambar/akar melinjo.jpg",
            deskripsi: {
                bentukDaun: "Lonjong",
                ujungDaun: "Runcing",
                pangkalDaun: "Membulat",
                tepiHelaian: "Rata",
                tulangDaun: "Menyirip",
                dagingDaun: "Agak tebal",
                permukaanDaun: "Hijau mengkilap",
                ciriCiriTumbuhan: "Melinjo adalah pohon kecil 10–20 m, menghasilkan biji untuk emping dan daun muda (so). Batangnya lurus, kulit batang abu-abu. Biji mengandung antioksidan tinggi."
            }
        },
        {
            id: "kemuning",
            nama: "Kemuning",
            namaIlmiah: "Murraya paniculata",
            kategori: "Rutaceae",
            gambarPohon: "Gambar/pohon kemuning.jpg",
            gambarDaun: "Gambar/daun kemuning.jpg",
            gambarAkar: "Gambar/akar kemuning.jpg",
            deskripsi: {
                bentukDaun: "Majemuk menyirip ganjil",
                ujungDaun: "Runcing",
                pangkalDaun: "Membulat",
                tepiHelaian: "Rata",
                tulangDaun: "Menyirip",
                dagingDaun: "Tipis",
                permukaanDaun: "Hijau mengkilap",
                ciriCiriTumbuhan: "Kemuning adalah perdu atau pohon kecil setinggi 3–7 m dengan bunga putih harum. Daun majemuk kecil-kecil. Sering dijadikan pagar hidup dan tanaman obat tradisional."
            }
        },
        

            {
                "id": "quercus_sundaica",
                "nama": "Pasang",
                "namaIlmiah": "Quercus sundaica",
                "kategori": "Fagaceae",
                "gambarPohon": "Gambar/pohon pasang.jpg",
                "gambarDaun": "Gambar/daun pasang.jpeg",
                "gambarAkar": "Gambar/akar_quercus_sundaica.jpg",
                "deskripsi": {
                    "bentukDaun": "Sederhana, tepi bergerigi",
                    "ujungDaun": "Runcing",
                    "pangkalDaun": "Membulat",
                    "tepiHelaian": "Bergigi",
                    "tulangDaun": "Menyirip",
                    "dagingDaun": "Sedang",
                    "permukaanDaun": "Hijau gelap",
                    "ciriCiriTumbuhan": "Pohon besar endemik Jawa, berdaun keras dan kayu kuat. Sering digunakan untuk kayu bangunan."
                }
            },
            {
                "id": "sirsak",
                "nama": "Sirsak",
                "namaIlmiah": "Annona muricata",
                "kategori": "Annonaceae",
                "gambarPohon": "Gambar/Pohon sirsak.jpg",
                "gambarDaun": "Gambar/daun sirsak.jpeg",
                "gambarAkar": "Gambar/akar_sirsak.jpg",
                "deskripsi": {
                    "bentukDaun": "Sederhana, lanset",
                    "ujungDaun": "Runcing",
                    "pangkalDaun": "Membulat",
                    "tepiHelaian": "Rata",
                    "tulangDaun": "Menyirip",
                    "dagingDaun": "Tipis",
                    "permukaanDaun": "Hijau mengkilap",
                    "ciriCiriTumbuhan": "Perdu atau pohon kecil setinggi 5–8 m dengan buah besar berduri. Daun dan buah digunakan sebagai obat tradisional."
                }
            },
            {
                "id": "squamosa",
                "nama": "Srikaya",
                "namaIlmiah": "Annona squamosa",
                "kategori": "Annonaceae",
                "gambarPohon": "Gambar/pohon sirkaya.jpg",
                "gambarDaun": "Gambar/daun sirkaya.jpg",
                "gambarAkar": "Gambar/akar_srikaya.jpg",
                "deskripsi": {
                    "bentukDaun": "Sederhana, lonjong",
                    "ujungDaun": "Runcing",
                    "pangkalDaun": "Membulat",
                    "tepiHelaian": "Rata",
                    "tulangDaun": "Menyirip",
                    "dagingDaun": "Tipis",
                    "permukaanDaun": "Hijau mengkilap",
                    "ciriCiriTumbuhan": "Perdu atau pohon kecil hingga 6 m, menghasilkan buah manis berdaging putih. Umum sebagai tanaman pekarangan."
                }
            },
            {
                "id": "alpukat",
                "nama": "Alpukat",
                "namaIlmiah": "Persea americana",
                "kategori": "Lauraceae",
                "gambarPohon": "Gambar/pohon alpukat.jpg",
                "gambarDaun": "Gambar/daun alpukat.jpg",
                "gambarAkar": "Gambar/akar_alpukat.jpg",
                "deskripsi": {
                    "bentukDaun": "Sederhana, lonjong",
                    "ujungDaun": "Meruncing",
                    "pangkalDaun": "Membulat",
                    "tepiHelaian": "Rata",
                    "tulangDaun": "Menyirip",
                    "dagingDaun": "Tipis",
                    "permukaanDaun": "Hijau mengkilap",
                    "ciriCiriTumbuhan": "Pohon buah tropis, tinggi 6–20 m, menghasilkan buah kaya lemak sehat."
                }
            },
            {
                "id": "kempas",
                "nama": "Kempas",
                "namaIlmiah": "Koompassia malaccensis",
                "kategori": "Fabaceae",
                "gambarPohon": "Gambar/pohon kempas.jpg",
                "gambarDaun": "Gambar/daun kempas.jpg",
                "gambarAkar": "Gambar/akar_kempas.jpg",
                "deskripsi": {
                    "bentukDaun": "Majemuk menyirip",
                    "ujungDaun": "Runcing",
                    "pangkalDaun": "Membulat",
                    "tepiHelaian": "Rata",
                    "tulangDaun": "Menyirip",
                    "dagingDaun": "Tipis",
                    "permukaanDaun": "Hijau mengkilap",
                    "ciriCiriTumbuhan": "Pohon tinggi hingga 60 m, kayu keras digunakan untuk konstruksi dan furniture."
                }
            },
            {
                "id": "kapuk",
                "nama": "Kapuk",
                "namaIlmiah": "Ceiba pentandra",
                "kategori": "Malvaceae",
                "gambarPohon": "Gambar/pohon kapuk.jpg",
                "gambarDaun": "Gambar/daun kapuk.jpg",
                "gambarAkar": "Gambar/akar_kapuk.jpg",
                "deskripsi": {
                    "bentukDaun": "Majemuk menyirip",
                    "ujungDaun": "Runcing",
                    "pangkalDaun": "Membulat",
                    "tepiHelaian": "Rata",
                    "tulangDaun": "Menyirip",
                    "dagingDaun": "Tipis",
                    "permukaanDaun": "Hijau",
                    "ciriCiriTumbuhan": "Pohon besar, tinggi hingga 70 m, menghasilkan serat ringan dan tahan air dari buahnya."
                }
            },
            {
                "id": "pedada",
                "nama": "Kepuh",
                "namaIlmiah": "Sterculia foetida",
                "kategori": "Malvaceae",
                "gambarPohon": "Gambar/pohon-kepuh-sterculia-foetida.jpg",
                "gambarDaun": "Gambar/daun kepuh.jpg",
                "gambarAkar": "Gambar/akar_pedada.jpg",
                "deskripsi": {
                    "bentukDaun": "Palemately lobed",
                    "ujungDaun": "Tumpul",
                    "pangkalDaun": "Membulat",
                    "tepiHelaian": "Bergelombang",
                    "tulangDaun": "Menyirip",
                    "dagingDaun": "Sedang",
                    "permukaanDaun": "Hijau",
                    "ciriCiriTumbuhan": "Pohon tropis besar, daun berbau khas jika diremas, digunakan untuk kayu dan obat tradisional."
                }
            },
            {
                "id": "schima",
                "nama": "Puspa",
                "namaIlmiah": "Schima wallichii",
                "kategori": "Theaceae",
                "gambarPohon": "Gambar/schima.png",
                "gambarDaun": "Gambar/daun puspa.jpg",
                "gambarAkar": "Gambar/akar_schima.jpg",
                "deskripsi": {
                    "bentukDaun": "Sederhana, lonjong",
                    "ujungDaun": "Meruncing",
                    "pangkalDaun": "Membulat",
                    "tepiHelaian": "Rata",
                    "tulangDaun": "Menyirip",
                    "dagingDaun": "Kaku",
                    "permukaanDaun": "Hijau gelap",
                    "ciriCiriTumbuhan": "Pohon besar berkayu keras, tinggi hingga 40 m, sering digunakan untuk konstruksi dan kayu bakar."
                }
            },
            {
                "id": "cengkeh",
                "nama": "Cengkeh",
                "namaIlmiah": "Syzygium aromaticum",
                "kategori": "Myrtaceae",
                "gambarPohon": "Gambar/pohon cengkeh.jpg",
                "gambarDaun": "Gambar/daun cengkeh.jpg",
                "gambarAkar": "Gambar/akar_cengkeh.jpg",
                "deskripsi": {
                    "bentukDaun": "Sederhana, lonjong",
                    "ujungDaun": "Meruncing",
                    "pangkalDaun": "Membulat",
                    "tepiHelaian": "Rata",
                    "tulangDaun": "Menyirip",
                    "dagingDaun": "Tipis",
                    "permukaanDaun": "Hijau mengkilap",
                    "ciriCiriTumbuhan": "Pohon kecil hingga sedang, tinggi 10–15 m, bunga dan kuncupnya digunakan sebagai rempah."
                }
            }


    ];
        
        // Define categories based on the data
        const categories = [...new Set(trees.map(tree => tree.kategori))];

        function showPage(pageId) {
            document.querySelectorAll('.page').forEach(page => {
                // Add a hidden class after a delay to allow the animation to play
                if (page.id !== pageId) {
                    page.classList.add('hidden');
                }
            });
            document.getElementById(pageId).classList.remove('hidden');
            window.scrollTo({ top: 0, behavior: 'smooth' });

            if (pageId === 'koleksi') {
                populateCategoryFilter();
                filterTrees();
            }
        }
        
        function populateCategoryFilter() {
            const filter = document.getElementById('category-filter');
            filter.innerHTML = '<option value="">Semua Kategori</option>'; // Reset
            categories.sort().forEach(cat => {
                const option = document.createElement('option');
                option.value = cat;
                option.textContent = cat;
                filter.appendChild(option);
            });
        }
        
        // New function to handle both search and filter
        function filterTrees() {
            const searchTerm = document.getElementById('search-input').value.toLowerCase();
            const selectedCategory = document.getElementById('category-filter').value;
            renderTreeList(searchTerm, selectedCategory);
        }

        function renderTreeList(searchTerm = '', selectedCategory = '') {
            const treeListContainer = document.getElementById('tree-list');
            treeListContainer.innerHTML = '';
            
            // Filter the trees based on category and search term
            const filteredTrees = trees.filter(tree => {
                const lowerCaseName = tree.nama.toLowerCase();
                const lowerCaseScientificName = tree.namaIlmiah.toLowerCase();
                const matchesCategory = selectedCategory === '' || tree.kategori === selectedCategory;
                const matchesSearch = lowerCaseName.includes(searchTerm) || lowerCaseScientificName.includes(searchTerm);
                return matchesCategory && matchesSearch;
            });

            if (filteredTrees.length === 0) {
                treeListContainer.innerHTML = `<p class="text-center text-lg text-gray-500 col-span-full mt-8">Tidak ada pohon yang cocok dengan pencarian Anda.</p>`;
                return;
            }

            filteredTrees.forEach(tree => {
                const card = `
                    <div class="card bg-white-transparent rounded-lg shadow-md hover:shadow-xl cursor-pointer overflow-hidden" onclick="showTreeDetail('${tree.id}')">
                        <img src="${tree.gambarPohon}" alt="Gambar Pohon ${tree.nama}" class="w-full h-48 object-cover">
                        <div class="p-4 text-center">
                            <h3 class="text-xl font-semibold text-custom-dark-blue">${tree.nama}</h3>
                            <p class="text-sm text-gray-500 italic">${tree.namaIlmiah}</p>
                        </div>
                    </div>
                `;
                treeListContainer.innerHTML += card;
            });
        }

        function showTreeDetail(treeId) {
            const tree = trees.find(t => t.id === treeId);
            if (!tree) {
                console.error("Tree not found");
                return;
            }
            
            const detailContent = document.getElementById('detail-content');
            
            // Populate content
            detailContent.innerHTML = `
                <div class="flex flex-col lg:flex-row gap-8">
                    <div class="lg:w-1/2 space-y-4">
                        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img src="${tree.gambarPohon}" alt="Pohon ${tree.nama}" class="w-full h-auto object-cover">
                        </div>
                        <div class="grid grid-cols-2 gap-4">
                             <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                                <img src="${tree.gambarDaun}" alt="Daun ${tree.nama}" class="w-full h-auto object-cover">
                            </div>
                             <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                                <img src="${tree.gambarAkar}" alt="Akar ${tree.nama}" class="w-full h-auto object-cover">
                            </div>
                        </div>
                    </div>
                    <div class="lg:w-1/2 bg-white rounded-lg p-6 shadow-md">
                        <h2 class="text-4xl font-bold text-custom-dark-blue mb-2">${tree.nama}</h2>
                        <p class="text-xl text-gray-600 italic mb-4">${tree.namaIlmiah}</p>
                        <ul class="text-gray-700 space-y-2">
                            <li class="p-2 bg-gray-100 rounded-md shadow-sm"><strong>Bentuk Daun:</strong> ${tree.deskripsi.bentukDaun}</li>
                            <li class="p-2 bg-gray-100 rounded-md shadow-sm"><strong>Ujung Daun:</strong> ${tree.deskripsi.ujungDaun}</li>
                            <li class="p-2 bg-gray-100 rounded-md shadow-sm"><strong>Pangkal Daun:</strong> ${tree.deskripsi.pangkalDaun}</li>
                            <li class="p-2 bg-gray-100 rounded-md shadow-sm"><strong>Tepi Helaian:</strong> ${tree.deskripsi.tepiHelaian}</li>
                            <li class="p-2 bg-gray-100 rounded-md shadow-sm"><strong>Tulang Daun:</strong> ${tree.deskripsi.tulangDaun}</li>
                            <li class="p-2 bg-gray-100 rounded-md shadow-sm"><strong>Daging Daun:</strong> ${tree.deskripsi.dagingDaun}</li>
                            <li class="p-2 bg-gray-100 rounded-md shadow-sm"><strong>Permukaan Daun:</strong> ${tree.deskripsi.permukaanDaun}</li>
                        </ul>
                        <div class="mt-4 p-4 bg-white rounded-lg shadow-inner">
                            <h3 class="text-2xl font-semibold text-custom-dark-blue mb-2">Ciri-Ciri Tumbuhan</h3>
                            <p class="text-gray-700 leading-relaxed">${tree.deskripsi.ciriCiriTumbuhan}</p>
                        </div>
                    </div>
                </div>
            `;
            showPage('detail-page');
        }

        // Initialize the app
        window.onload = () => {
            showPage('beranda');

        };

        const menuBtn = document.querySelector("#menu-btn");
        const nav = document.querySelector("nav ul");

        menuBtn.addEventListener("click", () => {
        nav.classList.toggle("hidden");
        });
