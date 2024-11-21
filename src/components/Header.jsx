import moment from 'moment';
import logo from '../assets/logo.png'
const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-2'>
            <figure className='pt-3'>
                <img className='w-[400px]' src={logo} alt="Dragon News" />
            </figure>
            <h1 className='text-gray-500 text-lg'>Journalism Without Fear or Favour</h1>
            <p className='font-bold text-gray-600'>{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;