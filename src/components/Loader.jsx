import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        background: "rgba(0, 0, 0, 0.85)",
        backdropFilter: "blur(10px)",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          width: "64px",
          height: "64px",
          border: "4px solid #dc2626",
          borderBottom: "4px solid transparent",
          borderRadius: "50%",
          animation: "spin 3s linear infinite",
        }}
      />
      <p
        style={{
          fontSize: 20,
          color: "#FFFFFF",
          fontWeight: 600,
          marginTop: 20,
        }}
      >
        {progress.toFixed(0)}%
      </p>
      <p
        style={{
          fontSize: 24,
          color: "#dc2626",
          fontWeight: 700,
          marginTop: 16,
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        Shah jee portfolio
      </p>
    </Html>
  );
};

export default CanvasLoader;
