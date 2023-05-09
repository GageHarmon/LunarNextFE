//COMMENTS = NOTES ON TICKETS
import React from "react";
import { Comment } from "../pages/api/ticketapi";
// import { useRouter } from "next/router";

interface CommentsListProps {
  comments: Comment[];
}

// const handleDelete = async (commentId: number) => {
//   const router = useRouter();

//   const res = await fetch(`/api/tickets/${commentId}`, {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ id: commentId }),
//   });
//   const data = await res.json();
//   router.push("/tickets/[id]");
// };

const CommentsList: React.FC<CommentsListProps> = ({ comments }) => {
  return (
    <div className="mt-20 p-2 shadow-2xl rounded-md">
      <div>
        <h1 className="text-navpurp text-2xl font-bold rounded">
          Important Notes:
        </h1>
          <div className="py-2 px-4 rounded">
          {comments.map((comment) => (
              <ul key={comment.id}>
                  <li className="text-md text-navpurp dark:text-gray-400 mt-6">
                  <span className="font-bold"> Date: </span><span>{new Date(comment.created_at).toLocaleDateString()}</span>
                  </li>
                  <li className="text-md text-black dark:text-gray-400 mt-1">
                  <span className="font-bold"> Note: </span><span>{comment.comment} </span>
                  {/* <button className="text-red-500 hover:text-red-700">Delete</button> */}
                  </li>            
              </ul>
          ))}
          </div>
        </div>
    </div>
  );
};

export default CommentsList;
