// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isFeedbackReceived: false}

  onClickMainButton = () => {
    this.setState({isFeedbackReceived: true})
  }

  renderTotalFeedbacks = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="main-container">
        <div className="main-card-container">
          <h1 className="main-feedback-heading">
            How satisfied are you with our customer support performance?
          </h1>
          <ul className="total-emojis-list">
            {emojis.map(eachEmojis => (
              <li key={eachEmojis.id}>
                <button
                  type="button"
                  className="main-button"
                  onClick={this.onClickMainButton}
                >
                  <img
                    src={eachEmojis.imageUrl}
                    alt={eachEmojis.name}
                    className="main-emoji"
                  />
                  <br />
                  <span className="emoji-name">{eachEmojis.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  renderThanksContainer = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="main-container">
        <div className="main-thankyou-container">
          <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
          <h1 className="main-thankyou">Thank You!</h1>
          <p className="main-love-paragraph">
            We will use feedback to improve our customer support performance.
          </p>
        </div>
      </div>
    )
  }

  render() {
    const {isFeedbackReceived} = this.state

    return (
      <div className="main-app-container">
        <div className="main-feedback-container">
          {isFeedbackReceived
            ? this.renderThanksContainer()
            : this.renderTotalFeedbacks()}
        </div>
      </div>
    )
  }
}

export default Feedback
