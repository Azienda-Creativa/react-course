export default function AddTopic() {
  return (
    <form
      style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 8 }}
      action="POST">
      <input
        style={{ paddingLeft: 8, paddingRight: 8, height: "40px" }}
        type="text"
        name="title"
        id="title"
        placeholder="Topic Title"
      />
      <input
        style={{ paddingLeft: 8, paddingRight: 8, height: "40px" }}
        type="text"
        name="description"
        id="description"
        placeholder="Topic Description"
      />

      <button style={{ backgroundColor: "green", fontWeight: "bold", height: "40px", width: "180px", color: "white" }}>Add Topic</button>
    </form>
  )
}
