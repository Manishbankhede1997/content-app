export const TYPE = {
  ADDCONTENT: "ADDCONTENT",
  DELETECONTENT: "DELETECONTENT",
  UPDATECONTENT: "UPDATECONTENT",
  CONTENT_INDEX: "CONTENT_INDEX",
};
export const addContent = (data) => {
  return {
    type: TYPE.ADDCONTENT,
    payload: data, // The new quiz data to be added
  };
};

export const deleteContent = (id) => {
  return {
    type: TYPE.DELETECONTENT,
    payload: id, // The ID of the quiz to be deleted
  };
};

export const updateContent = (updatedContent) => ({
  type: TYPE.UPDATECONTENT,
  payload: updatedContent,
});
