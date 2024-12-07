"use client";

import { Steps } from "@/constants/components/register-wizard";

import { useState } from "react";
import { TabsNav } from "./tabs-nav";
import { Button } from "@/components/ui/button";
import { StepsType } from "@/types/component";
import { FormSelector } from "./form-selector";

export const RegisterWizard = () => {
  const [activeTab, setActiveTab] = useState<StepsType>(Steps.Identification);
  const [isForward, setIsForward] = useState<boolean>(true);

  const handleActiveTab = () => {
    const stepsArray = Object.values(Steps);
    const activeTabIndex = stepsArray.indexOf(activeTab);

    if (isForward) {
      const nextTab = stepsArray[activeTabIndex + 1];
      if (nextTab !== undefined) {
        setActiveTab(nextTab);
        if (nextTab === Steps.Requirements) {
          setIsForward(false);
        }
      }
    } else {
      const prevTab = stepsArray[activeTabIndex - 1];
      if (prevTab !== undefined) {
        setActiveTab(prevTab);
        if (prevTab === Steps.Identification) {
          setIsForward(true);
        }
      }
    }
  };
  return (
    <div className="flex flex-col">
      <TabsNav activeTab={activeTab} />
      <FormSelector stepCase={activeTab} />
      <div className="flex w-full py-4">
        <Button className="w-fit" onClick={handleActiveTab}>
          {isForward ? "Siguiente" : "Atras"}
        </Button>
      </div>
    </div>
  );
};
