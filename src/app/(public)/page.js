import AllFriends from "@/components/AllFriends/AllFriends";
import Hero from "@/components/Hero/Hero";
import StatsCards from "@/components/StatsCards/StatsCards";

export default function Home() {
  return (
    <div className="bg-base-200 py-16 md:py-20 px-2">
      <Hero />
      <StatsCards />
      <AllFriends />
    </div>
  );
}
