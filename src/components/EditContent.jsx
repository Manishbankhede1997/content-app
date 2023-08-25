import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateContent } from "../Redux/Actions";

function EditContent({ idx, setFlag, setClick, click }) {
  // Retrieve content from Redux store
  const Content = useSelector((state) => state.reducer.content);

  const dispatch = useDispatch();
  // Find the current content item being edited
  const currentItem = Content.find((item) => item.id === idx);

  // State to manage edited content data
  const [contentData, setContentData] = useState({
    firstName: currentItem.firstName,
    lastName: currentItem.lastName,
    id: idx,
    isActive: currentItem.isActive,
  });

  // Handle updating the content data
  const handleUpdate = () => {
    dispatch(updateContent(contentData)); // Dispatch update action with new contentData
    setClick(click - 1); // Reset click state to return to main content view
    setFlag(false); // Reset the edit flag
    console.log(contentData);
  };

  // Handle changing the status (active or inactive)
  const handleStatusChange = (isActive) => {
    setContentData({ ...contentData, isActive }); // Update isActive field in contentData
  };

  return (
    <div className="m-5 flex flex-col items-center">
      {/* Title */}
      <h2 className="mb-4 text-xl font-semibold">Edit Content Screen</h2>

      {/* Edit Form */}
      <div className="flex flex-col gap-4 bg-purple-400 p-5 m-5">
        {/* First Name Input */}
        <div className="flex items-center">
          <span className="mr-2">First Name:</span>
          <input
            type="text"
            className="border rounded py-2 px-4 focus:outline-none focus:border-blue-500"
            placeholder="Enter text"
            value={contentData.firstName}
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
            value={contentData.lastName}
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
                checked={contentData.isActive}
                onChange={() => handleStatusChange(true)}
              />
              <span className="ml-1">Active</span>
            </label>
            {/* Inactive Checkbox */}
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 rounded-full text-blue-500 transition duration-300 ease-in-out focus:ring-2 focus:ring-blue-300 checked:bg-blue-500 checked:border-transparent"
                checked={!contentData.isActive}
                onChange={() => handleStatusChange(false)}
              />
              <span className="ml-1">Inactive</span>
            </label>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <button
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={handleUpdate}
      >
        Save Edited Content
      </button>
    </div>
  );
}

export default EditContent;
