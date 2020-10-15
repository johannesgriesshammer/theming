import { body } from './elements';

export function defaultTheme() {
    const theme = localStorage.getItem('theme');
    theme ? body.classList.add(theme) : body.classList.add('theme-light');
}