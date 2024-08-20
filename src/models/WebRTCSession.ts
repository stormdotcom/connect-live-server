import mongoose, { Schema, Document } from 'mongoose';

interface IWebRTCSchema extends Document {
  sessionId: string;
  sdp: string;
  type: 'offer' | 'answer';
  createdAt: Date;
}

const WebRTCSchema: Schema = new Schema({
  sessionId: { type: String, required: true, unique: true },
  sdp: { type: String, required: true },
  type: { type: String, enum: ['offer', 'answer'], required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IWebRTCSchema>('WebRTCSession', WebRTCSchema);
