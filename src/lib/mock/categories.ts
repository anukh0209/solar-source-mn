export const mockCategories = [
  { _id: "1", name: "Мэдээ", code: "news", description: "Мэдээ мэдээлэл" },
  { _id: "2", name: "Зөвлөгөө", code: "tips", description: "Зөвлөгөө" },
];

export function getCategories() {
  return mockCategories;
}
