import uuid from "uuid";

// Example action types in Redux

const ADD_COMMENT = "ADD_COMMENT";

{
  type: ADD_COMMENT,
  text: "First comment "
}

const REMOVE_COMMENT = "REMOVE_COMMENT";

{
  type: REMOVE_COMMENT,
  id: 20
}

const EDIT_COMMENT = "EDIT_COMMENT";

{
  type: EDIT_COMMENT,
  id: 20,
  text: "Comment has been changed"
}

const THUMB_UP_COMMENT = "THUMB_UP_COMMENT";

{
  type: THUMB_UP_COMMENT,
  value: +1,
  id: 20 // can be helpful for delete own comment or use thumb_down_comment
}

const THUMB_DOWN_COMMENT = "THUMB_DOWN_COMMENT";

{
  type: THUMB_DOWN_COMMENT,
  value: -1,
  id: 20 // can be helpful for delete own comment or use thumb_up_comment
}

// Actions creators

function addComment(text) {
  return {
    type: ADD_COMMENT,
    text,
    id: uuid.v4()
  }
}

function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    id
  }
}

function editComment(id, text) {
  return {
    type: EDIT_COMMENT,
    text,
    id
  }
}

function thumbUpComment(id) {
  return {
    type: THUMB_UP_COMMENT,
    id
  }
}

function thumbDownComment(id) {
  return {
    type: THUMB_DOWN_COMMENT,
    id
  }
}