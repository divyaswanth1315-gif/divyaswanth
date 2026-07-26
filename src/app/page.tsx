import Navigation from "@/components/Navigation/Navigation";
import Hero from "@/components/Hero/Hero";
import PreWedding from "@/components/PreWedding/PreWedding";
import Wedding from "@/components/Wedding/Wedding";
import Countdown from "@/components/Countdown/Countdown";
import Blessing from "@/components/Blessing/Blessing";
import MusicPlayer from "@/components/Music/MusicPlayer";
import SmoothScroll from "@/components/Experience/SmoothScroll";
import WeddingLoader from "@/components/Loader/WeddingLoader";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <SmoothScroll />
      <WeddingLoader />

      <Navigation />
      <MusicPlayer />

      <Hero />
      <PreWedding />
      <Wedding />
      <Countdown />
      <Blessing />
    </main>
  );
}
