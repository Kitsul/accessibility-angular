import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AccessibilityComponent {
    constructor() {
        this.fontMultiplier = 1;
        this.contrastBrightClick = false;
        this.contrastDarkClick = false;
        this.noAnimationsClick = false;
        this.colorBlindClick = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    textMinus_Click() {
        this.resizeText(-1);
    }
    /**
     * @return {?}
     */
    textPlus_Click() {
        this.resizeText(1);
    }
    /**
     * @return {?}
     */
    openAccesabilityMenu_Click() {
        document.getElementById('accesabilityMenu').classList.toggle('open');
    }
    /**
     * @param {?} el
     * @return {?}
     */
    contrastBright_Click(el) {
        this.action_Click(this.contrastBrightClick, 'accessible_contrast_white');
        this.contrastBrightClick = !this.contrastBrightClick;
    }
    /**
     * @return {?}
     */
    contrastDark_Click() {
        this.action_Click(this.contrastDarkClick, 'accessible_contrast');
        this.contrastDarkClick = !this.contrastDarkClick;
    }
    /**
     * @return {?}
     */
    noAnimations_Click() {
        this.action_Click(this.noAnimationsClick, 'accessible_animation');
        this.noAnimationsClick = !this.noAnimationsClick;
    }
    /**
     * @return {?}
     */
    colorBlind_Click() {
        this.action_Click(this.colorBlindClick, 'accessible_colorblind');
        this.colorBlindClick = !this.colorBlindClick;
    }
    /**
     * @private
     * @param {?} click
     * @param {?} className
     * @return {?}
     */
    action_Click(click, className) {
        if (click) {
            document.body.classList.remove(className);
        }
        else {
            document.body.classList.add(className);
        }
    }
    /**
     * @private
     * @param {?} multiplier
     * @return {?}
     */
    resizeText(multiplier) {
        this.fontMultiplier += multiplier;
        /** @type {?} */
        const htmlElements = [].slice.call(document.body.getElementsByTagName('*'));
        htmlElements.forEach((/**
         * @param {?} element
         * @return {?}
         */
        element => {
            if (element.style.fontSize === '') {
                element.style.fontSize = '1.0em';
            }
            /** @type {?} */
            const val = parseFloat(element.style.fontSize) + (multiplier * 1) + 'px';
            element.style.fontSize = val;
            element.style.lineHeight = val;
        }));
    }
    /**
     * @private
     * @param {?} valueObject
     * @param {?} days
     * @return {?}
     */
    setCookie(valueObject, days) {
        document.querySelectorAll('#accesabilityMenu ul li a').forEach((/**
         * @param {?} item
         * @param {?} i
         * @param {?} arr
         * @return {?}
         */
        (item, i, arr) => {
            console.log(item);
        }));
        /** @type {?} */
        const value = JSON.stringify(valueObject);
        /** @type {?} */
        let expires = null;
        if (days >= 1) {
            /** @type {?} */
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = '; expires=' + date.toUTCString();
        }
        else {
            expires = '; expires=Thu, 01 Jan 1970 00:00:00 GMT';
        }
        document.cookie = `${this.cookieName}=${value + expires};'path=/"'`;
    }
    /**
     * @private
     * @return {?}
     */
    getCookie() {
        /** @type {?} */
        const ca = document.cookie.split(';');
    }
    /**
     * @private
     * @param {?} name
     * @return {?}
     */
    deleteCookie(name) {
        this.setCookie(name, -1);
    }
}
AccessibilityComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-accessibility',
                templateUrl: './accessibility.component.html',
                styleUrls: ['./accessibility.component.css']
            },] },
];
/** @nocollapse */
AccessibilityComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AccessibilityModule {
}
AccessibilityModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [AccessibilityComponent],
                exports: [AccessibilityComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AccessibilityModule, AccessibilityComponent as ɵa };

//# sourceMappingURL=accessibility-lib.js.map