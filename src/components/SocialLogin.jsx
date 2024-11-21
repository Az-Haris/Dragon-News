import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";


const SocialLogin = () => {
    return (
        <div className='flex flex-col gap-2'>
            <p className="font-semibold mb-5">Login With</p>
            <button className='btn btn-outline'><FaGoogle /> Login with Google</button>
            <button className='btn btn-outline'><FaGithub /> Login with GitHub</button>
        </div>
    );
};

export default SocialLogin;