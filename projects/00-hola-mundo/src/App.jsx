import "./App.css";
import { FollowCard } from "./FollowCard";
export function App() {
  return (
    <section className="App">
      <FollowCard isFollowing userName="midudev">
        Miguel Hernadez
      </FollowCard>

      <FollowCard isFollowing={false} userName="mouredev">
        Mouredev
      </FollowCard>

      <FollowCard isFollowing userName="freddy vega">
        freddy Vega
      </FollowCard>
    </section>
  );
}
