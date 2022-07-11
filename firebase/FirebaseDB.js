import { initializeApp } from "firebase/app";
import {getFirestore, limit} from "firebase/firestore";
import { collection, getDocs, orderBy, where, query, addDoc, doc,setDoc,Timestamp, deleteDoc} from "firebase/firestore";
import {getStorage, ref, uploadBytes, getDownloadURL, deleteObject} from "firebase/storage"

const firebaseConfig = {
    apiKey: process.env.FIREBASE,
    authDomain: "benet-55104.firebaseapp.com",
    projectId: "benet-55104",
    storageBucket: "benet-55104.appspot.com",
    messagingSenderId: "317553771143",
    appId: "1:317553771143:web:50367e23164143baa7ae22",
    measurementId: "G-ZMYDPLLJLR"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


//OBTENER PRODUCTOS
export const getProductos = async(type,limite) =>{
  if(type==="Todo"){
    var productosDocs = await getDocs(query(collection(db,"Productos"),limit(limite)));
  }else{
    var productosDocs = await getDocs(query(collection(db,"Productos"),where("tipoPrenda","==",type),limit(limite)));
  }
  
  const productos = productosDocs.docs.map(doc=>{return{id:doc.id,...doc.data()}})
  return(productos)
}


// DASHBOARD PRODUCTOS

export const editPropProduct = async (id,propType,data) => {
  const product = doc(db, "Productos", id);
  if(propType === "nombre"){
    await setDoc(product,{nombre:data}, {merge:true})
  }
  if(propType === "descripcion"){
    await setDoc(product,{descripcion:data}, {merge:true})
  }
  if(propType === "corte"){
    await setDoc(product,{corte:data}, {merge:true})
  }
  if(propType === "precio"){
    await setDoc(product,{precio:data}, {merge:true})
  }
  if(propType === "img"){
    await setDoc(product,{img:data}, {merge:true})
  }
  if(propType === "tipoPrenda"){
    await setDoc(product,{tipoPrenda:data}, {merge:true})
  }
}

export const removeProduct = async (id) => {
  await deleteDoc(doc(db, "Productos", id));
}

export const addProduct = async (producto,img) => {
  const newProd={
    ...producto, Img:img
  }

  await addDoc(collection(db, "Productos"),newProd);
  return (true)
}

// DASHBOARD REF IMAGE
const storage=getStorage(app)

export const addStorage = async(titulo,carpeta,imagen)=>{
  
  const storageRef = ref(storage,`${carpeta}/${titulo}.webp`)
  await uploadBytes(storageRef,imagen);
  return(getDownloadURL(ref(storage,`${carpeta}/${titulo}.webp`)));
}
