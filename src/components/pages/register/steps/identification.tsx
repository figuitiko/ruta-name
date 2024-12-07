import { DateInput } from "@/components/common/date-input";
import FormFieldCustom from "@/components/common/form-field-custom";
import { RadioGroupInput } from "@/components/common/radio-group-input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import React from "react";
import { useFormContext } from "react-hook-form";

export const Identification = () => {
  const { control } = useFormContext();
  return (
    <div className="flex flex-col gap-8">
      <div className="flex w-full gap-4 items-center">
        <FormFieldCustom
          className="flex-1"
          control={control}
          name="curp"
          label="Curp"
        />
        <div className="flex mt-3">
          <DateInput
            label="Fecha de nacimiento"
            control={control}
            labelPicker="Fecha de nacimiento"
            name="victimBirthday"
            className="flex-1"
          />
        </div>
        <FormFieldCustom
          type="number"
          className="flex-1"
          control={control}
          name="victimAge"
          label="Edad"
        />
      </div>
      <div className="flex w-full gap-4">
        <FormFieldCustom
          className="flex-1"
          control={control}
          name="victimName"
          label="Nombre"
        />
        <FormFieldCustom
          className="flex-1"
          control={control}
          name="victimMiddleName"
          label="Primer Apellido"
        />
        <FormFieldCustom
          className="flex-1"
          control={control}
          name="victimMiddleName"
          label="Segundo Apellido"
        />
      </div>
      <div className="flex w-full gap-8">
        <div className="flex flex-col gap-4 mt-2">
          <Label>Habla de lengua indiguena</Label>
          <RadioGroupInput
            control={control}
            name="victimSpeaksIndigenousLanguage"
            label=""
            options={[
              { value: "no", label: "No" },
              { value: "yes", label: "Si" },
            ]}
            defaultValue="no"
          />
        </div>
        <FormFieldCustom
          control={control}
          name="victimIndigenousLanguage"
          label="Hablante de lengua indígena / Grupo étnico"
          className="flex-1"
        />
      </div>
    </div>
  );
};
