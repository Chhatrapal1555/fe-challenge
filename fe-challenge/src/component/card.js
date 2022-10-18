import './style.css';

function Card(props) {
    return (
        <div className='zoom' >
            <div className='card'>
                <div className='card-content' style={{textAlign: "center"}}>
                    <p>{props.details.name}</p>
                    <p className='price'>{props.details.currency} {props.details.price}</p>
                    <hr />
                    <p>{props.details.storage}</p><hr />
                    <p>{props.details.user}</p><hr />
                    <p>{props.details.transfer}</p><hr />
                    <button> LEARN MORE </button>
                </div>
            </div>
        </div>

    );
}

export default Card;