export default function Loader() {
  return (
    <div
      style={{
        height: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div
        style={{
          width: "50px",
          height: "50px",
          border: "4px solid #0F766E",
          borderTopColor: "transparent",
          borderRadius: "50%",
          animation: "spin 1s linear infinite"
        }}
      />
      <style>
        {`@keyframes spin {
          to { transform: rotate(360deg); }
        }`}
      </style>
    </div>
  );
}
