import app from 'firebase/app';
import firebaseConfig from './config';
import 'firebase/auth';
import 'firebase/firestore'; 

class Firebase {
    constructor() {
        if(!app.apps.length) {
            app.initializeApp(firebaseConfig);
        }
        this.auth = app.auth();
        this.db = app.firestore();
    }

    // Registrar un usuario
    async register(nombre, email, password) {
        const nuevoUsuario = await this.auth.createUserWithEmailAndPassword(email, password);
    
        return await nuevoUsuario.user.updateProfile({
            displayName: nombre
        })
    }

    // Iniciar sesion del usuario
    async login(email,password) {
        return this.auth.signInWithEmailAndPassword(email, password);
    }

    // Cierra la sesion del usuario
    async logout() {
        await this.auth.signOut();
    }

}

const firebase = new Firebase();
export default firebase;