/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Suggestion } from "./components/autosuggest/autosuggest";
import { DsoDatePickerChangeEvent, DsoDatePickerDirection, DsoDatePickerFocusEvent, DsoDatePickerKeyboardEvent } from "./components/date-picker/date-picker";
import { HeaderMenuItem, HeaderMenuItemClickEvent } from "./components/header/header";
import { InfoButtonToggleEvent } from "./components/info-button/info-button";
import { BaseLayer, BaseLayerChangeEvent } from "./components/map-base-layers/map-base-layers.interfaces";
import { Overlay, OverlayChangeEvent } from "./components/map-overlays/map-overlays.interfaces";
import { OzonContentAnchorClick } from "./components/ozon-content/ozon-content.interfaces";
import { SelectableChangeEvent } from "./components/selectable/selectable";
import { TreeViewItem, TreeViewPointerEvent } from "./components/tree-view/tree-view.interfaces";
import { FilterpanelEvent, ViewerGridChangeSizeEvent } from "./components/viewer-grid/viewer-grid";
export namespace Components {
    interface DsoAlert {
        /**
          * Whether or not to show the role attribute with value "alert". To control the tooltip add the `role-alert` attribute.
         */
        "roleAlert"?: boolean;
        /**
          * Set status of alert
         */
        "status": 'success' | 'info' | 'warning' | 'danger';
    }
    interface DsoAttachmentsCounter {
        "count": number;
    }
    interface DsoAutosuggest {
        /**
          * Shows progress indicator when fetching results.
         */
        "loading": boolean;
        /**
          * To override progress indicator's default loading label.
         */
        "loadingLabel"?: string;
        /**
          * Whether the previous suggestions will be presented when the input gets focus again.
         */
        "suggestOnFocus": boolean;
        /**
          * The suggestions for the value of the slotted input element. Optionally a Suggestion can have a `type` and `item`.  The `type` is used to style the suggestion. `item` can be use to reference the original object that was used to create the suggestion.
         */
        "suggestions": Suggestion[];
    }
    interface DsoBadge {
        "status"?: 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'outline';
    }
    interface DsoBanner {
        "status": 'warning' | 'danger';
    }
    interface DsoDatePicker {
        /**
          * Forces the opening direction of the calendar modal to be always left or right. This setting can be useful when the input is smaller than the opening date picker would be as by default the picker always opens towards right.
         */
        "direction": DsoDatePickerDirection;
        /**
          * Makes the date picker input component disabled. This prevents users from being able to interact with the input, and conveys its inactive state to assistive technologies.
         */
        "disabled": boolean;
        /**
          * Should the input be focused on load?
         */
        "dsoAutofocus": boolean;
        /**
          * Hide the calendar modal. Set `moveFocusToButton` to false to prevent focus returning to the date picker's button. Default is true.
         */
        "hide": (moveFocusToButton?: boolean) => Promise<void>;
        /**
          * Adds a unique identifier for the date picker input. Use this instead of html `id` attribute.
         */
        "identifier": string | undefined;
        /**
          * Maximum date allowed to be picked. Must be in Dutch date format: DD-MM-YYYY. This setting can be used alone or together with the min property.
         */
        "max": string | undefined;
        /**
          * Minimum date allowed to be picked. Must be in Dutch date format: DD-MM-YYYY. This setting can be used alone or together with the max property.
         */
        "min": string | undefined;
        /**
          * Name of the date picker input.
         */
        "name": string;
        /**
          * Should the input be marked as required?
         */
        "required": boolean;
        /**
          * Defines a specific role attribute for the date picker input.
         */
        "role": string | undefined;
        /**
          * Sets focus on the date picker's input. Use this method instead of the global `focus()`.
         */
        "setFocus": () => Promise<void | undefined>;
        /**
          * Show the calendar modal, moving focus to the calendar inside.
         */
        "show": () => Promise<void>;
        /**
          * Date value. Must be in Dutch date format: DD-MM-YYYY.
         */
        "value": string;
    }
    interface DsoDropdownMenu {
        /**
          * Whether the menu is checkable.
         */
        "checkable": boolean;
        /**
          * Alignment of the dropdown
         */
        "dropdownAlign": "left" | "right";
        /**
          * Whether the menu is open or closed. This attribute is reflected and mutable.
         */
        "open": boolean;
    }
    interface DsoHeader {
        "isLoggedIn": boolean;
        "loginUrl"?: string;
        "logoutUrl"?: string;
        "mainMenu": HeaderMenuItem[];
        "useDropDownMenu": "always" | "never" | "auto";
        "userHomeUrl"?: string;
        "userProfileName"?: string;
        "userProfileUrl"?: string;
    }
    interface DsoHelpcenterPanel {
        "label"?: string;
        "url": string;
    }
    interface DsoHighlightBox {
        "border"?: boolean;
        "dropShadow"?: boolean;
        "step"?: number;
        "white"?: boolean;
        "yellow"?: boolean;
    }
    interface DsoIcon {
        "icon"?: string;
    }
    interface DsoImageOverlay {
    }
    interface DsoInfo {
        "active"?: boolean;
        "fixed"?: boolean;
    }
    interface DsoInfoButton {
        "active"?: boolean;
        "label": string;
        "secondary"?: boolean;
    }
    interface DsoLabel {
        "compact"?: boolean;
        "removable"?: boolean;
        "status"?: 'primary' | 'info' | 'success' | 'warning' | 'danger' | 'bright';
    }
    interface DsoMapBaseLayers {
        "baseLayers": BaseLayer[];
    }
    interface DsoMapControls {
        "disableZoom"?: 'in' | 'out' | 'both';
        "open": boolean;
    }
    interface DsoMapOverlays {
        "overlays": Overlay[];
    }
    interface DsoOzonContent {
        /**
          * The XML to be rendered.
         */
        "content": string | undefined;
        /**
          * Marks content as deleted using visual and accessible clues.
         */
        "deleted": boolean;
        /**
          * Setting this property creates dso-ozon-content as inline element instead of a block element.
         */
        "inline": boolean;
    }
    interface DsoProgressBar {
        "max": number;
        "min": number;
        "progress": number;
    }
    interface DsoProgressIndicator {
        "block"?: boolean;
        "label"?: string;
        "size"?: 'small' | 'medium' | 'large';
    }
    interface DsoSelectable {
        "checked"?: boolean;
        "describedById"?: string;
        "disabled"?: boolean;
        "identifier"?: string;
        "indeterminate"?: boolean;
        "infoFixed"?: boolean;
        "invalid"?: boolean;
        "name"?: string;
        "required"?: boolean;
        "toggleInfo": (active?: boolean | undefined) => Promise<void>;
        "type": 'checkbox' | 'radio';
        "value": string;
    }
    interface DsoToggletip {
        "label": string;
        "position": "top" | "right" | "bottom" | "left";
        "secondary"?: boolean;
        "small"?: boolean;
    }
    interface DsoTooltip {
        /**
          * Activate the tooltip (Sets the `active` attribute)
         */
        "activate": () => Promise<void>;
        /**
          * Whether or not to show the tooltip. To control the tooltip add the `active` attribute or use the `activate()` and `deactivate()` instance methods.
         */
        "active": boolean;
        /**
          * Deactivate the tooltip (Removes the `active` attribute)
         */
        "deactivate": () => Promise<void>;
        /**
          * Defines if the tooltip is descriptive. A descriptive tooltip contains a meaningful message. Tooltips that are not descriptive are hidden from screenreaders using `aria-hidden`.
         */
        "descriptive": boolean;
        /**
          * Specify target element that the tooltip will describe and listens to for events. * `undefined`: The direct parent is used. * `string`: The element is located using `document.getElementById()` * `HTMLElement`: Pass the target element directly If the element is not found an Error is thrown.
         */
        "for"?: string | HTMLElement;
        /**
          * Set attribute `no-arrow` to hide the arrow
         */
        "noArrow": boolean;
        /**
          * Set position of tooltip relative to target
         */
        "position": 'top' | 'right' | 'bottom' | 'left';
        /**
          * Defines if the tooltip has a smaller max-width
         */
        "small"?: boolean;
        /**
          * Deactivates mouseover behaviour
         */
        "stateless"?: boolean;
    }
    interface DsoTreeView {
        /**
          * The collection of TreeViewItems
         */
        "collection": TreeViewItem[];
    }
    interface DsoViewerGrid {
        "filterpanelOpen": boolean;
        "overlayOpen": boolean;
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
    interface HTMLDsoAutosuggestElement extends Components.DsoAutosuggest, HTMLStencilElement {
    }
    var HTMLDsoAutosuggestElement: {
        prototype: HTMLDsoAutosuggestElement;
        new (): HTMLDsoAutosuggestElement;
    };
    interface HTMLDsoBadgeElement extends Components.DsoBadge, HTMLStencilElement {
    }
    var HTMLDsoBadgeElement: {
        prototype: HTMLDsoBadgeElement;
        new (): HTMLDsoBadgeElement;
    };
    interface HTMLDsoBannerElement extends Components.DsoBanner, HTMLStencilElement {
    }
    var HTMLDsoBannerElement: {
        prototype: HTMLDsoBannerElement;
        new (): HTMLDsoBannerElement;
    };
    interface HTMLDsoDatePickerElement extends Components.DsoDatePicker, HTMLStencilElement {
    }
    var HTMLDsoDatePickerElement: {
        prototype: HTMLDsoDatePickerElement;
        new (): HTMLDsoDatePickerElement;
    };
    interface HTMLDsoDropdownMenuElement extends Components.DsoDropdownMenu, HTMLStencilElement {
    }
    var HTMLDsoDropdownMenuElement: {
        prototype: HTMLDsoDropdownMenuElement;
        new (): HTMLDsoDropdownMenuElement;
    };
    interface HTMLDsoHeaderElement extends Components.DsoHeader, HTMLStencilElement {
    }
    var HTMLDsoHeaderElement: {
        prototype: HTMLDsoHeaderElement;
        new (): HTMLDsoHeaderElement;
    };
    interface HTMLDsoHelpcenterPanelElement extends Components.DsoHelpcenterPanel, HTMLStencilElement {
    }
    var HTMLDsoHelpcenterPanelElement: {
        prototype: HTMLDsoHelpcenterPanelElement;
        new (): HTMLDsoHelpcenterPanelElement;
    };
    interface HTMLDsoHighlightBoxElement extends Components.DsoHighlightBox, HTMLStencilElement {
    }
    var HTMLDsoHighlightBoxElement: {
        prototype: HTMLDsoHighlightBoxElement;
        new (): HTMLDsoHighlightBoxElement;
    };
    interface HTMLDsoIconElement extends Components.DsoIcon, HTMLStencilElement {
    }
    var HTMLDsoIconElement: {
        prototype: HTMLDsoIconElement;
        new (): HTMLDsoIconElement;
    };
    interface HTMLDsoImageOverlayElement extends Components.DsoImageOverlay, HTMLStencilElement {
    }
    var HTMLDsoImageOverlayElement: {
        prototype: HTMLDsoImageOverlayElement;
        new (): HTMLDsoImageOverlayElement;
    };
    interface HTMLDsoInfoElement extends Components.DsoInfo, HTMLStencilElement {
    }
    var HTMLDsoInfoElement: {
        prototype: HTMLDsoInfoElement;
        new (): HTMLDsoInfoElement;
    };
    interface HTMLDsoInfoButtonElement extends Components.DsoInfoButton, HTMLStencilElement {
    }
    var HTMLDsoInfoButtonElement: {
        prototype: HTMLDsoInfoButtonElement;
        new (): HTMLDsoInfoButtonElement;
    };
    interface HTMLDsoLabelElement extends Components.DsoLabel, HTMLStencilElement {
    }
    var HTMLDsoLabelElement: {
        prototype: HTMLDsoLabelElement;
        new (): HTMLDsoLabelElement;
    };
    interface HTMLDsoMapBaseLayersElement extends Components.DsoMapBaseLayers, HTMLStencilElement {
    }
    var HTMLDsoMapBaseLayersElement: {
        prototype: HTMLDsoMapBaseLayersElement;
        new (): HTMLDsoMapBaseLayersElement;
    };
    interface HTMLDsoMapControlsElement extends Components.DsoMapControls, HTMLStencilElement {
    }
    var HTMLDsoMapControlsElement: {
        prototype: HTMLDsoMapControlsElement;
        new (): HTMLDsoMapControlsElement;
    };
    interface HTMLDsoMapOverlaysElement extends Components.DsoMapOverlays, HTMLStencilElement {
    }
    var HTMLDsoMapOverlaysElement: {
        prototype: HTMLDsoMapOverlaysElement;
        new (): HTMLDsoMapOverlaysElement;
    };
    interface HTMLDsoOzonContentElement extends Components.DsoOzonContent, HTMLStencilElement {
    }
    var HTMLDsoOzonContentElement: {
        prototype: HTMLDsoOzonContentElement;
        new (): HTMLDsoOzonContentElement;
    };
    interface HTMLDsoProgressBarElement extends Components.DsoProgressBar, HTMLStencilElement {
    }
    var HTMLDsoProgressBarElement: {
        prototype: HTMLDsoProgressBarElement;
        new (): HTMLDsoProgressBarElement;
    };
    interface HTMLDsoProgressIndicatorElement extends Components.DsoProgressIndicator, HTMLStencilElement {
    }
    var HTMLDsoProgressIndicatorElement: {
        prototype: HTMLDsoProgressIndicatorElement;
        new (): HTMLDsoProgressIndicatorElement;
    };
    interface HTMLDsoSelectableElement extends Components.DsoSelectable, HTMLStencilElement {
    }
    var HTMLDsoSelectableElement: {
        prototype: HTMLDsoSelectableElement;
        new (): HTMLDsoSelectableElement;
    };
    interface HTMLDsoToggletipElement extends Components.DsoToggletip, HTMLStencilElement {
    }
    var HTMLDsoToggletipElement: {
        prototype: HTMLDsoToggletipElement;
        new (): HTMLDsoToggletipElement;
    };
    interface HTMLDsoTooltipElement extends Components.DsoTooltip, HTMLStencilElement {
    }
    var HTMLDsoTooltipElement: {
        prototype: HTMLDsoTooltipElement;
        new (): HTMLDsoTooltipElement;
    };
    interface HTMLDsoTreeViewElement extends Components.DsoTreeView, HTMLStencilElement {
    }
    var HTMLDsoTreeViewElement: {
        prototype: HTMLDsoTreeViewElement;
        new (): HTMLDsoTreeViewElement;
    };
    interface HTMLDsoViewerGridElement extends Components.DsoViewerGrid, HTMLStencilElement {
    }
    var HTMLDsoViewerGridElement: {
        prototype: HTMLDsoViewerGridElement;
        new (): HTMLDsoViewerGridElement;
    };
    interface HTMLElementTagNameMap {
        "dso-alert": HTMLDsoAlertElement;
        "dso-attachments-counter": HTMLDsoAttachmentsCounterElement;
        "dso-autosuggest": HTMLDsoAutosuggestElement;
        "dso-badge": HTMLDsoBadgeElement;
        "dso-banner": HTMLDsoBannerElement;
        "dso-date-picker": HTMLDsoDatePickerElement;
        "dso-dropdown-menu": HTMLDsoDropdownMenuElement;
        "dso-header": HTMLDsoHeaderElement;
        "dso-helpcenter-panel": HTMLDsoHelpcenterPanelElement;
        "dso-highlight-box": HTMLDsoHighlightBoxElement;
        "dso-icon": HTMLDsoIconElement;
        "dso-image-overlay": HTMLDsoImageOverlayElement;
        "dso-info": HTMLDsoInfoElement;
        "dso-info-button": HTMLDsoInfoButtonElement;
        "dso-label": HTMLDsoLabelElement;
        "dso-map-base-layers": HTMLDsoMapBaseLayersElement;
        "dso-map-controls": HTMLDsoMapControlsElement;
        "dso-map-overlays": HTMLDsoMapOverlaysElement;
        "dso-ozon-content": HTMLDsoOzonContentElement;
        "dso-progress-bar": HTMLDsoProgressBarElement;
        "dso-progress-indicator": HTMLDsoProgressIndicatorElement;
        "dso-selectable": HTMLDsoSelectableElement;
        "dso-toggletip": HTMLDsoToggletipElement;
        "dso-tooltip": HTMLDsoTooltipElement;
        "dso-tree-view": HTMLDsoTreeViewElement;
        "dso-viewer-grid": HTMLDsoViewerGridElement;
    }
}
declare namespace LocalJSX {
    interface DsoAlert {
        /**
          * Whether or not to show the role attribute with value "alert". To control the tooltip add the `role-alert` attribute.
         */
        "roleAlert"?: boolean;
        /**
          * Set status of alert
         */
        "status": 'success' | 'info' | 'warning' | 'danger';
    }
    interface DsoAttachmentsCounter {
        "count": number;
    }
    interface DsoAutosuggest {
        /**
          * Shows progress indicator when fetching results.
         */
        "loading"?: boolean;
        /**
          * To override progress indicator's default loading label.
         */
        "loadingLabel"?: string;
        /**
          * This is emitted debounced for every change for the slotted input type=text element.
         */
        "onDsoChange"?: (event: CustomEvent<string>) => void;
        /**
          * Emitted when enter is pressed. The `detail` property of the `CustomEvent` will contain the input text.
         */
        "onDsoSearch"?: (event: CustomEvent<string>) => void;
        /**
          * Emitted when a suggestion is selected. The `detail` property of the `CustomEvent` will contain the selected suggestion.
         */
        "onDsoSelect"?: (event: CustomEvent<Suggestion>) => void;
        /**
          * Whether the previous suggestions will be presented when the input gets focus again.
         */
        "suggestOnFocus"?: boolean;
        /**
          * The suggestions for the value of the slotted input element. Optionally a Suggestion can have a `type` and `item`.  The `type` is used to style the suggestion. `item` can be use to reference the original object that was used to create the suggestion.
         */
        "suggestions"?: Suggestion[];
    }
    interface DsoBadge {
        "status"?: 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'outline';
    }
    interface DsoBanner {
        "status": 'warning' | 'danger';
    }
    interface DsoDatePicker {
        /**
          * Forces the opening direction of the calendar modal to be always left or right. This setting can be useful when the input is smaller than the opening date picker would be as by default the picker always opens towards right.
         */
        "direction"?: DsoDatePickerDirection;
        /**
          * Makes the date picker input component disabled. This prevents users from being able to interact with the input, and conveys its inactive state to assistive technologies.
         */
        "disabled"?: boolean;
        /**
          * Should the input be focused on load?
         */
        "dsoAutofocus"?: boolean;
        /**
          * Adds a unique identifier for the date picker input. Use this instead of html `id` attribute.
         */
        "identifier"?: string | undefined;
        /**
          * Maximum date allowed to be picked. Must be in Dutch date format: DD-MM-YYYY. This setting can be used alone or together with the min property.
         */
        "max"?: string | undefined;
        /**
          * Minimum date allowed to be picked. Must be in Dutch date format: DD-MM-YYYY. This setting can be used alone or together with the max property.
         */
        "min"?: string | undefined;
        /**
          * Name of the date picker input.
         */
        "name"?: string;
        /**
          * Event emitted when a date is selected.
         */
        "onDateChange"?: (event: CustomEvent<DsoDatePickerChangeEvent>) => void;
        /**
          * Event emitted the date picker input is blurred.
         */
        "onDsoBlur"?: (event: CustomEvent<DsoDatePickerFocusEvent>) => void;
        /**
          * Event emitted the date picker input is focused.
         */
        "onDsoFocus"?: (event: CustomEvent<DsoDatePickerFocusEvent>) => void;
        /**
          * Event emitted on key down in the date picker input.
         */
        "onDsoKeyDown"?: (event: CustomEvent<DsoDatePickerKeyboardEvent>) => void;
        /**
          * Event emitted on key up in the date picker input.
         */
        "onDsoKeyUp"?: (event: CustomEvent<DsoDatePickerKeyboardEvent>) => void;
        /**
          * Should the input be marked as required?
         */
        "required"?: boolean;
        /**
          * Defines a specific role attribute for the date picker input.
         */
        "role"?: string | undefined;
        /**
          * Date value. Must be in Dutch date format: DD-MM-YYYY.
         */
        "value"?: string;
    }
    interface DsoDropdownMenu {
        /**
          * Whether the menu is checkable.
         */
        "checkable"?: boolean;
        /**
          * Alignment of the dropdown
         */
        "dropdownAlign"?: "left" | "right";
        /**
          * Whether the menu is open or closed. This attribute is reflected and mutable.
         */
        "open"?: boolean;
    }
    interface DsoHeader {
        "isLoggedIn"?: boolean;
        "loginUrl"?: string;
        "logoutUrl"?: string;
        "mainMenu"?: HeaderMenuItem[];
        "onMenuItemClick"?: (event: CustomEvent<HeaderMenuItemClickEvent>) => void;
        "useDropDownMenu"?: "always" | "never" | "auto";
        "userHomeUrl"?: string;
        "userProfileName"?: string;
        "userProfileUrl"?: string;
    }
    interface DsoHelpcenterPanel {
        "label"?: string;
        "url": string;
    }
    interface DsoHighlightBox {
        "border"?: boolean;
        "dropShadow"?: boolean;
        "step"?: number;
        "white"?: boolean;
        "yellow"?: boolean;
    }
    interface DsoIcon {
        "icon"?: string;
    }
    interface DsoImageOverlay {
    }
    interface DsoInfo {
        "active"?: boolean;
        "fixed"?: boolean;
        "onClose"?: (event: CustomEvent<MouseEvent>) => void;
    }
    interface DsoInfoButton {
        "active"?: boolean;
        "label"?: string;
        "onToggle"?: (event: CustomEvent<InfoButtonToggleEvent>) => void;
        "secondary"?: boolean;
    }
    interface DsoLabel {
        "compact"?: boolean;
        "onRemoveClick"?: (event: CustomEvent<MouseEvent>) => void;
        "removable"?: boolean;
        "status"?: 'primary' | 'info' | 'success' | 'warning' | 'danger' | 'bright';
    }
    interface DsoMapBaseLayers {
        "baseLayers": BaseLayer[];
        "onBaseLayerChange"?: (event: CustomEvent<BaseLayerChangeEvent>) => void;
    }
    interface DsoMapControls {
        "disableZoom"?: 'in' | 'out' | 'both';
        "onZoomIn"?: (event: CustomEvent<MouseEvent>) => void;
        "onZoomOut"?: (event: CustomEvent<MouseEvent>) => void;
        "open"?: boolean;
    }
    interface DsoMapOverlays {
        "onToggleOverlay"?: (event: CustomEvent<OverlayChangeEvent>) => void;
        "overlays": Overlay[];
    }
    interface DsoOzonContent {
        /**
          * The XML to be rendered.
         */
        "content"?: string | undefined;
        /**
          * Marks content as deleted using visual and accessible clues.
         */
        "deleted"?: boolean;
        /**
          * Setting this property creates dso-ozon-content as inline element instead of a block element.
         */
        "inline"?: boolean;
        "onAnchorClick"?: (event: CustomEvent<OzonContentAnchorClick>) => void;
    }
    interface DsoProgressBar {
        "max"?: number;
        "min"?: number;
        "progress": number;
    }
    interface DsoProgressIndicator {
        "block"?: boolean;
        "label"?: string;
        "size"?: 'small' | 'medium' | 'large';
    }
    interface DsoSelectable {
        "checked"?: boolean;
        "describedById"?: string;
        "disabled"?: boolean;
        "identifier"?: string;
        "indeterminate"?: boolean;
        "infoFixed"?: boolean;
        "invalid"?: boolean;
        "name"?: string;
        "onDsoChange"?: (event: CustomEvent<SelectableChangeEvent>) => void;
        "required"?: boolean;
        "type": 'checkbox' | 'radio';
        "value": string;
    }
    interface DsoToggletip {
        "label"?: string;
        "position"?: "top" | "right" | "bottom" | "left";
        "secondary"?: boolean;
        "small"?: boolean;
    }
    interface DsoTooltip {
        /**
          * Whether or not to show the tooltip. To control the tooltip add the `active` attribute or use the `activate()` and `deactivate()` instance methods.
         */
        "active"?: boolean;
        /**
          * Defines if the tooltip is descriptive. A descriptive tooltip contains a meaningful message. Tooltips that are not descriptive are hidden from screenreaders using `aria-hidden`.
         */
        "descriptive"?: boolean;
        /**
          * Specify target element that the tooltip will describe and listens to for events. * `undefined`: The direct parent is used. * `string`: The element is located using `document.getElementById()` * `HTMLElement`: Pass the target element directly If the element is not found an Error is thrown.
         */
        "for"?: string | HTMLElement;
        /**
          * Set attribute `no-arrow` to hide the arrow
         */
        "noArrow"?: boolean;
        /**
          * Set position of tooltip relative to target
         */
        "position"?: 'top' | 'right' | 'bottom' | 'left';
        /**
          * Defines if the tooltip has a smaller max-width
         */
        "small"?: boolean;
        /**
          * Deactivates mouseover behaviour
         */
        "stateless"?: boolean;
    }
    interface DsoTreeView {
        /**
          * The collection of TreeViewItems
         */
        "collection": TreeViewItem[];
        /**
          * Emitted when a tree view item is clicked. The `detail` property of the `CustomEvent` will contain an object with: `path` = the complete path of TreeViewItems from the root to the item that is emitting the clicked event. `originalEvent` = the original click event. The consumer of the event is responsible for updating the TreeView's collection (usually set the active state on the last TreeViewItem in path and clear all other active item states).
         */
        "onClickItem"?: (event: CustomEvent<TreeViewPointerEvent>) => void;
        /**
          * Emitted when a tree view item is closed. The `detail` property of the `CustomEvent` will contain the complete path of TreeViewItems from the root to the item that is emitting the close event. The consumer of the event is responsible for updating the TreeView's collection (usually set the closed state on the last TreeViewItem in path).
         */
        "onCloseItem"?: (event: CustomEvent<TreeViewItem[]>) => void;
        /**
          * Emitted when a tree view item is opened. The `detail` property of the `CustomEvent` will contain the complete path of TreeViewItems from the root to the item that is emitting the open event. The consumer of the event is responsible for updating the TreeView's collection (usually set the open state on the last TreeViewItem in path).
         */
        "onOpenItem"?: (event: CustomEvent<TreeViewItem[]>) => void;
    }
    interface DsoViewerGrid {
        "filterpanelOpen"?: boolean;
        "onCloseOverlay"?: (event: CustomEvent<MouseEvent | KeyboardEvent>) => void;
        "onFilterpanelApply"?: (event: CustomEvent<FilterpanelEvent>) => void;
        "onFilterpanelCancel"?: (event: CustomEvent<FilterpanelEvent>) => void;
        "onMainSizeChange"?: (event: CustomEvent<ViewerGridChangeSizeEvent>) => void;
        "overlayOpen"?: boolean;
    }
    interface IntrinsicElements {
        "dso-alert": DsoAlert;
        "dso-attachments-counter": DsoAttachmentsCounter;
        "dso-autosuggest": DsoAutosuggest;
        "dso-badge": DsoBadge;
        "dso-banner": DsoBanner;
        "dso-date-picker": DsoDatePicker;
        "dso-dropdown-menu": DsoDropdownMenu;
        "dso-header": DsoHeader;
        "dso-helpcenter-panel": DsoHelpcenterPanel;
        "dso-highlight-box": DsoHighlightBox;
        "dso-icon": DsoIcon;
        "dso-image-overlay": DsoImageOverlay;
        "dso-info": DsoInfo;
        "dso-info-button": DsoInfoButton;
        "dso-label": DsoLabel;
        "dso-map-base-layers": DsoMapBaseLayers;
        "dso-map-controls": DsoMapControls;
        "dso-map-overlays": DsoMapOverlays;
        "dso-ozon-content": DsoOzonContent;
        "dso-progress-bar": DsoProgressBar;
        "dso-progress-indicator": DsoProgressIndicator;
        "dso-selectable": DsoSelectable;
        "dso-toggletip": DsoToggletip;
        "dso-tooltip": DsoTooltip;
        "dso-tree-view": DsoTreeView;
        "dso-viewer-grid": DsoViewerGrid;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "dso-alert": LocalJSX.DsoAlert & JSXBase.HTMLAttributes<HTMLDsoAlertElement>;
            "dso-attachments-counter": LocalJSX.DsoAttachmentsCounter & JSXBase.HTMLAttributes<HTMLDsoAttachmentsCounterElement>;
            "dso-autosuggest": LocalJSX.DsoAutosuggest & JSXBase.HTMLAttributes<HTMLDsoAutosuggestElement>;
            "dso-badge": LocalJSX.DsoBadge & JSXBase.HTMLAttributes<HTMLDsoBadgeElement>;
            "dso-banner": LocalJSX.DsoBanner & JSXBase.HTMLAttributes<HTMLDsoBannerElement>;
            "dso-date-picker": LocalJSX.DsoDatePicker & JSXBase.HTMLAttributes<HTMLDsoDatePickerElement>;
            "dso-dropdown-menu": LocalJSX.DsoDropdownMenu & JSXBase.HTMLAttributes<HTMLDsoDropdownMenuElement>;
            "dso-header": LocalJSX.DsoHeader & JSXBase.HTMLAttributes<HTMLDsoHeaderElement>;
            "dso-helpcenter-panel": LocalJSX.DsoHelpcenterPanel & JSXBase.HTMLAttributes<HTMLDsoHelpcenterPanelElement>;
            "dso-highlight-box": LocalJSX.DsoHighlightBox & JSXBase.HTMLAttributes<HTMLDsoHighlightBoxElement>;
            "dso-icon": LocalJSX.DsoIcon & JSXBase.HTMLAttributes<HTMLDsoIconElement>;
            "dso-image-overlay": LocalJSX.DsoImageOverlay & JSXBase.HTMLAttributes<HTMLDsoImageOverlayElement>;
            "dso-info": LocalJSX.DsoInfo & JSXBase.HTMLAttributes<HTMLDsoInfoElement>;
            "dso-info-button": LocalJSX.DsoInfoButton & JSXBase.HTMLAttributes<HTMLDsoInfoButtonElement>;
            "dso-label": LocalJSX.DsoLabel & JSXBase.HTMLAttributes<HTMLDsoLabelElement>;
            "dso-map-base-layers": LocalJSX.DsoMapBaseLayers & JSXBase.HTMLAttributes<HTMLDsoMapBaseLayersElement>;
            "dso-map-controls": LocalJSX.DsoMapControls & JSXBase.HTMLAttributes<HTMLDsoMapControlsElement>;
            "dso-map-overlays": LocalJSX.DsoMapOverlays & JSXBase.HTMLAttributes<HTMLDsoMapOverlaysElement>;
            "dso-ozon-content": LocalJSX.DsoOzonContent & JSXBase.HTMLAttributes<HTMLDsoOzonContentElement>;
            "dso-progress-bar": LocalJSX.DsoProgressBar & JSXBase.HTMLAttributes<HTMLDsoProgressBarElement>;
            "dso-progress-indicator": LocalJSX.DsoProgressIndicator & JSXBase.HTMLAttributes<HTMLDsoProgressIndicatorElement>;
            "dso-selectable": LocalJSX.DsoSelectable & JSXBase.HTMLAttributes<HTMLDsoSelectableElement>;
            "dso-toggletip": LocalJSX.DsoToggletip & JSXBase.HTMLAttributes<HTMLDsoToggletipElement>;
            "dso-tooltip": LocalJSX.DsoTooltip & JSXBase.HTMLAttributes<HTMLDsoTooltipElement>;
            "dso-tree-view": LocalJSX.DsoTreeView & JSXBase.HTMLAttributes<HTMLDsoTreeViewElement>;
            "dso-viewer-grid": LocalJSX.DsoViewerGrid & JSXBase.HTMLAttributes<HTMLDsoViewerGridElement>;
        }
    }
}
