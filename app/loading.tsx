import Image from "next/image";
import LoadingImage from "@/assets/loader.gif";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100wv",
      }}
    >
      <Image src={LoadingImage} alt="Loading..." height={150} width={150} />
    </div>
  );
};

export default Loading;
