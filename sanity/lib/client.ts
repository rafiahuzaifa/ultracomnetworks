import { createClient, type SanityClient } from "@sanity/client";
import { apiVersion, dataset, projectId } from "../env";

// Only construct a real client when a project ID is actually configured -
// @sanity/client throws synchronously at construction time otherwise, which
// would crash the whole app (including pages with no CMS content yet) at
// import time, before any try/catch around a query could help.
export const client: SanityClient | null = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true, // fast, cached reads for published content
    })
  : null;
