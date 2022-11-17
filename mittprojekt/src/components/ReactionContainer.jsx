import { Component } from 'react';
import Reaction from './Reaction';

class ReactionContainer extends Component {
    constructor() {
        super(); // must be initiated, otherwise 'this' cannot be used
        this.state = {
            pokemonList: []
        }

        this.setDummy();
    }

    setDummy() {
        this.state.pokemonList = [
            {
                "id": 1,
                "name": "Bulbasaur",
                "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon"
            },
            {
                "id": 2,
                "name": "Ivysaur",
                "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon"
            },
            {
                "id": 3,
                "name": "Venusaur",
                "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon"
            }
        ]

        this.state.dummyList = this.state.pokemonList;
    }

    filter = (e) => {
        // console.log(this.state, e.target.value);
        let text = e.target.value.toLowerCase();
        let pokemons = this.state.pokemonList;
        let search = pokemons.filter(p => p.name.toLowerCase().includes(text));

        this.setState({
            dummyList: search
        });
    }

    render() {
        return (
            <>
                <div id='reaction-container'>
                    <h1>Pokemon list</h1>
                    <input type='text' placeholder='Search...' onChange={this.filter} />
                </div>
                <div id='reaction'>
                    {
                        this.state.dummyList.length <= 0 ? (
                            <h2>No Pokemons found</h2>
                        ) : (
                                // returns array
                                this.state.dummyList.map((item, index) => {
                                    // console.log(item, index);
                                    return <Reaction key={item.id} name={item.name} id={item.id} image={item.image + "/" + item.id + ".png"} />
                                })
                        )
                    }
                </div>
            </>
        );
    }
}

export default ReactionContainer;