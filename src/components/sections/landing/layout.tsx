import React from "react";

import { VerticleLine, LogoWithName, ProfileSection } from "~/components/ui";

const LandingLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <nav className="h-14 w-full bg-background flex items-center justify-center fixed top-0 left-0 z-10 border-b border-border/80">
        <div className="h-full w-full  flex items-center justify-between px-8">
          <LogoWithName />
          <div className="flex items-center mt-2">
            <ProfileSection />
          </div>
        </div>
      </nav>
      <div className="w-full flex min-h-screen pt-14">
        <VerticleLine />
        <div className="flex-1 flex items-center justify-center">
          {children}
        </div>
        <VerticleLine />
      </div>
    </div>
  );
};

export { LandingLayout };
