import DataTable from "../components/DataTable.tsx";
import employees from "../data/employees.json";

function Tables() {
  return (
    <>
      <h2>Data Table</h2>
      <div style={{ maxWidth: "800px" }}>
        <DataTable
          data={employees}
          columns={[
            { key: "name", header: "Name" },
            { key: "title", header: "Title" },
            { key: "department", header: "Department" },
            { key: "startDate", header: "Start Date" },
          ]}
        />
      </div>
    </>
  );
}

export default Tables;
