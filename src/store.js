import { create } from "zustand";
import { db, auth, storage } from "./firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { uploadBytes, ref } from "firebase/storage";

const useStore = create((set) => ({
    posts: [],
    fetchPosts: async () => {
        const querySnapshot = await getDocs(collection(db, 'blogPosts'))
        const posts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        set({ posts })
    },
    createPosts: async ( title, content, category, imagePath ) => {
        const date = new Date().toISOString()
        await addDoc(collection(db, 'blogPosts'), { title, content, category, date, imagePath })
        set((state) => ({
            posts: [...state.posts, { title, content, category, date, imagePath }]
        }))
    },
}));

export default useStore;