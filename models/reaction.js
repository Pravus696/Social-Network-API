import pkg from 'mongoose';
const { Schema, model } = pkg;

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => dateFormat(createdAtVal).toLocaleDateString(),
        }
    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }
);

const reaction = model('Reaction', reactionSchema);

export default reaction;