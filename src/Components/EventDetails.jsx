import React from "react";
import { techEventDetails } from "../utils/techEvents";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const EventDetails = () => {
  const { id } = useParams();
  const event = techEventDetails[1]; // Assuming you only have one event in the JSON

  return (
    <div>
     {techEventDetails.filter((event) => event.id == id).map((event) => (
         
      <Link to={`/events/tech/${id}`}>
      
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
          <div className="img-container mb-6 rounded-lg overflow-hidden shadow-md">
            <img
              src={event.image}
              alt={event.name}
              className="w-full h-64 object-cover"
            />
          </div>

          <div className="content space-y-6">
            <h1 className="text-3xl font-bold text-center text-gray-800">
              {event.name}
            </h1>
            <p className="text-gray-600 text-lg">{event.description}</p>

            <div className="bg-gray-50 p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-700">
                Team Details
              </h2>
              <p className="text-gray-600">
                <strong>Team Size:</strong> {event.teamSize}
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-teal-500 text-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Prizes</h3>
              <ul className="list-disc list-inside">
                {Object.entries(event.prizes).map(([place, prize], index) => (
                  <li key={index} className="text-white">
                    {place}: {prize}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-700">Rounds</h3>
              {event.rounds.map((round, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-4 rounded-lg shadow-md"
                >
                  <h4 className="text-xl font-semibold text-gray-800">
                    {round.roundName}
                  </h4>
                  <p className="text-gray-600">
                    <strong>Platform:</strong> {round.platform}
                  </p>
                  <p className="text-gray-600">
                    <strong>Format:</strong> {round.format}
                  </p>
                  <p className="text-gray-600">
                    <strong>Selection:</strong> {round.selection}
                  </p>

                  {round.requirements && (
                    <>
                      <h5 className="font-semibold text-gray-700">
                        Requirements:
                      </h5>
                      <ul className="list-disc list-inside text-gray-600">
                        {round.requirements.map((req, i) => (
                          <li key={i}>{req}</li>
                        ))}
                      </ul>
                    </>
                  )}

                  {round.tasks && (
                    <>
                      <h5 className="font-semibold text-gray-700">Tasks:</h5>
                      <ul className="list-disc list-inside text-gray-600">
                        {round.tasks.map((task, i) => (
                          <li key={i}>{task}</li>
                        ))}
                      </ul>
                    </>
                  )}

                  <p className="text-gray-600">
                    <strong>Dataset:</strong> {round.dataset}
                  </p>
                  <p className="text-gray-600">
                    <strong>Judgement Criteria:</strong>{" "}
                    {round.judgementCriteria}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-700">
                Additional Details
              </h3>
              <p className="text-gray-600">
                <strong>Location:</strong> {event.location}
              </p>
              <p className="text-gray-600">
                <strong>Date and Timing:</strong> {event.dateAndTime}
              </p>

              <h3 className="font-semibold text-gray-700">
                Contact Information:
              </h3>
              <ul className="list-disc list-inside text-gray-600">
                {Object.entries(event.contactInfo).map(
                  ([name, phone], index) => (
                    <li key={index}>
                      {name}: {phone}
                    </li>
                  )
                )}
              </ul>

              <h3 className="font-semibold text-gray-700">Note:</h3>
              <p className="text-gray-600">{event.note}</p>

              <h3 className="font-semibold text-gray-700">Eligibility:</h3>
              <p className="text-gray-600">{event.eligibility}</p>

              <h3 className="font-semibold text-gray-700">
                Additional Information:
              </h3>
              <p className="text-gray-600">{event.additionalInfo}</p>
            </div>
          </div>
        </div>
      </Link>
    ))}
    </div>
  );
};

export default EventDetails;
