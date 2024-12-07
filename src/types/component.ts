import { Steps } from "@/constants/components/register-wizard";
import { ComponentProps, JSX } from "react";
import { z } from "zod";
import { RecordSchema } from "@/lib/schemas/register.schema";

export interface BaseComponentProps {
  "data-testid"?: string;
}

export type BaseComponentPropsWithSlots<T extends keyof JSX.IntrinsicElements> =
  BaseComponentProps & {
    asChild?: boolean;
  } & ComponentProps<T>;
export interface AsChildProps {
  asChild?: boolean;
}

export type SvgProps = ComponentProps<"svg">;

export type StepsType = (typeof Steps)[keyof typeof Steps];

// (typeof TortoiseBudgetCategory)[keyof typeof TortoiseBudgetCategory];
export type RecordSchemaType = z.infer<typeof RecordSchema>;
