import { storiesOfHelpcenterPanel } from "dso-toolkit";
import { storiesOf } from "@storybook/react";
import { templateContainer } from "../../templates";

import readme from "./readme.md";

storiesOfHelpcenterPanel({
  parameters: {
    module,
    storiesOf,
    readme,
  },
  templateContainer,
  storyTemplates: ({ helpcenterPanelTemplate }) => ({ helpcenterPanelTemplate }),
});
