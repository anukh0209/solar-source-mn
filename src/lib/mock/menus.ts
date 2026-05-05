export const mockHeaderMenu = [
  { _id: "1", label: "Нүүр", url: "/", order: 1, kind: "header" },
  { _id: "2", label: "Бидний тухай", url: "/about", order: 2, kind: "header" },
  { _id: "3", label: "Үйлчилгээ", url: "/services", order: 3, kind: "header" },
  { _id: "4", label: "Бүтээгдэхүүн", url: "/products", order: 4, kind: "header" },
  { _id: "5", label: "Үнэ", url: "/pricing", order: 5, kind: "header" },
  { _id: "6", label: "Төслүүд", url: "/portfolio", order: 6, kind: "header" },
  { _id: "7", label: "Холбоо барих", url: "/contact", order: 7, kind: "header" },
];

export const mockFooterMenu = [
  { _id: "8", label: "Нүүр", url: "/", order: 1, kind: "footer" },
  { _id: "9", label: "Бидний тухай", url: "/about", order: 2, kind: "footer" },
  { _id: "10", label: "Үйлчилгээ", url: "/services", order: 3, kind: "footer" },
  { _id: "11", label: "Бүтээгдэхүүн", url: "/products", order: 4, kind: "footer" },
  { _id: "12", label: "Холбоо барих", url: "/contact", order: 5, kind: "footer" },
];

export function getHeaderMenu() {
  return mockHeaderMenu;
}

export function getFooterMenu() {
  return mockFooterMenu;
}
