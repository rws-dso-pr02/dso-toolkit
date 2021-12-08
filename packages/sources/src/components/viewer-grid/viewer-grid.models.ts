import { DefinitionList, Label } from '../..';

export interface ViewerGridDemoProperties {
  panelSize: 'small' | 'medium' | 'large';
  panelOpen: boolean;
  shrink: (e: MouseEvent) => void;
  expand: (e: MouseEvent) => void;
  closeOverlay: (e: MouseEvent) => void;
  allOptions: (e: MouseEvent) => void;
  filterblokDeleteActiveFilter: (e: MouseEvent) => void;
  documentHeaderFeaturesOpen: boolean;
  documentHeaderMapAction: (e: MouseEvent) => void;
  documentHeaderFeatureAction: (e: MouseEvent) => void;
}

export interface ViewerGrid<TemplateFnReturnType> {
  main: TemplateFnReturnType;
  map: TemplateFnReturnType;
  overlay: TemplateFnReturnType;
  panelSize: 'small' | 'medium' | 'large';
  panelOpen: boolean;
  shrink: (e: MouseEvent) => void;
  expand: (e: MouseEvent) => void;
  closeOverlay: (e: MouseEvent) => void;
}

export interface ViewerGridDocumentHeader<TemplateFnReturnType> {
  title: TemplateFnReturnType;
  type: string;
  owner: string;
  status: TemplateFnReturnType;
  features: DefinitionList<TemplateFnReturnType>;
  featuresOpen: boolean;
  mapAction: (e: MouseEvent) => void;
  featuresAction: (e: MouseEvent) => void;
}

export interface ViewerGridDocumentListItem<TemplateFnReturnType> {
  title: TemplateFnReturnType;
  type: string;
  owner: string;
  status: TemplateFnReturnType;
}

export interface ViewerGridFilterblok<TemplateFnReturnType> {
  title: TemplateFnReturnType;
  address: string;
  activeFilters: Label[];
  onAllOptions: (e: MouseEvent) => void;
}
