import React from "react";
import UserStory from "./UserStory";
import Image from "next/image";
import aristotle from "../public/images/Aristotle.jpg";
import { useSession } from "next-auth/react";

function Users() {
  const { data: session } = useSession();
  console.log(aristotle);

  var suggestions = [
    {
      id: 1,
      img: "./images/Aristotle.jpg",
      alt: "dog deep in thought",
      username: "Aristotle",
      key: 1,
    },

    {
      id: 2,
      img: "./images/Kenzie.jpg",
      alt: "dog hanging out with siblings",
      username: "Kenzie the pup",
      key: 2,
    },
    {
      id: 3,
      img: "./images/Stella.jpg",
      alt: "dog somewhere",
      username: "Stella",
      key: 3,
    },
    {
      id: 4,
      img: "./images/Suzanne.jpg",
      alt: "dog somewhere",
      username: "Suzanne!!!",
      key: 4,
    },
    {
      id: 5,
      img: "./images/Mckenzie.jpg",
      alt: "dog somewhere",
      username: "Mckenzie",
      key: 5,
    },
    {
      id: 6,
      img: "./images/Yellow.jpg",
      alt: "dog somewhere",
      username: "Yellow Dog",
      key: 6,
    },
    {
      id: 7,
      img: "./images/Bear.jpg",
      alt: "dog somewhere",
      username: "Bear",
      key: 7,
    },
    {
      id: 8,
      img: "./images/Koa.jpg",
      alt: "dog somewhere",
      username: "Koa",
      key: 8,
    },
  ];

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border-2 rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {session && (
        <UserStory img={session.user.image} username={session.user.username} />
      )}

      {suggestions.map((profile) => (
        <UserStory
          id={profile.id}
          img={profile.img}
          alt={profile.alt}
          username={profile.username}
          key={profile.key}
        />
      ))}
    </div>
  );
}

export default Users;
