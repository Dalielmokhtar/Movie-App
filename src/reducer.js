
const initialState = [
    { title: 'Avengers', description: 'Film Marvel', image:'https://www.macommune.info/wp-content/uploads/2019/05/avengers-marvel.jpg' , rating: 2 },
    { title: 'Titanic', description: 'Film Romantique', image:'https://vignette.wikia.nocookie.net/titanic/images/7/79/Affiche_film_Titanic.png/revision/latest?cb=20120716135714&path-prefix=fr', rating: 3 },
    { title: '300', description: 'Film d"action"', image:"https://www.telerama.fr/sites/tr_master/files/56378a29-95d2-4173-a7b2-bb01e036a2d3_2.jpg", rating: 1 }
  ]

function movieReducer(state = initialState, action){
  {
    if( action.type=== "ADD_Movie" )
    return state.concat(action.payload)
  }
    return state
}

export default movieReducer