import createImageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";
import { config } from "./config";

export const urlFor = (source) => createImageUrlBuilder(config).image(source);
export const sanityClient = createClient(config);
