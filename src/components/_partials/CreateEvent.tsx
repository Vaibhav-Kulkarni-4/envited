export default function CreateEvent() {
  function createEvent() {
    // on click of Save button, save all respective data to localDB.
    /* Sample Format
      {
        "Birthday Bash: {
          "event_name": "Birthday Bash",
          "host_name": "Elysia",
          "start_date_and_time": "",
          "end_date_and_time": "",
          "location": "",
          "event_photo": ""
        }
      }
    */
  }

  return (
    <div className="px-3 mb-4">
      <form className="space-y-8 divide-y divide-gray-200">
        <div className="space-y-8 divide-y divide-gray-200">
          <div className="pt-8">
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="event-name"
                  className="block text-sm font-medium text-gray-700">
                  Event name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="event-name"
                    id="event-name"
                    autoComplete="off"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="host-name"
                  className="block text-sm font-medium text-gray-700">
                  Host name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="host-name"
                    id="host-name"
                    autoComplete="off"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700">
                  Location
                </label>
                <div className="mt-1">
                  <input
                    id="location"
                    name="location"
                    type="text"
                    autoComplete="off"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="event_photo"
                  className="block text-sm font-medium text-gray-700">
                  Event Photo
                </label>
                <div className="mt-1">
                  <input
                    id="event_photo"
                    name="event_photo"
                    type="text"
                    autoComplete="off"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-5">
          <div className="flex justify-end">
            {/* <button
              type="button"
              className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Cancel
            </button> */}
            <button
              type="button"
              className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={createEvent}>
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
