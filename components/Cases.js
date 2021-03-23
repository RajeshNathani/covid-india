const Cases = ({text, number, color}) => {
    return (
        <div>
            <div className = 'cases'>
                <h3>{text}</h3>
                <p>{number}</p>
            </div>
            <style jsx>
                {`
                    .cases{
                        text-align : center;
                        color : ${color}
                    }

                `}
            </style>
        </div>
    );
}


export default Cases;