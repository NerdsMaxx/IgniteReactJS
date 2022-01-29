interface RepositoryItemProps {
    repository: {
        name: string;
        description: string;
        html_url: string;
    }
}

export function RepositoryItem(props: RepositoryItemProps){
    return (
        <li>
            <strong>{props.repository.name ?? "Default"}</strong>
            <p>{props.repository.description ?? "Description default"}</p>

            <a href={props.repository.html_url ?? "Link default"}>
                Acessar repositório
            </a>
        </li>
    );
}

/*export function RepositoryItem(props) {
    return (
        <li>
             ? é para verificar se é nulo. Se for, não acessar a propriedade do objeto.
             ?? é para verificar se é nulo. Se for colocar valor default 
            <strong>{props.repository?.name ?? "Default"}</strong>
            <p>{props.repository?.description ?? "Description default"}</p>

            <a href={props.repository?.link ?? "Link default"}>
                Acessar repositório
            </a>
        </li>
    );
}*/