
import axios from 'axios'
import { config } from './config'

export async function register({ firstName, lastName, email, password, role }) {
  try {
    console.log(firstName + " " + lastName + " " + email + " " + password + " " + role);
    // url to send the request
    const url = `${config.server}/api/v1/auth/register`

    // create a body object
    const body = { firstName, lastName, email, password, role }

    // send POST request
    const response = await axios.post(url, body)

    // return response body
    return response.data
  } catch (ex) {
    console.log(`exception: `, ex)
  }
}


export async function login({ email, password, role }) {
  try {

    console.log(email + " " + password + " " + role);
    // create url
    const url = `${config.server}/api/v1/auth/login`

    // create body
    const body = { email, password, role }

    // send the POST request
    const response = await axios.post(url, body)

    // return response body
    return response.data
  } catch (ex) {
    console.log(`exception: `, ex)
  }
}
