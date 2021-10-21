import { Container, HeaderStyles, Form } from "./styles";

export function Home() {
    return (
        <Container>
            <HeaderStyles>
                <h1>Busca letras</h1>

                <Form id="form">
                    <input
                        id="search"
                        type="text"
                        placeholder="Insira o nome do artista ou da música..."
                    />

                    <button>Buscar</button>
                </Form>
            </HeaderStyles>

            <ul id="songs-container" className="songs-container songs"></ul>

            <div
                id="prev-and-next-container"
                className="prev-and-next-container"
            ></div>
        </Container>
    );
}
