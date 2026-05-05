export const mockPages = [
  {
    _id: "1",
    name: "Бидний тухай",
    slug: "about",
    description: "Solar Source MN - Нарны энергийн шийдлүүд",
    content: "<h2>Бидний тухай</h2><p>Solar Source MN нь Монгол Улсад нарны энергийн технологийг нэвтрүүлж, байгальд ээлтэй, тогтвортой эрчим хүчний шийдлүүдийг санал болгож байна.</p>",
    status: "published",
  },
  {
    _id: "2",
    name: "Үйлчилгээ",
    slug: "services",
    description: "Бидний үйлчилгээ",
    content: "<h2>Үйлчилгээ</h2><p>Бид гэр ахуйн болон үйлдвэрийн нарны энергийн системийг суурилуулж, засвар үйлчилгээ хийдэг.</p>",
    status: "published",
  },
  {
    _id: "3",
    name: "Үнэ",
    slug: "pricing",
    description: "Багц үнэ",
    content: "<h2>Үнэ</h2><p>Бид таны хэрэгцээнд тохирсон олон төрлийн багцыг санал болгож байна.</p>",
    status: "published",
  },
  {
    _id: "4",
    name: "Баг",
    slug: "team",
    description: "Манай баг",
    content: "<h2>Баг</h2><p>Манай баг инженер, техникийн мэргэжилтнүүдээс бүрдэнэ.</p>",
    status: "published",
  },
  {
    _id: "5",
    name: "Түгээмэл асуулт",
    slug: "faq",
    description: "Түгээмэл асуултууд",
    content: "<h2>Түгээмэл асуулт</h2><p>Нарны энергийн талаарх түгээмэл асуултууд.</p>",
    status: "published",
  },
  {
    _id: "6",
    name: "Төслүүд",
    slug: "portfolio",
    description: "Бидний төслүүд",
    content: "<h2>Төслүүд</h2><p>Бидний хэрэгжүүлсэн төслүүд.</p>",
    status: "published",
  },
];

export function getPages() {
  return mockPages;
}

export function getPageBySlug(slug: string) {
  return mockPages.find((page) => page.slug === slug);
}
