import { body } from './elements';

export function handleClick(event) {
    const { theme } = event.target.dataset;

    // if(theme === 'light') {
    //     body.classList.add('theme-light');
    //     body.classList.remove('theme-dark');
    //     localStorage.setItem('theme', `theme-${theme}`);
    // }

    // if(theme === 'dark') {
    //     body.classList.add('theme-dark');
    //     body.classList.remove('theme-light');
    //     localStorage.setItem('theme', `theme-${theme}`);
    // }
}