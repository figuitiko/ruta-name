/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "../ui/input";

type InputProps = {
  control: Control<any> | any;
  name: string;
  label?: string;
  description?: string;
  type?: string;
  placeholder?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;
type SelectInputProps = {
  control: Control<any> | any;
  name: string;
  label?: string;
  description?: string;
  type?: string;
  placeholder?: string;
  options: string[];
} & React.InputHTMLAttributes<HTMLInputElement>;

type FormFieldWrapperProps = InputProps | SelectInputProps;

const FormFieldCustom = ({
  control,
  label,
  description,
  name,
  placeholder,
  className,
  ...props
}: FormFieldWrapperProps) => {
  if ("options" in props) {
    return (
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className={className}>
            <FormLabel>{label}</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {props.options.map((option: string) => (
                  <SelectItem key={option} value={option}>
                    <div>{option}</div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {description && <FormDescription>{description}</FormDescription>}
            <FormMessage />
          </FormItem>
        )}
      />
    );
  }
  return (
    <FormField
      control={control}
      name={name}
      defaultValue={""}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              type={props.type || "text"}
              placeholder={placeholder}
              {...field}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormFieldCustom;
