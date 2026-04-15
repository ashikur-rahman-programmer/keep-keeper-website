import AllFriends from "@/components/AllFriends/AllFriends";
import StatsCards from "@/components/AllFriends/StatsCards";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <div className="bg-base-200 py-16 md:py-20">
      <Hero />
      <StatsCards />
      <AllFriends />
    </div>
  );
}
