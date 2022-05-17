import React, { useState, useEffect } from 'react'
import Feedback from './Feedback'
import data from '../data/data.json'

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([])

  useEffect(() => {
    setFeedbacks(data.productRequests)
  }, [])

  return (
    <>
      {feedbacks.map(feedback => (
        <Feedback key={feedback.id} feedback={feedback} />
      ))}
    </>
  )
}

export default FeedbackList
