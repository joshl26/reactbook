import Excel from "./Excel";

function Discovery() {
  return (
    <div>
      <h2>Excel</h2>
      <Excel headers={headers} initialData={initialData} />
    </div>
  );
}

export default Discovery;
