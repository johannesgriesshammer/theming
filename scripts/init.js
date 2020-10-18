// import { themeButtons } from './elements';
// import { defaultTheme } from './utils';
// import { handleClick } from './handlers';
import Theme from './Theme';

// Theme-Class?
// Store array of themes
// Apply default theme (Light)
// Set a default theme
// Select a theme
// Store selected theme
// store element that watches

export function init() {
    // defaultTheme();

    const themes = new Theme('.theme-switch');
    console.log(themes.themeElements);

    // themeButtons.forEach(button => {
    //     button.addEventListener('click', handleClick);
    // });
}