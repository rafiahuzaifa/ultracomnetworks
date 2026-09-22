import type { StructureResolver } from "sanity/structure";

// Custom desk structure: pins the singleton "Homepage About" section at the
// top, then lists the repeatable content types (Hero Slides, Testimonials).
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Ultracom Networks Content")
    .items([
      S.listItem()
        .title("Homepage: About Section")
        .id("homepageAbout")
        .child(
          S.document()
            .schemaType("homepageAbout")
            .documentId("homepageAbout")
        ),
      S.divider(),
      S.documentTypeListItem("heroSlide").title("Hero Slides"),
      S.documentTypeListItem("testimonial").title("Testimonials"),
    ]);
