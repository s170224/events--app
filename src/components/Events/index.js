import {Component} from 'react'

import EventItem from '../EventItem'
import './index.css'

const eventsList = [
  {
    id: 'f9bb2373-b80e-46b8-8219-f07217b9f3ce',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/event-canada-dance-festival-img.png',
    name: 'Canada Dance Festival',
    location: 'Canada, America',
    registrationStatus: 'YET_TO_REGISTER',
  },
  {
    id: 'c0040497-e9cb-4873-baa9-ef5b994abfff',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-kathakali-img.png',
    name: 'Puthanalkkal Kalavela',
    location: 'Karnataka, India',
    registrationStatus: 'REGISTERED',
  },
  {
    id: '0037d5e4-4005-4030-987b-ce41b691b92a',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-kuchipudi-img.png',
    name: 'Nithyopahara',
    location: 'Kerala, India',
    registrationStatus: 'REGISTRATIONS_CLOSED',
  },
  {
    id: 'c9ff08cb-610c-4382-9939-78e5e50a72b2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-bharatanatyam-img.png',
    name: 'Shivam',
    location: 'Andhra Pradesh, India',
    registrationStatus: 'YET_TO_REGISTER',
  },
  {
    id: 'd1153723-5b6e-4628-9a1a-ccd8f84f1273',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/events-kolatam-img.png',
    name: 'Janapada Kolatam',
    location: 'Tamil Nadu, India',
    registrationStatus: 'REGISTERED',
  },
  {
    id: '7d6ec013-d0ae-4d84-b776-14b733a9174f',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/event-colonial-fest-img.png',
    name: 'Colonial Fest',
    location: 'Washington, America',
    registrationStatus: 'REGISTRATIONS_CLOSED',
  },
]
// Write your code here

const registrationsData = {
  initial: 'INITIAL',
  registrationsOpen: 'YET_TO_REGISTER',
  alreadyRegistered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

class Events extends Component {
  state = {registrationStatus1: 'INITIAL', isClick: true}

  onclickUpdateRegistrationStatus = id => {
    const expectedData = eventsList.filter(eachItem => eachItem.id === id)
    this.setState({
      registrationStatus1: expectedData[0].registrationStatus,
      isClick: false,
    })
  }

  registrationStatusYetTOREGISTER = () => (
    <div className="reg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png "
        alt="yet to register"
        className="img1"
      />
      <p>A live performance brings so much to your relationship with dance</p>
      <button type="button">Register Here</button>
    </div>
  )

  registrationStatusREGISTERED = () => (
    <div className="reg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="img1"
      />
      <h1>You have already registered for the event</h1>
    </div>
  )

  registrationStatusREGISTRATIONSCLOSED = () => (
    <div className="reg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="img1"
      />
      <h1>Registrations Are Closed Now!"</h1>
      <p>Stay tuned. We will reopen</p>
    </div>
  )

  switchFunction = () => {
    const {registrationStatus1} = this.state
    switch (registrationStatus1) {
      case registrationsData.registrationsOpen:
        return this.registrationStatusYetTOREGISTER()
      case registrationsData.alreadyRegistered:
        return this.registrationStatusREGISTERED()
      case registrationsData.registrationsClosed:
        return this.registrationStatusREGISTRATIONSCLOSED()
      default:
        return null
    }
  }

  render() {
    const {registrationStatus1, isClick} = this.state
    const switchFunction1 = this.switchFunction()
    console.log(registrationStatus1)
    console.log(switchFunction1)
    return (
      <>
        <div className="container">
          <div className="main-container">
            <h1>Events</h1>
            <ul className="list-container">
              {eventsList.map(eachItem => (
                <EventItem
                  key={eachItem.id}
                  eachEvent={eachItem}
                  onclickUpdateRegistrationStatus={
                    this.onclickUpdateRegistrationStatus
                  }
                />
              ))}
            </ul>
          </div>
          {isClick ? (
            <div className="view-container">
              <p>Click on an event, to view its registration details</p>
            </div>
          ) : (
            this.switchFunction()
          )}
        </div>
      </>
    )
  }
}

export default Events
