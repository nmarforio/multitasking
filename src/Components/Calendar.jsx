import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useState } from "react";

function Calendar() {
  const [date, setDate] = useState("");

  function handleClick(e) {
    setDate(e.dateStr);
    console.log(date)
  }

  function renderContent(eventInfo) {
    return (
      <>
        <p>{eventInfo.timeText}</p>
        <h1>{eventInfo.event.title}</h1>
      </>
    );
  }

  return (
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        dateClick={handleClick}
        eventContent={renderContent}
      />
  );
}

export default Calendar;
