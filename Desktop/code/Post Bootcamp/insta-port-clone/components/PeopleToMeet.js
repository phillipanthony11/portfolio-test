import React from "react";

function PeopleToMeet() {
  var suggestions = [
    {
      id: 1,
      avatar: "./images/Bear.jpg",
      username: "Bear",
      company: "Bear Industrial Farms",
    },
    {
      id: 2,
      avatar: "./images/Suzanne.jpg",
      username: "Suzanne!!!",
      company: "Safeway",
    },
    {
      id: 3,
      avatar: "./images/Mckenzie.jpg",
      username: "Mckenzie",
      company: "SeaTac",
    },
    {
      id: 4,
      avatar: "./images/Aristotle.jpg",
      username: "Aristotle",
      company: "MIT",
    },
    {
      id: 5,
      avatar: "./images/Yellow.jpg",
      username: "Yellow",
      company: "Port Townsend Public Library",
    },
    {
      id: 6,
      avatar: "./images/Kenzie.jpg",
      username: "Kenzie",
      company: "El Corazon",
    },
    {
      id: 7,
      avatar: "./images/Stella.jpg",
      username: "Stella",
      company: "National Parks Service",
    },
    {
      id: 8,
      avatar: "./images/Koa.jpg",
      username: "Koa",
      company: "Childen's Hospital Seattle",
    },
  ];
  return (
    <div className="mt-5 ml-11">
      <div className="flex justify-between text-sm mb-6">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>

      {suggestions.map((profile) => (
        <div
          key={profile.id}
          className="flex items-center justify-between mt-4"
        >
          <img
            className="w-10 h-10 rounded-full border p-[2px]"
            src={profile.avatar}
            alt=""
          />
          <div className="flex-1 ml-5">
            <h2 className="font-semibold text-sm">{profile.username}</h2>
            <h3 className="text-xs text-gray-400">
              Works at {profile.company}
            </h3>
          </div>
          <button className="text-blue-400 text-xs font-bold">Follow</button>
        </div>
      ))}
    </div>
  );
}

export default PeopleToMeet;
