import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name : "신동욱",
    comment : "안녕하세요, 신동욱 입니다."
  },
  {
    name : "진희도",
    comment : "안녕하세요, 진희도 입니다."
  },
  {
    name : "이상현",
    comment : "안녕하세요, 이상현 입니다."
  },
]

function CommentList(props) {
  return (
      <div>
          {comments.map((foo) => {
              return (
                  <Comment name={foo.name} comment={foo.comment} />
              );
          })}
      </div>
  );
}


export default CommentList;
