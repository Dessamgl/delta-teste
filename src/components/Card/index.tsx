import styles from './styles.module.scss'; 
import listDataCards from './constants';

export function Card() {

  return (
    <div className={styles.cardContainer}>
     { listDataCards.map(card => (
       <main key={card.name}>
          <img className={styles.imageCard} src={card.image.src} alt={card.image.alt} />
          <section>
            <h2>{card.title}</h2>
              <div>
                <img src={card.profileIcon.src} alt={card.profileIcon.alt} />
                <div className={styles.textProfile}>
                  <span>{card.name}</span>
                  <p>{card.data}</p>
                </div>
              </div>
          </section>
        </main>
     ))}
    </div>
  )
}