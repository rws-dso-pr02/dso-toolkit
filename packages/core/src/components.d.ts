/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface DsoAlert {
        "status": 'success' | 'info' | 'warning' | 'danger';
    }
    interface DsoAttachmentsCounter {
        "count": number;
    }
    interface DsoBadge {
        "status"?: 'primary' | 'success' | 'info' | 'warning' | 'danger';
    }
    interface DsoHighlightBox {
        "border"?: boolean;
        "dropShadow"?: boolean;
        "step"?: number;
        "white"?: boolean;
        "yellow"?: boolean;
    }
    interface DsoLabel {
        "status"?: 'primary' | 'info' | 'success' | 'warning' | 'danger';
    }
    interface DsoProgressBar {
        "max": number;
        "min": number;
        "progress": number;
    }
}
declare global {
    interface HTMLDsoAlertElement extends Components.DsoAlert, HTMLStencilElement {
    }
    var HTMLDsoAlertElement: {
        prototype: HTMLDsoAlertElement;
        new (): HTMLDsoAlertElement;
    };
    interface HTMLDsoAttachmentsCounterElement extends Components.DsoAttachmentsCounter, HTMLStencilElement {
    }
    var HTMLDsoAttachmentsCounterElement: {
        prototype: HTMLDsoAttachmentsCounterElement;
        new (): HTMLDsoAttachmentsCounterElement;
    };
    interface HTMLDsoBadgeElement extends Components.DsoBadge, HTMLStencilElement {
    }
    var HTMLDsoBadgeElement: {
        prototype: HTMLDsoBadgeElement;
        new (): HTMLDsoBadgeElement;
    };
    interface HTMLDsoHighlightBoxElement extends Components.DsoHighlightBox, HTMLStencilElement {
    }
    var HTMLDsoHighlightBoxElement: {
        prototype: HTMLDsoHighlightBoxElement;
        new (): HTMLDsoHighlightBoxElement;
    };
    interface HTMLDsoLabelElement extends Components.DsoLabel, HTMLStencilElement {
    }
    var HTMLDsoLabelElement: {
        prototype: HTMLDsoLabelElement;
        new (): HTMLDsoLabelElement;
    };
    interface HTMLDsoProgressBarElement extends Components.DsoProgressBar, HTMLStencilElement {
    }
    var HTMLDsoProgressBarElement: {
        prototype: HTMLDsoProgressBarElement;
        new (): HTMLDsoProgressBarElement;
    };
    interface HTMLElementTagNameMap {
        "dso-alert": HTMLDsoAlertElement;
        "dso-attachments-counter": HTMLDsoAttachmentsCounterElement;
        "dso-badge": HTMLDsoBadgeElement;
        "dso-highlight-box": HTMLDsoHighlightBoxElement;
        "dso-label": HTMLDsoLabelElement;
        "dso-progress-bar": HTMLDsoProgressBarElement;
    }
}
declare namespace LocalJSX {
    interface DsoAlert {
        "status": 'success' | 'info' | 'warning' | 'danger';
    }
    interface DsoAttachmentsCounter {
        "count": number;
    }
    interface DsoBadge {
        "status"?: 'primary' | 'success' | 'info' | 'warning' | 'danger';
    }
    interface DsoHighlightBox {
        "border"?: boolean;
        "dropShadow"?: boolean;
        "step"?: number;
        "white"?: boolean;
        "yellow"?: boolean;
    }
    interface DsoLabel {
        "status"?: 'primary' | 'info' | 'success' | 'warning' | 'danger';
    }
    interface DsoProgressBar {
        "max"?: number;
        "min"?: number;
        "progress": number;
    }
    interface IntrinsicElements {
        "dso-alert": DsoAlert;
        "dso-attachments-counter": DsoAttachmentsCounter;
        "dso-badge": DsoBadge;
        "dso-highlight-box": DsoHighlightBox;
        "dso-label": DsoLabel;
        "dso-progress-bar": DsoProgressBar;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "dso-alert": LocalJSX.DsoAlert & JSXBase.HTMLAttributes<HTMLDsoAlertElement>;
            "dso-attachments-counter": LocalJSX.DsoAttachmentsCounter & JSXBase.HTMLAttributes<HTMLDsoAttachmentsCounterElement>;
            "dso-badge": LocalJSX.DsoBadge & JSXBase.HTMLAttributes<HTMLDsoBadgeElement>;
            "dso-highlight-box": LocalJSX.DsoHighlightBox & JSXBase.HTMLAttributes<HTMLDsoHighlightBoxElement>;
            "dso-label": LocalJSX.DsoLabel & JSXBase.HTMLAttributes<HTMLDsoLabelElement>;
            "dso-progress-bar": LocalJSX.DsoProgressBar & JSXBase.HTMLAttributes<HTMLDsoProgressBarElement>;
        }
    }
}
