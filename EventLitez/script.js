
const eventForm = document.getElementById('event-form');
const eventListing = document.getElementById('event-list');

let events = [];

function createEvent(event) {
  const newEvent = {
    name: event.name,
    date: event.date,
    time: event.time,
    location: event.location
  };
  events.push(newEvent);

  updateEventListing();
}

function updateEventListing() {} 