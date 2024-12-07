"use client";
import * as Switch from "@/components/common/conditional-switch";
import { Steps } from "@/constants/components/register-wizard";
import { RecordSchemaType, StepsType } from "@/types/component";
import { useForm, FormProvider } from "react-hook-form";
import { Identification } from "./steps/identification";

export const FormSelector = ({ stepCase }: { stepCase: StepsType }) => {
  const methods = useForm<RecordSchemaType>();
  const onSubmit = (data: RecordSchemaType) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Switch.Root>
          <Switch.Default>
            <Identification />
          </Switch.Default>
          <Switch.Case condition={stepCase === Steps.Relatives}>
            <div>Form 2</div>
          </Switch.Case>
          <Switch.Case condition={stepCase === Steps.Address}>
            <div>Form 3</div>
          </Switch.Case>
          <Switch.Case condition={stepCase === Steps.Report}>
            <div>Form 4</div>
          </Switch.Case>
          <Switch.Case condition={stepCase === Steps.Health}>
            <div>Form 5</div>
          </Switch.Case>
          <Switch.Case condition={stepCase === Steps.Scholarship}>
            <div>Form 6</div>
          </Switch.Case>
          <Switch.Case condition={stepCase === Steps.Requirements}>
            <div>Form 7</div>
          </Switch.Case>
        </Switch.Root>
      </form>
    </FormProvider>
  );
};
