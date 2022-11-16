import { ArgTypes } from "../../storybook";
import { Table, TableContent } from "./table.models";

export interface TableArgs {
  noModal: boolean;
  headingColumns: boolean;
}

export const tableArgTypes: ArgTypes<TableArgs> = {
  noModal: {
    control: {
      type: "boolean",
    },
  },
  headingColumns: {
    control: {
      type: "boolean",
    },
  },
};

export function tableArgsMapper<TemplateFnReturnType>(
  a: TableArgs,
  content: TableContent<TemplateFnReturnType>
): Required<Table<TemplateFnReturnType>> {
  return { ...a, content };
}
