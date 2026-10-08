/* Every case study the site renders at /work/<slug>. Add the next case's data module here. */
import { olxCase } from './olx';

export const cases = [olxCase];
export type CaseStudy = (typeof cases)[number];
