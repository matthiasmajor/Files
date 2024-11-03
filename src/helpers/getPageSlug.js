import slugify from "slugify";

export const getPageSlug = (address) =>
  `/Oferta/${slugify(address.toLowerCase())}`;
