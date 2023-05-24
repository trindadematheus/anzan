import { useState } from "react";

import Display from "@/components/Display";
import Prepare from "@/components/Prepare";
import Result from "@/components/Result";
import Settings from "@/components/Settings";
import { useSettings } from "@/hooks/use-settings";

function HomePage() {
  const { activeStep } = useSettings();

  return (
    <>
      <div className="bg-base-200/40 min-h-screen flex justify-center items-center">
        <div className="container max-w-md py-8">
          <div className="card bg-base-200">
            <div className="card-body">
              {(() => {
                switch (activeStep) {
                  case 0:
                    return <Settings />;
                  case 1:
                    return <Prepare />;
                  case 2:
                    return <Display />;
                  case 3:
                    return <Result />;
                  default:
                    return null;
                }
              })()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
