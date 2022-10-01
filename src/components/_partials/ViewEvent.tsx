import { useState, useEffect } from "react";
import { localStorageConstants } from "../../constants";

export default function ViewEvent() {
  const [events, setEvents] = useState({});

  useEffect(() => {
    getEventDetails();
  }, []);

  function getEventDetails() {
    try {
      let createdEvents = JSON.parse(
        localStorage.getItem(localStorageConstants.eventsStorageKey) || "{}"
      );
      console.log("createdEvents", createdEvents);
      setEvents(createdEvents);
    } catch (error) {}
  }

  return (
    <div>
      <div className="w-auto h-375 flex flex-row items-center justify-center ">
        <img src={"Birthday_cake.png"}></img>
      </div>
      <div className="pl-5 mt-3">
        <div className="font-bold leading-8 text-coolestBlue-700 not-italic text-2xl">
          <p>Birthday Bash</p>
        </div>
        <div className="mt-1 font-bold leading-4 text-coolestGrey-200 not-italic text-sm">
          <p>Hosted by Elysia</p>
        </div>
      </div>
    </div>
  );
}
