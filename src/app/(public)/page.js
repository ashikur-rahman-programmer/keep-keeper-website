import AllFriends from "@/components/AllFriends/AllFriends";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <div className="bg-base-200 py-16 md:py-20">
      <Hero />
      <AllFriends />
    </div>
  );
}
