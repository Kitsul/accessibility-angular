/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
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
export { AccessibilityComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzaWJpbGl0eS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWNjZXNzaWJpbGl0eS9saWIvIiwic291cmNlcyI6WyJhY2Nlc3NpYmlsaXR5L2FjY2Vzc2liaWxpdHkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUE4QixNQUFNLGVBQWUsQ0FBQztBQUd0RTtJQWlCRTtRQVhBLG1CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBRW5CLHdCQUFtQixHQUFHLEtBQUssQ0FBQztRQUM1QixzQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFDMUIsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzFCLG9CQUFlLEdBQUcsS0FBSyxDQUFDO0lBTVIsQ0FBQzs7OztJQUVqQix5Q0FBUTs7O0lBQVI7SUFFQSxDQUFDOzs7O0lBQ0QsZ0RBQWU7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFDRCwrQ0FBYzs7O0lBQWQ7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCwyREFBMEI7OztJQUExQjtRQUNFLFFBQVEsQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7Ozs7O0lBRUQscURBQW9COzs7O0lBQXBCLFVBQXFCLEVBQUU7UUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsMkJBQTJCLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUM7SUFDdkQsQ0FBQzs7OztJQUVELG1EQUFrQjs7O0lBQWxCO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUs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QUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDdEQsQ0FBQzs7Ozs7O0lBRU8sNkNBQVk7Ozs7O0lBQXBCLFVBQXFCLElBQVk7UUFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQixDQUFDOztnQkFwR0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFdBQVcsRUFBRSxnQ0FBZ0M7b0JBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2lCQUM3Qzs7OztJQWlHRCw2QkFBQztDQUFBLEFBckdELElBcUdDO1NBaEdZLHNCQUFzQjs7O0lBQ2pDLGdEQUFtQjs7SUFFbkIscURBQTRCOztJQUM1QixtREFBMEI7O0lBQzFCLG1EQUEwQjs7SUFDMUIsaURBQXdCOztJQUV4Qiw0Q0FBa0M7O0lBQ2xDLHFEQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWFjY2Vzc2liaWxpdHknLFxuICB0ZW1wbGF0ZVVybDogJy4vYWNjZXNzaWJpbGl0eS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FjY2Vzc2liaWxpdHkuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFjY2Vzc2liaWxpdHlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBmb250TXVsdGlwbGllciA9IDE7XG5cbiAgY29udHJhc3RCcmlnaHRDbGljayA9IGZhbHNlO1xuICBjb250cmFzdERhcmtDbGljayA9IGZhbHNlO1xuICBub0FuaW1hdGlvbnNDbGljayA9IGZhbHNlO1xuICBjb2xvckJsaW5kQ2xpY2sgPSBmYWxzZTtcblxuICBjb29raWVOYW1lOiAnYWNjZXNzaWJpbGl0eUNvb2tpZSc7XG4gIGNvb2tpZUZvbnRBdHRyaWJ1dGU6ICdmb250TXVsdGlwbGllcic7XG5cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gIH1cbiAgdGV4dE1pbnVzX0NsaWNrKCkge1xuICAgIHRoaXMucmVzaXplVGV4dCgtMSk7XG4gIH1cbiAgdGV4dFBsdXNfQ2xpY2soKSB7XG4gICAgdGhpcy5yZXNpemVUZXh0KDEpO1xuICB9XG5cbiAgb3BlbkFjY2VzYWJpbGl0eU1lbnVfQ2xpY2soKTogdm9pZCB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjY2VzYWJpbGl0eU1lbnUnKS5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XG4gIH1cblxuICBjb250cmFzdEJyaWdodF9DbGljayhlbCk6IHZvaWQge1xuICAgIHRoaXMuYWN0aW9uX0NsaWNrKHRoaXMuY29udHJhc3RCcmlnaHRDbGljaywgJ2FjY2Vzc2libGVfY29udHJhc3Rfd2hpdGUnKTtcbiAgICB0aGlzLmNvbnRyYXN0QnJpZ2h0Q2xpY2sgPSAhdGhpcy5jb250cmFzdEJyaWdodENsaWNrO1xuICB9XG5cbiAgY29udHJhc3REYXJrX0NsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuYWN0aW9uX0NsaWNrKHRoaXMuY29udHJhc3REYXJrQ2xpY2ssICdhY2Nlc3NpYmxlX2NvbnRyYXN0Jyk7XG4gICAgdGhpcy5jb250cmFzdERhcmtDbGljayA9ICF0aGlzLmNvbnRyYXN0RGFya0NsaWNrO1xuICB9XG5cbiAgbm9BbmltYXRpb25zX0NsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuYWN0aW9uX0NsaWNrKHRoaXMubm9BbmltYXRpb25zQ2xpY2ssICdhY2Nlc3NpYmxlX2FuaW1hdGlvbicpO1xuICAgIHRoaXMubm9BbmltYXRpb25zQ2xpY2sgPSAhdGhpcy5ub0FuaW1hdGlvbnNDbGljaztcbiAgfVxuXG4gIGNvbG9yQmxpbmRfQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5hY3Rpb25fQ2xpY2sodGhpcy5jb2xvckJsaW5kQ2xpY2ssICdhY2Nlc3NpYmxlX2NvbG9yYmxpbmQnKTtcbiAgICB0aGlzLmNvbG9yQmxpbmRDbGljayA9ICF0aGlzLmNvbG9yQmxpbmRDbGljaztcbiAgfVxuXG4gIHByaXZhdGUgYWN0aW9uX0NsaWNrKGNsaWNrOiBib29sZWFuLCBjbGFzc05hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmIChjbGljaykge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVzaXplVGV4dChtdWx0aXBsaWVyOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmZvbnRNdWx0aXBsaWVyICs9IG11bHRpcGxpZXI7XG4gICAgY29uc3QgaHRtbEVsZW1lbnRzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5ib2R5LmdldEVsZW1lbnRzQnlUYWdOYW1lKCcqJykpO1xuXG4gICAgaHRtbEVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBpZiAoZWxlbWVudC5zdHlsZS5mb250U2l6ZSA9PT0gJycpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5mb250U2l6ZSA9ICcxLjBlbSc7XG4gICAgICB9XG4gICAgICBjb25zdCB2YWwgPSBwYXJzZUZsb2F0KGVsZW1lbnQuc3R5bGUuZm9udFNpemUpICsgKG11bHRpcGxpZXIgKiAxKSArICdweCc7XG4gICAgICBlbGVtZW50LnN0eWxlLmZvbnRTaXplID0gdmFsO1xuICAgICAgZWxlbWVudC5zdHlsZS5saW5lSGVpZ2h0ID0gdmFsO1xuICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q29va2llKHZhbHVlT2JqZWN0OiBzdHJpbmcsIGRheXM6IG51bWJlcik6IHZvaWQge1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2FjY2VzYWJpbGl0eU1lbnUgdWwgbGkgYScpLmZvckVhY2goKGl0ZW0sIGksIGFycikgPT4ge1xuICAgICAgY29uc29sZS5sb2coaXRlbSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlT2JqZWN0KTtcbiAgICBsZXQgZXhwaXJlczogc3RyaW5nID0gbnVsbDtcbiAgICBpZiAoZGF5cyA+PSAxKSB7XG4gICAgICBjb25zdCBkYXRlOiBEYXRlID0gbmV3IERhdGUoKTtcbiAgICAgIGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArIChkYXlzICogMjQgKiA2MCAqIDYwICogMTAwMCkpO1xuICAgICAgZXhwaXJlcyA9ICc7IGV4cGlyZXM9JyArIGRhdGUudG9VVENTdHJpbmcoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGV4cGlyZXMgPSAnOyBleHBpcmVzPVRodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDAgR01UJztcbiAgICAgIH1cblxuICAgIGRvY3VtZW50LmNvb2tpZSA9IGAke3RoaXMuY29va2llTmFtZX09JHt2YWx1ZSArIGV4cGlyZXN9OydwYXRoPS9cIidgO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDb29raWUoKTogdm9pZCB7XG4gICAgY29uc3QgY2E6IEFycmF5PHN0cmluZz4gPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcbiAgfVxuXG4gIHByaXZhdGUgZGVsZXRlQ29va2llKG5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q29va2llKG5hbWUsIC0xKTtcbiAgfVxufVxuIl19