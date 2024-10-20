import Products from "../../../pages/Products";

let productsArr = [
   {
    id:1,
    productName: 'ANUA Heartleaf Pore Control Cleansing Oil 200ml',
    productBrend: 'ANUA',
    productCategory: 'forface',
    productSubCategory: 'cleanisers',
    productStatus: '',
    productReviews: 1,
    productPrice: '190 000 сумов',
    productImages:['https://kokosplus.uz/uploads/products/467853e63a873236dcae175b07b321e4.jpeg','https://kokosplus.uz/uploads/products/86631722863198.png'],
    productDesc: `Гидрофильное масло для глубокого очищения пор помогает в борьбе с чёрными точками, эффективно растворяет жировые пробки и сокращает выраженность сальных нитей. Абсорбирует излишки кожного себума. удаляет все виды загрязнений, стойкий макияж, тональные и солнцезащитные средства.

                  Продукт помогает нормализовать работу сальных желёз и восстановить оптимальный гидролипидный барьер.

                  Основные действующие компоненты:
                  Экстракт хауттюйнии сердцевидной ускоряет заживление ранок и микроповреждений, обладает противовоспалительными свойствами, снижает чувствительность к внешним раздражителям.

                  Масло виноградной косточки — мощнейший природный антиоксидант, блокатор свободных радикалов. Клинически доказано, что использование этого компонента помогает стабилизировать выработку коллагена и эластина, отвечающих за молодость и упругость кожи.

                  Масло жожоба увлажняет и питает кожу. Большая концентрация витамина Е в масле обеспечивает антиоксидантные свойства.

                  Масло макадамии смягчает и интенсивно питает, мгновенно впитывается, легко распределяясь по коже. Способствует восстановлению кожных покровов, является антиоксидантом. Незаменим для сухой, обезвоженной и зрелой кожи.

                  Подходит для нормальной, комбинированной и склонной к жирности кожи.
                  Объем: 200 мл`,
    productCompound: `Ethylhexyl Palmitate, Sorbeth-30 Tetraoleate, Sorbitan Sesquioleate, Caprylic/Capric Triglyceride, Butyl Avocadate, Fragrance, Helianthus Annuus (Sunflower) Seed Oil, Macadamia Ternifolia Seed Oil, Olea Europaea (Olive) Fruit Oil, Simmondsia Chinensis (Jojoba) Seed Oil, Vitis Vinifera (Grape) Seed Oil, Caprylyl Glycol, Ethylhexylglycerin, Curcuma Longa (Turmeric) Root Extract, Melia Azadirachta Flower Extract, Tocopherol, Melia Azadirachta Leaf Extract, Houttuynia Cordata Extract, Corallina Officinalis Extract, Melia Azadirachta Bark Extract, Moringa Oleifera Seed Oil, Ocimum Sanctum Leaf Extract`
  },
  {
    id:2,
    productName: "A'PIEU PURE BLOCK AQUA SUN GEL SPF50+/PA+++",
    productBrend: "A'PIEU",
    productCategory: 'forface',
    productSubCategory: 'spf',
    productStatus: '',
    productReviews: 3,
    productPrice: '90 000 сумов',
    productImages:['https://kokosplus.uz/uploads/products/ef4447ce2fe3405ae97edf63cb1f6077.jpeg',],
    productDesc: `Увлажняющий солнцезащитный гель поможет сохранить кожу от преждевременного увядания и на отдыхе, и в городских условиях. Средство имеет легкую текстуру и подходит всем типам кожи. Санскрин впитывается в течение нескольких секунд, не оставляя на коже белых следов и ощущения пленки.
Фактор защиты: SPF50+/PA+++
Объем 50 мл`,
    productCompound: `Water, Ethylhexyl Methoxycinnamate, Acrylates Copolymer, Alcohol Denat, Butyloctyl Salicylate, Octocrylene, Ethylhexyl Salicylate, Butylene Glycol, Butyl Methoxydibenzoylmethane, Methyl Methacrylate Crosspolymer, Dipropylene Glycol, Bis-Ethylhexyloxyphenol Methoxyphenyl Triazine, Dimethicone, Cyclopentasiloxane, Sodium Acrylate/​Sodium Acryloyldimethyl Taurate Copolymer, Caprylyl Glycol, Cetyl PEG/​PPG-10/​1 Dimethicone, Adansonia Digitata Seed Extract, Isohexadecane, Ethylhexylglycerin, Polysorbate 60, Acrylates/​C10-30 Alkyl Acrylate Crosspolymer, Polysorbate 80, Fragrance, Potassium Hydroxide, 1,2-Hexanediol, BHT, Disodium EDTA, Glycerin, Citrullus Lanatus (Watermelon) Fruit Extract, Hydrolyzed Hyaluronic Acid, Limonene, Linalool`
  },
  {
    id:3,
    productName: 'Dr.Jart+ BB Beauty Balm Silver Label+ SPF35 PA++',
    productBrend: 'Dr.Jart+',
    productCategory: 'makeup',
    productSubCategory: 'facemakeup',
    productStatus: '',
    productReviews: 2,
    productPrice: '240 000 сумов',
    productImages:['https://kokosplus.uz/uploads/products/6211e3888ea964b613bfc66fbfd650e3.jpeg','https://kokosplus.uz/uploads/products/6211e3888ea964b613bfc66fbfd650e3.jpeg'],
    productDesc: `Омолаживающий BB Крем с SPF35/PA++ защищает кожу от воздействия солнечного излучения и выравнивает тон кожи. Натуральный защитный комплекс в составе формулы, состоящий из 5 растительных экстрактов заботится о Вашей коже, делает ее гладкой, маскирует несовершенства и выравнивает тон. Средство отлично скрывает покраснения и тусклость, придает лицу здоровый цвет и естественный матовый финиш.

BB-крем мягко ложится на кожу, не перегружая и не создавая ощущения маски.

Подходит для всех типов кожи.
Объём 40 мл`,
    productCompound: `Water/Aqua, Cyclopentasiloxane, Titanium Dioxide, Butylene Glycol, Octinoxate, Cetyl PEG/PPG-10/1 Dimethicone, Cycloheptasiloxane, Glycerin, Silica, 4-Methylbenzylidene Camphor, Diphenylsiloxy Phenyl Trimethicone, Sodium Chloride, Arbutin, Dimethicone, Ozokerite, Hexyl Laurate, Disteardimonium Hectorite, Dimethicone/Vinyl Dimethicone Crosspolymer, Beeswax Acid, Sorbitan Olivate, Sorbitan Isostearate, Butylene Glycol Dicaprylate/Dicaprate, Polyglyceryl-4 Isostearate, Tocopheryl Acetate, Propylene Carbonate, Quaternium-18 Bentonite, Calcium Stearate, Panthenol, Mica, Triethoxycaprylylsilane, Sodium Hyaluronate, Nelumbo Nucifera (Sacred Lotus) Flower Extract, Spilanthes Acmella Flower Extract, Rhodiola Rosea Root Extract, Psidium Guajava Leaf Extract, Aloe Barbadensis (Aloe Vera) Leaf Extract, Abronia Villosa Leaf Extract, Cinchona Succirubra (Quinine) Bark Extract, Caprylhydroxamic Acid, Disodium EDTA, Caprylyl Glycol, Ethylhexylglycerin, 1,2-Hexanediol, CI 77491, CI 77492, CI 77499.`
  },
  {
    id:4,
    productName: 'COSRX Clear Fit Master Patch+',
    productBrend: 'COSRX',
    productCategory: 'forface',
    productSubCategory: 'masks',
    productStatus: '',
    productReviews: 6,
    productPrice: '25 000 сумов',
    productImages:['https://kokosplus.uz/uploads/products/99dbae127625cfc46a7bdea4656862fe.jpeg'],
    productDesc: `Наклейки от прыщей помогут в кратчайшие сроки, в зависимости от стадии развития акне, устранить воспаления или поспособствуют быстрому созреванию гнойничка. Патчи оказывают антимикробное и противовоспалительное действие, успокаивают, уменьшают зуд и покраснения. Очень тонкие и невесомые наклейки практически не заметны на коже, не вызывают дискомфорт во время носки и позволяют скрыть их под тональной основой.

Комплектация: 18 наклеек`,
    productCompound: `Polyurethane Film, Cellulose Gum, Styrene Isoprene Styrene Block Copolymer, Polyisobutylene, Petroleum Resin, Liquid Paraffin, Tetrakis Methane.`
  },
  {
    id:5,
    productName: 'COSRX AHA BHA Vitamin C Daily Toner [150ml]',
    productBrend: 'COSRX',
    productCategory: 'forface',
    productSubCategory: 'toners',
    productStatus: '',
    productReviews: 2,
    productPrice: '180 000 сумов',
    productImages:['https://kokosplus.uz/uploads/products/cc7ff3982c5803cc76e58d9db90488c8.jpeg'],
    productDesc: `ОТонер-эксфолиант с витамином С и AHA/BHA кислотами мягко отшелушивает ороговевшие клетки и готовит кожу к последующему нанесению уходовых средств. Регулирует выработку кожного себума, предупреждает появление воспалений и акне, выравнивает тон и рельеф кожи, борется с тусклостью и придает коже здоровый, отдохнувший вид.
Объем 150мл`,
    productCompound: `Actinidia Chinensis (Kiwi) Fruit Extract, Hylocereus Undatus Fruit Extract, Salix Alba (Willow) Bark Water, Pyrus Malus (Apple) Fruit Water, Butylene Glycol, Niacinamide, 1,2-Hexanediol, Ethyl Hexanediol, Sodium Lactate, Water, Glycolic Acid, Allantoin, Panthenol, Adenosine, Betaine Salicylate, Ascorbyl Glucoside`
  },
  {
    id:6,
    productName: 'Holika Holika Aloe 99% Soothing Gel [55ml]',
    productBrend: 'Holika Holika',
    productCategory: 'forbody',
    productSubCategory: 'showergel',
    productStatus: '',
    productReviews: 3,
    productPrice: '40 000 сумов',
    productImages:['https://kokosplus.uz/uploads/products/cf1d013f4ed920cebc4dcdd2f48faffe.jpeg'],
    productDesc: `Универсальный гель с 99% содержанием экстракта сока алоэ вера интенсивно увлажняет кожу, помогает сохранить влагу, снимает воспаления и раздражения, убирает шелушения, обладает бактерицидным свойством.

Стимулирует регенерацию клеток, смягчает и тонизирует кожу, улучшает ее кровообращение. Подходит для любого типа кожи. Гель успокаивает кожу, снимает воспаления, повышает упругость и эластичность кожи. Возможно применение средства в качестве основы под макияж, как увлажняющую маску или лосьона после бритья или как средства после ожогов кожи. Средство не содержит парабенов, минеральных масел, искусственных красителей и отдушек.

Объем: 55 мл`,
    productCompound: `Aloe Barbadensis Leaf Juice, Nelumbium Speciosum Flower Extract, Centella Asiatica Extract, Bambusa Vulgaris Extract, Cucumis Sativus (Cucumber) Fruit Extract, Zea Mays (Corn) Leaf Extract, Brassica Oleracea Capitata (Cabbage) Leaf Extract, Citrullus Lanatus (Watermelon) Fruit Extract, PEG-60 Hydrogenated Castor Oil, Sodium Polyacrylate, Carbomer, Triethanolamine, Fragrance, Phenoxyethanol`
  },
  {
    id:7,
    productName: 'Etude House Dear Darling Water Tint [03 Orange]',
    productBrend: 'Etude House',
    productCategory: 'makeup',
    productSubCategory: 'lipmakeup',
    productStatus: '',
    productReviews: 4,
    productPrice: '36 000 сумов',
    productImages:['https://kokosplus.uz/uploads/products/52cae5ae69d2ecdbe45e70ffc37fcaa2.jpeg'],
    productDesc: `Тинт на водной основе с нежным фруктовым ароматом подарит губам не бывало стойкий цвет. Натуральные пигменты впитываются в кожу губ и остаются на ней долгое время. Тинт быстро высыхает, не оставляя липкости или какого-либо еще чувства дискомфорта. Его легкая текстура вообще не ощущается на губах. Чтобы получить более насыщенные оттенки, можно наносить несколько слоев.
Оттенок №3 Апельсин`,
    productCompound: ``
  },
  {
    id:8,
    productName: 'ISNTREE ALOE SOOTHING TONER',
    productBrend: 'ISNTREE',
    productCategory: 'forface',
    productSubCategory: 'toners',
    productStatus: '',
    productReviews: 3,
    productPrice: '127 500 сумов',
    productImages:['https://kokosplus.uz/uploads/products/b7138e59395b7327e8ad9ea23925e8cf.jpeg'],
    productDesc: `Успокаивающий тонер для лица с экстрактом алоэ главный помощник в устранении сухости и стянутости после очищения. Эффективно нормализует водный баланс, успокаивает, устраняет покраснение, понижает температуру кожи, оставляет бархатистый финиш. 80% экстракт алоэ вера с курортного острова Чеджу - базовый компонент тонера. Он является источником полисахаридов, аминокислот, витаминов, протеинов и минералов, которые необходимы для здоровья кожи. Также в составе множество растительных экстрактов для увлажнения, питания, регенерации и противовоспалительного действия. Легкая, освежающая текстура тоника прекрасно впитывается кожей, подготавливая ее к последующим ступеням ухода.
Объём 200 мл`,
    productCompound: `Aloe Barbadensis Leaf Extract, Water, Methylpropanediol, Propanediol, Sodium Hyaluronate, Centella Asiatica Extract, Polygonum Cuspidatum Root Extract, Scutellaria Baicalensis Root Extract, Camellia Sinensis Leaf Extract, Glycyrrhiza Glabra (Licorice) Root Extract, Chamomilla Recutita (Matricaria) Flower Extract, Rosmarinus Officinalis (Rosemary) Leaf Extract, Polyglutamic Acid, Allantoin, Dipotassium Glycyrrhizate, Trehalose, Betaine, Panthenol, Tromethamine, Acrylates/​C10-30 Alkyl Acrylate Crosspolymer, Disodium EDTA, Hydroxyacetophenone`
  },
  {
    id:9,
    productName: 'CP-1 DAILY MOISTURE NATURAL SHAMPOO [500ml]',
    productBrend: 'CP-1',
    productCategory: 'forhair',
    productSubCategory: 'shampo',
    productStatus: '',
    productReviews: 6,
    productPrice: '140 000 сумов',
    productImages:['https://kokosplus.uz/uploads/products/dd0d9e64901aef7a06906c7b21af6b88.jpeg'],
    productDesc: `Натуральный увлажняющий шампунь для волос на 97,6% состоит из органических компонентов: бережно очищает кожу головы без нарушения гидролипидного баланса, эффективно увлажняет и питает волосы, придавая здоровое сияние и гладкость, успокаивает раздраженную, зудящую кожу головы, помогает вылечить перхоть, вызванную обезвоженностью эпидермиса. Не содержит сульфаты, силиконы и искусственные красители. Отличается мягкой формулой и не вызывает слез.

Подходит для всех типов волос, для проблемной и чувствительной кожи головы.
Объем: 500 мл`,
    productCompound: `Purified water, cocamidopropyl betaine, sodium methyl cocoyl taurate, palm kernel/cocoglucoside, sodium chloride, glycerin, centella asiatica extract, centella asiatica leaf water, aloe vera extract, heartleaf extract, ppg-3 caprylyl ether, caprylyl glycol, citric acid, hydroly zed what protein, hydrolyzed soybean extract, sophora root extract, chili pepper extract, Korean angelica root extract, fleece flower ro ot extract, angelica root extract, gromwell root extract, boxthorn extract, mulberry tree root extract, longleaf pine leaf extract, raspber ry fruit extract, green tea extract, disodium EDTA, chlorophyllin-cooper complex, peppermint oil, spearmint leaf oil, 1,2-hexandiol, fragrance`
  },
  {
    id:10,
    productName: 'CP-1 HEAD SPA COOL MINT SHAMPOO',
    productBrend: 'CP-1',
    productCategory: 'forhair',
    productSubCategory: 'shampo',
    productStatus: '',
    productReviews: 3,
    productPrice: '140 000 сумов',
    productImages:['https://kokosplus.uz/uploads/products/1b8ee84407cefcff68152b64e5439509.jpeg'],
    productDesc: `Охлаждающий шампунь с мятой эффективно очищает волосы от загрязнений и регулирует выработку кожного себума, успокаивает кожу головы, устраняет раздражения, зуд и шелушения. Стимулирует рост волос. Средство приятно охлаждает кожу головы и оставляет ощущение свежести. Шампунь так же эффективен в комплексном лечении перхоти. Средство делает волосы мягкими, сильными гладкими и шелковистыми.
Объем: 500 мл`,
    productCompound: `Water, Sodium C14-16 Olefin Sulfonate, Lauramidopropyl Betaine, Glycerin, Sodium Methyl Cocoyl Taurate, Sodium Chloride, Menthol, Panthenol, Polyquaternium-10, Mentha Rotundifolia Leaf Extract, Mentha Viridis Extract, Mentha Piperita Leaf Extract, Butylene Glycol, Glycine, Serine, Glutamic Acid, Aspartic Acid, Leucine, Alanine, Lysine, Arginine, Tyrosine, Phenylalanine, Threonine, Proline, Valine, Isoleucine, Histidine, Methionine, Cysteine, Ethylhexylglycerin, Asparagine, Glutamine, Tryptophan, Sodium Benzoate, Citric Acid, Camphor, 1,2-Hexanediol, Lavandula Angustifolia Oil, Citrus Limon Peel Oil, Rosmarinus Officinalis Leaf Oil, Ocimum Basilicum Oil, Pelargonium Graveolens Flower Oil, Cupressus Sempervirens Essential Oil, Citrus Aurantium Dulcis Peel Oil, Eucalyptus Globulus Leaf Oil, Citrus Paradisi Peel Oil, Brilliant Blue FCF, Disodium EDTA, Linalool, Limonenе`
  },
  {
    id:11,
    productName: 'THE SAEM PERFUMED BODY MOISTURIZER [FREESIA]',
    productBrend: 'THE SAEM',
    productCategory: 'forbody',
    productSubCategory: 'cream&losions',
    productStatus: '',
    productReviews: 5,
    productPrice: '90 000 сумов',
    productImages:['https://kokosplus.uz/uploads/products/04ab6c101a357769cc1adb3fcfb04d79.jpeg'],
    productDesc: `Парфюмированный лосьон для тела интенсивно увлажняет, смягчает и восстанавливает защитный барьер кожи. Имеет приятную легкую текстуру и аромат. Средство хорошо распределяется и быстро впитывается. Поможет избавить кожу от раздражения и шелушения. Поддерживает упругость и эластичность кожи, защищает ее от появления дряблости.
Основные действующие компоненты: Масло жожоба, Масло оливы, Пантенол, Керамиды.

Обладает приятным цветочным ароматом фрезии, который остается на коже после использования лосьона.
Объем 200 мл`,
    productCompound: ``
  },
  {
    id:12,
    productName: 'THE SAEM PERFUMED BODY MOISTURIZER [MANDARIN]',
    productBrend: 'THE SAEM',
    productCategory: 'forbody',
    productSubCategory: 'cream&losions',
    productStatus: '',
    productReviews: 1,
    productPrice: '90 000 сумов',
    productImages:['https://kokosplus.uz/uploads/products/5f291020b02b451e6fe31f8976731f8f.jpeg'],
    productDesc: `Подарите своей коже мягкость и гладкость вместе с парфюмированным лосьоном для тела с мандарином. Масло косточек мандарина оказывает тонизирующее и подтягивающее действие, повышает упругость кожи, а также оживляет тусклую кожу и мягко осветляет пигментацию.
Аромат:
Верхние ноты – цитрус, черная смородина, можжевельник;
Средние ноты – роза, ландыш;
Базовые ноты – мускус, кедр.

Объем: 200 мл`,
    productCompound: `Water, Glycerin, Mineral Oil, Cetyl Ethylhexanoate, Propanediol, Glyceryl Stearate, Polysorbate 60, Petrolatum, Cetyl Alcohol Dimethicone, Cyclopentasiloxane, PEG-100 Stearate, Butylene Glycol Stearyl Alcohol, Sorbitan Sesquioleate, Acrylates / C10-30 Alkyl Acrya te Crosspolymer, Potassium Hydroxide, Myristyl Alcohol, Lauryl Alcohol, Simmondsia Chinensis (Jojoba) Seed Oil, Panthenol, Olea Europa ea (Olive) Fruit Oil, Helianthus Annuus (Sunflower) Seed Oil, Citrus Nobilis (Mandarin Orange) Fruit Extract, Propylene Glycol, Phenyl Trimethicone, Lecithin, Vitis Vinifera (Grape) Seed Oil, Triceteareth-4 Phosphate, Ceramide NP Disodium EDTA, Chlorphenesin, 1,2-Hexanediol, Ethy hexylglycerin Fragrance, Limonene, Hydroxycitronellal.`
  },
  {
    id:13,
    productName: 'THE SAEM SAEMMUL PERFUME BB PACT SPF25 PA++ [21 PINK BEIGE]',
    productBrend: 'THE SAEM',
    productCategory: 'makeup',
    productSubCategory: 'facemakeup',
    productStatus: '',
    productReviews: 1,
    productPrice: '130 000 сумов',
    productImages:['https://kokosplus.uz/uploads/products/ce71ba5e08c2fa83a43fb878d0b4fa99.jpeg'],
    productDesc: `Легкой вуалью пудра покрывает кожу лица и дарит ей не только нежный цвет, но и нежный аромат.Компактная пудра является завершающим штрихом для безупречного макияжа, выравнивая тон и поверхность кожи. Кроме великолепных декоративных функций, пудра ухаживает за кожей лица, обеспечивая длительное увлажнение кожи, как изнутри, так и на поверхности, оберегая от обезвоживания и пересыхания.
Пудра не забивает поры и не создает эффекта маски, обеспечивает естественное покрытие и увлажненность в течение дня, а также защищает кожу от УФ-излучения (фактор защиты SPF25 PA++) и предупреждает фотостарение.
Оттенок 21 - розово бежевый
Объем 20 гр`,
    productCompound: `Talc, mica (CI 77019), titanium dioxide (CI 77891), silicon dioxide, nylon-12, ethylhexylmethoxycinnamate, triethylhexanoin, zinc oxide (CI 77947), magnesium oxide. Stan, Trimethylolpropane Triethylhexanoate, Methylhexanoate Methacrylate Crosspolymer, Birch Sap, Provencal Rose Water, dimethicone, caprylyl glycol, ethylhexylglycerin, methicone, hydrogenated lecithin, laurolysine, tocopheryl acetate, purified water, butylene glycol, iron oxide yellow (CI 77492), iron oxide red (CI 77491), iron oxide black (CI 77499), ultramarine (CI 77007 ), aroma, butylphenylmethylpropional, limonene.`
  },
  {
    id:14,
    productName: 'JMsolution Life Disney Fresh Rose Hand Cream [50ml]',
    productBrend: 'JMsolution',
    productCategory: 'forbody',
    productSubCategory: 'handcream',
    productStatus: '',
    productReviews: 4,
    productPrice: '120 000 сумов',
    productImages:['https://kokosplus.uz/uploads/products/3ca0d6f1f90ad55a5e97afb1040cd7cd.jpeg','https://kokosplus.uz/uploads/products/48811703065180.png', 'https://kokosplus.uz/uploads/products/95961703065193.png'],
    productDesc: `Лимитированные кремы для рук от бренда JMsolution в коллаборации с Disney. Парфюмированный крем для рук с чувственным ароматом 7 видов роз, символа современной романтики. Содержит экстракт клеток листьев пустынной розы и масло ши, которые сохраняют кожу увлажненной и здоровой. Мягкая формула комфортно ухаживает за сухой кожей рук. Масло ши, 30 видов растительных экстрактов и 5 видов растительных увлажняющих масел обеспечивают комфортное и полноценное питание кожи рук. Кремы отлично впитываются без ощущения липкости.`,
    productCompound: ``
  },
  {
    id:15,
    productName: 'THE FACESHOP FRESHIAN MASCARA [01 CURLING]',
    productBrend: 'THE FACESHOP',
    productCategory: 'makeup',
    productSubCategory: 'eyemakeup',
    productStatus: '',
    productReviews: 3,
    productPrice: '35 000 сумов',
    productImages:['https://kokosplus.uz/uploads/products/7ce82777334e0e14a9c13eb9b0b6dc00.jpeg'],
    productDesc: `Подкручивающая тушь для ресниц хорошо прокрашивает и разделяет реснички, удлиняет и отлично фиксирует изгиб. Натуральный воск, входящий в состав туши, наделяет её защитными свойствами и дарит стойкость в течении всего дня. Особая влагоустойчивая формула позволяет туши не осыпаться и держаться в течении всего дня, не течёт даже во время дождя и снега.`,
    productCompound: ``
  },
  {
    id:16,
    productName: 'MISSHA PERFECT EYEBROW STYLER [DARK BROWN]',
    productBrend: 'MISSHA',
    productCategory: 'makeup',
    productSubCategory: 'eyebrowmakeup',
    productStatus: '',
    productReviews: 2,
    productPrice: '35 000 сумов',
    productImages:['https://kokosplus.uz/uploads/products/5265ee0b02bb3d6b1695d1ae57c2381f.jpeg'],
    productDesc: `Автоматический карандаш для бровей от бренда Missha создан специально для идеального стойкого макияжа бровей. Карандаш имеет очень удобную форму, которая позволяет без проблем выполнить линию бровей необходимой толщины. Заточка не требуется. Кроме того, с обратной его стороны находится щеточка для бровей, с помощью которой легко растушевать карандаш.
Оттенок: Темно-коричневый`,
    productCompound: ``
  },
  {
    id:17,
    productName: 'AMUSE Dew Velvet Tint [#03 Hibiscus]',
    productBrend: 'AMUSE',
    productCategory: 'makeup',
    productSubCategory: 'lipmakeup',
    productStatus: '',
    productReviews: 6,
    productPrice: '140 000 сумов',
    productImages:['https://kokosplus.uz/uploads/products/8d180b7a406f1a84ee7e02b3dac11599.jpeg','https://kokosplus.uz/uploads/products/34501717311591.png','https://kokosplus.uz/uploads/products/59371717311599.png'],
    productDesc: `Увлажняющий вельветовый тинт с матовым финишем в оттенке цветов гибискуса придаст губам здоровый оттенок и бархатную текстуру, без эффекта сухости и комочков.

Преимущества:

Имеет двойную текстуру, которая из глянцевой превращается в матовую, создавая на коже губ бархатное покрытие и запирая влагу внутри, предотвращая сухость и шелушения.

Стойкий пигмент оставляет натуральный оттенок на губах, даже когда тинт полностью впитается.

Имеет среднюю насыщенность пигмента, благодаря чему его удобно наслаивать и регулировать оттенок, а также создавать эффект градиента.

Вспомогательный компонент:

Гиалуроновая кислота активно увлажняет кожу губ, устраняя сухость и препятствуя шелушениям.`,
    productCompound: `Purified water, dimethicone, dimethicone/vinyl dimethicone crosspolymer, glycerin, denatured alcohol, pentylene glycol, polyglyceryl-10 myristate, polyacrylate crosspolymer-6, sodium hyaluronic acid. Ronate, Hydrolyzed Hyaluronic Acid, Hyaluronic Acid, Butylene Glycol, Dimethicone Crosspolymer, Ceteareth-20, Ethylhexylglycerin, Trisodium Ethylenediamine Disuccinate, Arginine, Aluminum Hydroxide, ammonium polyacrylate, 1,2-hexanediol, hydroxypropyltrimonium hyaluronate, sodium acetylated hyaluronate, hydrolyzed sodium hyaluronate, sodium hyaluronate Crosspolymer, potassium hyaluronate, t-butyl alcohol, carbomer, phenoxyethanol, fragrance, titanium dioxide (CI 77891), red No. 227 (CI 17200), red No. 102 (CI 16255), red No. 104 ( 1) (CI 45410), Yellow No. 4 (CI 19140), Yellow No. 5 (CI 15985)`
  },
  {
    id:18,
    productName: 'CARENEL BERRY LIP NIGHT MASK',
    productBrend: 'CARENEL',
    productCategory: 'forface',
    productSubCategory: 'lipbalm',
    productStatus: '',
    productReviews: 2,
    productPrice: '30 000 сумов',
    productImages:['https://kokosplus.uz/uploads/products/83741708234393.png','https://kokosplus.uz/uploads/products/f4e917ff321f0b156662930dd8507293.jpeg'],
    productDesc: `Ночная ягодная маска для губ активно напитывает кожу, устраняет сухость и шелушение, придает гладкость и мягкость. Повышает упругость, тонизирует, создает защитное покрытие от потери влаги. Маска ухаживает за нежной кожей губ, улучшает их внешний вид, препятствует преждевременному старению.

Объем: 5 г`,
    productCompound: ``
  },
  {
    id:19,
    productName: 'Etude House My Beauty Tool Pimple Popper',
    productBrend: 'Etude House',
    productCategory: 'acsessory',
    productStatus: '',
    productReviews: 1,
    productPrice: '40 000 сумов',
    productImages:['https://kokosplus.uz/uploads/products/0f5f3b43fc606bb837406077dcbcfe45.jpeg'],
    productDesc: `Палочка-уно для чистки лица Etude House My Beauty Tool Pimple Popper. Аксессуар помогает очистить поры от загрязнений и себума, подходит для удаления прыщей и комедонов. Инструмент позволяет безболезненно и безопасно избавиться от воспалений и закупоренных пор`,
    productCompound: ``
  },
  {
    id:20,
    productName: 'NATURE REPUBLIC BEAUTY TOOLS COTTON SWABS 300PCS',
    productBrend: 'NATURE REPUBLIC',
    productCategory: 'acsessory',
    productStatus: '',
    productReviews: 6,
    productPrice: '40 000 сумов',
    productImages:['https://kokosplus.uz/uploads/products/1c17d8404c446544b8dc60c565c29cca.jpeg'],
    productDesc: `Ватные палочки, в упаковке 300 шт.`,
    productCompound: ``
  },
  {
    id:21,
    productName: 'Etude House Baking Powder Crunch Pore Scrub 7gr',
    productBrend: 'Etude House',
    productCategory: 'forface',
    productSubCategory: 'scrabs',
    productStatus: '',
    productReviews: 11,
    productPrice: '10 000 сумов',
    productImages:['https://kokosplus.uz/uploads/products/cb8a12bdc67f46a80e97845afa968194.jpeg'],
    productDesc: `Скраб для лица с содой в пирамидках на 40% состоит из мельчайших крупинок соды и за счет этого эффективно очищает поры от загрязнений, мягко отшелушивает омертвевшие частички кожи, стимулируя клеточное обновление, обеззараживает и оздоравливает тон лица. Обладает приятным охлаждающим эффектом!
Средство представлено в оригинальном порционном виде.

Подходит для нормальной, жирной, комбинированной кожи.
Объем: 7 г`,
    productCompound: `Sodium Bicarbonate, Water, Glycerin, Silica, Hydrated Silica, Microcrystalline Cellulose, Peg-60 Hydrogenated Castor Oil, Peg-7 Glyceryl Cocoate, Disodium Edta, Menthoxypropanediol, Cellulose Gum, Sodiummethyl Cocoyl Taurate, Sodium Sulfite, Fragrance.`
  },
  {
    id:22,
    productName: 'ROUND LAB 1025 DOKDO CREAM',
    productBrend: 'ROUND LAB',
    productCategory: 'forface',
    productSubCategory: 'cream',
    productStatus: '',
    productReviews: 1,
    productPrice: '250 000 сумов',
    productImages:['https://kokosplus.uz/uploads/products/814f755c26086ce744fa9beb64e7f6fa.jpeg', 'https://kokosplus.uz/uploads/products/93241725969140.png','https://kokosplus.uz/uploads/products/28541725969151.png'],
    productDesc: `Увлажняющий крем с церамидами и морской водой восстанавливает обезвоженную кожу, устраняет сухость, наполняет влагой и дарит комфорт, успокаивая и смягчая. Средство улучшает микроциркуляцию, повышает иммунитет кожи, устраняет шелушение и ороговевшие частицы, сглаживая рельеф.

Формула содержит глубинную морскую воду, очищенную с помощью технологии фильтрации наномембран, благодаря чему вода сохраняет все полезные минералы, кальций и магний. Морская вода улучшает микроциркуляцию, повышает иммунитет кожи и замедляет процесс старения.

Комплекс 5 церамидов в составе работает на восстановление естественного защитного барьера, встраиваясь в гидролипидную мантию и укрепляя её, снижая чувствительность и предотвращая сухость.

Средство с густой кремовой текстурой не имеет аромата.

Подойдет для сухой, обезвоженной или чувствительной кожи.
Объем: 80 мл`,
    productCompound: `Water, Glycerin, Caprylic/Capric Triglyceride, Propylene Glycol, Hydrogenated Poly(C6-14 Olefin), Cetearyl Alcohol, Methyl Trimethicone, 1,2-Hexanediol, Caprylyl Methicone, Phenyl Trimethicone, C12-16 Alcohols, Butyrospermum Parkii (Shea) Butter, Sea Water, Chondrus Crispus Extract, Saccharum Officinarum (Sugarcane) Extract, Hyaluronic Acid, Hydrolyzed Hyaluronic Acid, Sodium Hyaluronate , Glyceryl Stearate SE, Ceramide AP, Ceramide AS, Ceramide EOP, Ceramide NP, Ceramide NS, Polymethylsilsesquioxane, Palmitic Acid, Cetearyl Glucoside, Cetearyl Olivate, Sorbitan Olivate, Hydrogenated Lecithin , Copernicia Cerifera (Carnauba) Wax, Stearic Acid, Ammonium Acryloyldimethyltaurate/VP Copolymer, Ethylhexylglycerin, Glyceryl Caprylate, Allantoin, Panthenol , Butylene Glycol , Beta-Glucan, Cholesterol, Phytosphingosine, Disodium EDTA`
  },
  {
    id:23,
    productName: 'ROUND LAB 1025 DOKDO CLEANSER',
    productBrend: 'ROUND LAB',
    productCategory: 'forface',
    productSubCategory: 'cleanisers',
    productStatus: '',
    productReviews: 5,
    productPrice: '120 000 сумов',
    productImages:['https://kokosplus.uz/uploads/products/8adfaabbff513c441c286cef928d9841.jpeg','https://kokosplus.uz/uploads/products/81381714113356.png'],
    productDesc: `Мягкая пенка для умывания с морской водой подходит для деликатного очищения даже самой сухой и чувствительной кожи. Нежно удаляет все загрязнения, не провоцирует появления сухости и стянутости, сохраняет кожу увлажнённой даже после умывания.

Слабокислотная пенка имеет нейтральный рН, мягко воздействует на поверхность кожи и защищает от агрессивного воздействия проточной воды. Пенка также оказывает обеззараживающее и успокаивающее действие, помогает в борьбе с воспалениями и краснотой.

Глубинная морская вода с острова Токто содержит 72 вида полезных минералов, макро- и микроэлементов, которые не только поддерживают здоровье кожи, но также глубоко увлажняют, укрепляют иммунитет эпидермиса и продлевают молодость.

Для всех типов кожи.
Объем: 150 мл`,
    productCompound: `Water, Sodium Cocoyl Isethionate, Glycerin, Sodium Methyl Cocoyl Taurate, Coco-Betaine, Potassium Cocoyl Glycinate, Potassium Benzoate, Sodium Chloride, Polyquaternium-67, Potassium Cocoate, Citric Acid, Fructooligosaccharides, Saccharide Hydrolysate, Disodium EDTA, Pullulan, 1,2-Hexanediol, Allantoin, Panthenol, Sea Water, Sodium Acetate, Butylene Glycol, Chamomilla Recutita (Matricaria) Flower Oil, Caprylic/Capric Triglyceride, Beta-Glucan, Phosphatidylcholine, Hyaluronic Acid, Ethylhexylglycerin, Ceramide NP, Glycine, Hydrolyzed Hyaluronic Acid, Glutamic Acid, Serine, Sodium Hyaluronate, Lysine, Alanine, Arginine, Threonine, Proline`
  },
  {
    id:24,
    productName: 'CP-1 RASBERRY TREATMENT VINEGAR [500ml]',
    productBrend: 'CP-1',
    productCategory: 'forhair',
    productSubCategory: 'conditioners&oils',
    productStatus: '',
    productReviews: 5,
    productPrice: '125 000 сумов',
    productImages:['https://kokosplus.uz/uploads/products/0ab3a1c62df1a6086900689ea6ba9839.jpeg','https://kokosplus.uz/uploads/products/50101709041398.png','https://kokosplus.uz/uploads/products/47241709041408.jpg'],
    productDesc: `Кондиционер-ополаскиватель для волос на основе малинового уксуса — маст-хэв для тусклых, поврежденных, безжизненных волос.Средство разглаживает, устраняет дискомфорт кожи головы (зуд, сухую перхоть), придает блеск и шелковистость, облегчает расчесывание. Как правило, шампуни дают щелочную реакцию, которая может привести к сухости кожи головы, перхоти, засаливанию волос, жесткости и потере блеска. Малиновый ополаскиватель на основе уксуса имеет слегка кислый кислотно-щелочной баланс (pH 5.5). Благодаря кислой реакции он моментально закрывает кератиновые чешуйки волос, делая их крепкими и блестящими.

Имеет сочный аромат спелой малины. Обратите внимание! Ополаскиватель очень жидкий. Его не нужно ничем разбавлять.
Подходит для всех типов волос.
Объем: 500 мл`,
    productCompound: `Water, Vinegar(5%), Butylene Glycol, Dipropylene Glycol, Cetrimonium Chloride, Olive Oil PEG-7 Esters, PEG-60 Hydrogenated Castor Oil, Fragrance, Sodium Citrate, Hexylene Glycol, Totarol, Ethylhexylglycerin, Decylene Glycol, Disodium EDTA, Freesia Refracta Extract, Mentha Piperita (Peppermint) Leaf Extract, Chamomilla Recutita (Matricaria) Flower Extract, Monarda Didyma Leaf Extract, Rosmarinus Officinalis (Rosemary) Leaf Extract, Lavandula Angustifolia (Lavender) Extract, CI 16185, CI 42090.`
  },
]

export default productsArr;