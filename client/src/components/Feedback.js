import React from 'react'
import arrowUp from '../assets/shared/icon-arrow-up.svg'
import commentIcon from '../assets/shared/icon-comments.svg'

const styles = {
  title: 'text-lg font-bold text-midnight',
  description: 'text-base font-normal text-slate',
  upvotes: 'mt-2 text-midnight font-bold text-sm',
  comments: 'font-bold text-base text-midnight',
}

const Feedback = ({ feedback }) => {
  const { title, description, upvotes, comments } = feedback

  return (
    <div className="card">
      <div className="flex">
        <div className="p-3 mr-10 rounded flex flex-col items-center justify-center bg-smoke self-start">
          <img src={arrowUp} alt="upvotes" />
          <div className={styles.upvotes}>{upvotes}</div>
        </div>
        <div className="grow">
          <h1 className={styles.title}>{title}</h1>
          <div className="flex items-center justify-between">
            <div className={styles.description}>{description}</div>
            <div className="flex items-center">
              <img
                className="w-auto h-4 mr-2"
                src={commentIcon}
                alt="comments"
              />
              <span className={styles.comments}>{comments?.length || 0}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feedback
