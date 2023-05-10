//COMMENTS = NOTES ON TICKETS
import React from "react";
import { Comment } from "../pages/api/ticketapi";
import { FiTrash } from "react-icons/fi";


interface CommentsListProps {
  comments: Comment[];
  onDeleteComment: (id: number) => void;
}

const CommentsList: React.FC<CommentsListProps> = ({ comments, onDeleteComment }) => {
  const deleteComment = async (id: number) => {
    try {
      const res = await fetch(`/api/ticket_comments/${id}`, {
        method: 'DELETE',
      });

      if (res.status === 200) {
        // Optionally refresh comments to reflect the deletion in the UI
      } else {
        throw new Error('Failed to delete the comment');
      }
    } catch (error) {
      console.error('An unexpected error happened:', error);
    }
  }

  const handleDeleteComment = async (id: number) => {
    try {
      await deleteComment(id);
      onDeleteComment(id);
    } catch (error) {
      console.error(`An unexpected error happened: ${error}`);
    }
  };

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
                  <button 
                    className="bg-pinkred text-white font-bold py-2 px-4 rounded ml-8"
                    onClick={() => handleDeleteComment(comment.id)}>
                    <FiTrash className="w-3 h-3 " />
                  </button>      
                  </li>
                  <li className="text-md text-black dark:text-gray-400 mt-1">
                  <span className="font-bold"> Note: </span><span>{comment.comment} </span>
                  </li>
              </ul>
          ))}
          </div>
        </div>
    </div>
  );
};

export default CommentsList;
