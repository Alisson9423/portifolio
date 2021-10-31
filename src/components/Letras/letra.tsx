import { Heading } from "aplication-yetz";
import { ModalStyles } from "./styles";

import closeImg from "../../assets/img/close.svg";

export function Letra() {
    return (
        <ModalStyles>
            <div className="container-header">
                <Heading as="h1" color="white">
                    Letra
                </Heading>
                <img src={closeImg} alt="" />
            </div>

            <div className="content-body">
                lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quidem. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. At corporis quia ipsam odio! Itaque, suscipit
                laborum. Autem saepe numquam veritatis, obcaecati ipsum minus,
                earum voluptatibus explicabo id odio laudantium molestiae.
            </div>
        </ModalStyles>
    );
}
