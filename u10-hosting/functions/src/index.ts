import { app } from './app'
import * as functions from 'firebase-functions'
export const example = functions.https.onRequest(app)
