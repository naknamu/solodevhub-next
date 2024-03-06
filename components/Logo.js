//import Image from "next/image";
import { useRouter } from "next/router";

// const imageStyle = {
//   width: "auto",
// };

const Logo = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <div onClick={handleClick} className="logo-wrapper">
      <img
        width={150}
        height={40}
        src="/logo-no-background.png"
        alt="solodevhub logo"
        //style={imageStyle}
        //priority
      />
    </div>
  );
};

export default Logo;
