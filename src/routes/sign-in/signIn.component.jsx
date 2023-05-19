import {
  singInWithGooglePopup,
  createUserDocument,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-in-form/sign-in-form.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await singInWithGooglePopup();
    createUserDocument(user);
  };
  return (
    <div>
      <h1>Sign In page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
