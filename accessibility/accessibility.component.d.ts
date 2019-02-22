import { OnInit } from '@angular/core';
export declare class AccessibilityComponent implements OnInit {
    fontMultiplier: number;
    contrastBrightClick: boolean;
    contrastDarkClick: boolean;
    noAnimationsClick: boolean;
    colorBlindClick: boolean;
    cookieName: 'accessibilityCookie';
    cookieFontAttribute: 'fontMultiplier';
    constructor();
    ngOnInit(): void;
    textMinus_Click(): void;
    textPlus_Click(): void;
    openAccesabilityMenu_Click(): void;
    contrastBright_Click(el: any): void;
    contrastDark_Click(): void;
    noAnimations_Click(): void;
    colorBlind_Click(): void;
    private action_Click;
    private resizeText;
    private setCookie;
    private getCookie;
    private deleteCookie;
}
