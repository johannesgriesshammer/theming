import { themeButtons } from './elements';
import { defaultTheme } from './utils';
import { handleClick } from './handlers';

export function init() {
    defaultTheme();

    themeButtons.forEach(button => {
        button.addEventListener('click', handleClick);
    });
}