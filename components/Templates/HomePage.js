import Attributes from '../Modules/Attributes'
import Banner from '../Modules/Banner'
import Companies from '../Modules/Companies'
import Defenition from '../Modules/Defenition'
import Guide from '../Modules/Guide'
import Instruction from '../Modules/Instruction'
import Restriction from '../Modules/Restriction'
import styles from './HomePage.module.css'

const HomePage = () => {
  return (
    <div className={styles.container}>
        <Banner/>
        <Attributes/>
        <Defenition/>
        <Companies/>
        <Instruction/>
        <Guide/>
        <Restriction/>
    </div>
  )
}

export default HomePage