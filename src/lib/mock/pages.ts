export const mockPages = [
  {
    _id: "1",
    name: "Бидний тухай",
    slug: "about",
    description: "Solar Source MN - Монголын нарны энергийн салбарын манлайлагч",
    content: "<h2>Бидний тухай</h2><p>Solar Source MN нь 2018 онд байгуулагдсан бөгөөд Монгол Улсын нарны энергийн технологийн салбарт тэргүүлэгч компани юм. Бид олон улсын стандартын нарны самбар, инвертер, батерей системийг нийлүүлж, мэргэжлийн суурилуулалт, засвар үйлчилгээг үзүүлдэг.</p><p>Бидний зорилго нь Монгол Улсыг нүүрснээс ангид, цэвэр эрчим хүчээр хангасан тогтвортой хөгжлийг дэмжих юм.</p>",
    status: "published",
  },
  {
    _id: "2",
    name: "Үйлчилгээ",
    slug: "services",
    description: "Бүрэн хэмжээний нарны энергийн шийдлүүд",
    content: "<h2>Үйлчилгээ</h2><p>Бид гэр ахуйн болон үйлдвэрийн нарны энергийн системийг суурилуулж, засвар үйлчилгээ хийдэг.</p>",
    status: "published",
  },
  {
    _id: "3",
    name: "Бүтээгдэхүүн",
    slug: "products",
    description: "Олон улсын стандартын нарны энергийн бүтээгдэхүүнүүд",
    content: "<h2>Бүтээгдэхүүн</h2><p>Longi, JA Solar, Growatt, BYD зэрэг олон улсын брэндийн бүтээгдэхүүнүүд.</p>",
    status: "published",
  },
  {
    _id: "4",
    name: "Үнэ",
    slug: "pricing",
    description: "Багц үнэ",
    content: "<h2>Үнэ</h2><p>Бид таны хэрэгцээнд тохирсон олон төрлийн багцыг санал болгож байна.</p>",
    status: "published",
  },
  {
    _id: "5",
    name: "Баг",
    slug: "team",
    description: "Манай мэргэжлийн баг",
    content: "<h2>Баг</h2><p>Манай баг инженер, техникийн мэргэжилтнүүдээс бүрдэнэ.</p>",
    status: "published",
  },
  {
    _id: "6",
    name: "Түгээмэл асуулт",
    slug: "faq",
    description: "Түгээмэл асуултууд",
    content: "<h2>Түгээмэл асуулт</h2><p>Нарны энергийн талаарх түгээмэл асуултууд.</p>",
    status: "published",
  },
  {
    _id: "7",
    name: "Төслүүд",
    slug: "portfolio",
    description: "Бидний төслүүд",
    content: "<h2>Төслүүд</h2><p>Бидний хэрэгжүүлсэн төслүүд.</p>",
    status: "published",
  },
  {
    _id: "8",
    name: "Холбоо барих",
    slug: "contact",
    description: "Холбоо барих",
    content: "<h2>Холбоо барих</h2><p>Нарны энергийн шийдлийн талаар мэдээлэл авах.</p>",
    status: "published",
  },
];

export function getPages() {
  return mockPages;
}

export function getPageBySlug(slug: string) {
  return mockPages.find((page) => page.slug === slug);
}
