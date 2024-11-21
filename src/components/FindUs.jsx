
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";

const FindUs = () => {
  return (
    <div className="flex flex-col mt-10">
      <p className="font-semibold mb-5">Find Us On</p>
      <div className="join join-vertical">
        <button className="btn flex justify-start join-item btn-outline"><FaFacebook/> Facebook</button>
        <button className="btn flex justify-start join-item btn-outline"><BsTwitterX/> X (Twitter)</button>
        <button className="btn flex justify-start join-item btn-outline"><BsInstagram/> Instagram</button>
      </div>
    </div>
  );
};

export default FindUs;
