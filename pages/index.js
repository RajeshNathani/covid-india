import Cases from '../components/Cases'
import Footer from '../components/Footer'
const index = (props) => {
  const city = () => {
      var StateName = document.getElementById('form').value;
  }
  return (
    <div>
      <br/>
      <div className='container'>
        <br/>
          <h1>India Stats</h1> <br></br>
          <div className='stats'>
            <Cases text='Confirmed' number={props.res.data.summary.total} color='red'></Cases>
            <Cases text='Active' number= {props.res.data.summary.total - props.res.data.summary.discharged - props.res.data.summary.deaths} color='blue'></Cases>
            <Cases text='Discharged' number={props.res.data.summary.discharged} color='green'></Cases>
            <Cases text='Deaths' number={props.res.data.summary.deaths} color='grey'></Cases>
          </div> <br/>
          <h2>Statewise Data</h2> <br/>
          <div className='table-responsive'>
          <table className='table table-striped'>
            <thead>
              <tr>
                <th>State</th>
                <th>Confirmed</th>
                <th>Discharged</th>
                <th>Deaths</th>
              </tr>
            </thead>
            {props.res.data.regional.map(re=><tr><td>{re.loc}</td><td>{re.totalConfirmed}</td><td>{re.discharged}</td><td>{re.deaths}</td></tr>)}
          </table></div>
      </div>
      <Footer/>
    </div>
  );
}

export default index;

export async function getStaticProps(){
  const data = await fetch('https://api.rootnet.in/covid19-in/stats/latest')
  const res = await data.json()
  return {
    props: {res}
  } 
}