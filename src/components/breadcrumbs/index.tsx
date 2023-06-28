import Link from "next/link"

import { Button } from "../ui/button"
import styles from "./breadcrumbs.module.scss"

interface Props {
  routes: {
    title: string
    link: string
  }[]
}
const Breadcrumbs: React.FC<Props> = ({ routes }) => {
  const routesUi = routes.map((r, i) => {
    return (
      <li key={r.link} className={styles.crumb}>
        <Button disabled={i === routes.length - 1} variant={"link"}>
          <Link href={r.link}>{r.title}</Link>
        </Button>
      </li>
    )
  })
  return (
    <nav className={`${styles.breadcrumbes} -ml-4`}>
      <ul className="flex flex-wrap">{routesUi}</ul>
    </nav>
  )
}

export default Breadcrumbs
