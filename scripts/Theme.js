class Theme {
    constructor(parentElementClass) {
        this._parentElementClass = document.querySelector(parentElementClass);
        this._allThemes = this._parentElementClass.querySelectorAll('button');
        this._themes = [...this._allThemes].map(theme => `theme-${theme.dataset.theme}`);
        this._allThemes.forEach(button => {
            button.addEventListener('click', this.applyTheme);
        });
        this._appliedThemes = [];
    }

    get parentElementClass() {
        return this._parentElementClass;
    }

    get themes() {
        return this._themes;
    }

    get themeElements() {
        return this._allThemes;
    }

    applyTheme(event) {
        const { theme } = event.target.dataset;
        const body = document.body;

        this._appliedThemes.push(theme);

        console.log(body, this._appliedThemes[0], this._appliedThemes);

        body.classList.add(`theme-${theme}`);

        console.log(`theme-${theme}`);
    }
}

export default Theme;

// new Theme('.theme-switch')