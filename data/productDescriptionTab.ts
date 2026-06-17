/** Copy and structured fields for the product details tabbed section */
export const productDescriptionTabLabels = {
  description: "Description",
  additionalInfo: "Additional information",
  reviews: "Reviews (2)",
} as const;

export const productDescriptionParagraphs: string[] = [
  "Stay warm, stylish, and comfortable this winter with our premium Winter Sneakers.Crafted with insulated lining and water-resistant materials, these sneakers are designed to handle chilly days and unexpected weather. The non-slip rubber sole ensures a firm grip on wet or icy surfaces, while the cushioned insole offers all-day comfort. Whether you are hitting the streets or heading out for a casual winter adventure, these sneakers combine durability with sleek, urban style — perfect for cold-weather fashion.",
  "Designed for warmth and performance, these sneakers feature a soft fleece lining, weatherproof exterior, and a high-traction outsole for reliable grip on winter terrain. Lightweight yet durable, they offer a snug fit that keeps your feet cozy without sacrificing breathability ideal for everyday wear",
];

export const productDescriptionChecklist: string[] = [
  "Water-Resistant Outer Layer",
  "Non-Slip Rubber Sole",
  "Breathable Inner Fabric",
  "Durable Stitching & Materials",
  "Modern & Versatile Design",
];

export const productAdditionalAttributes: { name: string; value: string }[] = [
  { name: "Weight", value: "100 gm" },
  { name: "Dimensions", value: "15 × 10 × 5 cm" },
  { name: "Colors", value: "Black, Blue, Grey, Orange, Purple" },
  { name: "Size", value: "S, M, L, XL, XXL" },
];

export const productReviewRatingStarCount = 5;

export const productDescriptionReviews: {
  avatarSrc: string;
  avatarAlt: string;
  name: string;
  date: string;
  body: string;
}[] = [
  {
    avatarSrc: "/assets/images/author/auther3-1.png",
    avatarAlt: "Customer Profile Image",
    name: "Kenton Semple",
    date: "– August 15, 2025",
    body: "I wore these every day during my trip to New York in my feet stayed warm and dry the entire time.",
  },
  {
    avatarSrc: "/assets/images/author/auther3-1.png",
    avatarAlt: "Customer Profile Image",
    name: "Kenton Semple",
    date: "– August 15, 2025",
    body: "I wore these every day during my trip to New York in my feet stayed warm and dry the entire time.",
  },
];

export const productReviewFormCopy = {
  noticeLine1: "Your email address will not be published.",
  noticeLine2: "Required fields are marked *",
  ratingLabel: "Your rating *",
  reviewLabel: "Your review *",
  nameLabel: "Name *",
  emailLabel: "Email *",
  saveDetailsLabel:
    "Save my name, email, and website in this browser for the next time I comment.",
  submitLabel: "Submit Review",
  submitArrowAlt: "Arrow Icon for Submit Review",
} as const;

export const productReviewFormRatingIcon = "/assets/images/icon/rating2.svg";
export const productDescriptionCheckIcon = "/assets/images/icon/check1-2.svg";
export const productReviewSubmitArrowIcon = "/assets/images/icon/arrow.svg";
