/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { FormDescription, FormField, FormItem, FormLabel } from "../ui/form";
import { cn } from "@/util/tailwind";
import { Control } from "react-hook-form";
import { Label } from "../ui/label";
import { cva } from "class-variance-authority";

const radioGroupInputStyles = cva("flex", {
  variants: {
    isVertical: {
      true: "flex-col",
      false: "flex-row",
    },
  },
  defaultVariants: {
    isVertical: false,
  },
});

type OptionRadio = {
  value: string;
  label: string;
};

type RadioGroupInputProps = {
  control: Control<any> | any;
  name: string;
  label: string;
  description?: string;
  className?: string;
  options: OptionRadio[];
  defaultValue?: string;
  isVertical?: boolean;
};

export const RadioGroupInput = ({
  control,
  name,
  label,
  description,
  className,
  options,
  defaultValue,
  isVertical,
}: RadioGroupInputProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn(["flex flex-col", className])}>
          <FormLabel>{label}</FormLabel>
          <RadioGroup
            {...field}
            className={radioGroupInputStyles({ isVertical })}
            defaultValue={defaultValue}
          >
            {options.map(({ label, value }) => (
              <div key={value} className="flex items-center space-x-2">
                <RadioGroupItem value={value} id={value} />
                <Label htmlFor={value}>{label}</Label>
              </div>
            ))}
          </RadioGroup>
          {description && <FormDescription>{description}</FormDescription>}
        </FormItem>
      )}
    />
  );
};
