import { defineField, defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Client Name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "role", title: "Role / Title", type: "string" }),
    defineField({ name: "company", title: "Company", type: "string" }),
    defineField({
      name: "avatar",
      title: "Avatar Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "text",
      title: "Testimonial Text",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required().max(400),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Connectivity", value: "connectivity" },
          { title: "Digital", value: "digital" },
          { title: "Enterprise", value: "enterprise" },
        ],
      },
    }),
    defineField({ name: "service", title: "Service Used", type: "string" }),
    defineField({ name: "duration", title: "Client Since (e.g. 2+ Years)", type: "string" }),
    defineField({
      name: "rating",
      title: "Star Rating",
      type: "number",
      validation: (Rule) => Rule.min(1).max(5),
      initialValue: 5,
    }),
    defineField({
      name: "results",
      title: "Result Highlights (short badges)",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.max(4),
    }),
    defineField({
      name: "featured",
      title: "Featured (show on homepage)",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
  ],
  orderings: [
    { title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: {
    select: { title: "name", subtitle: "company", media: "avatar" },
  },
});
