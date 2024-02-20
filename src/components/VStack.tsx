const VStack = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {children}
    </div>
  );
};

export default VStack;
