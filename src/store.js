import { create } from "zustand";
import { db, auth, storage } from "./firebase";
import { collection, addDoc, getDocs, orderBy, query, getDoc, doc } from "firebase/firestore";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import { toast } from "react-toastify";

const useStore = create((set) => ({
    posts: [],
    singlePost: null,
    fetchPosts: async () => {
        try {
            const postQuery = query(collection(db, 'blogPosts'), orderBy('date', 'desc'));
            const querySnapshot = await getDocs(postQuery)
            const posts = await Promise.all(
                querySnapshot.docs.map( async (doc) => {
                    const data = doc.data()
                    const imageUrl = await getDownloadURL(ref(storage, data.imagePath));
                    return { id: doc.id, ...data, imageUrl }
                })
            );
            set({ posts });
            console.log('post and image fetch successfully')
        } catch (error) {
            console.log('Error fetching posts')
        }
    },
    createPosts: async ( title, content, categories, imagePath ) => {
        try {
            const date = new Date().toISOString();
            await addDoc(collection(db, 'blogPosts'), { title, content, categories, date, imagePath })
            set((state) => ({
                posts: [...state.posts, { title, content, categories, date, imagePath }]
            }))
            toast.success('Posts created successfully')
        } catch (error) {
            toast.error('Error creating post')
        }
    },
    uploadImage: async (file) => {
        try {
            const storageRef = ref(storage, `images/${file.name}`)
            await uploadBytes(storageRef, file)
            toast.success('Image upload successful')
            return storageRef.fullPath;
        } catch (error) {
            toast.error('Image upload failed')
        }
    },
    fetchSinglePost: async (postId) => {
        try {
            const docRef = doc(db, 'blogPosts', postId)
            const docSnap = await getDoc(docRef)
            if(docSnap.exists()) {
                const data = docSnap.data()
                const imageUrl = await getDownloadURL(ref(storage, data.imagePath))
                set({ singlePost: { id: docSnap.id, ...data, imageUrl } })
                toast.success('Post fetch successfully')
            }
        } catch (error) {
            set({ singlePost: null })
            toast.error('Error fetching post')
        }
    }
}));

export default useStore;