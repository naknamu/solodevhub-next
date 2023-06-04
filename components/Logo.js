import { useRouter } from "next/router";

const Logo = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <div onClick={handleClick} className="logo-wrapper">
      <img
        width={150}
        src="/logo-no-background.png"
        alt="solodevhub logo"
        loading="lazy"
      />
    </div>
  );
};

export default Logo;