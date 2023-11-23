type ComponentType =
  | 'Title'
  | 'Subtitle'
  | 'Separator'
  | 'Spacer'
  | 'Date'
  | 'Checkbox'
  | 'Text'
  | 'Textarea'
  | 'Select'
  | 'Number';

type ElementType = {
  type: ComponentType;
  properties: any;

  designComponent: React.FC;
  formComponent: React.FC;
  draggableComponent: React.FC;
};
