export interface Var {
  varName: string;
  varValue: string;
}

export interface DataRow {
  yVar: Var;
  attributeVars: Var[];
}

export interface ResNode {
  dataRows: DataRow[],
  commonUncertainty: number;
  children: ResNode[];
  attrName?: string;
  ancestorAttrs: string[];
  y?: string;
  condition?: string;
}

export const attributes = ['КИ', 'Долг', 'Поручители', 'Доход'];
// export const data: DataRow[] = [
//   {
//     yVar: { varName: 'Риск', varValue: 'В' },
//     attributeVars: [
//       { varName: 'КИ', varValue: 'П' },
//       { varName: 'Долг', varValue: 'В' },
//       { varName: 'Поручители', varValue: 'Н' },
//       { varName: 'Доход', varValue: '0-15' },
//     ]
//   },
//   {
//     yVar: { varName: 'Риск', varValue: 'В' },
//     attributeVars: [
//       { varName: 'КИ', varValue: 'Н' },
//       { varName: 'Долг', varValue: 'В' },
//       { varName: 'Поручители', varValue: 'Н' },
//       { varName: 'Доход', varValue: '15-35' },
//     ]
//   },
//   {
//     yVar: { varName: 'Риск', varValue: 'Ср' },
//     attributeVars: [
//       { varName: 'КИ', varValue: 'Н' },
//       { varName: 'Долг', varValue: 'Н' },
//       { varName: 'Поручители', varValue: 'Н' },
//       { varName: 'Доход', varValue: '15-35' },
//     ]
//   },
//   {
//     yVar: { varName: 'Риск', varValue: 'В' },
//     attributeVars: [
//       { varName: 'КИ', varValue: 'Н' },
//       { varName: 'Долг', varValue: 'Н' },
//       { varName: 'Поручители', varValue: 'Н' },
//       { varName: 'Доход', varValue: '0-15' },
//     ]
//   },
//   {
//     yVar: { varName: 'Риск', varValue: 'Н' },
//     attributeVars: [
//       { varName: 'КИ', varValue: 'Н' },
//       { varName: 'Долг', varValue: 'Н' },
//       { varName: 'Поручители', varValue: 'Н' },
//       { varName: 'Доход', varValue: '>35' },
//     ]
//   },
//   {
//     yVar: { varName: 'Риск', varValue: 'Н' },
//     attributeVars: [
//       { varName: 'КИ', varValue: 'Н' },
//       { varName: 'Долг', varValue: 'В' },
//       { varName: 'Поручители', varValue: 'А' },
//       { varName: 'Доход', varValue: '>35' },
//     ]
//   },
//   {
//     yVar: { varName: 'Риск', varValue: 'В' },
//     attributeVars: [
//       { varName: 'КИ', varValue: 'П' },
//       { varName: 'Долг', varValue: 'Н' },
//       { varName: 'Поручители', varValue: 'Н' },
//       { varName: 'Доход', varValue: '0-15' },
//     ]
//   },
//   {
//     yVar: { varName: 'Риск', varValue: 'Ср' },
//     attributeVars: [
//       { varName: 'КИ', varValue: 'П' },
//       { varName: 'Долг', varValue: 'Н' },
//       { varName: 'Поручители', varValue: 'А' },
//       { varName: 'Доход', varValue: '>35' },
//     ]
//   },
//   {
//     yVar: { varName: 'Риск', varValue: 'Н' },
//     attributeVars: [
//       { varName: 'КИ', varValue: 'Хор' },
//       { varName: 'Долг', varValue: 'Н' },
//       { varName: 'Поручители', varValue: 'Н' },
//       { varName: 'Доход', varValue: '>35' },
//     ]
//   },
//   {
//     yVar: { varName: 'Риск', varValue: 'Н' },
//     attributeVars: [
//       { varName: 'КИ', varValue: 'Хор' },
//       { varName: 'Долг', varValue: 'В' },
//       { varName: 'Поручители', varValue: 'А' },
//       { varName: 'Доход', varValue: '>35' },
//     ]
//   },
//   {
//     yVar: { varName: 'Риск', varValue: 'В' },
//     attributeVars: [
//       { varName: 'КИ', varValue: 'Хор' },
//       { varName: 'Долг', varValue: 'В' },
//       { varName: 'Поручители', varValue: 'Н' },
//       { varName: 'Доход', varValue: '0-15' },
//     ]
//   },
//   {
//     yVar: { varName: 'Риск', varValue: 'Ср' },
//     attributeVars: [
//       { varName: 'КИ', varValue: 'Хор' },
//       { varName: 'Долг', varValue: 'В' },
//       { varName: 'Поручители', varValue: 'Н' },
//       { varName: 'Доход', varValue: '15-35' },
//     ]
//   },
//   {
//     yVar: { varName: 'Риск', varValue: 'Н' },
//     attributeVars: [
//       { varName: 'КИ', varValue: 'Хор' },
//       { varName: 'Долг', varValue: 'В' },
//       { varName: 'Поручители', varValue: 'Н' },
//       { varName: 'Доход', varValue: '>35' },
//     ]
//   },
//   {
//     yVar: { varName: 'Риск', varValue: 'В' },
//     attributeVars: [
//       { varName: 'КИ', varValue: 'П' },
//       { varName: 'Долг', varValue: 'В' },
//       { varName: 'Поручители', varValue: 'Н' },
//       { varName: 'Доход', varValue: '15-35' },
//     ]
//   },
// ]

