export const Colors = {
  black: "#000000",
  gray10: "#fdfdfd",
  gray100: "#3a3a3c",
  white: "#ffffff",
  orange: "#fb8019",
  shadowRight: "#f6f6f6"
};

export const Fonts = {
  roboto: "Roboto, sans-serif;",
  quicksand: "Quicksand, sans-serif"
};

export const Gradients = {
  sidebar:
    "linear-gradient(0deg, rgba(255,92,1,0.7693671218487395) 2%, rgba(255,186,148,1) 22%, rgba(255,248,244,0.5984987745098039) 45%, rgba(255,255,255,1) 100%)"
};

export const Shadows = {
  generalShadow: "0px 0px 2px #d9d9d9"
};

export const DropdownData = [
  { 
    value: 'all',
    name: 'Todos'
  },
  { 
    value: 'active',
    name: 'Activo'
  },
  { 
    value: 'inactive',
    name: 'Inactivo'
  }
];

export const THeaderColumns = [
  { accessor: "id", commerce: "ID" },
  { accessor: "commerce", commerce: "Comercio" },
  { accessor: "cuit", commerce: "CUIT" },
  { accessor: "concept_1", commerce: "Concepto 1" },
  { accessor: "concept_2", commerce: "Concepto 2" },
  { accessor: "concept_3", commerce: "Concepto 3" },
  { accessor: "concept_4", commerce: "Concepto 4" },
  { accessor: "concept_5", commerce: "Concepto 5" },
  { accessor: "concept_6", commerce: "Concepto 6" },
  { accessor: "balance", commerce: "Balance actual" },
  {
    accessor: "active",
    commerce: "Activo",
    format: (value) => (value ? "✔️" : "✖️")
  },
  { accessor: "last_sale", commerce: "Última venta" }
];

