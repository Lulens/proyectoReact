import React, {Component} from 'react'

export default class NavBar extends Component {
    render(){
        return(
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Mateando Así</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">¿Quiénes somos?</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">Productos</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">¿Dudas?</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link disabled">Contactanos</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}