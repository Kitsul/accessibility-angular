/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
export class AccessibilityComponent {
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
if (false) {
    /** @type {?} */
    AccessibilityComponent.prototype.fontMultiplier;
    /** @type {?} */
    AccessibilityComponent.prototype.contrastBrightClick;
    /** @type {?} */
    AccessibilityComponent.prototype.contrastDarkClick;
    /** @type {?} */
    AccessibilityComponent.prototype.noAnimationsClick;
    /** @type {?} */
    AccessibilityComponent.prototype.colorBlindClick;
    /** @type {?} */
    AccessibilityComponent.prototype.cookieName;
    /** @type {?} */
    AccessibilityComponent.prototype.cookieFontAttribute;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzaWJpbGl0eS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWNjZXNzaWJpbGl0eS9saWIvIiwic291cmNlcyI6WyJhY2Nlc3NpYmlsaXR5L2FjY2Vzc2liaWxpdHkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUE4QixNQUFNLGVBQWUsQ0FBQztBQVF0RSxNQUFNLE9BQU8sc0JBQXNCO0lBWWpDO1FBWEEsbUJBQWMsR0FBRyxDQUFDLENBQUM7UUFFbkIsd0JBQW1CLEdBQUcsS0FBSyxDQUFDO1FBQzVCLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUMxQixzQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFDMUIsb0JBQWUsR0FBRyxLQUFLLENBQUM7SUFNUixDQUFDOzs7O0lBRWpCLFFBQVE7SUFFUixDQUFDOzs7O0lBQ0QsZUFBZTtRQUNiLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0QixDQUFDOzs7O0lBQ0QsY0FBYztRQUNaLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELDBCQUEwQjtRQUN4QixRQUFRLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2RSxDQUFDOzs7OztJQUVELG9CQUFvQixDQUFDLEVBQUU7UUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsMkJBQTJCLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUM7SUFDdkQsQ0FBQzs7OztJQUVELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FB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UUFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7WUFwR0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFdBQVcsRUFBRSxnQ0FBZ0M7Z0JBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2FBQzdDOzs7Ozs7SUFFQyxnREFBbUI7O0lBRW5CLHFEQUE0Qjs7SUFDNUIsbURBQTBCOztJQUMxQixtREFBMEI7O0lBQzFCLGlEQUF3Qjs7SUFFeEIsNENBQWtDOztJQUNsQyxxREFBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1hY2Nlc3NpYmlsaXR5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FjY2Vzc2liaWxpdHkuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hY2Nlc3NpYmlsaXR5LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBY2Nlc3NpYmlsaXR5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZm9udE11bHRpcGxpZXIgPSAxO1xuXG4gIGNvbnRyYXN0QnJpZ2h0Q2xpY2sgPSBmYWxzZTtcbiAgY29udHJhc3REYXJrQ2xpY2sgPSBmYWxzZTtcbiAgbm9BbmltYXRpb25zQ2xpY2sgPSBmYWxzZTtcbiAgY29sb3JCbGluZENsaWNrID0gZmFsc2U7XG5cbiAgY29va2llTmFtZTogJ2FjY2Vzc2liaWxpdHlDb29raWUnO1xuICBjb29raWVGb250QXR0cmlidXRlOiAnZm9udE11bHRpcGxpZXInO1xuXG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcblxuICB9XG4gIHRleHRNaW51c19DbGljaygpIHtcbiAgICB0aGlzLnJlc2l6ZVRleHQoLTEpO1xuICB9XG4gIHRleHRQbHVzX0NsaWNrKCkge1xuICAgIHRoaXMucmVzaXplVGV4dCgxKTtcbiAgfVxuXG4gIG9wZW5BY2Nlc2FiaWxpdHlNZW51X0NsaWNrKCk6IHZvaWQge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY2Nlc2FiaWxpdHlNZW51JykuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xuICB9XG5cbiAgY29udHJhc3RCcmlnaHRfQ2xpY2soZWwpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGlvbl9DbGljayh0aGlzLmNvbnRyYXN0QnJpZ2h0Q2xpY2ssICdhY2Nlc3NpYmxlX2NvbnRyYXN0X3doaXRlJyk7XG4gICAgdGhpcy5jb250cmFzdEJyaWdodENsaWNrID0gIXRoaXMuY29udHJhc3RCcmlnaHRDbGljaztcbiAgfVxuXG4gIGNvbnRyYXN0RGFya19DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGlvbl9DbGljayh0aGlzLmNvbnRyYXN0RGFya0NsaWNrLCAnYWNjZXNzaWJsZV9jb250cmFzdCcpO1xuICAgIHRoaXMuY29udHJhc3REYXJrQ2xpY2sgPSAhdGhpcy5jb250cmFzdERhcmtDbGljaztcbiAgfVxuXG4gIG5vQW5pbWF0aW9uc19DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGlvbl9DbGljayh0aGlzLm5vQW5pbWF0aW9uc0NsaWNrLCAnYWNjZXNzaWJsZV9hbmltYXRpb24nKTtcbiAgICB0aGlzLm5vQW5pbWF0aW9uc0NsaWNrID0gIXRoaXMubm9BbmltYXRpb25zQ2xpY2s7XG4gIH1cblxuICBjb2xvckJsaW5kX0NsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuYWN0aW9uX0NsaWNrKHRoaXMuY29sb3JCbGluZENsaWNrLCAnYWNjZXNzaWJsZV9jb2xvcmJsaW5kJyk7XG4gICAgdGhpcy5jb2xvckJsaW5kQ2xpY2sgPSAhdGhpcy5jb2xvckJsaW5kQ2xpY2s7XG4gIH1cblxuICBwcml2YXRlIGFjdGlvbl9DbGljayhjbGljazogYm9vbGVhbiwgY2xhc3NOYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoY2xpY2spIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlc2l6ZVRleHQobXVsdGlwbGllcjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5mb250TXVsdGlwbGllciArPSBtdWx0aXBsaWVyO1xuICAgIGNvbnN0IGh0bWxFbGVtZW50cyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQuYm9keS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnKicpKTtcblxuICAgIGh0bWxFbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQuc3R5bGUuZm9udFNpemUgPT09ICcnKSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZm9udFNpemUgPSAnMS4wZW0nO1xuICAgICAgfVxuICAgICAgY29uc3QgdmFsID0gcGFyc2VGbG9hdChlbGVtZW50LnN0eWxlLmZvbnRTaXplKSArIChtdWx0aXBsaWVyICogMSkgKyAncHgnO1xuICAgICAgZWxlbWVudC5zdHlsZS5mb250U2l6ZSA9IHZhbDtcbiAgICAgIGVsZW1lbnQuc3R5bGUubGluZUhlaWdodCA9IHZhbDtcbiAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldENvb2tpZSh2YWx1ZU9iamVjdDogc3RyaW5nLCBkYXlzOiBudW1iZXIpOiB2b2lkIHtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNhY2Nlc2FiaWxpdHlNZW51IHVsIGxpIGEnKS5mb3JFYWNoKChpdGVtLCBpLCBhcnIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdmFsdWUgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZU9iamVjdCk7XG4gICAgbGV0IGV4cGlyZXM6IHN0cmluZyA9IG51bGw7XG4gICAgaWYgKGRheXMgPj0gMSkge1xuICAgICAgY29uc3QgZGF0ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICBkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgKyAoZGF5cyAqIDI0ICogNjAgKiA2MCAqIDEwMDApKTtcbiAgICAgIGV4cGlyZXMgPSAnOyBleHBpcmVzPScgKyBkYXRlLnRvVVRDU3RyaW5nKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBleHBpcmVzID0gJzsgZXhwaXJlcz1UaHUsIDAxIEphbiAxOTcwIDAwOjAwOjAwIEdNVCc7XG4gICAgICB9XG5cbiAgICBkb2N1bWVudC5jb29raWUgPSBgJHt0aGlzLmNvb2tpZU5hbWV9PSR7dmFsdWUgKyBleHBpcmVzfTsncGF0aD0vXCInYDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q29va2llKCk6IHZvaWQge1xuICAgIGNvbnN0IGNhOiBBcnJheTxzdHJpbmc+ID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XG4gIH1cblxuICBwcml2YXRlIGRlbGV0ZUNvb2tpZShuYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNldENvb2tpZShuYW1lLCAtMSk7XG4gIH1cbn1cbiJdfQ==