export const data: DataRow[] = [ // какую музыку послушать?))
  {
    yVar: { varName: 'Купить видеокарту', varValue: 'Да' },
    attributeVars: [
      { varName: 'Курс доллара', varValue: '90-95' },
      { varName: 'Кризис', varValue: 'Н' },
      { varName: 'Скидка', varValue: '5-10%' },
      { varName: 'Сезон', varValue: 'Зима' },
    ]
  },
  {
    yVar: { varName: 'Купить видеокарту', varValue: 'Нет' },
    attributeVars: [
      { varName: 'Курс доллара', varValue: '105+' },
      { varName: 'Кризис', varValue: 'В' },
      { varName: 'Скидка', varValue: '0%' },
      { varName: 'Сезон', varValue: 'Лето' },
    ]
  },
  {
    yVar: { varName: 'Купить видеокарту', varValue: 'Нет' },
    attributeVars: [
      { varName: 'Курс доллара', varValue: '95-100' },
      { varName: 'Кризис', varValue: 'Н' },
      { varName: 'Скидка', varValue: '0%' },
      { varName: 'Сезон', varValue: 'Зима' },
    ]
  },
  {
    yVar: { varName: 'Купить видеокарту', varValue: 'Да' },
    attributeVars: [
      { varName: 'Курс доллара', varValue: '95-100' },
      { varName: 'Кризис', varValue: 'Ср' },
      { varName: 'Скидка', varValue: '5-10%' },
      { varName: 'Сезон', varValue: 'Лето' },
    ]
  },
  {
    yVar: { varName: 'Купить видеокарту', varValue: 'Нет' },
    attributeVars: [
      { varName: 'Курс доллара', varValue: '90-95' },
      { varName: 'Кризис', varValue: 'В' },
      { varName: 'Скидка', varValue: '0%' },
      { varName: 'Сезон', varValue: 'Лето' },
    ]
  },
  {
    yVar: { varName: 'Купить видеокарту', varValue: 'Да' },
    attributeVars: [
      { varName: 'Курс доллара', varValue: '90-95' },
      { varName: 'Кризис', varValue: 'В' },
      { varName: 'Скидка', varValue: '0%' },
      { varName: 'Сезон', varValue: 'Зима' },
    ]
  },
  {
    yVar: { varName: 'Купить видеокарту', varValue: 'Да' },
    attributeVars: [
      { varName: 'Курс доллара', varValue: '90-95' },
      { varName: 'Кризис', varValue: 'В' },
      { varName: 'Скидка', varValue: '5-10%' },
      { varName: 'Сезон', varValue: 'Зима' },
    ]
  },
  {
    yVar: { varName: 'Купить видеокарту', varValue: 'Да' },
    attributeVars: [
      { varName: 'Курс доллара', varValue: '90-95' },
      { varName: 'Кризис', varValue: 'В' },
      { varName: 'Скидка', varValue: '5-10%' },
      { varName: 'Сезон', varValue: 'Лето' },
    ]
  },
  {
    yVar: { varName: 'Купить видеокарту', varValue: 'Да' },
    attributeVars: [
      { varName: 'Курс доллара', varValue: '90-95' },
      { varName: 'Кризис', varValue: 'Н' },
      { varName: 'Скидка', varValue: '0%' },
      { varName: 'Сезон', varValue: 'Лето' },
    ]
  },
  {
    yVar: { varName: 'Купить видеокарту', varValue: 'Да' },
    attributeVars: [
      { varName: 'Курс доллара', varValue: '90-95' },
      { varName: 'Кризис', varValue: 'Н' },
      { varName: 'Скидка', varValue: '0%' },
      { varName: 'Сезон', varValue: 'Зима' },
    ]
  },
  {
    yVar: { varName: 'Купить видеокарту', varValue: 'Да' },
    attributeVars: [
      { varName: 'Курс доллара', varValue: '90-95' },
      { varName: 'Кризис', varValue: 'Ср' },
      { varName: 'Скидка', varValue: '0%' },
      { varName: 'Сезон', varValue: 'Зима' },
    ]
  },
  {
    yVar: { varName: 'Купить видеокарту', varValue: 'Да' },
    attributeVars: [
      { varName: 'Курс доллара', varValue: '90-95' },
      { varName: 'Кризис', varValue: 'Ср' },
      { varName: 'Скидка', varValue: '0%' },
      { varName: 'Сезон', varValue: 'Лето' },
    ]
  },
  {
    yVar: { varName: 'Купить видеокарту', varValue: 'Нет' },
    attributeVars: [
      { varName: 'Курс доллара', varValue: '95-100' },
      { varName: 'Кризис', varValue: 'В' },
      { varName: 'Скидка', varValue: '0%' },
      { varName: 'Сезон', varValue: 'Зима' },
    ]
  },
  {
    yVar: { varName: 'Купить видеокарту', varValue: 'Нет' },
    attributeVars: [
      { varName: 'Курс доллара', varValue: '95-100' },
      { varName: 'Кризис', varValue: 'Ср' },
      { varName: 'Скидка', varValue: '0%' },
      { varName: 'Сезон', varValue: 'Зима' },
    ]
  },
  {
    yVar: { varName: 'Купить видеокарту', varValue: 'Да' },
    attributeVars: [
      { varName: 'Курс доллара', varValue: '95-100' },
      { varName: 'Кризис', varValue: 'Н' },
      { varName: 'Скидка', varValue: '5-10%' },
      { varName: 'Сезон', varValue: 'Зима' },
    ]
  }
]

export const groupedAttribute = data.reduce((acc, currDataRow) => {
  for (const v of currDataRow.attributeVars) {
    acc[v.varName] = acc[v.varName] ?? new Set<string>();
    acc[v.varName].add(v.varValue);
  }
  return acc;
}, {} as {[key: string]: Set<string>})

