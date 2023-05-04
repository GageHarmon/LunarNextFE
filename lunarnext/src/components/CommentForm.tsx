import React, { useState } from "react";

interface CommentFormProps {
  handleSubmit: (comment: string) => void;
}

const CommentForm: React.FC<CommentFormProps> = ({ handleSubmit }) => {
  const [comment, setComment] = useState("");
  const [showForm, setShowForm] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit(comment);
    setComment("");
    setShowForm(false);
  };

  return (
    <>
      {!showForm ? (
        <button
          onClick={() => setShowForm(true)}
          className="bg-gradient-to-br from-lightpurp to-navpurp text-white font-bold py-2 px-4 rounded mt-2"
        >
          Add A New Note
        </button>
      ) : (
        <form onSubmit={onSubmit}>
          <label
            htmlFor="comments"
            className="block mb-2 mt-4 text-sm font-medium text-navpurp dark:text-white"
          >
            New Note:
          </label>
          <textarea
            id="comments"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={4}
            cols={50}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Add your note here..."
          ></textarea>
          <button
            type="submit"
            className="bg-gradient-to-br from-lightpurp to-navpurp text-white font-bold py-2 px-4 rounded mt-2"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={() => setShowForm(false)}
            className="bg-red-500 text-white font-bold py-2 px-4 rounded mt-2 ml-2"
          >
            Cancel
          </button>
        </form>
      )}
    </>
  );
};

export default CommentForm;
