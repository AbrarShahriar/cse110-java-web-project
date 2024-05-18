export const slugify = (txt: string) =>
  txt
    .split(" ")
    .map((el) => el.toLowerCase())
    .join("-");
