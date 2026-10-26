/**
 * Official SVG Icons for Tech Stacks
 * High-definition vector icons with original brand colors
 */

const TECH_ICONS = {
  golang: `<svg viewBox="0 0 24 24" width="36" height="36" fill="none"><path d="M3.5 13.5C2.5 13.5 1.5 12.8 1.5 11.5C1.5 10.2 2.5 9.5 3.5 9.5H8.5V13.5H3.5Z" fill="#00ACD7"/><path d="M9.5 6.5C8.5 6.5 7.5 5.8 7.5 4.5C7.5 3.2 8.5 2.5 9.5 2.5H16.5C17.5 2.5 18.5 3.2 18.5 4.5C18.5 5.8 17.5 6.5 16.5 6.5H9.5Z" fill="#00ACD7"/><path d="M12.5 20.5C11.5 20.5 10.5 19.8 10.5 18.5C10.5 17.2 11.5 16.5 12.5 16.5H20.5C21.5 16.5 22.5 17.2 22.5 18.5C22.5 19.8 21.5 20.5 20.5 20.5H12.5Z" fill="#00ACD7"/><circle cx="17.5" cy="11.5" r="4.5" stroke="#00ACD7" stroke-width="2.5"/></svg>`,
  
  python: `<svg viewBox="0 0 24 24" width="36" height="36"><path d="M11.9 2C8.7 2 8.9 3.4 8.9 3.4L8.9 4.9H12.1V5.4H5.3S2 5 2 8.4C2 11.7 4.9 11.5 4.9 11.5L6 11.5L6 9.9C6 8.2 7.5 8.2 7.5 8.2H12.1C13.6 8.2 14.8 7.1 14.8 5.7L14.8 3.4C14.8 2 11.9 2 11.9 2ZM10.2 3.3C10.6 3.3 10.9 3.6 10.9 4C10.9 4.4 10.6 4.7 10.2 4.7C9.8 4.7 9.5 4.4 9.5 4C9.5 3.6 9.8 3.3 10.2 3.3Z" fill="#3776AB"/><path d="M12.1 22C15.3 22 15.1 20.6 15.1 20.6L15.1 19.1H11.9V18.6H18.7S22 19 22 15.6C22 12.3 19.1 12.5 19.1 12.5L18 12.5L18 14.1C18 15.8 16.5 15.8 16.5 15.8H11.9C10.4 15.8 9.2 16.9 9.2 18.3L9.2 20.6C9.2 22 12.1 22 12.1 22ZM13.8 20.7C13.4 20.7 13.1 20.4 13.1 20C13.1 19.6 13.4 19.3 13.8 19.3C14.2 19.3 14.5 19.6 14.5 20C14.5 20.4 14.2 20.7 13.8 20.7Z" fill="#FFD43B"/></svg>`,
  
  typescript: `<svg viewBox="0 0 24 24" width="36" height="36"><rect width="24" height="24" rx="4" fill="#3178C6"/><path d="M6 10.5H12M9 10.5V18.5" stroke="#FFF" stroke-width="2.2" stroke-linecap="round"/><path d="M18.5 12C18 11 16.8 10.5 15.5 10.8C14.2 11.2 13.8 12.2 14 13.2C14.4 14.8 18.5 14.2 18.5 16.5C18.5 18 17 18.8 15.2 18.5C14 18.2 13.3 17.5 13 16.8" stroke="#FFF" stroke-width="2" stroke-linecap="round"/></svg>`,
  
  javascript: `<svg viewBox="0 0 24 24" width="36" height="36"><rect width="24" height="24" rx="4" fill="#F7DF1E"/><path d="M7 12V18C7 19.5 5.5 19.5 4.5 18.8" stroke="#000" stroke-width="2.2" stroke-linecap="round"/><path d="M19 13.5C18.5 12.2 17 11.5 15.5 12C14 12.5 13.8 13.8 14.2 15C14.8 16.8 19.2 16 19 18.2C18.8 19.8 17 20.2 15.2 19.8C13.8 19.4 13.2 18.5 13 17.5" stroke="#000" stroke-width="2" stroke-linecap="round"/></svg>`,
  
  php: `<svg viewBox="0 0 24 24" width="36" height="36"><ellipse cx="12" cy="12" rx="11" ry="8" fill="#777BB4"/><text x="12" y="15" fill="#FFF" font-family="sans-serif" font-weight="900" font-size="8" text-anchor="middle">PHP</text></svg>`,

  laravel: `<svg viewBox="0 0 24 24" width="36" height="36"><path d="M3 7L12 2L21 7V17L12 22L3 17V7Z" fill="#FF2D20"/><path d="M12 6L17 9V15L12 18L7 15V9L12 6Z" fill="#FFF"/></svg>`,

  dart: `<svg viewBox="0 0 24 24" width="36" height="36"><path d="M4 4L12 2L20 6L12 22L4 16L4 4Z" fill="#0175C2"/><path d="M12 2L20 6L16 14L8 10L12 2Z" fill="#02569B"/><path d="M8 10L16 14L12 22L4 16L8 10Z" fill="#29B6F6"/></svg>`,

  flutter: `<svg viewBox="0 0 24 24" width="36" height="36"><path d="M13.5 2L3 12.5L6.5 16L19.5 3H13.5Z" fill="#02569B"/><path d="M13.5 13L8 18.5L11.5 22L19.5 14H13.5Z" fill="#0175C2"/><path d="M10 16.5L12.5 14L15 16.5L12.5 19L10 16.5Z" fill="#4AC7F0"/></svg>`,

  react: `<svg viewBox="0 0 24 24" width="36" height="36"><ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" stroke-width="1.8" fill="none"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" stroke-width="1.8" fill="none" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" stroke-width="1.8" fill="none" transform="rotate(120 12 12)"/><circle cx="12" cy="12" r="2" fill="#61DAFB"/></svg>`,

  vue: `<svg viewBox="0 0 24 24" width="36" height="36"><path d="M2 3H6.5L12 12.5L17.5 3H22L12 21L2 3Z" fill="#41B883"/><path d="M6.5 3H10.5L12 6L13.5 3H17.5L12 13L6.5 3Z" fill="#34495E"/></svg>`,

  nodejs: `<svg viewBox="0 0 24 24" width="36" height="36"><path d="M12 2L21 7V17L12 22L3 17V7L12 2Z" fill="#339933"/><path d="M12 5L18 8.5V15.5L12 19L6 15.5V8.5L12 5Z" fill="#FFF"/><circle cx="12" cy="12" r="3" fill="#339933"/></svg>`,

  fastapi: `<svg viewBox="0 0 24 24" width="36" height="36"><circle cx="12" cy="12" r="10" fill="#05998B"/><path d="M13 4L7 13H12L11 20L17 11H12L13 4Z" fill="#FFF"/></svg>`,

  docker: `<svg viewBox="0 0 24 24" width="36" height="36"><path d="M2 12C2 17 6 21 12 21C18 21 22 17 22 12C22 12 20 12 19 10C17 7 14 8 13 8C13 8 12 7 10 7C7 7 6 9 6 11C4 11 2 11 2 12Z" fill="#2496ED"/><rect x="5" y="8" width="2" height="2" fill="#FFF"/><rect x="8" y="8" width="2" height="2" fill="#FFF"/><rect x="8" y="5" width="2" height="2" fill="#FFF"/><rect x="11" y="8" width="2" height="2" fill="#FFF"/><rect x="11" y="5" width="2" height="2" fill="#FFF"/><rect x="14" y="8" width="2" height="2" fill="#FFF"/></svg>`,

  postgres: `<svg viewBox="0 0 24 24" width="36" height="36"><path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2Z" fill="#4169E1"/><circle cx="9" cy="10" r="1.5" fill="#FFF"/><circle cx="15" cy="10" r="1.5" fill="#FFF"/><path d="M9 15C10 16 14 16 15 15" stroke="#FFF" stroke-width="1.8" stroke-linecap="round"/></svg>`,

  mysql: `<svg viewBox="0 0 24 24" width="36" height="36"><path d="M3 14C3 9 7 4 12 4C17 4 21 9 21 14C21 18 17 20 12 20C7 20 3 18 3 14Z" fill="#00758F"/><path d="M7 13C8 10 16 10 17 13" stroke="#F29111" stroke-width="2" stroke-linecap="round"/></svg>`,

  redis: `<svg viewBox="0 0 24 24" width="36" height="36"><path d="M12 2L3 7L12 12L21 7L12 2Z" fill="#DC382D"/><path d="M3 12L12 17L21 12" stroke="#A8201A" stroke-width="2.5"/><path d="M3 17L12 22L21 17" stroke="#A8201A" stroke-width="2.5"/></svg>`,

  tailwind: `<svg viewBox="0 0 24 24" width="36" height="36"><path d="M12 6C9 6 7.5 7.5 7.5 10.5C8.5 9 10 8.5 11.5 9C13 9.5 14 11 15.5 11C18 11 19.5 9.5 19.5 6.5C18.5 8 17 8.5 15.5 8C14 7.5 13 6 12 6ZM4.5 12C1.5 12 0 13.5 0 16.5C1 15 2.5 14.5 4 15C5.5 15.5 6.5 17 8 17C10.5 17 12 15.5 12 12.5C11 14 9.5 14.5 8 14C6.5 13.5 5.5 12 4.5 12Z" fill="#06B6D4"/></svg>`,

  figma: `<svg viewBox="0 0 24 24" width="36" height="36"><path d="M8 2H12V8H8C6.3 8 5 6.7 5 5C5 3.3 6.3 2 8 2Z" fill="#F24E1E"/><path d="M12 2H16C17.7 2 19 3.3 19 5C19 6.7 17.7 8 16 8H12V2Z" fill="#FF7262"/><path d="M8 8H12V14H8C6.3 14 5 12.7 5 11C5 9.3 6.3 8 8 8Z" fill="#A259FF"/><path d="M12 8H16C17.7 8 19 9.3 19 11C19 12.7 17.7 14 16 14C14.3 14 13 12.7 13 11V8Z" fill="#1ABCFE"/><circle cx="12" cy="11" r="3" fill="#1ABCFE"/><path d="M8 14H12V18C12 19.7 10.7 21 9 21C7.3 21 6 19.7 6 18C6 16.3 7.3 14 8 14Z" fill="#0ACF83"/></svg>`,

  git: `<svg viewBox="0 0 24 24" width="36" height="36"><path d="M21.5 10.5L13.5 2.5C12.8 1.8 11.7 1.8 11 2.5L2.5 11C1.8 11.7 1.8 12.8 2.5 13.5L10.5 21.5C11.2 22.2 12.3 22.2 13 21.5L21.5 13C22.2 12.3 22.2 11.2 21.5 10.5Z" fill="#F05032"/><circle cx="8" cy="12" r="2" fill="#FFF"/><circle cx="16" cy="12" r="2" fill="#FFF"/><circle cx="12" cy="8" r="2" fill="#FFF"/><line x1="8" y1="12" x2="16" y2="12" stroke="#FFF" stroke-width="2"/><line x1="12" y1="8" x2="12" y2="12" stroke="#FFF" stroke-width="2"/></svg>`,

  linux: `<svg viewBox="0 0 24 24" width="36" height="36"><ellipse cx="12" cy="12" rx="7" ry="9" fill="#000"/><ellipse cx="12" cy="13" rx="5" ry="7" fill="#FFF"/><circle cx="10" cy="8" r="1.2" fill="#000"/><circle cx="14" cy="8" r="1.2" fill="#000"/><path d="M10 10C11 12 13 12 14 10" stroke="#FFA500" stroke-width="2" stroke-linecap="round"/><ellipse cx="8" cy="20" rx="3" ry="1.5" fill="#FFA500"/><ellipse cx="16" cy="20" rx="3" ry="1.5" fill="#FFA500"/></svg>`,

  pytorch: `<svg viewBox="0 0 24 24" width="36" height="36"><path d="M13.5 2.5L11.8 4.2C14.7 5.2 16.8 8 16.8 11.3C16.8 15.3 13.5 18.5 9.5 18.5C5.5 18.5 2.3 15.3 2.3 11.3C2.3 8.3 4.1 5.7 6.7 4.6L6.2 2.8C2.8 4.2 0.5 7.5 0.5 11.3C0.5 16.3 4.5 20.3 9.5 20.3C14.5 20.3 18.5 16.3 18.5 11.3C18.5 7.1 15.8 3.5 12 2.5" fill="#EE4C2C"/><circle cx="15.5" cy="5.5" r="1.5" fill="#EE4C2C"/></svg>`,

  tensorflow: `<svg viewBox="0 0 24 24" width="36" height="36"><path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" fill="#FF6F00"/><path d="M12 4L18 8V16L12 20L6 16V8L12 4Z" fill="#FFA000"/><path d="M12 6L16 9V15L12 18L8 15V9L12 6Z" fill="#FFF"/></svg>`,

  opencv: `<svg viewBox="0 0 24 24" width="36" height="36"><circle cx="12" cy="7" r="4.5" fill="#EA3829"/><circle cx="6.5" cy="16.5" r="4.5" fill="#2DA543"/><circle cx="17.5" cy="16.5" r="4.5" fill="#1C5EAB"/></svg>`,

  html: `<svg viewBox="0 0 24 24" width="36" height="36"><path d="M3 2L5 20L12 22L19 20L21 2H3Z" fill="#E34F26"/><path d="M12 4V20L17.5 18.5L19 4H12Z" fill="#EF652A"/><path d="M7 7H17L16.5 11H9.5L10 14H16L15.5 17L12 18L8.5 17L8.2 13H6.2L6.8 18.5L12 20L17.2 18.5L18 7H7Z" fill="#FFF"/></svg>`,

  css: `<svg viewBox="0 0 24 24" width="36" height="36"><path d="M3 2L5 20L12 22L19 20L21 2H3Z" fill="#1572B6"/><path d="M12 4V20L17.5 18.5L19 4H12Z" fill="#33A9DC"/><path d="M7 7H17L16.5 11H9.5L10 14H16L15.5 17L12 18L8.5 17L8.2 13H6.2L6.8 18.5L12 20L17.2 18.5L18 7H7Z" fill="#FFF"/></svg>`
};

window.TECH_ICONS = TECH_ICONS;
