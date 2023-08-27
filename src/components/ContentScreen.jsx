import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContent } from "../Redux/Actions";

function ContentScreen(props) {
  // State to manage input data
  const [contentData, setContentData] = useState({
    firstName: "",
    lastName: "",
    id: Date.now(), // Assign a unique ID based on the current timestamp
    isActive: false, // Default status is inactive
  });

  const dispatch = useDispatch(); // Initialize Redux dispatch function

  // Handle saving content data
  const handleSave = (e) => {
    e.preventDefault();

    // Check if the content fields are filled and the status is selected as active
    if (contentData.firstName.length > 0 && contentData.lastName.length > 0) {
      // Dispatch the "addContent" action with the contentData
      dispatch(addContent(contentData));

      // Update the click state to go back to the main content view
      props.setClick(props.click - 1);
    } else {
      // If data is not complete, show an alert
      alert("Please fill in all the data.");
    }
  };

  return (
    <div className="m-5 flex flex-col items-center">
      {/* Title */}
      <h2 className="mb-4 text-xl font-semibold">Create Content Screen</h2>
      {/* Input Form */}
      <div className="flex flex-col gap-4 bg-slate-200	 p-5 m-5">
        {/* First Name Input */}
        <div className="flex items-center">
          <span className="mr-2">First Name:</span>
          <input
            type="text"
            className="border rounded py-2 px-4 focus:outline-none focus:border-blue-500"
            placeholder="Enter text"
            onChange={(e) =>
              setContentData({ ...contentData, firstName: e.target.value })
            }
          />
        </div>
        {/* Last Name Input */}
        <div className="flex items-center">
          <span className="mr-2">Last Name:</span>
          <input
            type="text"
            className="border rounded py-2 px-4 focus:outline-none focus:border-blue-500"
            placeholder="Enter text"
            onChange={(e) =>
              setContentData({ ...contentData, lastName: e.target.value })
            }
          />
        </div>
        {/* Status Selection */}
        <div className="flex items-center">
          <span className="mr-2">Status:</span>
          <div className="flex flex-col gap-2">
            {/* Active Checkbox */}
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 rounded-full text-blue-500 transition duration-300 ease-in-out focus:ring-2 focus:ring-blue-300 checked:bg-blue-500 checked:border-transparent"
                onChange={(e) =>
                  setContentData({
                    ...contentData,
                    isActive: true,
                  })
                }
              />
              <span className="ml-1">Active</span>
            </label>
            {/* Inactive Checkbox */}
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 rounded-full text-blue-500 transition duration-300 ease-in-out focus:ring-2 focus:ring-blue-300 checked:bg-blue-500 checked:border-transparent"
                onChange={(e) =>
                  setContentData({
                    ...contentData,
                    isActive: false,
                  })
                }
              />
              <span className="ml-1">Inactive</span>
            </label>
          </div>
        </div>
      </div>
      {/* Save Button */}
      <button
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={handleSave}
      >
        Save Content
      </button>
    </div>
  );
}

export default ContentScreen;
