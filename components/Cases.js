const Cases = ({text, number, color}) => {
    return (
        <div>
            <div className = 'cases'>
                <h6>{text}</h6>
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