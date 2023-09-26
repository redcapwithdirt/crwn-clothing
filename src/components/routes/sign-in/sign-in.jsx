import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../../utils/firebase/firebase'

const Signin = () => {
    const loggoogleuser = async () => {
        const {user} = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
    }
    return (
        <div>
            <h1>SIGN IN PAGE</h1>
            <button onClick={loggoogleuser}>
                sign in with google popup
            </button>
        </div>
    );
}

export default Signin;