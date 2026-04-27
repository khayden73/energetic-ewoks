import DataTable from "../components/DataTable.tsx";
import employees from "../data/employees.json";
import { useEffect, useState } from "react";
import styles from "./Table.module.css";

function Tables() {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState(employees);

  useEffect(() => {
    if (query.trim() !== "") {
      const results = employees.filter((emp) =>
        emp.name.toLowerCase().includes(query),
      );
      console.log("[Tables][useEffect]", { results });
      setFilteredData(results);
    } else {
      setFilteredData(employees);
    }
  }, [query]);

  const onQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setQuery(target.value);
  };

  return (
    <>
      <h2>Data Table</h2>
      <div className={styles.tableDisplayWrapper}>
        <section className={styles.tableQueryWrapper}>
          <label htmlFor="nameQuery">Filter by Name:</label>
          <input
            id="nameQuery"
            type="text"
            value={query}
            onChange={onQueryChange}
          />
        </section>
        <DataTable
          data={filteredData}
          columns={[
            { key: "name", header: "Name" },
            { key: "title", header: "Title" },
            { key: "department", header: "Department" },
            { key: "startDate", header: "Start Date" },
          ]}
          pageSize={10}
        />
      </div>
    </>
  );
}

export default Tables;