export const TBodyRows = [
  {
    id: "67209102",
    commerce: "Tienda olimpica",
    cuit: "22-198238-02",
    concept_1: 55,
    concept_2: 2,
    concept_3: 23,
    concept_4: 2,
    concept_5: 54,
    concept_6: 10,
    balance: 3489,
    active: false,
    last_sale: "28/02/1999"
  },
  {
    id: "f2845391",
    commerce: "Almacenes Exito",
    cuit: "201-893893-12",
    concept_1: 21,
    concept_2: 2,
    concept_3: 23,
    concept_4: 2,
    concept_5: 54,
    concept_6: 10,
    balance: 399,
    active: true,
    last_sale: "28/02/1999"
  },
  {
    id: "43b870b2",
    commerce: "Drogueria Juliao",
    cuit: "222-9239843-22",
    concept_1: 3,
    concept_2: 2,
    concept_3: 23,
    concept_4: 2,
    concept_5: 54,
    concept_6: 10,
    balance: 3222,
    active: true,
    last_sale: "28/02/1999"
  },
  {
    id: "4ca1db7a",
    commerce: "Farmatodo",
    cuit: "123-21312212-02",
    concept_1: 3,
    concept_2: 2,
    concept_3: 23,
    concept_4: 2,
    concept_5: 54,
    concept_6: 10,
    balance: 83832,
    active: true,
    last_sale: "28/02/1999"
  },
  {
    id: "d06a9f97",
    commerce: "Drogas la rebaja",
    cuit: "123-389333-21",
    concept_1: 54,
    concept_2: 2,
    concept_3: 23,
    concept_4: 2,
    concept_5: 54,
    concept_6: 10,
    balance: 13123,
    active: false,
    last_sale: "28/02/1999"
  },
  {
    id: "d96ff42e",
    commerce: "Homecenter",
    cuit: "122-3255353-02",
    concept_1: 2,
    concept_2: 2,
    concept_3: 23,
    concept_4: 2,
    concept_5: 54,
    concept_6: 10,
    balance: 12345,
    active: true,
    last_sale: "28/02/1999"
  },
  {
    id: "894fefd7",
    commerce: "Flamingo",
    cuit: "345-45343534-02",
    concept_1: 5,
    concept_2: 2,
    concept_3: 23,
    concept_4: 2,
    concept_5: 54,
    concept_6: 10,
    balance: 54363,
    active: true,
    last_sale: "28/02/1999"
  },
  {
    id: "06966f45",
    commerce: "Coto",
    cuit: "233-234234-32",
    concept_1: 2,
    concept_2: 2,
    concept_3: 23,
    concept_4: 2,
    concept_5: 54,
    concept_6: 10,
    balance: 88233,
    active: true,
    last_sale: "28/02/1999"
  },
  {
    id: "59fac22d",
    commerce: "Apple",
    cuit: "533-234232-32",
    concept_1: 6,
    concept_2: 2,
    concept_3: 23,
    concept_4: 2,
    concept_5: 54,
    concept_6: 10,
    balance: 234543,
    active: true,
    last_sale: "28/02/1999"
  },
  {
    id: "389093c6",
    commerce: "Microsoft",
    cuit: "234-3288238-02",
    concept_1: 4,
    concept_2: 2,
    concept_3: 23,
    concept_4: 2,
    concept_5: 54,
    concept_6: 10,
    balance: 345653,
    active: false,
    last_sale: "28/02/1999"
  },
  {
    id: "a3d8a232",
    commerce: "Unico supermercado",
    cuit: "678-3288238-02",
    concept_1: "553",
    concept_2: 2,
    concept_3: 23,
    concept_4: 2,
    concept_5: 54,
    concept_6: 10,
    balance: "399",
    active: true,
    last_sale: "28/02/1999"
  },
  {
    id: "44d5d067",
    commerce: "Carrefour",
    cuit: "567-3288238-02",
    concept_1: 45,
    concept_2: 2,
    concept_3: 23,
    concept_4: 2,
    concept_5: 54,
    concept_6: 10,
    balance: 344323,
    active: true,
    last_sale: "28/02/1999"
  },
  {
    id: "8f0cf3d7",
    commerce: "Iphone Store",
    cuit: "234-3288238-02",
    concept_1: 67,
    concept_2: 2,
    concept_3: 23,
    concept_4: 2,
    concept_5: 54,
    concept_6: 10,
    balance: 243233,
    active: false,
    last_sale: "28/02/1999"
  },
  {
    id: "1cba16f7",
    commerce: "Megatiendas",
    cuit: "234-3288238-02",
    concept_1: 46,
    concept_2: 2,
    concept_3: 23,
    concept_4: 2,
    concept_5: 54,
    concept_6: 10,
    balance: 543322,
    active: false,
    last_sale: "28/02/1999"
  },
  {
    id: "700bff1e",
    commerce: "tiendas d1",
    cuit: "655-3288238-02",
    concept_1: 75,
    concept_2: 2,
    concept_3: 23,
    concept_4: 2,
    concept_5: 54,
    concept_6: 10,
    balance: 124324,
    active: true,
    last_sale: "28/02/1999"
  },
  {
    id: "7885dce3",
    commerce: "Supermercado Ara",
    cuit: "839-3288238-02",
    concept_1: 56,
    concept_2: 2,
    concept_3: 23,
    concept_4: 2,
    concept_5: 54,
    concept_6: 10,
    balance: 2323,
    active: true,
    last_sale: "28/02/1999"
  },
  {
    id: "702106b9",
    commerce: "Justo y bueno",
    cuit: "233-3288238-02",
    concept_1: 56,
    concept_2: 2,
    concept_3: 23,
    concept_4: 2,
    concept_5: 54,
    concept_6: 10,
    balance: 1222,
    active: false,
    last_sale: "28/02/1999"
  },
  {
    id: "971ca25d",
    commerce: "Tienda el paisa",
    cuit: "345-3288238-02",
    concept_1: 78,
    concept_2: 2,
    concept_3: 23,
    concept_4: 2,
    concept_5: 54,
    concept_6: 10,
    balance: 4356,
    active: true,
    last_sale: "28/02/1999"
  }
];
