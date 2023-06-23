import ToolCard from "./tool-card"

const ToolsList: React.FC<{ tools: any[] }> = ({ tools }) => {
  const toolsUi = tools.map((t) => <ToolCard key={t.id} content={t} />)
  return (
    <section className="flex gap-2 flex-wrap justify-between">
      {toolsUi}
    </section>
  )
}

export default ToolsList
