const { Schema, model } = require("mongoose");
const Reaction = require("./Reaction");
const formatDate = require("../utils/formatDate");

// Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => formatDate( timestamp )
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [Reaction],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
  }
);

// Virtual reaction count
thoughtSchema
  .virtual("reactionCount")
  .get(function () {

    return this.reactions.length;
  })

// Initialize Thought model
const Thought = model( "thought", thoughtSchema );

module.exports = Thought;