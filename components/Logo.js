import Image from "next/image";
import { useRouter } from "next/router";

const Logo = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <div onClick={handleClick} className="logo-wrapper">
      <Image
        width={150}
        height={40}
        src="/logo-no-background.png"
        alt="solodevhub logo"
      />
    </div>
  );
};

export default Logo;