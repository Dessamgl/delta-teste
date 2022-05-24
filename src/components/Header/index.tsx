import styles from './styles.module.scss'; 

export function Header() {

  return (
    <header className={styles.headercontainer}>
      <nav>
        <img src="/images/logo.svg" alt="Delta Teste" id="logo"/>
        <ul>
          <li><a href="#">Primeiro Menu</a></li>
          <li><a href="#">Segundo Menu</a></li>
          <li><a href="#">Terceiro Menu</a></li>
          <li><a href="#">Quarto Menu</a></li>
        </ul>
      </nav>

      <button><img src="/images/search.svg" alt="Pesquisar"/></button>
    </header>
  )
}