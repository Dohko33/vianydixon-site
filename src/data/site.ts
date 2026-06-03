// Central site config — single source of truth for contact, social, brand
export const SITE = {
  brandName: 'VIANY.DIXON',
  brandFull: 'VIANY.DIXON®',
  tagline: 'Feel As You Want.',
  url: 'https://vianydixon.com',
  description: 'Island performance wear designed in Roatán, Honduras. UPF 50+ certified swim and rashguards for the Caribbean way of life.',

  // Contact — Honduras-based ops
  whatsapp: {
    number: '50494000000',         // PLACEHOLDER — update with real WhatsApp number
    displayName: '+504 9400 0000',
    defaultMessage: 'Hola, me interesa la línea VIANY.DIXON',
  },
  email: 'hello@vianydixon.com',
  emailWholesale: 'wholesale@vianydixon.com',

  // Social
  instagram: 'vianydixon',
  instagramUrl: 'https://www.instagram.com/vianydixon',

  // Physical locations where products are sold
  retailers: [
    {
      name: 'Island Shop',
      venue: 'Kimpton Grand Roatán Resort + Spa',
      address: 'West Bay Beach, Bay Islands, Roatán, Honduras',
      phone: '+504 2405-1001',
      mapsUrl: 'https://maps.google.com/?q=Kimpton+Grand+Roatan+Resort+Spa',
    },
    {
      name: 'Island Outfitters Pop-Up',
      venue: 'Juan Manuel Gálvez International Airport',
      address: 'Gate D5–D6, Coxen Hole, Roatán, Honduras',
      phone: '',
      mapsUrl: 'https://maps.google.com/?q=Juan+Manuel+Galvez+International+Airport+Roatan',
      hours: '7:00 AM — 7:00 PM Daily',
    },
  ],

  // Navigation — replicates Shopify header exactly
  nav: [
    { label: 'Swim', href: '/collections/swim' },
    { label: 'Apparel', href: '/collections/apparel' },
    { label: 'Caps', href: '/collections/caps' },
    { label: 'Footwear', href: '/collections/shoes' },
    { label: 'Accessories', href: '/collections/accessories' },
    { label: 'About Us', href: '/about', accent: true },
  ],
};

// WhatsApp link builder
export function waLink(message = SITE.whatsapp.defaultMessage): string {
  const m = encodeURIComponent(message);
  return `https://wa.me/${SITE.whatsapp.number}?text=${m}`;
}
