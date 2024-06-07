import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FanEngagement = () => {
  const [polls, setPolls] = useState([
    { id: 1, question: 'Who is your favorite RCB player?', options: ['Virat Kohli', 'AB de Villiers', 'Chris Gayle'], votes: [10, 20, 15] },
    { id: 2, question: 'What is your favorite RCB match?', options: ['RCB vs CSK', 'RCB vs MI', 'RCB vs KKR'], votes: [30, 25, 10] }
  ]);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [gallery, setGallery] = useState([]);

  const handleVote = (pollId, optionIndex) => {
    setPolls(polls.map(poll => 
      poll.id === pollId 
        ? { ...poll, votes: poll.votes.map((vote, index) => index === optionIndex ? vote + 1 : vote) }
        : poll
    ));
  };

  const calculatePercentage = (poll, optionIndex) => {
    const totalVotes = poll.votes.reduce((total, votes) => total + votes, 0);
    return totalVotes === 0 ? 0 : ((poll.votes[optionIndex] / totalVotes) * 100).toFixed(2);
  };

  const handleCommentSubmit = () => {
    setComments([...comments, newComment]);
    setNewComment('');
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setGallery([...gallery, reader.result]);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-4xl font-bold mb-8 text-center">Fan Engagement</h2>
      
      <div className="mb-8 bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-4">Fan Polls</h3>
        {polls.map(poll => (
          <div key={poll.id} className="mb-4">
            <h4 className="text-xl font-bold mb-2">{poll.question}</h4>
            {poll.options.map((option, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-between bg-gray-100 rounded-lg p-3 mb-2"
              >
                <button
                  className="px-4 py-2 bg-red-800 text-white rounded"
                  onClick={() => handleVote(poll.id, index)}
                >
                  {option}
                </button>
                <div className="flex items-center">
                  <span className="text-gray-600 mr-2">{poll.votes[index]} votes</span>
                  <span className="text-gray-600">({calculatePercentage(poll, index)}%)</span>
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-4">Fan Comments</h3>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Leave a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="p-2 border rounded w-full"
          />
          <button
            onClick={handleCommentSubmit}
            className="mt-2 px-4 py-2 bg-red-800 text-white rounded hover:bg-red-700"
          >
            Submit
          </button>
        </div>
        <div>
          {comments.map((comment, index) => (
            <div key={index} className="mb-2 p-3 border rounded bg-gray-100">
              {comment}
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-4">Fan Gallery</h3>
        <input type="file" onChange={handleImageUpload} className="mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {gallery.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt="Fan Upload"
              className="rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FanEngagement;
