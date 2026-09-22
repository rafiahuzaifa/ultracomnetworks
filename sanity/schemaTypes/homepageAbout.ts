import { defineField, defineType } from "sanity";

export const homepageAbout = defineType({
  name: "homepageAbout",
  title: "Homepage: About Section",
  type: "document",
  // Singleton - only one of these should ever exist
  fields: [
    defineField({
      name: "badgeText",
      title: "Badge Label",
      type: "string",
      initialValue: "ABOUT ULTRACOM NETWORKS",
    }),
    defineField({
      name: "headingLine1",
      title: "Heading — Line 1 (plain)",
      type: "string",
      initialValue: "Building The",
    }),
    defineField({
      name: "headingAccent",
      title: "Heading — Accent Words (blue)",
      type: "string",
      initialValue: "Digital Backbone",
    }),
    defineField({
      name: "headingLine2",
      title: "Heading — Line 2 (plain)",
      type: "string",
      initialValue: "Of Pakistan",
    }),
    defineField({
      name: "paragraph1",
      title: "Paragraph 1",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "paragraph2",
      title: "Paragraph 2",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "coreValues",
      title: "Core Values (4 cards)",
      type: "array",
      of: [
        {
          type: "object",
          name: "coreValue",
          fields: [
            defineField({
              name: "icon",
              title: "Icon",
              type: "string",
              options: {
                list: [
                  { title: "Shield (Reliability)", value: "Shield" },
                  { title: "Zap (Innovation)", value: "Zap" },
                  { title: "Users (Partnership)", value: "Users" },
                  { title: "Globe (Excellence)", value: "Globe" },
                  { title: "Award", value: "Award" },
                  { title: "Server", value: "Server" },
                ],
              },
            }),
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "string" }),
          ],
          preview: { select: { title: "title", subtitle: "description" } },
        },
      ],
      validation: (Rule) => Rule.max(4),
    }),
    defineField({
      name: "stats",
      title: "Stats Row (4 numbers)",
      type: "array",
      of: [
        {
          type: "object",
          name: "stat",
          fields: [
            defineField({ name: "value", title: "Value (e.g. 10+)", type: "string" }),
            defineField({ name: "label", title: "Label", type: "string" }),
          ],
          preview: { select: { title: "value", subtitle: "label" } },
        },
      ],
      validation: (Rule) => Rule.max(4),
    }),
    defineField({
      name: "image",
      title: "Right-side Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "imageCaptionTitle",
      title: "Image Caption — Title",
      type: "string",
      initialValue: "Enterprise Network Specialists",
    }),
    defineField({
      name: "imageCaptionSubtitle",
      title: "Image Caption — Subtitle",
      type: "string",
      initialValue: "CCNA, CCNP, PMP Certified",
    }),
    defineField({
      name: "techBadgeTitle",
      title: "Tech Badge — Title",
      type: "string",
      initialValue: "Latest Technology",
    }),
    defineField({
      name: "techBadgeText",
      title: "Tech Badge — Text",
      type: "string",
      initialValue: "Fiber, 5G, SD-WAN — cutting-edge network infrastructure",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Homepage About Section (singleton)" };
    },
  },
});
