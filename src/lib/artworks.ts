/**
 * Source unique des œuvres de la galerie.
 *
 * Ce module est volontairement neutre (ni "use client" ni "server-only") afin
 * d'être importé aussi bien par le composant client `GalleryClient` que par la
 * page serveur de détail `[lang]/gallery/[slug]/page.tsx`.
 *
 * Les textes (descriptions, statuts) proviennent du dictionnaire ; le titre, la
 * taille et l'image sont fixes. Le `slug` sert d'URL et reste constant quel que
 * soit la langue.
 */

export type GalleryDict = {
  serie3_collection: string;
  serie3_name: string;
  serie3_intro: string;
  serie3_status: string;
  serie2_collection: string;
  serie2_name: string;
  serie2_subtitle: string;
  serie2_medium: string;
  serie1_collection: string;
  serie1_name: string;
  serie1_subtitle: string;
  serie1_medium: string;
  color1_name: string;
  color1_text: string;
  color2_name: string;
  color2_text: string;
  color3_name: string;
  color3_text: string;
  artwork_aftertea_desc: string;
  artwork_theend_desc: string;
  artwork_reminiscence_subtitle: string;
  artwork_reminiscence_desc: string;
  artwork_dyptique_desc: string;
  artwork_casablanca_desc: string;
  artwork_tanger3_desc: string;
  artwork_marrakech_desc: string;
  artwork_tanger2_desc: string;
  artwork_verticale_desc: string;
  artwork_verticale_status: string;
  artwork_dunes_subtitle: string;
  artwork_dunes_status: string;
  artwork_dunes_desc: string;
  // Labels de la page de détail
  detail_back: string;
  detail_price_request: string;
  detail_inquire: string;
  detail_size_label: string;
};

export type Artwork = {
  /** Identifiant d'URL, stable et indépendant de la langue */
  slug: string;
  title: string;
  subtitle: string;
  size: string;
  price: string;
  image: string;
  description: string;
  /** Nom de la série d'appartenance (pour le fil d'Ariane sur la page de détail) */
  collection: string;
  /** Grande mise en page centrée (Série 3 — Dunes) */
  featured?: boolean;
  /** Affiche le statut « en cours » sous le tableau, bien visible en noir */
  wipHighlight?: boolean;
};

/** Regroupe les œuvres par série, textes issus du dictionnaire fourni. */
export function getSeries(dict: GalleryDict): {
  serie3: Artwork[];
  serie2: Artwork[];
  serie1: Artwork[];
} {
  const serie3: Artwork[] = [
    {
      slug: "dunes",
      title: "Dunes",
      subtitle: dict.artwork_dunes_subtitle,
      size: "81×116 cm",
      price: dict.artwork_dunes_status,
      image: "/images/dunes-serie3-1.png",
      description: dict.artwork_dunes_desc,
      collection: dict.serie3_name,
      featured: true,
      wipHighlight: true,
    },
    {
      slug: "la-verticale-et-l-etendue",
      title: "La verticale et l'étendue",
      subtitle: "Désert du Sahara marocain · Merzouga",
      size: "60×50 cm",
      price: dict.artwork_verticale_status,
      image: "/images/Série3.png",
      description: dict.artwork_verticale_desc,
      collection: dict.serie3_name,
    },
  ];

  const serie2: Artwork[] = [
    {
      slug: "after-tea",
      title: "After Tea",
      subtitle: "Autoportrait",
      size: "50×50 cm",
      price: "",
      image: "/images/p10_img1.jpeg",
      description: dict.artwork_aftertea_desc,
      collection: dict.serie2_name,
    },
    {
      slug: "the-end",
      title: "The End",
      subtitle: "Al Hank Lighthouse · Casablanca",
      size: "130×97 cm",
      price: "",
      image: "/images/Série2.jpg",
      description: dict.artwork_theend_desc,
      collection: dict.serie2_name,
    },
    {
      slug: "reminiscence",
      title: "Réminiscence",
      subtitle: dict.artwork_reminiscence_subtitle,
      size: "80×80 cm",
      price: "",
      image: "/images/p12_img1.jpeg",
      description: dict.artwork_reminiscence_desc,
      collection: dict.serie2_name,
    },
    {
      slug: "dyptique-majorelle",
      title: "Dyptique Majorelle",
      subtitle: "Silence absolu",
      size: "60×60 cm",
      price: "",
      image: "/images/p14_img1.jpeg",
      description: dict.artwork_dyptique_desc,
      collection: dict.serie2_name,
    },
  ];

  const serie1: Artwork[] = [
    {
      slug: "casablanca",
      title: "Casablanca",
      subtitle: "2023 · Édition limitée",
      size: "",
      price: "",
      image: "/images/p05_img1.jpeg",
      description: dict.artwork_casablanca_desc,
      collection: dict.serie1_name,
    },
    {
      slug: "tanger-iii",
      title: "Tanger III",
      subtitle: "The Sounds of Tangier",
      size: "",
      price: "",
      image: "/images/p06_img1.png",
      description: dict.artwork_tanger3_desc,
      collection: dict.serie1_name,
    },
    {
      slug: "marrakech",
      title: "Marrakech",
      subtitle: "The Red City",
      size: "",
      price: "",
      image: "https://static.wixstatic.com/media/b18fbb_25782a6965fe4515aad6aaa7c01f9f62~mv2.png",
      description: dict.artwork_marrakech_desc,
      collection: dict.serie1_name,
    },
    {
      slug: "tanger-ii",
      title: "Tanger II",
      subtitle: "Cities of Atlas",
      size: "",
      price: "",
      image: "https://static.wixstatic.com/media/b18fbb_d0186b2a11c54f1aa2f4a6a7faed90f4~mv2.png",
      description: dict.artwork_tanger2_desc,
      collection: dict.serie1_name,
    },
  ];

  return { serie3, serie2, serie1 };
}

/** Toutes les œuvres à plat, dans l'ordre d'affichage de la galerie. */
export function getAllArtworks(dict: GalleryDict): Artwork[] {
  const { serie3, serie2, serie1 } = getSeries(dict);
  return [...serie3, ...serie2, ...serie1];
}

/** Retrouve une œuvre par son slug (ou undefined si inconnu). */
export function findArtwork(dict: GalleryDict, slug: string): Artwork | undefined {
  return getAllArtworks(dict).find((a) => a.slug === slug);
}

/** Liste stable des slugs, pour `generateStaticParams` (indépendante de la langue). */
export const ARTWORK_SLUGS = [
  "dunes",
  "la-verticale-et-l-etendue",
  "after-tea",
  "the-end",
  "reminiscence",
  "dyptique-majorelle",
  "casablanca",
  "tanger-iii",
  "marrakech",
  "tanger-ii",
] as const;
