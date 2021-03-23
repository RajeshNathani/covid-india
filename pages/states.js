const states = (props) => {
    return (
        <div>
             {props.res.data.regional.map(re=><h4>{re.loc}</h4>)} <br/>
        </div>
    );
}

export default states;

export async function getStaticProps(){
    const data = await fetch('https://api.rootnet.in/covid19-in/stats/latest')
    const res = await data.json()
    return {
      props: {res}
    } 
  }