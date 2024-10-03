const headerItemsArr =[
  {
    id:1,
    itemNamme:"Декоративная косметика",
    itemChildren:[
      {
        childId:1,
        childName:'Макияж Лица',
        childPath: 'facemakeup'
      },
      {
        childId:2,
        childName:'Макияж Глаз',
        childPath: 'eyemakeup'
      },
      {
        childId:3,
        childName:'Макияж бровей',
        childPath: 'eyebrowmakeup'
      },
      {
        childId:4,
        childName:'Макияж Губ',
        childPath: 'lipmakeup'
      }
     ],
    isDropdownVisible: false,
    path:'makeup'
  },
  {
    id:2,
    itemNamme:"Для волос",
    itemChildren:[
      {
        childId:1,
        childName:'Шампунь',
        childPath: 'shampo'
      },
      {
        childId:2,
        childName:'Кондиционеры & Масла',
        childPath: 'conditioners&oils'
      }
     ],
    isDropdownVisible: false,
    path:'forhair'
  },
  {
    id:3,
    itemNamme:"Для лица",
    itemChildren:[
      {
        childId:1,
        childName:'Очищение',
        childPath: 'cleanisers'
      },
      {
        childId:2,
        childName:'Скрабы',
        childPath: 'scrabs'
      },
      {
        childId:3,
        childName:'Тонеры',
        childPath: 'toners'
      },
      {
        childId:4,
        childName:'Сыворотки & Ампулы',
        childPath: 'serium&ampule'
      },
      {
        childId:5,
        childName:'Крема',
        childPath: 'cream'
      },
      {
        childId:6,
        childName:'Зашита от солнца',
        childPath: 'spf'
      },
      {
        childId:7,
        childName:'Крем вокруг глаз',
        childPath: 'eyecream'
      },
      {
        childId:8,
        childName:'Бальзамы для губ',
        childPath: 'lipbalm'
      },
      {
        childId:9,
        childName:'Маски',
        childPath: 'masks'
      }
     ],
    isDropdownVisible: false,
    path:'forface'
  },
  {
    id:4,
    itemNamme:"Для тела",
    itemChildren:[
      {
        childId:1,
        childName:'Крема & Лосьоны',
        childPath: 'cream&losions'
      },
      {
        childId:2,
        childName:'Гель для душа',
        childPath: 'showergel'
      },
      {
        childId:3,
        childName:'Парфюм & Минст',
        childPath: 'parfum&minsts'
      },
      {
        childId:4,
        childName:'Крем для рук',
        childPath: 'handcream'
      },
      {
        childId:5,
        childName:'Для ногтей',
        childPath: 'nails'
      }],
    isDropdownVisible: false,
    path:'forbody'
  },
  {
    id:5,
    itemNamme:"Детская косметика",
    itemChildren:[],
    isDropdownVisible: false,
    path:'forkids'
  },
  {
    id:6,
    itemNamme:"Для мужчин",
    itemChildren:[],
    isDropdownVisible: false,
    path:'formen'
  },
  {
    id:7,
    itemNamme:"Аксессуары",
    itemChildren:[],
    isDropdownVisible: false,
    path:'acsessory'
  }
]

export default headerItemsArr