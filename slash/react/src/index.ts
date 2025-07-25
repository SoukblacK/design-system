import "@axa-fr/design-system-slash-css/dist/common/icons.scss";
import "@axa-fr/design-system-slash-css/dist/common/reboot.scss";
import "@axa-fr/design-system-slash-css/dist/common/tokens.css";
import "@fontsource/source-sans-pro";
import { Message } from "./Messages/Message";

export { Action } from "./Action/Action";
export { Badge } from "./Badge/Badge";
export { Button } from "./Button/Button";
export { Card } from "./Card/Card";
export {
  Checkbox,
  CheckboxInput,
  CheckboxItem,
  CheckboxModes,
} from "./Form/Checkbox";
export { Choice, ChoiceInput } from "./Form/Choice";
export {
  LegacyField as Field,
  FieldError,
  FieldForm,
  FieldInput,
  FormClassManager,
  HelpMessage,
  InputList,
  MessageTypes,
} from "./Form/core";
export { Date, DateInput } from "./Form/Date";
export { File, FileInput, FileTable, type FilePreview } from "./Form/File";
export { MultiSelect, MultiSelectInput } from "./Form/MultiSelect";
export { NestedQuestion } from "./Form/NestedQuestion/NestedQuestion";
export { Number, NumberInput } from "./Form/Number";
export { Pass, PassInput } from "./Form/Pass";
export { Radio, RadioInput, RadioItem, RadioModes } from "./Form/Radio";
export { Select, SelectBase, SelectInput } from "./Form/Select";
export { Slider, SliderInput } from "./Form/Slider";
export { Text, TextInput } from "./Form/Text";
export { Textarea, TextareaInput } from "./Form/Textarea";
export { Footer } from "./Layout/Footer";
export {
  Header,
  HeaderTitle,
  Infos,
  MenuTitleWrapper,
  Name,
  NavBar,
  NavBarBase,
  NavBarItem,
  NavBarItemBase,
  NavBarItemLink,
  ToggleButton,
  User,
} from "./Layout/Header";
export { Link, type LinkProps } from "./Link/Link";
export {
  BooleanModal,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalHeaderBase,
} from "./ModalAgent";
export {
  ArticleRestitution,
  HeaderRestitution,
  Restitution,
  RestitutionList,
  SectionRestitution,
  SectionRestitutionColumn,
  SectionRestitutionRow,
  SectionRestitutionTitle,
} from "./Restitution";
export { Step, StepBase, Steps, VerticalStep } from "./Steps";
export { Summary } from "./Summary";
export { Svg } from "./Svg";
export { Tabs } from "./Tabs/Tabs";
export { Title } from "./Title/Title";
export { getComponentClassName } from "./utilities";

/**
 * @deprecated `Alert` has been renamed `Message` in order to comply with UX naming of components. Use `Message` instead.
 * @see {@link Message}
 */
const Alert = Message;

export * from "./Accordion";
export { type MessageProps, type MessageVariants } from "./Messages/Message";
export * from "./Popover";
export * from "./Table";
export { Alert, Message };

export { HelpButton } from "./HelpButton";
export { Loader } from "./Loader/Loader";
