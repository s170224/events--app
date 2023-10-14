import './index.css'

const EventItem = props => {
  const {eachEvent, onclickUpdateRegistrationStatus} = props
  const {imageUrl, id, name, registrationStatus, location} = eachEvent

  const onclickFunction = () => {
    onclickUpdateRegistrationStatus(id)
  }

  return (
    <li className="li-container">
      <div className="con1">
        <button type="button" className="button" onClick={onclickFunction}>
          <img src={imageUrl} className="image1" alt="event" />
        </button>
        <p className="heading">{name}</p>
        <p>{location}</p>
      </div>
    </li>
  )
}

export default EventItem
