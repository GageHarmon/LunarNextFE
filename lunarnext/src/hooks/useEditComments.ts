// COMMENTS = NOTES ON TICKETS

import { useState, useEffect } from "react";
import { Comment } from "../pages/api/ticketapi";

const useEditComments = (id: any, currUser: any) => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    if (id) {
      fetch(`../api/ticket_comments`)
        .then((response) => response.json())
        .then((commentData) => {
          const filteredComments = commentData.filter(
            (comment: Comment) => comment.ticket_id == id
          );
          setComments(filteredComments);
        });
    }
  }, [id]);

  const handleSubmit = async (comment: string) => {
    const data = {
      user_id: currUser.id,
      ticket_id: id,
      comment,
    };

    const response = await fetch(`/api/ticket_comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const newComment = await response.json();
      setComments([...comments, newComment]);
    }
  };

  const removeComment = (commentId: number) => {
    setComments(comments.filter((comment) => comment.id !== commentId));
  };

  return { comments, handleSubmit, removeComment };
};

export default useEditComments;
