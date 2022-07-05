import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebaseconfig';
import { getDatabase, ref, set, onValue, push, update, child } from "firebase/database";




const auth = getAuth(app);
const database = getDatabase(app);


// firebase Authentication methods


let signUpUser = (obj) => {

    return createUserWithEmailAndPassword(auth, obj.email, obj.password, obj.uid)

};

let logInUser = (obj) => {

    return signInWithEmailAndPassword(auth, obj.email, obj.password)


}
// firebase Authentication methods

// firebase Database methods

let sendData = (obj, nodeName, id) => {

    let refkey = ref(database, nodeName)
    obj.id = push(refkey).key;
    console.log(obj.id)

    let refrence = ref(database, `${nodeName}/home${id ? id : obj.id} `)
    return set(refrence, obj)
}

let getData = (nodeName, id) => {

    const dbRef = ref(database, nodeName, id);
    let arr = []

    return onValue(
        dbRef, (snapshot) => {
            snapshot.forEach((childSnapshot) => {
                const childData = childSnapshot.val();
                arr.push(childData)
                console.log(arr)
                return arr
                // ...
            });
        },

        {

            onlyOnce: false
        });

}






// firebase Database methods


export { signUpUser, logInUser, sendData, getData, }

