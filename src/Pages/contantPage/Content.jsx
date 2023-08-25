import React, { useState } from "react";
import ContentScreen from "../../components/ContentScreen";
import EditContent from "../../components/EditContent";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteContent } from "../../Redux/Actions";
import LineGraph from "../../components/LineGraph";

function Content() {
  // State variables
  const [click, setClick] = useState(0); // Tracks the state of content creation/edit mode
  const [flag, setFlag] = useState(false); // Flag for edit mode
  const [idx, setIdx] = useState(""); // Index of content being edited
  const [graph, setGraph] = useState(false);
  const dispatch = useDispatch();
  const Content = useSelector((state) => state.reducer.content); // Retrieves content from Redux store

  // Handler for creating new content
  const handleContent = (e) => {
    e.preventDefault();
    setClick(click + 1);
  };

  // Handler for deleting content
  const handleDelete = (id) => {
    dispatch(deleteContent(id)); // Dispatches delete action to Redux
  };

  // Handler for entering edit mode
  const handleEdit = (opt) => {
    setIdx(opt.id);
    setClick(click + 1);
    setFlag(true);
  };

  // Handler for navigating to the chart and map page
  const handleChart = () => {
    setGraph(true);
  };
  const handleSideContent = () => {
    setGraph(false);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-[200px,1fr] bg-repeat-y static  gap-0">
      {/* Sidebar */}
      <div className="bg-gray-400 p-4  grid grid-flow-row md:min-h-screen  justify-center border-2">
        <div className="text-xl font-bold text-white">
          <button className="hover:text-sky-700" onClick={handleSideContent}>
            content
          </button>
        </div>
        <div className="text-xl font-bold text-white">
          <button className="hover:text-sky-700" onClick={handleChart}>
            chart and map
          </button>
        </div>
        <div className="text-xl font-bold text-white">
          <button className="hover:text-sky-700">sidebar</button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="bg-grey-300 p-4">
        <div className="m-5">
          {graph === true ? (
            <LineGraph />
          ) : (
            <div className="flex flex-col gap-4 items-center space-y-4">
              {/* Create Content or Show Existing Content */}
              {click === 0 ? (
                <>
                  <div>
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                      onClick={handleContent}
                    >
                      Create Content
                    </button>
                  </div>
                  {Content.length <= 0 ? (
                    <div className="bg-gray-100 my-5 p-4 rounded">
                      No Content Found. Please add content first.
                    </div>
                  ) : (
                    <div className="flex gap-10 justify-center flex-wrap ">
                      {/* Map and display existing content */}
                      {Content.map((opt, i) => (
                        <div className="h-80 w-80  bg-slate-200 " key={i}>
                          {/* Individual content card */}
                          <div className="  mx-auto bg-slate-200 shadow-md rounded-lg overflow-hidden">
                            <div className="p-5 ">
                              <h2 className="text-lg font-normal mb-2">
                                FirstName : {opt.firstName}
                              </h2>
                              <h2 className="text-lg font-normal mb-2">
                                LastName : {opt.lastName}
                              </h2>
                              <p className="text-gray-600 font-normal">
                                Status : {opt.isActive ? "active" : "inactive"}
                              </p>
                            </div>
                          </div>

                          {/* Edit and Delete buttons */}
                          <div className="flex flex-col items-center gap-2">
                            <button
                              className="mt-3 bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded"
                              onClick={() => handleEdit(opt)}
                            >
                              Edit
                            </button>
                            <button
                              className="mt-3 bg-red-300 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                              onClick={() => handleDelete(opt.id)}
                            >
                              delete
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : flag ? (
                // Render EditContent component
                <EditContent
                  idx={idx}
                  setFlag={setFlag}
                  setClick={setClick}
                  click={click}
                />
              ) : (
                // Render ContentScreen component
                <ContentScreen click={click} setClick={setClick} />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Content;
