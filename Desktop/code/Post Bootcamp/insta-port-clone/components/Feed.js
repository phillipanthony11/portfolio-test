import React from "react";
import Users from "./Users";
import Posts from "./Posts";
import UsersMiniProfile from "./UsersMiniProfile";
import PeopleToMeet from "./PeopleToMeet";
import { useSession } from "next-auth/react";

function Feed() {
  const { data: session } = useSession();
  return (
    <main
      className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-1-6xl mx-auto ${
        !session && "!grid-cols-1 !max-w-3xl"
      }`}
    >
      <section className="col-span-2">
        <Users />
        <Posts />
      </section>

      {session && (
        <section className="hidden xl:inline-grid md:col-span-1">
          <div className="fixed top-20">
            <UsersMiniProfile />
            <PeopleToMeet />
          </div>
        </section>
      )}
    </main>
  );
}

export default Feed;
