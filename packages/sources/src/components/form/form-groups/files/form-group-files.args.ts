import { HandlerFunction } from '@storybook/addon-actions';
import { ArgTypes, noControl } from '../../../../stories-helpers';

import { files } from '../../content/files.content';

import { FormGroupFiles } from '../../form.models';

export interface FormGroupFilesArgs {
  id: string;
  label: string;
  addFileButtonVariant: 'primary' | 'secondary';
  state?: 'invalid' | 'valid';
  required: boolean;
  disabled: false,
  errorText: string,
  warning: string
}

export const formGroupFilesArgTypes: ArgTypes<FormGroupFilesArgs> = {
  id: {
    control: {
      type: 'text'
    }
  },
  label: {
    control: {
      type: 'text'
    }
  },
  addFileButtonVariant: {
    options: ['primary', 'secondary'],
    control: {
      type: 'select'
    }
  },
  state: {
    options: [undefined, 'invalid', 'valid'],
    control: {
      type: 'select'
    }
  },
  required: {
    control: {
      type: 'boolean'
    }
  },
  disabled: {
    control: {
      type: 'boolean'
    }
  },
  errorText: {
    control: {
      type: 'text'
    }
  },
  warning: {
    control: {
      type: 'text'
    }
  }
};

export function formGroupFilesArgsMapper(a: FormGroupFilesArgs): FormGroupFiles<any> {
  return {
    id: a.id,
    label: a.label,
    group: 'files',
    addFileButtonVariant: a.addFileButtonVariant,
    state: a.state,
    disabled: a.disabled,
    errorText: a.errorText,
    warning: a.warning,
    files
  };
}
