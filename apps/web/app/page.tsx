import BringYourFriends from "@/components/LandingPage/BringYourFriends";
import GameSection from "@/components/LandingPage/GameSection";
import HeroSection from "@/components/LandingPage/HeroSection";
import NFTSection from "@/components/LandingPage/NFTSection";
import TimePotionSection from "@/components/LandingPage/TimePotionSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <GameSection />
      <NFTSection />
      <TimePotionSection />
      <BringYourFriends />
    </>
  );
}
