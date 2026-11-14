import slugify from 'slugify';

export function criarSlug(texto: string): string {
  return slugify(texto, {
    lower: true,
    strict: true,
    locale: "pt", 
    trim: true,
  });
}