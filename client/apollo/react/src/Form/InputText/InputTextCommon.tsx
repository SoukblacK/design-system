import {
  type ComponentProps,
  type ComponentPropsWithRef,
  type ComponentType,
  forwardRef,
  type ReactNode,
  useId,
} from "react";

import { getComponentClassName } from "../../utilities/getComponentClassName";
import { InputTextAtom } from "../InputTextAtom/InputTextAtomCommon";
import { ItemLabel } from "../ItemLabel/ItemLabelCommon";
import { ItemMessage } from "../ItemMessage/ItemMessageCommon";

type InputTextProps = ComponentPropsWithRef<"input"> & {
  unit?: ReactNode;
  classModifier?: string;
  helper?: string;
  error?: string;
  success?: string;
  label: ComponentProps<typeof ItemLabel>["label"];
  ItemLabelComponent: ComponentType<
    Omit<ComponentProps<typeof ItemLabel>, "ButtonComponent">
  >;
  ItemMessageComponent: ComponentType<ComponentProps<typeof ItemMessage>>;
  InputTextAtomComponent: ComponentType<ComponentProps<typeof InputTextAtom>>;
} & Partial<ComponentPropsWithRef<typeof ItemLabel>>;

const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  (
    {
      unit,
      className,
      classModifier = "",
      helper,
      error,
      success,
      label,
      description,
      buttonLabel,
      onButtonClick,
      required,
      sideButtonLabel,
      onSideButtonClick,
      ItemLabelComponent,
      ItemMessageComponent,
      InputTextAtomComponent,
      "aria-errormessage": ariaErrormessage,
      ...otherProps
    },
    inputRef,
  ) => {
    const componentClassName = getComponentClassName(
      "af-form__input-text",
      className,
      classModifier + (error || ariaErrormessage ? " error" : ""),
    );

    let inputId = useId();
    inputId = otherProps.id || inputId;
    const idMessage = useId();
    const idHelp = useId();

    const ariaDescribedby = [helper && idHelp, success && idMessage].filter(
      Boolean,
    ) as string[];

    return (
      <div className="af-form__input-container">
        <ItemLabelComponent
          label={label}
          description={description}
          buttonLabel={buttonLabel}
          onButtonClick={onButtonClick}
          sideButtonLabel={sideButtonLabel}
          onSideButtonClick={onSideButtonClick}
          required={required}
          inputId={inputId}
        />

        <InputTextAtomComponent
          id={inputId}
          ref={inputRef}
          unit={unit}
          className={componentClassName}
          error={error}
          required={required}
          idMessage={error ? idMessage : undefined}
          idHelp={
            ariaDescribedby.length > 0 ? ariaDescribedby.join(" ") : undefined
          }
          {...otherProps}
        />

        {helper && (
          <span id={idHelp} className="af-form__input-helper">
            {helper}
          </span>
        )}

        <ItemMessageComponent
          id={idMessage}
          message={error || success}
          messageType={error ? "error" : "success"}
        />
      </div>
    );
  },
);

InputText.displayName = "InputText";

export { InputText };
