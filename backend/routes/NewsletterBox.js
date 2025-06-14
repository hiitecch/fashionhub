import express from 'express';
import { db } from '../config/firebase.js';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const router = express.Router();

router.post('/subscribe', async (req, res) => {
  const { email } = req.body;

  try {
    const docRef = await addDoc(collection(db, 'newsletter'), {
      email,
      subscribedAt: serverTimestamp(),
    });
    res.status(200).json({ success: true, id: docRef.id });
  } catch (err) {
    res.status(500).json({ error: 'Failed to subscribe user' });
  }
});

export default router;
