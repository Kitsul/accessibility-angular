import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AccessibilityComponent = /** @class */ (function () {
    function AccessibilityComponent() {
        this.fontMultiplier = 1;
        this.contrastBrightClick = false;
        this.contrastDarkClick = false;
        this.noAnimationsClick = false;
        this.colorBlindClick = false;
    }
    /**
     * @return {?}
     */
    AccessibilityComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    AccessibilityComponent.prototype.textMinus_Click = /**
     * @return {?}
     */
    function () {
        this.resizeText(-1);
    };
    /**
     * @return {?}
     */
    AccessibilityComponent.prototype.textPlus_Click = /**
     * @return {?}
     */
    function () {
        this.resizeText(1);
    };
    /**
     * @return {?}
     */
    AccessibilityComponent.prototype.openAccesabilityMenu_Click = /**
     * @return {?}
     */
    function () {
        document.getElementById('accesabilityMenu').classList.toggle('open');
    };
    /**
     * @param {?} el
     * @return {?}
     */
    AccessibilityComponent.prototype.contrastBright_Click = /**
     * @param {?} el
     * @return {?}
     */
    function (el) {
        this.action_Click(this.contrastBrightClick, 'accessible_contrast_white');
        this.contrastBrightClick = !this.contrastBrightClick;
    };
    /**
     * @return {?}
     */
    AccessibilityComponent.prototype.contrastDark_Click = /**
     * @return {?}
     */
    function () {
        this.action_Click(this.contrastDarkClick, 'accessible_contrast');
        this.contrastDarkClick = !this.contrastDarkClick;
    };
    /**
     * @return {?}
     */
    AccessibilityComponent.prototype.noAnimations_Click = /**
     * @return {?}
     */
    function () {
        this.action_Click(this.noAnimationsClick, 'accessible_animation');
        this.noAnimationsClick = !this.noAnimationsClick;
    };
    /**
     * @return {?}
     */
    AccessibilityComponent.prototype.colorBlind_Click = /**
     * @return {?}
     */
    function () {
        this.action_Click(this.colorBlindClick, 'accessible_colorblind');
        this.colorBlindClick = !this.colorBlindClick;
    };
    /**
     * @private
     * @param {?} click
     * @param {?} className
     * @return {?}
     */
    AccessibilityComponent.prototype.action_Click = /**
     * @private
     * @param {?} click
     * @param {?} className
     * @return {?}
     */
    function (click, className) {
        if (click) {
            document.body.classList.remove(className);
        }
        else {
            document.body.classList.add(className);
        }
    };
    /**
     * @private
     * @param {?} multiplier
     * @return {?}
     */
    AccessibilityComponent.prototype.resizeText = /**
     * @private
     * @param {?} multiplier
     * @return {?}
     */
    function (multiplier) {
        this.fontMultiplier += multiplier;
        /** @type {?} */
        var htmlElements = [].slice.call(document.body.getElementsByTagName('*'));
        htmlElements.forEach((/**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            if (element.style.fontSize === '') {
                element.style.fontSize = '1.0em';
            }
            /** @type {?} */
            var val = parseFloat(element.style.fontSize) + (multiplier * 1) + 'px';
            element.style.fontSize = val;
            element.style.lineHeight = val;
        }));
    };
    /**
     * @private
     * @param {?} valueObject
     * @param {?} days
     * @return {?}
     */
    AccessibilityComponent.prototype.setCookie = /**
     * @private
     * @param {?} valueObject
     * @param {?} days
     * @return {?}
     */
    function (valueObject, days) {
        document.querySelectorAll('#accesabilityMenu ul li a').forEach((/**
         * @param {?} item
         * @param {?} i
         * @param {?} arr
         * @return {?}
         */
        function (item, i, arr) {
            console.log(item);
        }));
        /** @type {?} */
        var value = JSON.stringify(valueObject);
        /** @type {?} */
        var expires = null;
        if (days >= 1) {
            /** @type {?} */
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = '; expires=' + date.toUTCString();
        }
        else {
            expires = '; expires=Thu, 01 Jan 1970 00:00:00 GMT';
        }
        document.cookie = this.cookieName + "=" + (value + expires) + ";'path=/\"'";
    };
    /**
     * @private
     * @return {?}
     */
    AccessibilityComponent.prototype.getCookie = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var ca = document.cookie.split(';');
    };
    /**
     * @private
     * @param {?} name
     * @return {?}
     */
    AccessibilityComponent.prototype.deleteCookie = /**
     * @private
     * @param {?} name
     * @return {?}
     */
    function (name) {
        this.setCookie(name, -1);
    };
    AccessibilityComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-accessibility',
                    templateUrl: './accessibility.component.html',
                    styleUrls: ['./accessibility.component.css']
                },] },
    ];
    /** @nocollapse */
    AccessibilityComponent.ctorParameters = function () { return []; };
    return AccessibilityComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AccessibilityModule = /** @class */ (function () {
    function AccessibilityModule() {
    }
    AccessibilityModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [AccessibilityComponent],
                    exports: [AccessibilityComponent]
                },] },
    ];
    return AccessibilityModule;
}());

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