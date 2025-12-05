import { Footer } from "./footer";
import { Hero } from "./hero";
import { LandingLayout } from "./layout";
import { NewsLetterSignup } from "./news-letter";

export function LandingPage() {
  return (
    <LandingLayout>
      <div className="w-full">
        <Hero />
        <NewsLetterSignup />
        <Footer />
      </div>
    </LandingLayout>
  );
}
