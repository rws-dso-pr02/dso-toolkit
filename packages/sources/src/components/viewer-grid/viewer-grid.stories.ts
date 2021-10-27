import { bindTemplate, componentArgs, StorybookParameters } from '../../stories-helpers';

import { viewerGridDemoArgsMapper, viewerGridArgTypes, ViewerGridArgs } from './viewer-grid.args';
import { ViewerGridDemoProperties } from './viewer-grid.models';

export interface ViewerGridParameters<TemplateFnReturnType> {
  viewerGridDemoTemplate: (viewerGridDemoProperties: ViewerGridDemoProperties) => TemplateFnReturnType;
}

export function storiesOfViewerGrid<TemplateFnReturnType>(
  {
    module: mainModule,
    storiesOf,
    readme
  }: StorybookParameters,
  {
    viewerGridDemoTemplate
  }: ViewerGridParameters<TemplateFnReturnType>
) {
  const template = bindTemplate(viewerGridDemoArgsMapper, viewerGridDemoTemplate);

  const stories = storiesOf('Viewer Grid', mainModule)
    .addParameters({
      layout: 'fullscreen',
      docs: {
        page: readme
      },
      args: componentArgs<Pick<ViewerGridArgs, 'panelSize' | 'panelOpen'>>({
        panelSize: 'small',
        panelOpen: false
      }),
      argTypes: viewerGridArgTypes
    });

  stories.add(
    'Viewer Grid',
    template
  );
}
