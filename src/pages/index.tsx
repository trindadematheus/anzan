import Display from "@/components/Display";
import Prepare from "@/components/Prepare";
import Result from "@/components/Result";
import Settings from "@/components/Settings";

import { useSettings } from "@/hooks/use-settings";
import { useStats } from "@/hooks/use-stats";

function HomePage() {
  const { activeStep } = useSettings();
  const { bestPoint, currentPoints } = useStats();

  return (
    <>
      <div className="bg-base-200/40 min-h-screen flex justify-center items-center">
        <div className="container max-w-md py-8">
          {activeStep !== 2 && (
            <div className="flex gap-2 justify-between items-center mb-4">
              <div className="stats w-full bg-base-200 shadow">
                <div className="stat">
                  <div className="stat-title">Current points</div>
                  <div className="stat-value">{currentPoints}</div>
                </div>
              </div>
              <div className="stats w-full bg-base-200 shadow">
                <div className="stat">
                  <div className="stat-title">Best points</div>
                  <div className="stat-value">{bestPoint}</div>
                </div>
              </div>
            </div>
          )}

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
