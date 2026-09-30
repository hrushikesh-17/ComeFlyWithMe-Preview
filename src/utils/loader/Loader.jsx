import { TailSpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
      }}
    >
      <TailSpin
        height="40"
        width="40"
        radius="1"
        color="#fefae0"
        ariaLabel="page-loading"
        visible={true}
      />
    </div>
  );
};

export default Loader;