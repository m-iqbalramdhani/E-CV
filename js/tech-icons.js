/**
 * Official SVG Icons for Tech Stacks
 * High-definition vector icons with original brand colors
 */

const TECH_ICONS = {
  // --- Programming & Fullstack Languages ---
  golang: `<svg viewBox="0 0 24 24" width="40" height="40" fill="none"><path d="M3.5 13.5C2.5 13.5 1.5 12.8 1.5 11.5C1.5 10.2 2.5 9.5 3.5 9.5H8.5V13.5H3.5Z" fill="#00ACD7"/><path d="M9.5 6.5C8.5 6.5 7.5 5.8 7.5 4.5C7.5 3.2 8.5 2.5 9.5 2.5H16.5C17.5 2.5 18.5 3.2 18.5 4.5C18.5 5.8 17.5 6.5 16.5 6.5H9.5Z" fill="#00ACD7"/><path d="M12.5 20.5C11.5 20.5 10.5 19.8 10.5 18.5C10.5 17.2 11.5 16.5 12.5 16.5H20.5C21.5 16.5 22.5 17.2 22.5 18.5C22.5 19.8 21.5 20.5 20.5 20.5H12.5Z" fill="#00ACD7"/><circle cx="17.5" cy="11.5" r="4.5" stroke="#00ACD7" stroke-width="2.5"/></svg>`,
  
  typescript: `<svg viewBox="0 0 24 24" width="40" height="40"><rect width="24" height="24" rx="4" fill="#3178C6"/><path d="M6 10.5H12M9 10.5V18.5" stroke="#FFF" stroke-width="2.2" stroke-linecap="round"/><path d="M18.5 12C18 11 16.8 10.5 15.5 10.8C14.2 11.2 13.8 12.2 14 13.2C14.4 14.8 18.5 14.2 18.5 16.5C18.5 18 17 18.8 15.2 18.5C14 18.2 13.3 17.5 13 16.8" stroke="#FFF" stroke-width="2" stroke-linecap="round"/></svg>`,
  
  javascript: `<svg viewBox="0 0 24 24" width="40" height="40"><rect width="24" height="24" rx="4" fill="#F7DF1E"/><path d="M7 12V18C7 19.5 5.5 19.5 4.5 18.8" stroke="#000" stroke-width="2.2" stroke-linecap="round"/><path d="M19 13.5C18.5 12.2 17 11.5 15.5 12C14 12.5 13.8 13.8 14.2 15C14.8 16.8 19.2 16 19 18.2C18.8 19.8 17 20.2 15.2 19.8C13.8 19.4 13.2 18.5 13 17.5" stroke="#000" stroke-width="2" stroke-linecap="round"/></svg>`,
  
  php: `<svg viewBox="0 0 24 24" width="40" height="40"><ellipse cx="12" cy="12" rx="11" ry="8" fill="#777BB4"/><text x="12" y="15" fill="#FFF" font-family="sans-serif" font-weight="900" font-size="8" text-anchor="middle">PHP</text></svg>`,

  laravel: `<svg viewBox="0 0 24 24" width="40" height="40"><path d="M3 7L12 2L21 7V17L12 22L3 17V7Z" fill="#FF2D20"/><path d="M12 6L17 9V15L12 18L7 15V9L12 6Z" fill="#FFF"/></svg>`,

  react: `<svg viewBox="0 0 24 24" width="40" height="40"><ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" stroke-width="1.8" fill="none"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" stroke-width="1.8" fill="none" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" stroke-width="1.8" fill="none" transform="rotate(120 12 12)"/><circle cx="12" cy="12" r="2" fill="#61DAFB"/></svg>`,

  vue: `<svg viewBox="0 0 24 24" width="40" height="40"><path d="M2 3H6.5L12 12.5L17.5 3H22L12 21L2 3Z" fill="#41B883"/><path d="M6.5 3H10.5L12 6L13.5 3H17.5L12 13L6.5 3Z" fill="#34495E"/></svg>`,

  nodejs: `<svg viewBox="0 0 24 24" width="40" height="40"><path d="M12 2L21 7V17L12 22L3 17V7L12 2Z" fill="#339933"/><path d="M12 5L18 8.5V15.5L12 19L6 15.5V8.5L12 5Z" fill="#FFF"/><circle cx="12" cy="12" r="3" fill="#339933"/></svg>`,

  // --- Database Engines (Iqbal's Core DB) ---
  postgres: `<svg viewBox="0 0 24 24" width="40" height="40"><path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2Z" fill="#336791"/><circle cx="9" cy="10" r="1.5" fill="#FFF"/><circle cx="15" cy="10" r="1.5" fill="#FFF"/><path d="M9 15C10 16 14 16 15 15" stroke="#FFF" stroke-width="1.8" stroke-linecap="round"/><path d="M12 12V15" stroke="#FFF" stroke-width="1.6"/></svg>`,

  mysql: `<svg viewBox="0 0 24 24" width="40" height="40"><path d="M3 14C3 9 7 4 12 4C17 4 21 9 21 14C21 18 17 20 12 20C7 20 3 18 3 14Z" fill="#00758F"/><path d="M7 13C8 10 16 10 17 13" stroke="#F29111" stroke-width="2.2" stroke-linecap="round"/></svg>`,

  redis: `<svg viewBox="0 0 24 24" width="40" height="40"><path d="M12 2L3 7L12 12L21 7L12 2Z" fill="#DC382D"/><path d="M3 12L12 17L21 12" stroke="#A8201A" stroke-width="2.5"/><path d="M3 17L12 22L21 17" stroke="#A8201A" stroke-width="2.5"/></svg>`,

  mongodb: `<svg viewBox="0 0 24 24" width="40" height="40"><path d="M12 2C11.8 2 11.6 2.3 11.6 2.6C10.7 6.8 5 9.8 5 15C5 19 8.2 22 12 22C15.8 22 19 19 19 15C19 9.8 13.3 6.8 12.4 2.6C12.4 2.3 12.2 2 12 2ZM12 4.2C13.5 7.8 17.2 10.5 17.2 15C17.2 18 14.9 20.3 12 20.5V4.2Z" fill="#47A248"/></svg>`,

  docker: `<svg viewBox="0 0 24 24" width="40" height="40"><path d="M2 12C2 17 6 21 12 21C18 21 22 17 22 12C22 12 20 12 19 10C17 7 14 8 13 8C13 8 12 7 10 7C7 7 6 9 6 11C4 11 2 11 2 12Z" fill="#2496ED"/><rect x="5" y="8" width="2" height="2" fill="#FFF"/><rect x="8" y="8" width="2" height="2" fill="#FFF"/><rect x="8" y="5" width="2" height="2" fill="#FFF"/><rect x="11" y="8" width="2" height="2" fill="#FFF"/><rect x="11" y="5" width="2" height="2" fill="#FFF"/><rect x="14" y="8" width="2" height="2" fill="#FFF"/></svg>`,

  git: `<svg viewBox="0 0 24 24" width="40" height="40"><path d="M21.5 10.5L13.5 2.5C12.8 1.8 11.7 1.8 11 2.5L2.5 11C1.8 11.7 1.8 12.8 2.5 13.5L10.5 21.5C11.2 22.2 12.3 22.2 13 21.5L21.5 13C22.2 12.3 22.2 11.2 21.5 10.5Z" fill="#F05032"/><circle cx="8" cy="12" r="2" fill="#FFF"/><circle cx="16" cy="12" r="2" fill="#FFF"/><circle cx="12" cy="8" r="2" fill="#FFF"/><line x1="8" y1="12" x2="16" y2="12" stroke="#FFF" stroke-width="2"/><line x1="12" y1="8" x2="12" y2="12" stroke="#FFF" stroke-width="2"/></svg>`,

  linux: `<svg viewBox="0 0 24 24" width="40" height="40"><ellipse cx="12" cy="12" rx="7" ry="9" fill="#000"/><ellipse cx="12" cy="13" rx="5" ry="7" fill="#FFF"/><circle cx="10" cy="8" r="1.2" fill="#000"/><circle cx="14" cy="8" r="1.2" fill="#000"/><path d="M10 10C11 12 13 12 14 10" stroke="#FFA500" stroke-width="2" stroke-linecap="round"/><ellipse cx="8" cy="20" rx="3" ry="1.5" fill="#FFA500"/><ellipse cx="16" cy="20" rx="3" ry="1.5" fill="#FFA500"/></svg>`,

  tailwind: `<svg viewBox="0 0 24 24" width="40" height="40"><path d="M12 6C9 6 7.5 7.5 7.5 10.5C8.5 9 10 8.5 11.5 9C13 9.5 14 11 15.5 11C18 11 19.5 9.5 19.5 6.5C18.5 8 17 8.5 15.5 8C14 7.5 13 6 12 6ZM4.5 12C1.5 12 0 13.5 0 16.5C1 15 2.5 14.5 4 15C5.5 15.5 6.5 17 8 17C10.5 17 12 15.5 12 12.5C11 14 9.5 14.5 8 14C6.5 13.5 5.5 12 4.5 12Z" fill="#06B6D4"/></svg>`,

  // --- QA / Software Tester Tools (Nida's Core) ---
  postman: `<svg viewBox="0 0 24 24" width="40" height="40"><circle cx="12" cy="12" r="11" fill="#FF6C37"/><path d="M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4ZM15.5 9.5L13.8 14.2L12 13.5L13.2 10.2L9.5 11.5L8.5 10L14.5 7.5L15.5 9.5Z" fill="#FFF"/></svg>`,

  cypress: `<svg viewBox="0 0 24 24" width="40" height="40"><circle cx="12" cy="12" r="11" fill="#1B1E2B"/><path d="M9.5 8C7 8 5.5 9.5 5.5 12C5.5 14.5 7 16 9.5 16C11.5 16 12.8 15 13.2 13.5H11.2C10.9 14.2 10.3 14.5 9.5 14.5C8 14.5 7.2 13.5 7.2 12C7.2 10.5 8 9.5 9.5 9.5C10.3 9.5 10.9 9.8 11.2 10.5H13.2C12.8 9 11.5 8 9.5 8ZM14.2 9.5L16 14L17.8 9.5H19.5L16.8 16H15.2L12.5 9.5H14.2Z" fill="#69D3A7"/></svg>`,

  playwright: `<svg viewBox="0 0 24 24" width="40" height="40" fill="none"><path d="M9 4C5.5 4 3 6.5 3 10C3 13.5 5.5 16 9 16C12.5 16 15 13.5 15 10C15 6.5 12.5 4 9 4Z" fill="#2EAD33"/><path d="M15 8C11.5 8 9 10.5 9 14C9 17.5 11.5 20 15 20C18.5 20 21 17.5 21 14C21 10.5 18.5 8 15 8Z" fill="#E24035"/><circle cx="8" cy="9" r="1.5" fill="#FFF"/><circle cx="16" cy="13" r="1.5" fill="#FFF"/></svg>`,

  selenium: `<svg viewBox="0 0 24 24" width="40" height="40"><rect width="24" height="24" rx="5" fill="#00B400"/><rect x="3" y="3" width="18" height="18" rx="3" fill="#FFF"/><text x="12" y="16" fill="#00B400" font-family="sans-serif" font-weight="900" font-size="11" text-anchor="middle">Se</text></svg>`,

  jest: `<svg viewBox="0 0 24 24" width="40" height="40"><circle cx="12" cy="12" r="11" fill="#C21325"/><path d="M7 6C9 6 10.5 8 10.5 10C10.5 12 8.5 14 6 14C6 11 6 8 7 6ZM17 6C15 6 13.5 8 13.5 10C13.5 12 15.5 14 18 14C18 11 18 8 17 6ZM12 9C10.5 9 9.5 10.5 9.5 12C9.5 14.5 11 17 12 19C13 17 14.5 14.5 14.5 12C14.5 10.5 13.5 9 12 9Z" fill="#FFF"/></svg>`,

  jmeter: `<svg viewBox="0 0 24 24" width="40" height="40"><rect width="24" height="24" rx="5" fill="#D22128"/><path d="M6 18L18 6M6 12L12 6M12 18L18 12" stroke="#FFF" stroke-width="2.6" stroke-linecap="round"/><circle cx="15" cy="9" r="2.2" fill="#FFD700"/></svg>`,

  k6: `<svg viewBox="0 0 24 24" width="40" height="40"><rect width="24" height="24" rx="5" fill="#7D64FF"/><path d="M7 5.5V18.5M7 12H11L15.5 5.5M11 12L16.5 18.5" stroke="#FFF" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  sonarqube: `<svg viewBox="0 0 24 24" width="40" height="40"><rect width="24" height="24" rx="5" fill="#4B9FD5"/><path d="M5 19C5 11.3 11.3 5 19 5" stroke="#FFF" stroke-width="2.5" stroke-linecap="round"/><path d="M5 19C5 14.6 8.6 11 13 11" stroke="#FFF" stroke-width="2.2" stroke-linecap="round"/><circle cx="5" cy="19" r="2" fill="#FFF"/></svg>`,

  katalon: `<svg viewBox="0 0 24 24" width="40" height="40"><rect width="24" height="24" rx="5" fill="#329632"/><path d="M6 5V19M6 12L14.5 5M8.5 10L15.5 19" stroke="#FFF" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  swagger: `<svg viewBox="0 0 24 24" width="40" height="40"><circle cx="12" cy="12" r="11" fill="#85EA2D"/><circle cx="12" cy="12" r="7.5" fill="#173647"/><text x="12" y="15.5" fill="#85EA2D" font-family="monospace" font-weight="900" font-size="9" text-anchor="middle">{ }</text></svg>`,

  // --- Project Management / PM Tools (Viola's Core) ---
  jira: `<svg viewBox="0 0 24 24" width="40" height="40" fill="none"><rect width="24" height="24" rx="5" fill="#0052CC"/><path d="M12 4L6 10L12 16L18 10L12 4Z" fill="#FFF"/><path d="M12 10L9 13L12 16L15 13L12 10Z" fill="#2684FF"/><path d="M12 16L6 22H18L12 16Z" fill="#FFF" fill-opacity="0.8"/></svg>`,

  trello: `<svg viewBox="0 0 24 24" width="44" height="44" fill="none"><rect width="24" height="24" rx="5" fill="#0079BF"/><rect x="4" y="4" width="6.5" height="13" rx="1.5" fill="#FFFFFF"/><rect x="13.5" y="4" width="6.5" height="8" rx="1.5" fill="#FFFFFF"/></svg>`,

  notion: `<svg viewBox="0 0 24 24" width="40" height="40" fill="none"><rect width="24" height="24" rx="5" fill="#000"/><path d="M5 6.5L14 5.5L18.5 7V18L10 19L5 18V6.5Z" fill="#FFF"/><path d="M7.5 8.5V16L9.5 16V11.2L14.5 16.2H16.5V8.8L14.5 8.8V13.5L9.5 8.5H7.5Z" fill="#000"/></svg>`,

  figma: `<svg viewBox="0 0 38 57" width="44" height="44" fill="none"><path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/><path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/><path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/><path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/><path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/></svg>`,

  confluence: `<svg viewBox="0 0 24 24" width="40" height="40" fill="none"><rect width="24" height="24" rx="5" fill="#0052CC"/><path d="M5 16.5C7.5 14.5 9.5 13 12 14C14.5 15 16.5 17 20 16C17 20 12 21 7 20C5.5 19 4.5 18 5 16.5Z" fill="#FFF"/><path d="M19 7.5C16.5 9.5 14.5 11 12 10C9.5 9 7.5 7 4 8C7 4 12 3 17 4C18.5 5 19.5 6 19 7.5Z" fill="#2684FF"/></svg>`,

  miro: `<svg viewBox="0 0 24 24" width="40" height="40"><rect width="24" height="24" rx="5" fill="#FFD02F"/><path d="M17.5 4.5L14 9.5H11.5L15 4.5H17.5ZM12.5 4.5L7.5 12H5L10 4.5H12.5ZM7.5 12L12.5 19.5H10L5 12H7.5ZM15 14.5L17.5 19.5H15L12.5 14.5H15Z" fill="#050038"/></svg>`,

  slack: `<svg viewBox="0 0 24 24" width="40" height="40" fill="none"><path d="M5.5 10.5C4.1 10.5 3 9.4 3 8C3 6.6 4.1 5.5 5.5 5.5C6.9 5.5 8 6.6 8 8V10.5H5.5Z" fill="#E01E5A"/><path d="M9.5 8C9.5 6.6 10.6 5.5 12 5.5C13.4 5.5 14.5 6.6 14.5 8V14.5C14.5 15.9 13.4 17 12 17C10.6 17 9.5 15.9 9.5 14.5V8Z" fill="#E01E5A"/><path d="M13.5 5.5C13.5 4.1 14.6 3 16 3C17.4 3 18.5 4.1 18.5 5.5C18.5 6.9 17.4 8 16 8H13.5V5.5Z" fill="#36C5F0"/><path d="M16 9.5C17.4 9.5 18.5 10.6 18.5 12C18.5 13.4 17.4 14.5 16 14.5H9.5C8.1 14.5 7 13.4 7 12C7 10.6 8.1 9.5 9.5 9.5H16Z" fill="#36C5F0"/><path d="M18.5 13.5C19.9 13.5 21 14.6 21 16C21 17.4 19.9 18.5 18.5 18.5C17.1 18.5 16 17.4 16 16V13.5H18.5Z" fill="#2EB67D"/><path d="M14.5 16C14.5 17.4 13.4 18.5 12 18.5C10.6 18.5 9.5 17.4 9.5 16V9.5C9.5 8.1 10.6 7 12 7C13.4 7 14.5 8.1 14.5 9.5V16Z" fill="#2EB67D"/><path d="M10.5 18.5C10.5 19.9 9.4 21 8 21C6.6 21 5.5 19.9 5.5 18.5C5.5 17.1 6.6 16 8 16H10.5V18.5Z" fill="#ECB22E"/><path d="M8 14.5C6.6 14.5 5.5 13.4 5.5 12C5.5 10.6 6.6 9.5 8 9.5H14.5C15.9 9.5 17 10.6 17 12C17 13.4 15.9 14.5 14.5 14.5H8Z" fill="#ECB22E"/></svg>`,

  asana: `<svg viewBox="0 0 24 24" width="40" height="40" fill="none"><circle cx="12" cy="6.5" r="4.2" fill="#F06A6A"/><circle cx="6" cy="16.5" r="4.2" fill="#F06A6A"/><circle cx="18" cy="16.5" r="4.2" fill="#F06A6A"/></svg>`,

  clickup: `<svg viewBox="0 0 24 24" width="40" height="40" fill="none"><path d="M4 14.5L12 7.5L20 14.5L16.8 17.8L12 13.5L7.2 17.8L4 14.5Z" fill="#7B68EE"/><path d="M5.5 18C7.5 20.2 9.5 21 12 21C14.5 21 16.5 20.2 18.5 18L16.5 16C15.2 17.4 13.8 18 12 18C10.2 18 8.8 17.4 7.5 16L5.5 18Z" fill="#FF007A"/></svg>`,

  sheets: `<svg viewBox="0 0 24 24" width="40" height="40"><rect width="24" height="24" rx="4" fill="#0F9D58"/><rect x="5" y="5" width="14" height="14" rx="2" fill="#FFF"/><path d="M5 9.5H19M5 14H19M10.5 5V19M15 5V19" stroke="#0F9D58" stroke-width="1.6"/></svg>`,

  word: `<svg viewBox="0 0 24 24" width="44" height="44" fill="none"><rect width="24" height="24" rx="5" fill="#185ABD"/><path d="M5.5 6.5L8.5 17.5H10.5L12 12L13.5 17.5H15.5L18.5 6.5H16.2L14.4 14.5L12.8 6.5H11.2L9.6 14.5L7.8 6.5H5.5Z" fill="#FFFFFF"/></svg>`,

  excel: `<svg viewBox="0 0 24 24" width="44" height="44" fill="none"><rect width="24" height="24" rx="5" fill="#107C41"/><path d="M6.5 6.5L10.5 12L6.5 17.5H9L12 13.5L15 17.5H17.5L13.5 12L17.5 6.5H15L12 10.5L9 6.5H6.5Z" fill="#FFFFFF"/></svg>`,

  powerpoint: `<svg viewBox="0 0 24 24" width="40" height="40"><rect width="24" height="24" rx="4" fill="#C43E1C"/><path d="M7 6.5H13C15.2 6.5 17 8.3 17 10.5C17 12.7 15.2 14.5 13 14.5H10V17.5H7V6.5ZM10 11.8H13C13.8 11.8 14.5 11.1 14.5 10.5C14.5 9.9 13.8 9.2 13 9.2H10V11.8Z" fill="#FFF"/></svg>`,

  canva: `<svg viewBox="0 0 24 24" width="44" height="44" fill="none"><rect width="24" height="24" rx="5" fill="#00C4CC"/><path d="M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C13.8 20 15.5 19.4 16.8 18.3L15.4 16.9C14.4 17.6 13.2 18 12 18C8.69 18 6 15.31 6 12C6 8.69 8.69 6 12 6C14.3 6 16.2 7.3 17.2 9.2L18.9 8.2C17.5 5.7 15 4 12 4Z" fill="#FFFFFF"/></svg>`,

  vscode: `<svg viewBox="0 0 24 24" width="44" height="44" fill="none"><rect width="24" height="24" rx="5" fill="#007ACC"/><path d="M17.5 3.5L13 7.5L8.5 4.5L5 6.5V17.5L8.5 19.5L13 16.5L17.5 20.5L20 18.5V5.5L17.5 3.5ZM17.5 8V16L14 12L17.5 8Z" fill="#FFFFFF"/></svg>`,

  drawio: `<svg viewBox="0 0 24 24" width="44" height="44" fill="none"><rect width="24" height="24" rx="5" fill="#F08705"/><rect x="4.5" y="4.5" width="6.5" height="6.5" rx="1.5" fill="#FFFFFF"/><rect x="13" y="13" width="6.5" height="6.5" rx="1.5" fill="#FFFFFF"/><path d="M7.7 11V16.2H13" stroke="#FFFFFF" stroke-width="2.2" fill="none"/></svg>`,

  xampp: `<svg viewBox="0 0 24 24" width="44" height="44" fill="none"><rect width="24" height="24" rx="5" fill="#FB7A24"/><path d="M6 6L18 18M18 6L6 18" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/></svg>`,

  apk: `<svg viewBox="0 0 24 24" width="44" height="44" fill="none"><rect width="24" height="24" rx="5" fill="#3DDC84"/><path d="M7 10C7 7.5 9 6 12 6C15 6 17 7.5 17 10H7Z" fill="#FFFFFF"/><circle cx="9.5" cy="8.2" r="0.75" fill="#3DDC84"/><circle cx="14.5" cy="8.2" r="0.75" fill="#3DDC84"/><line x1="8.5" y1="4.2" x2="10" y2="6.2" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round"/><line x1="15.5" y1="4.2" x2="14" y2="6.2" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round"/><path d="M7 11.5H17V17C17 17.8 16.3 18.5 15.5 18.5H8.5C7.7 18.5 7 17.8 7 17V11.5Z" fill="#FFFFFF"/><text x="12" y="16" fill="#3DDC84" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="4.2" text-anchor="middle" letter-spacing="0.5">APK</text></svg>`,

  html: `<svg viewBox="0 0 24 24" width="44" height="44" fill="none"><path d="M3 2L4.8 19.8L12 22L19.2 19.8L21 2H3Z" fill="#E34F26"/><path d="M12 3.8V20.2L17.7 18.6L19.2 3.8H12Z" fill="#EF652A"/><path d="M12 7.7H7.4L7.7 10.9H12V14.1L9.6 13.5L9.4 11.8H7.3L7.7 16.3L12 17.5V14.1L12.1 14.1L16.2 14.1L16.6 9.8L16.7 7.7H12Z" fill="#FFFFFF"/></svg>`,

  css: `<svg viewBox="0 0 24 24" width="44" height="44" fill="none"><path d="M3 2L4.8 19.8L12 22L19.2 19.8L21 2H3Z" fill="#1572B6"/><path d="M12 3.8V20.2L17.7 18.6L19.2 3.8H12Z" fill="#33A9DC"/><path d="M12 7.7H16.6L16.3 10.9H12V14.1L14.4 13.5L14.6 11.8H16.7L16.3 16.3L12 17.5V14.1L11.9 14.1L7.8 14.1L7.4 9.8L7.3 7.7H12Z" fill="#FFFFFF"/></svg>`,

  powerbi: `<svg viewBox="0 0 24 24" width="44" height="44" fill="none"><rect width="24" height="24" rx="5" fill="#F2C811"/><rect x="4.5" y="13.5" width="3.5" height="6.5" rx="1" fill="#242424"/><rect x="10.25" y="9.5" width="3.5" height="10.5" rx="1" fill="#242424"/><rect x="16" y="5" width="3.5" height="15" rx="1" fill="#242424"/></svg>`,

  dbdesigner: `<svg viewBox="0 0 24 24" width="44" height="44" fill="none"><rect width="24" height="24" rx="5" fill="#1E88E5"/><rect x="3.5" y="4" width="7.5" height="6.5" rx="1" fill="#FFFFFF" fill-opacity="0.95"/><rect x="3.5" y="4" width="7.5" height="2.2" rx="1" fill="#0D47A1"/><rect x="13" y="13.5" width="7.5" height="6.5" rx="1" fill="#FFFFFF" fill-opacity="0.95"/><rect x="13" y="13.5" width="7.5" height="2.2" rx="1" fill="#0D47A1"/><path d="M11 7.25H14.5C15.6 7.25 16.5 8.15 16.5 9.25V13.5" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round"/><circle cx="11" cy="7.25" r="1.2" fill="#FFD54F"/><polyline points="14.5 11.5 16.5 13.5 18.5 11.5" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  cisco: `<svg viewBox="0 0 24 24" width="44" height="44" fill="none"><rect width="24" height="24" rx="5" fill="#049FD9"/><line x1="4" y1="13" x2="4" y2="18" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round"/><line x1="6" y1="10" x2="6" y2="18" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round"/><line x1="8" y1="6" x2="8" y2="18" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round"/><line x1="10" y1="10" x2="10" y2="18" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round"/><line x1="12" y1="6" x2="12" y2="18" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round"/><line x1="14" y1="10" x2="14" y2="18" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round"/><line x1="16" y1="6" x2="16" y2="18" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round"/><line x1="18" y1="10" x2="18" y2="18" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round"/><line x1="20" y1="13" x2="20" y2="18" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round"/></svg>
};

window.TECH_ICONS = TECH_ICONS;
