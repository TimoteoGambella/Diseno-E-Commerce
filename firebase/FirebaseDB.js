import { initializeApp } from "firebase/app";
import {getFirestore, limit} from "firebase/firestore";
import { collection, getDocs, orderBy, where, query, addDoc, doc,setDoc,Timestamp, deleteDoc} from "firebase/firestore";
import {getStorage, ref, uploadBytes, getDownloadURL, deleteObject} from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyBC9WURoAHohukEyytTJGO-pfQXDAXf-6E",
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
    var productosDocs = await getDocs(query(collection(db,"Productos"),where("tipo","==",type),limit(limite)));
  }
  
  const productos = productosDocs.docs.map(doc=>{return{id:doc.id,...doc.data()}})
  return(productos)
}


// DASHBOARD PRODUCTOS

export const editPropProduct = async (id,type,data) => {
  const product = doc(db, "Productos", id);
  if(type === "nombre"){
    await setDoc(product,{Nombre:data}, {merge:true})
  }
  if(type === "descripcion"){
    await setDoc(product,{Descripcion:data}, {merge:true})
  }
  if(type === "categoria"){
    await setDoc(product,{Categoria:data}, {merge:true})
  }
  if(type === "precio"){
    await setDoc(product,{Precio:data}, {merge:true})
  }
  if(type === "stock"){
    await setDoc(product,{Stock:data}, {merge:true})
  }  
  if(type === "imagen"){
    await setDoc(product,{Img:data}, {merge:true})
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