export const mockPosts = [
  {
    _id: "1",
    title: "Нарны энергийн давуу тал",
    slug: "solar-energy-benefits",
    excerpt: "Нарны энерги нь цэвэр, сэргээгдэх эрчим хүч юм.",
    content: "<p>Нарны энерги нь цэвэр, сэргээгдэх эрчим хүч юм. Энэ нь байгальд хор нөлөөгүй, урт хугацаанд хэмнэлттэй.</p>",
    status: "published",
    publishedDate: "2024-01-01",
  },
];

export function getPosts() {
  return mockPosts;
}

export function getPostBySlug(slug: string) {
  return mockPosts.find((post) => post.slug === slug);
}

export function getFeaturedPost() {
  return mockPosts[0];
}
