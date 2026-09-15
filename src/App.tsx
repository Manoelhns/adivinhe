import styles from "./app.module.css"

import { Header } from "./components/Header"
import { Tip } from "./components/tip"

export default function() {

  function handleRestartGame() {
    alert("Reiniciar o jogo!")
  }



  return <div className={styles.container}>
    <main>
      <Header current={5} max={10} onRestart={handleRestartGame} />
      
      <Tip tip="Umas das linguagens de programação mais utilizadas "/>
    </main>
    
  </div>
}