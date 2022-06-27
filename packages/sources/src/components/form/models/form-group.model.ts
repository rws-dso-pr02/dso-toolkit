import { FormGroupCheckboxes } from './form-group-checkboxes.model';
import { FormGroupConfirm } from './form-group-confirm.model';
import { FormGroupInput, FormGroupInputDate } from './form-group-input.model';
import { FormGroupRadios } from './form-group-radios.model';

export type FormGroup<TemplateFnReturnType> = FormGroupCheckboxes<TemplateFnReturnType> | FormGroupConfirm<TemplateFnReturnType> | FormGroupInput<TemplateFnReturnType> | FormGroupInputDate<TemplateFnReturnType> | FormGroupRadios<TemplateFnReturnType>;
