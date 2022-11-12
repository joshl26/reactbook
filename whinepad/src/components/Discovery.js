import Excel from "./Excel";

function Discovery() {
  return (
    <div>
      <h2>Excel</h2>
      <Excel
        headers={["Name", "Year"]}
        initialData={[
          ["Charles", "1859"],
          ["Antoine", "1943"],
        ]}
      />
    </div>
  );
}

export default Discovery;
