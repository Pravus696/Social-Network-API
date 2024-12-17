import { Document, model, Schema, ObjectId, Types } from "mongoose";

// define the reaction interface
interface IReaction extends Document {
    reactionId: ObjectId;
    reactionBody: string;
    username: string;
    createdAt: Date | string;
  }
  // define the thought interface
  interface IThought extends Document {
    thoughtText: string;
    createdAt: Date | string;
    username: string;
    reactions: (typeof reactionSchema)[];
    reactionCount: number;
  }

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
            get: (createdAtVal) => val.toLocaleDateString(),
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
);

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

export default Thought;