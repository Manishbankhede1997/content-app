import { TYPE } from "./Actions";

const initialState = {
  content: [],
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE.ADDCONTENT:
      const newContentData = action.payload;

      return { ...state, content: [...state.content, newContentData] };

    case TYPE.DELETECONTENT:
      // Action to delete a quiz from the state and local storage
      const filteredContentList = state.content.filter(
        (content) => content.id !== action.payload
      );
      return { ...state, content: filteredContentList };

    case TYPE.UPDATECONTENT:
      const updatedcontentData = action.payload;
      const updatedcontentArr = state.content.map((data) =>
        updatedcontentData.id === data.id ? updatedcontentData : data
      );
      console.log("update", updatedcontentArr);
      return { ...state, content: updatedcontentArr };

    default:
      return state;
  }
};
