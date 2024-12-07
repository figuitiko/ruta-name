import { BaseComponentProps } from "@/types/component";
import type { ReactNode, ReactElement, HTMLAttributes } from "react";

import { Children, isValidElement } from "react";

interface SwitchProps
  extends HTMLAttributes<HTMLDivElement>,
    BaseComponentProps {
  children: ReactNode;
}

const Switch = ({
  "data-testid": testId = "default.conditional-switch",
  children,
  className,
}: SwitchProps) => {
  let matchChild: ReactElement<CaseProps> | null = null;
  let defaultCase: ReactElement<DefaultProps> | null = null;

  Children.forEach(children, (child) => {
    if (!matchChild && isCaseElement(child) && child.props.condition) {
      matchChild = child;
    } else if (!defaultCase && isDefaultElement(child)) {
      defaultCase = child;
    }
  });

  const childToRender = matchChild ?? defaultCase;
  return (
    <div className={className} data-testid={testId}>
      {childToRender}
    </div>
  );
};

Switch.displayName = "Switch";

interface CaseProps {
  children: ReactNode;
  condition: boolean;
}

const Case = ({ children }: CaseProps) => {
  return <>{children}</>;
};

interface DefaultProps {
  children: ReactNode;
}

Case.displayName = "Case";

const Default = ({ children }: DefaultProps) => {
  return <>{children}</>;
};

Default.displayName = "Default";

function isCaseElement(child: unknown): child is ReactElement<CaseProps> {
  return isValidElement(child) && child.type === Case;
}

function isDefaultElement(child: unknown): child is ReactElement<DefaultProps> {
  return isValidElement(child) && child.type === Default;
}

const Root = Switch;

/**
 * Exports
 */

export { Root, Case, Default };
export type { SwitchProps, CaseProps, DefaultProps };
