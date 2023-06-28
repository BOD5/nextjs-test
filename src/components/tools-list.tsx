import ToolCard from "./tool-card"

const ToolsList: React.FC<{ tools: any[] }> = ({ tools }) => {
  const toolsUi = tools?.map((t) => <ToolCard key={t.id} content={t} />)
  return (
    <section className="grid justify-center gap-5 md:grid-cols-2 lg:grid-cols-3">
      {toolsUi || <div>No content yet</div>}
    </section>
  )
}

export default ToolsList
