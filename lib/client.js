import { createClient } from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";
export const client = createClient({
  projectId: "0bxjk4l6",
  dataset: "production",
  apiVersion: "2023-05-08",
  useCdn: true,
  token:
    "skpYCJVzDD7xiCmQ4RIvsMWVecMT9Ew0O9L6cPjosMpUVEc7F0fhUaBCEJb0j7wgCVVBZwOXeN20boaoO6KcKlfHPosl7AHoC08ffceZGL4lfatlKtzzqNP0Dnq6POS6cqv9HxsPPInKzSwL3FtH3Ga4hmMYYo1ZF8czHOlII8iuiMJx1bgz",
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
