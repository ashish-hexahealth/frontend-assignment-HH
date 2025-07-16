type Option = {name:string, value:string | number};
type Options = Array<option>;

type FieldType = "text" | "number" | "email" | "date" | "radio" | "tel";

type FormType = "doctor" | "hospital";
type FormType2 = "surgery" | "insurance";
type FieldConfig = {
  name: string;
  label: string;
  type: FieldType;
  required: boolean;
  options?: string[]; // for radio buttons
};

type StepConfig = {
  stepName: string;
  fields: FieldConfig[];
};

type FormConfig = {
  steps: StepConfig[];
};

type Form2Config = {
  heading: string;
  submitButtonLabel: string;
  fields: FieldConfig[];
};
