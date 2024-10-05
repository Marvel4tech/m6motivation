import { create } from "zustand";
import { db, auth, storage } from "./firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { uploadBytes, ref } from "firebase/storage";
import { toast } from "react-toastify";

const useStore = create((set) => ({
    posts: [],
    fetchPosts: async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'blogPosts'))
            const posts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
            set({ posts })
            toast.success('Posts fetched successfully')
        } catch (error) {
            toast.error('Error')
        }
    },
    createPosts: async ( title, content, category, imagePath ) => {
        try {
            const date = new Date().toISOString()
            await addDoc(collection(db, 'blogPosts'), { title, content, category, date, imagePath })
            set((state) => ({
                posts: [...state.posts, { title, content, category, date, imagePath }]
            }))
            toast.success('Posts created successfully')
        } catch (error) {
            toast.error('Error creating post')
        }
    },
    uploadImage: async (file) => {
        const storageRef = ref(storage, `images/${file.name}`)
        await uploadBytes(storageRef, file)
        return storageRef.fullPath;
    },
}));

export default useStore;