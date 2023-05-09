//COMMENTS = NOTES ON TICKETS

import React from "react";
import { Comment } from "../pages/api/ticketapi";

interface CommentsListProps {
  comments: Comment[];
}

const CommentsList: React.FC<CommentsListProps> = ({ comments }) => {
  return (
    <div>
        <h1 className="text-navpurp text-2xl font-bold rounded mt-12">
        Important Notes:
        </h1>
        <div className="py-2 px-4 rounded mt-2">
        {comments.map((comment) => (
            <div key={comment.id}>
                <p className="mt-1 text-sm text-navpurp dark:text-gray-400">
                    Date: {new Date(comment.created_at).toLocaleDateString()}
                </p>
                <p className="mt-1 text-sm text-black dark:text-gray-400">
                <span className="font-bold"> Note: </span><span>{comment.comment} </span>
                </p>            
            </div>
        ))}
        </div>
    </div>
  );
};

export default CommentsList;
