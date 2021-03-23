const Statewise = (props) => {
    return (
        <div>
            <table>
             {props.res.data.regional.map(re=><td>{re.loc}</td>)}</table>
        </div>
    );
}

export default Statewise;

export async function getStaticProps(){
    const data = await fetch('https://api.rootnet.in/covid19-in/stats/latest')
    const res = await data.json()
    return {
      props: {res}
    } 
  }