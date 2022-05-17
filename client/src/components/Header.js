import React from 'react'
import arrowDown from '../assets/shared/icon-arrow-down.svg'
import iconSuggestions from '../assets/suggestions/icon-suggestions.svg'

const styles = {
  headerWrapper: 'flex items-center bg-navy text-white mb-5 px-4 py-3 rounded',
  icon: 'h-6 w-auto mr-4',
  button:
    'inline-block py-3 px-6 bg-purple cursor-pointer text-sm font-bold rounded',
}

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <img className={styles.icon} src={iconSuggestions} alt="Suggestions" />
      <div className="mr-9">6 Suggestions</div>
      <div className="flex items-center">
        <div className="text-smoke mr-1">Sort by :</div>
        <div className="flex items-center">
          <span className="mr-2 font-bold cursor-pointer"> Most Upvotes</span>
          <img src={arrowDown} alt="arrowDown" />
        </div>
      </div>
      <div className="ml-auto">
        <a className={styles.button}>+ Add Feedback</a>
      </div>
    </div>
  )
}

export default Header
