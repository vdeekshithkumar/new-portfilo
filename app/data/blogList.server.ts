export interface BlogList {
  slug: string;
  title: string;
  publishDate: string;
  description: string;
  readingTime: string;
  imageUrl: string;
}
import Engagement from '../../public/assets/images/enagagement.jpeg';
import Wedding from '../../public/assets/images/wedding1.jpg';
import Haldi from '../../public/assets/images/haldi.jpg';
import Reception from '../../public/assets/images/reception.jpeg';
import PreWedding from '../../public/assets/images/wedding2.jpg';
import WeddingBg from '../../public/assets/images/wedding-bg.jpg';

const images = [
  { src: Engagement, label: "Engagement" },
  { src: Wedding, label: "Wedding" },
  { src: Haldi, label: "Haldi" },
  { src: Reception, label: "Reception" },
  { src: PreWedding, label: "Pre-Wedding" },
  { src: WeddingBg, lablel: "Background wedding image"}
];

export const blogList: Array<BlogList> = [
  {
    slug: "Wding", 
    title: "Wedding",
    publishDate: "",
    description:
      "Every blog starts with a single post. This is yours. Make it great.",
    readingTime: "1 min",
    imageUrl: WeddingBg
  },
  {
    slug: "Pre Wedding",
    title: "Pre wedding",
    publishDate: "",
    description:
      "A sample page with the most common elements of an article, including headings, paragraphs, lists, and images. Use it as a starting point for applying your own styles.",
    readingTime: "5 min",
    imageUrl: WeddingBg
  },
  {
    slug: "Baby shower",
    title: "Baby shower",
    publishDate: "",
    description:
      " A sample page with the most common elements of an article, including headings, paragraphs, lists, and images. Generated by chatGPT.",
    readingTime: "10 min",
    imageUrl: WeddingBg
  },
  {
    slug: "Birthday party",
    title: "Birthday party",
    publishDate: "",
    description:
      " A sample page with the most common elements of an article, including headings, paragraphs, lists, and images. Generated by chatGPT.",
    readingTime: "10 min",
    imageUrl: WeddingBg
  },
  {
    slug: "Product shoot",
    title: "Product shoot",
    publishDate: "",
    description:
      " A sample page with the most common elements of an article, including headings, paragraphs, lists, and images. Generated by chatGPT.",
    readingTime: "10 min",
    imageUrl: WeddingBg
  },
  {
    slug: "Fashion shoot",
    title: "Fashion shoot",
    publishDate: "",
    description:
      " A sample page with the most common elements of an article, including headings, paragraphs, lists, and images. Generated by chatGPT.",
    readingTime: "10 min",
    imageUrl: WeddingBg
  },
];
