interface dataCardsProps {
  image: {
    src: string,
    alt: string
  },
  title: string,
  profileIcon: {
    src: string,
    alt: string
  },
  name: string,
  data: string
}

const listDataCards: dataCardsProps[] = [
  {
    image: {
      src: "/images/card1.png",
      alt: "Imagem do card"
    },
    title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam Souza Costa",
    profileIcon: {
      src: "/images/avatar1.png",
      alt: "Foto de perfil"
    },
    name: "Souza Costa ",
    data: "18 de Fevereiro de 2021"
  },

  {
    image: {
      src: "/images/card2.png",
      alt: "Imagem do card"
    },
    title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam ",
    profileIcon: {
      src: "/images/avatar2.png",
      alt: "Foto de perfil"
    },
    name: "Juninho",
    data: "18 de Fevereiro de 2021"
  },

  {
    image: {
      src: "/images/card3.png",
      alt: "Imagem do card"
    },
    title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam ",
    profileIcon: {
      src: "/images/avatar3.png",
      alt: "Foto de perfil"
    },
    name: "Nicolas",
    data: "18 de Fevereiro de 2021"
  },

  {
    image: {
      src: "/images/card4.png",
      alt: "Imagem do card"
    },
    title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam ",
    profileIcon: {
      src: "/images/avatar4.png",
      alt: "Foto de perfil"
    },
    name: "Jenifer",
    data: "18 de Fevereiro de 2021"
  },

  {
    image: {
      src: "/images/card1.png",
      alt: "Imagem do card"
    },
    title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam ",
    profileIcon: {
      src: "/images/avatar5.png",
      alt: "Foto de perfil"
    },
    name: "Austin",
    data: "18 de Fevereiro de 2021"
  },

  {
    image: {
      src: "/images/card2.png",
      alt: "Imagem do card"
    },
    title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam ",
    profileIcon: {
      src: "/images/avatar6.png",
      alt: "Foto de perfil"
    },
    name: "Carla",
    data: "18 de Fevereiro de 2021"
  }
]

export default listDataCards;