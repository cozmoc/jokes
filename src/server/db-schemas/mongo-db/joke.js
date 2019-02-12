'use strict'

import * as env from 'tiny-config'

import mongoose from '../../db-connector/mongo-db'
import * as constants from '../../constants'

const Schema = mongoose.Schema
const JOKE_ATTRIBUTES = constants.JOKE_ATTRIBUTES

export const JokeSchema = new Schema({
  [JOKE_ATTRIBUTES.content]: { type: String, required: true },
  [JOKE_ATTRIBUTES.genre]: String, // to filter jokes by genre
  [JOKE_ATTRIBUTES.title]: String // TODO - there needs to be a unique identifier for eacj joke so that duplicates be avoided
}, {
  timestamps: true,
  autoCreate: env.get('autoCreateCollection') // to filter jokes by created time and updated time
})
